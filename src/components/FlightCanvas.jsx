import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const cloudVertexShader = `
varying vec2 vUv;
varying vec3 vVariation;
varying float vTreatment;
varying float vWorldY;

attribute vec3 aVariation;
attribute float aTreatment;

void main() {
  vUv = uv;
  vVariation = aVariation;
  vTreatment = aTreatment;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldY = worldPos.y;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

const cloudFragmentShader = `
precision highp float;

uniform sampler2D uTexture;
uniform vec3 uTint;
uniform float uOpacity;
uniform float uDotStrength;
uniform float uDotSize;
uniform float uTime;
uniform float uGroundY;
uniform float uGroundFade;

varying vec2 vUv;
varying vec3 vVariation;
varying float vTreatment;
varying float vWorldY;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 cell = floor(p);
  vec2 local = fract(p);
  local = local * local * (3.0 - 2.0 * local);
  float a = hash(cell);
  float b = hash(cell + vec2(1.0, 0.0));
  float c = hash(cell + vec2(0.0, 1.0));
  float d = hash(cell + vec2(1.0, 1.0));
  return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
}

void main() {
  vec4 sampleColor = texture2D(uTexture, vUv);
  if (sampleColor.a < 0.01) discard;

  float edgeNoise = noise(vUv * vec2(42.0, 22.0) + vec2(uTime * 0.04, uTime * -0.015));
  float edgeThreshold = mix(0.03, 0.12, edgeNoise);
  float alpha = smoothstep(edgeThreshold, 0.44, sampleColor.a);

  float luminance = dot(sampleColor.rgb, vec3(0.299, 0.587, 0.114));
  float edgeLight = smoothstep(0.08, 0.45, luminance + sampleColor.a * 0.2);
  alpha *= mix(0.65, 1.0, edgeLight);

  float posterized = floor(clamp(luminance, 0.0, 1.0) * 5.0 + 0.5) / 5.0;
  float vaporLight = smoothstep(0.02, 0.96, posterized);
  vec3 normalized = mix(vec3(0.78, 0.85, 0.90), vec3(1.0), vaporLight);

  // Applied Imagination halftone dot cell algorithm
  float dotSize = uDotSize * mix(0.85, 1.25, vVariation.z);
  vec2 dotCell = mod(gl_FragCoord.xy, dotSize) - dotSize * 0.5;
  float darkness = 1.0 - posterized;
  float dotRadius = dotSize * mix(0.08, 0.42, smoothstep(0.04, 0.85, darkness));
  float dotShape = 1.0 - smoothstep(max(0.0, dotRadius - 0.7), dotRadius + 0.7, length(dotCell));

  vec3 dotInk = mix(normalized * 0.55, vec3(1.0), vTreatment);
  normalized = mix(normalized, dotInk, dotShape * uDotStrength);
  alpha *= mix(0.85, 1.0, dotShape * uDotStrength * 0.5);
  alpha *= uOpacity * mix(0.7, 1.0, vVariation.x);
  alpha *= smoothstep(uGroundY, uGroundY + uGroundFade, vWorldY);

  if (alpha < 0.02) discard;
  gl_FragColor = vec4(normalized, alpha);
}
`;

export default function FlightCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer, scene, camera, animFrame;
    let cloudPlanes = [];
    let matA, matB;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // soft clouds: 1.5x is visually identical, ~44% fewer pixels than 2x
      renderer.setSize(window.innerWidth, window.innerHeight);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        48,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 15, 35);
      camera.lookAt(0, 5, -50);

      // Texture loader for authentic cloud bank cutouts
      const loader = new THREE.TextureLoader();
      const textureA = loader.load('/brand/art/clouds/cloud-bank-a.png');
      const textureB = loader.load('/brand/art/clouds/cloud-bank-b.png');
      const groundTexture = loader.load('/brand/art/flight/mountain-ground-cutout.png');

      textureA.wrapS = textureA.wrapT = THREE.ClampToEdgeWrapping;
      textureB.wrapS = textureB.wrapT = THREE.ClampToEdgeWrapping;

      const baseUniforms = {
        uTint: { value: new THREE.Color('#faf5ee') },
        uOpacity: { value: 0.95 },
        uDotStrength: { value: 0.75 },
        uDotSize: { value: 5.5 },
        uTime: { value: 0 },
        uGroundY: { value: -120.0 },
        uGroundFade: { value: 45.0 }
      };

      // Create Cloud Bank Materials
      const createCloudMaterial = (texture) => {
        return new THREE.ShaderMaterial({
          vertexShader: cloudVertexShader,
          fragmentShader: cloudFragmentShader,
          uniforms: {
            ...baseUniforms,
            uTexture: { value: texture }
          },
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide
        });
      };

      matA = createCloudMaterial(textureA);
      matB = createCloudMaterial(textureB);

      // Cloud strata distribution across 3D flight corridor
      const cloudConfigs = [
        // High altitude strata (Hero / intro)
        { x: -35, y: 18, z: -25, scale: 65, mat: matA, speed: 0.008 },
        { x: 38, y: 14, z: -35, scale: 75, mat: matB, speed: -0.006 },
        { x: -10, y: 22, z: -55, scale: 85, mat: matA, speed: 0.005 },
        { x: 45, y: 6, z: -70, scale: 95, mat: matB, speed: -0.007 },

        // Mid altitude strata (Manifesto, Statement, Themes)
        { x: -40, y: -5, z: -40, scale: 70, mat: matB, speed: 0.009 },
        { x: 25, y: -12, z: -50, scale: 80, mat: matA, speed: -0.005 },
        { x: -30, y: -22, z: -65, scale: 90, mat: matA, speed: 0.006 },
        { x: 35, y: -30, z: -60, scale: 85, mat: matB, speed: -0.008 },

        // Lower altitude strata (Architecture, MAYA, Timeline)
        { x: -20, y: -45, z: -45, scale: 80, mat: matB, speed: 0.007 },
        { x: 30, y: -55, z: -55, scale: 90, mat: matA, speed: -0.006 },
        { x: -35, y: -68, z: -70, scale: 95, mat: matA, speed: 0.005 },
        { x: 20, y: -80, z: -65, scale: 85, mat: matB, speed: -0.008 }
      ];

      cloudConfigs.forEach((cfg) => {
        const geo = new THREE.PlaneGeometry(cfg.scale, cfg.scale * 0.55);

        // Add variation attributes for unique halftone sizes
        const count = geo.attributes.position.count;
        const variations = new Float32Array(count * 3);
        const treatments = new Float32Array(count);
        const randX = Math.random();
        const randY = Math.random();
        const randZ = Math.random();
        const randTreatment = Math.random() > 0.4 ? 1.0 : 0.0;

        for (let i = 0; i < count; i++) {
          variations[i * 3] = randX;
          variations[i * 3 + 1] = randY;
          variations[i * 3 + 2] = randZ;
          treatments[i] = randTreatment;
        }

        geo.setAttribute('aVariation', new THREE.BufferAttribute(variations, 3));
        geo.setAttribute('aTreatment', new THREE.BufferAttribute(treatments, 1));

        const mesh = new THREE.Mesh(geo, cfg.mat);
        mesh.position.set(cfg.x, cfg.y, cfg.z);
        scene.add(mesh);

        cloudPlanes.push({
          mesh,
          baseX: cfg.x,
          speed: cfg.speed,
          minX: -80,
          maxX: 80
        });
      });

      // Mountain ground plane at final descent base
      // Mountain ground plane at final descent base
      const groundGeo = new THREE.PlaneGeometry(160, 70);
      const groundMat = new THREE.MeshBasicMaterial({
        map: groundTexture,
        transparent: true,
        opacity: 0.75,
        depthWrite: false
      });
      const groundMesh = new THREE.Mesh(groundGeo, groundMat);
      groundMesh.position.set(0, -115, -60);
      scene.add(groundMesh);

    } catch (e) {
      console.error('WebGL flight canvas init failed:', e);
      return;
    }

    // Scroll-driven camera descent tracking
    let targetCameraY = 15;
    let targetCameraZ = 35;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const ratio = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      // Camera descends smoothly from altitude 15 down to -105 through the cloud strata
      targetCameraY = 15 - ratio * 120;
      targetCameraZ = 35 - ratio * 25;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mouse parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    const onMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 5;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2.5;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Resize handler
    const onResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation render loop
    const timer = new THREE.Timer(); // THREE.Clock is deprecated

    let throttledFrames = 0;

    const animate = () => {
      animFrame = requestAnimationFrame(animate);

      // While the intro preloader covers the screen, only draw every 30th frame
      // (keeps a fresh frame ready for the reveal without competing for the GPU)
      if (document.documentElement.dataset.preloading && throttledFrames++ % 30 !== 0) return;

      timer.update();
      const delta = timer.getDelta();
      const elapsed = timer.getElapsed();

      // Update shader time uniform for subtle organic vapor drift
      if (matA) matA.uniforms.uTime.value = elapsed;
      if (matB) matB.uniforms.uTime.value = elapsed;

      // Smooth camera interpolation with mouse parallax
      camera.position.x += (targetMouseX - camera.position.x) * 0.05;
      camera.position.y += ((targetCameraY - targetMouseY) - camera.position.y) * 0.08;
      camera.position.z += (targetCameraZ - camera.position.z) * 0.08;
      camera.lookAt(targetMouseX * 0.3, camera.position.y - 10, -50);

      // Drift clouds horizontally across the flight path
      cloudPlanes.forEach((cp) => {
        cp.mesh.position.x += cp.speed * (delta * 60);
        if (cp.mesh.position.x > cp.maxX) cp.mesh.position.x = cp.minX;
        if (cp.mesh.position.x < cp.minX) cp.mesh.position.x = cp.maxX;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div className="canvas-container" aria-hidden="true">
      {/* 1. Authentic Applied Imagination Sky Gradient (Sky Blue -> Golden Horizon) */}
      <div className="flight-canvas flight-canvas--background" />

      {/* 2. Three.js WebGL Volumetric Cloud Strata with Halftone Shader */}
      <canvas ref={canvasRef} className="flight-canvas flight-canvas--webgl" />

      {/* 3. Global Magazine Halftone Dot-Raster Matrix Grid */}
      <div className="flight-canvas-halftone" />

      {/* 4. Atmospheric Blue Luminous Rim Glow */}
      <div className="flight-canvas-vignette" />
    </div>
  );
}
