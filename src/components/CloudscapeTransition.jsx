import React, { useEffect, useRef } from 'react';

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
uniform float u_scroll;  // 0..1 progress through the transition zone
uniform float u_cover;   // 0..1 global cloud coverage
uniform float u_wake;    // 0..1 strength of the aircraft wake
uniform float u_part;    // 0..1 punch-through: clouds open from the centre
uniform vec2 u_plane;    // aircraft tail position in uv space

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = rot * p * 2.03 + 17.1;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  float t = u_time * 0.035;

  // Flying into the cloud bank: zoom in and stream past as the user scrolls
  float zoom = 1.0 + u_scroll * 0.7;
  vec2 c = (uv - 0.5) * aspect;
  vec2 q = (c / zoom) * 1.25 + vec2(u_scroll * 2.4 + t, t * 0.35);

  // Domain-warped fbm gives billowing, cauliflower-like cloud forms
  vec2 w = vec2(fbm(q + vec2(0.0, t)), fbm(q + vec2(5.2, 1.3) - t));
  vec2 qw = q + w * 0.45;
  float n = fbm(qw);

  // Aircraft wake: a plume that starts tight at the tail and widens behind it
  float behind = u_plane.x - uv.x;
  float spread = 0.09 + max(behind, 0.0) * 0.9;
  float dy = (uv.y - u_plane.y) / spread;
  float wake = smoothstep(-0.04, 0.18, behind) * exp(-dy * dy * 1.4);

  // Punch-through: the centre opens first, edges linger
  float radial = length(c * vec2(0.8, 1.0));
  float part = u_part * (0.2 + (0.9 - radial) * 0.35);

  float field = n * 0.9 + wake * u_wake * 0.8 + (u_cover * 1.25 - 0.62) - part;
  float alpha = smoothstep(0.40, 0.62, field);
  if (alpha < 0.004) discard;

  // Fake top-left sun lighting from the noise gradient
  float nl = fbm(qw + vec2(-0.05, 0.07));
  float lit = clamp((nl - n) * 5.0 + 0.6, 0.0, 1.0);
  float core = smoothstep(0.55, 0.95, field);

  vec3 shadow = mix(u_mistColor, vec3(0.62, 0.74, 0.84), 0.25);
  vec3 col = mix(shadow, u_coreColor, 0.35 + 0.65 * lit);
  col = mix(col, u_coreColor, core * 0.45);
  // Edges pick up the sky tint so the cloud melts into the background
  col = mix(u_mistColor, col, smoothstep(0.0, 0.6, alpha));

  gl_FragColor = vec4(col * alpha, alpha);
}
`;

const COLOR_HEX_PATTERN = /^#?[0-9a-fA-F]{6}$/;

function hexToRgbNormalized(hex, fallback) {
  const value = COLOR_HEX_PATTERN.test((hex || '').trim()) ? hex.trim() : fallback;
  const n = value.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255);
}

const clamp01 = (x) => Math.max(0, Math.min(1, x));
const ease = (x) => x * x * (3 - 2 * x);
const range = (p, a, b) => ease(clamp01((p - a) / (b - a)));

// Choreography, as fractions of the transition zone's scroll distance
const FLIGHT_START = 0.06;
const FLIGHT_END = 0.6;

// Cloud mist only needs a fraction of native resolution; it's soft by nature
const RENDER_SCALE = 0.5;

export default function CloudscapeTransition({
  mistColor = '#8DC0DD',
  coreColor = '#ffffff'
}) {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  const hostRef = useRef(null);
  const flightRef = useRef(null);

  // Shared between the scroll handler and the render loop
  const stateRef = useRef({
    scroll: 0,
    cover: 0,
    wake: 0,
    part: 0,
    plane: [-1, 0.6],
    visible: false
  });

  // Scroll drives the aircraft and the cloud parameters
  useEffect(() => {
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const track = trackRef.current;
      if (!track) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const rect = track.getBoundingClientRect();
      const p = clamp01(-rect.top / Math.max(1, rect.height - vh));

      // Constant-speed crossing from off-screen left to off-screen right
      const fr = clamp01((p - FLIGHT_START) / (FLIGHT_END - FLIGHT_START));
      const planeW = Math.min(620, Math.max(380, vw * 0.42));
      const xPx = -planeW * 1.1 + fr * (vw + planeW * 1.4);
      const yPx = vh * (0.34 + fr * 0.1);

      const flight = flightRef.current;
      if (flight) {
        const scale = 0.88 + fr * 0.22;
        const bank = 2.5 - fr * 4;
        flight.style.transform =
          `translate3d(${xPx}px, ${yPx}px, 0) translateY(-50%) rotate(${bank}deg) scale(${scale})`;
        flight.style.visibility = fr > 0 && fr < 1 ? 'visible' : 'hidden';
      }

      const s = stateRef.current;
      s.scroll = p;
      // Tail of the aircraft (where the wake starts), in uv space with y up
      s.plane = [(xPx + planeW * 0.18) / vw, 1 - (yPx + planeW * 0.04) / vh];
      // Wake builds as the plane enters and fades once the blanket takes over
      s.wake = range(p, FLIGHT_START, 0.16) * (1 - range(p, 0.62, 0.72));
      // Blanket closes in as the plane crosses, holds briefly, then lifts
      s.cover = range(p, 0.28, 0.6) * (1 - range(p, 0.7, 0.97));
      s.part = range(p, 0.7, 0.97);
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // WebGL cloud layer
  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    const track = trackRef.current;
    if (!canvas || !host || !track) return;

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false });
    if (!gl) {
      console.warn('WebGL not supported for Cloudscape');
      return;
    }

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, vertexShaderGLSL);
    const fs = compile(gl.FRAGMENT_SHADER, fragmentShaderGLSL);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const positionLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const u = (name) => gl.getUniformLocation(program, name);
    const uResolution = u('u_resolution');
    const uTime = u('u_time');
    const uScroll = u('u_scroll');
    const uCover = u('u_cover');
    const uWake = u('u_wake');
    const uPart = u('u_part');
    const uPlane = u('u_plane');

    gl.uniform3fv(u('u_mistColor'), hexToRgbNormalized(mistColor, '#8DC0DD'));
    gl.uniform3fv(u('u_coreColor'), hexToRgbNormalized(coreColor, '#ffffff'));

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(width * RENDER_SCALE));
      canvas.height = Math.max(1, Math.round(height * RENDER_SCALE));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    let frameId = 0;
    let running = false;
    const start = performance.now();

    const render = (now) => {
      frameId = requestAnimationFrame(render);
      const s = stateRef.current;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      if (s.cover < 0.002 && s.wake < 0.002) return;

      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform1f(uScroll, s.scroll);
      gl.uniform1f(uCover, s.cover);
      gl.uniform1f(uWake, s.wake);
      gl.uniform1f(uPart, s.part);
      gl.uniform2f(uPlane, s.plane[0], s.plane[1]);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    // Only animate while the transition zone is on screen
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        frameId = requestAnimationFrame(render);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(frameId);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
    });
    io.observe(track);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [mistColor, coreColor]);

  return (
    <div ref={trackRef} className="cloud-transition-zone" aria-hidden="true">
      <div ref={hostRef} className="cloud-transition-zone__sticky">
        {/* Volumetric WebGL cloud layer (#8DC0DD & white) */}
        <canvas ref={canvasRef} className="cloud-transition-canvas" />

        {/* GPC airliner with jet stream contrail, flying left to right */}
        <div ref={flightRef} className="cloud-transition-flight" style={{ visibility: 'hidden' }}>
          <div className="cloud-transition-trail-wrapper">
            <img
              src="/brand/gpc/flight/jet-stream-magnific.png"
              className="cloud-transition-trail"
              alt=""
            />
          </div>
          <img
            src="/brand/gpc/airliner-gpc-color-block.png"
            className="cloud-transition-plane"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
