import React, { useEffect, useMemo, useRef } from 'react';

const vertexShaderGLSL = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShaderGLSL = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_mistColor;
uniform vec3 u_coreColor;
uniform float u_speed;
uniform float u_progress;
uniform float u_density;
uniform float u_planeXNorm;
uniform float u_planeYNorm;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p, float t) {
  float v = 0.0;
  float a = 0.5;
  float fi = 0.0;
  mat2 rot = mat2(0.86, 0.51, -0.51, 0.86);
  
  for (int i = 0; i < 6; i++) {
    vec2 morph = vec2(sin(t * 0.45 + fi), cos(t * 0.28 - fi)) * 0.05;
    v += a * noise(p + morph);
    p = rot * p * 2.0;
    a *= 0.5;
    fi += 1.0;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float t = u_time * u_speed;
  vec2 aspect = vec2(u_resolution.x / max(u_resolution.y, 1.0), 1.0);
  vec2 p = (uv - 0.5) * aspect;

  // Turbulent aircraft wake drift rushing gently leftwards
  vec2 wind = vec2(t * 0.12, t * 0.025);

  float zoom = 1.0 + u_progress * 0.9;
  float pattern = fbm((p / zoom) * 2.15 - wind, t);

  // Wake front trails the aircraft: everything left of the plane fills with mist
  float wakeNoise = (pattern - 0.5) * 0.30;
  float wakeLead = smoothstep(u_planeXNorm + 0.06, u_planeXNorm - 0.30, uv.x + wakeNoise);

  // Plume blooms vertically from engine height, reaching full viewport height
  float distX = max(0.0, u_planeXNorm - uv.x);
  float plumeRadius = 0.18 + distX * 1.6;
  float dy = abs(uv.y - u_planeYNorm) + wakeNoise * 0.5;
  float verticalWake = 1.0 - smoothstep(plumeRadius * 0.6, plumeRadius + 0.25, dy);

  // Once the plane exits right, the blanket is complete and uniform
  float fullCoverage = smoothstep(0.85, 1.25, u_planeXNorm);
  float directionalMask = mix(wakeLead * verticalWake, 1.0, fullCoverage);

  float localDensity = u_density * directionalMask;

  if (localDensity < 0.005) {
    discard;
  }

  // Blanket ramp for 100% screen immersion at peak
  float blanket = smoothstep(0.38, 0.82, localDensity);

  float lowThresh = mix(0.46, 0.02, localDensity);
  float highThresh = mix(0.78, 0.36, localDensity);

  float cloudPattern = smoothstep(lowThresh, lowThresh + 0.32, pattern);
  float cloudAlpha = mix(cloudPattern, 1.0, blanket);
  float finalAlpha = clamp(cloudAlpha * localDensity * 1.5, 0.0, 1.0);

  if (finalAlpha < 0.005) {
    discard;
  }

  // Color gradient: soft #8DC0DD mist at thin edges, crisp pure white at core
  float coreIntensity = smoothstep(highThresh - 0.08, highThresh + 0.22, pattern);
  vec3 color = mix(u_mistColor, u_coreColor, coreIntensity);

  // Luminous white cloud core at maximum blanket
  color = mix(color, vec3(0.97, 0.985, 1.0), blanket * 0.5);

  gl_FragColor = vec4(color, finalAlpha);
}
`;

const COLOR_HEX_PATTERN = /^#?[0-9a-fA-F]{6}$/;

function normalizeHexColor(value, fallback) {
  const trimmed = (value || '').trim();
  if (!COLOR_HEX_PATTERN.test(trimmed)) {
    return fallback;
  }
  return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
}

function hexToRgbNormalized(hex) {
  const normalized = normalizeHexColor(hex, '#8DC0DD').replace('#', '');
  const r = parseInt(normalized.slice(0, 2), 16) / 255;
  const g = parseInt(normalized.slice(2, 4), 16) / 255;
  const b = parseInt(normalized.slice(4, 6), 16) / 255;
  return [r, g, b];
}

export default function CloudscapeTransition({
  mistColor = '#8DC0DD',
  coreColor = '#ffffff',
  speed = 2.2
}) {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  const hostRef = useRef(null);

  const progressRef = useRef(0);
  const densityRef = useRef(0);
  const planeXNormRef = useRef(-0.4);
  const planeYNormRef = useRef(0.68);

  const flightRef = useRef(null);

  const settings = useMemo(
    () => ({
      mistColor,
      coreColor,
      speed
    }),
    [mistColor, coreColor, speed]
  );

  // Track scroll position to synchronize Airplane flight from left to right & cloud density
  useEffect(() => {
    let rafId = 0;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        const track = trackRef.current;
        if (!track) return;

        const rect = track.getBoundingClientRect();
        const windowH = window.innerHeight;
        const totalScroll = Math.max(1, rect.height - windowH);
        const current = -rect.top;
        const p = Math.max(0, Math.min(1, current / totalScroll));

        const ease = (x) => x * x * (3 - 2 * x);

        // Plane crosses linearly (constant speed) from -45vw to +115vw during p 0.05 -> 0.6
        const fr = Math.max(0, Math.min(1, (p - 0.05) / 0.55));
        const planeX = -45 + fr * 160;
        const planeY = 30 + fr * 8;
        const planeXNorm = planeX / 100 + 0.2; // engine nacelle offset

        // Density: build with the flight, hold full blanket, then dissolve evenly
        let d;
        if (p < 0.6) d = 0.8 + 0.2 * ease(p / 0.6);
        else if (p < 0.7) d = 1.0;
        else d = 1.0 - ease(Math.min(1, (p - 0.7) / 0.25));

        progressRef.current = p;
        densityRef.current = d;
        planeXNormRef.current = planeXNorm;
        planeYNormRef.current = 1.0 - planeY / 100 - 0.06;

        const flight = flightRef.current;
        if (flight) {
          const visible = fr > 0 && fr < 1;
          flight.style.transform = `translate3d(${planeX}vw, ${planeY}vh, 0) translateY(-50%) rotate(1.6deg)`;
          flight.style.visibility = visible ? 'visible' : 'hidden';
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);


  // WebGL transparent mist shader
  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    const gl = canvas.getContext('webgl', { antialias: true, alpha: true });
    if (!gl) {
      console.warn('WebGL not supported for Cloudscape');
      return;
    }

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const compileGLSLShader = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShaderObject = compileGLSLShader(gl.VERTEX_SHADER, vertexShaderGLSL);
    const fragmentShaderObject = compileGLSLShader(gl.FRAGMENT_SHADER, fragmentShaderGLSL);
    if (!vertexShaderObject || !fragmentShaderObject) return;

    const glProgram = gl.createProgram();
    if (!glProgram) return;

    gl.attachShader(glProgram, vertexShaderObject);
    gl.attachShader(glProgram, fragmentShaderObject);
    gl.linkProgram(glProgram);

    if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(glProgram));
      gl.deleteProgram(glProgram);
      gl.deleteShader(vertexShaderObject);
      gl.deleteShader(fragmentShaderObject);
      return;
    }

    gl.useProgram(glProgram);

    const vertexPositionAttribLocation = gl.getAttribLocation(glProgram, 'position');
    const screenQuadVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, screenQuadVertexBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    gl.enableVertexAttribArray(vertexPositionAttribLocation);
    gl.vertexAttribPointer(vertexPositionAttribLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionUniformLocation = gl.getUniformLocation(glProgram, 'u_resolution');
    const timeUniformLocation = gl.getUniformLocation(glProgram, 'u_time');
    const mistColorUniformLocation = gl.getUniformLocation(glProgram, 'u_mistColor');
    const coreColorUniformLocation = gl.getUniformLocation(glProgram, 'u_coreColor');
    const speedUniformLocation = gl.getUniformLocation(glProgram, 'u_speed');
    const progressUniformLocation = gl.getUniformLocation(glProgram, 'u_progress');
    const densityUniformLocation = gl.getUniformLocation(glProgram, 'u_density');
    const planeXNormUniformLocation = gl.getUniformLocation(glProgram, 'u_planeXNorm');
    const planeYNormUniformLocation = gl.getUniformLocation(glProgram, 'u_planeYNorm');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = host.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (resolutionUniformLocation) {
        gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    let animationFrameId = 0;
    const start = performance.now();

    const render = (now) => {
      const elapsedSec = (now - start) / 1000;
      const d = densityRef.current;
      const p = progressRef.current;
      const px = planeXNormRef.current;
      const py = planeYNormRef.current;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      if (d > 0.005) {
        const mist = hexToRgbNormalized(settings.mistColor);
        const core = hexToRgbNormalized(settings.coreColor);

        if (timeUniformLocation) gl.uniform1f(timeUniformLocation, elapsedSec);
        if (mistColorUniformLocation) gl.uniform3f(mistColorUniformLocation, mist[0], mist[1], mist[2]);
        if (coreColorUniformLocation) gl.uniform3f(coreColorUniformLocation, core[0], core[1], core[2]);
        if (speedUniformLocation) gl.uniform1f(speedUniformLocation, settings.speed);
        if (progressUniformLocation) gl.uniform1f(progressUniformLocation, p);
        if (densityUniformLocation) gl.uniform1f(densityUniformLocation, d);
        if (planeXNormUniformLocation) gl.uniform1f(planeXNormUniformLocation, px);
        if (planeYNormUniformLocation) gl.uniform1f(planeYNormUniformLocation, py);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      gl.deleteBuffer(screenQuadVertexBuffer);
      gl.deleteProgram(glProgram);
      gl.deleteShader(vertexShaderObject);
      gl.deleteShader(fragmentShaderObject);
    };
  }, [settings]);

  return (
    <div
      ref={trackRef}
      className="cloud-transition-zone"
      aria-hidden="true"
    >
      <div ref={hostRef} className="cloud-transition-zone__sticky">
        {/* 1. Volumetric WebGL Mist Layer (#8DC0DD & White) */}
        <canvas
          ref={canvasRef}
          className="cloud-transition-canvas"
        />

        {/* 2. Hero Airliner & Billowing Jet Stream Flyover (Left to Right) */}
        <div
          ref={flightRef}
          className="cloud-transition-flight"
          style={{ visibility: 'hidden' }}
        >
          {/* Billowing Jet Stream Contrail anchored right behind the engines */}
          <div className="cloud-transition-trail-wrapper">
            <img
              src="/brand/gpc/flight/jet-stream-magnific.png"
              className="cloud-transition-trail"
              alt=""
            />
          </div>

          {/* GPC Color-Block Airliner cruising forward to the right */}
          <img
            src="/brand/gpc/airliner-gpc-color-block.png"
            className="cloud-transition-plane"
            alt="Intelligent Battery Cell 4.0 Airliner"
          />
        </div>
      </div>
    </div>
  );
}
