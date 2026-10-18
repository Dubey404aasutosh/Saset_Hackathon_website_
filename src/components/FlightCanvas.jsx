import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Three.js 3D WebGL Flight Canvas with Procedural Halftone Cloud Shader
 * Replicating Applied Imagination's dual flight canvas architecture
 */
export default function FlightCanvas({ scrollProgress = 0 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x8cb8d1); // #8cb8d1 Sky Blue

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 18, 18);
    camera.lookAt(0, 18, 0);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    container.appendChild(renderer.domElement);

    // 3. Texture Loader
    const textureLoader = new THREE.TextureLoader();
    
    // Cloud Shader Material
    const cloudVertexShader = `
      varying vec2 vUv;
      varying vec3 vVariation;
      varying float vWorldY;

      attribute vec3 aVariation;

      void main() {
        vUv = uv;
        vVariation = aVariation;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldY = worldPos.y;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `;

    const cloudFragmentShader = `
      uniform sampler2D uTexture;
      uniform float uTime;
      uniform float uOpacity;
      uniform float uDotSize;
      uniform float uDotStrength;

      varying vec2 vUv;
      varying vec3 vVariation;
      varying float vWorldY;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      void main() {
        vec4 tex = texture2D(uTexture, vUv);
        if (tex.a < 0.02) discard;

        // Animated subtle wisp edge erosion
        float edgeNoise = noise(vUv * vec2(32.0, 18.0) + vec2(uTime * 0.03, uTime * -0.01));
        float alpha = smoothstep(0.05 + edgeNoise * 0.08, 0.48, tex.a);

        // Posterize into paper tones
        float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
        float posterized = floor(clamp(lum, 0.0, 1.0) * 5.0 + 0.5) / 5.0;

        vec3 cloudColor = mix(vec3(0.85, 0.90, 0.94), vec3(1.0), posterized);

        // Procedural screen halftone dots
        float dotSize = uDotSize * mix(0.9, 1.2, vVariation.z);
        vec2 dotCell = mod(gl_FragCoord.xy, dotSize) - dotSize * 0.5;
        float dotRadius = dotSize * mix(0.08, 0.35, 1.0 - posterized);
        float dotShape = 1.0 - smoothstep(max(0.0, dotRadius - 0.7), dotRadius + 0.7, length(dotCell));

        cloudColor = mix(cloudColor, cloudColor * 0.65, dotShape * uDotStrength);

        gl_FragColor = vec4(cloudColor, alpha * uOpacity);
      }
    `;

    const cloudUniforms = {
      uTexture: { value: null },
      uTime: { value: 0 },
      uOpacity: { value: 0.88 },
      uDotSize: { value: 5.5 },
      uDotStrength: { value: 0.38 }
    };

    // Load cloud bank texture
    textureLoader.load('/brand/gpc/clouds/cloud-bank-a.png', (tex) => {
      cloudUniforms.uTexture.value = tex;
    });

    const cloudMaterial = new THREE.ShaderMaterial({
      vertexShader: cloudVertexShader,
      fragmentShader: cloudFragmentShader,
      uniforms: cloudUniforms,
      transparent: true,
      depthWrite: false
    });

    // Create cloud instances along the flight path (from Y=18 down to Y=-10)
    const cloudsGroup = new THREE.Group();
    const cloudGeom = new THREE.PlaneGeometry(16, 9);
    
    // Add variations attribute
    const count = 18;
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(cloudGeom, cloudMaterial);
      const angle = (i / count) * Math.PI * 2;
      const radius = 6 + Math.random() * 8;
      const y = 22 - (i / count) * 35; // Descent from altitude
      mesh.position.set(Math.sin(angle) * radius, y, -Math.cos(angle) * 3 - 2);
      mesh.rotation.z = (Math.random() - 0.5) * 0.2;
      mesh.scale.setScalar(0.8 + Math.random() * 0.8);

      const varAttr = new Float32Array([Math.random(), Math.random(), Math.random()]);
      mesh.geometry = mesh.geometry.clone();
      mesh.geometry.setAttribute('aVariation', new THREE.InstancedBufferAttribute(varAttr, 3));
      cloudsGroup.add(mesh);
    }
    scene.add(cloudsGroup);

    // 4. Airliner (Cruising at top elevation)
    let airlinerMesh = null;
    textureLoader.load('/brand/gpc/airliner-gpc-color-block.png', (tex) => {
      const planeGeom = new THREE.PlaneGeometry(10, 5.5);
      const planeMat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        depthWrite: false
      });
      airlinerMesh = new THREE.Mesh(planeGeom, planeMat);
      airlinerMesh.position.set(2.5, 17.5, 2);
      airlinerMesh.rotation.z = -0.05;
      scene.add(airlinerMesh);
    });

    // 5. Parachuting Tech Props (Mid-descent)
    const midGroup = new THREE.Group();
    textureLoader.load('/brand/gpc/flight/gold-token-briefcase-parachute-cutout.png', (tex) => {
      const geom = new THREE.PlaneGeometry(3.5, 4.5);
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true });
      const prop1 = new THREE.Mesh(geom, mat);
      prop1.position.set(-5, 8, 0);
      midGroup.add(prop1);
    });

    textureLoader.load('/brand/gpc/flight/skydiver-phone-cutout.png', (tex) => {
      const geom = new THREE.PlaneGeometry(2.5, 4);
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true });
      const prop2 = new THREE.Mesh(geom, mat);
      prop2.position.set(5.5, 3, -1);
      midGroup.add(prop2);
    });
    scene.add(midGroup);

    // 6. Ground Mountain Cutout (Landing altitude)
    textureLoader.load('/brand/gpc/flight/mountain-ground-cutout.png', (tex) => {
      const groundGeom = new THREE.PlaneGeometry(32, 12);
      const groundMat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        depthWrite: false
      });
      const groundMesh = new THREE.Mesh(groundGeom, groundMat);
      groundMesh.position.set(0, -12, -4);
      scene.add(groundMesh);
    });

    // 7. Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 8. Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      cloudUniforms.uTime.value = elapsedTime;

      // Slight aircraft cruise bobbing
      if (airlinerMesh) {
        airlinerMesh.position.y = 17.5 + Math.sin(elapsedTime * 1.2) * 0.15;
        airlinerMesh.position.x = 2.5 + Math.cos(elapsedTime * 0.8) * 0.1;
      }

      // Parachute sway
      midGroup.children.forEach((c, idx) => {
        c.rotation.z = Math.sin(elapsedTime * 1.5 + idx) * 0.08;
      });

      // Camera descent synced to global scroll
      const scrollY = window.scrollY;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const scrollRatio = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      // Descents from Y=18 (30,000 ft) down to Y=-10 (Ground)
      const targetCamY = THREE.MathUtils.lerp(18, -10, scrollRatio);
      camera.position.y += (targetCamY - camera.position.y) * 0.08;
      camera.lookAt(0, camera.position.y, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="canvas-container" aria-hidden="true">
      <div ref={containerRef} className="flight-canvas flight-canvas--background" />
    </div>
  );
}
