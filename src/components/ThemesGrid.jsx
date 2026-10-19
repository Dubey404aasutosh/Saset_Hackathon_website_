import React, { useState, useEffect, useRef, useCallback } from 'react';

export const HACKATHON_THEMES = [
  {
    id: '01',
    code: 'BMS-AI',
    title: 'Intelligent Battery Management Systems (BMS)',
    subtitle: 'Edge AI State Estimation & Embedded Microcontrollers',
    desc: 'Next-generation algorithmic state estimation (SoC, SoH, SoP) with adaptive machine learning models on edge microcontrollers.',
    tag: 'Core AI Track',
    badgeColor: '#f94e2a',
    metricLabel: 'TARGET ACCURACY',
    metricVal: '> 98.8% SoC',
    schematicType: 'bms'
  },
  {
    id: '02',
    code: 'THM-RUN',
    title: 'Battery Safety & Thermal Runaway Mitigation',
    subtitle: 'Multi-Physics Early Warning & Gas Vent Detection',
    desc: 'Multi-physics early-warning detection systems, vapor pressure venting triggers, and passive/active propagation barriers.',
    tag: 'Safety Critical',
    badgeColor: '#f66f00',
    metricLabel: 'VENT DETECTION',
    metricVal: '< 250ms',
    schematicType: 'safety'
  },
  {
    id: '03',
    code: 'CHG-CYC',
    title: 'Smart Charging & Second-Life Cascading',
    subtitle: 'Dynamic Pulse Protocols & Stationary Storage',
    desc: 'Dynamic pulse charging protocols, health-conscious fast charging, and algorithmic sorting of retired EV modules for stationary storage.',
    tag: 'Circular Economy',
    badgeColor: '#9b338f',
    metricLabel: 'CYCLE LIFE GAIN',
    metricVal: '+35% Life',
    schematicType: 'charging'
  },
  {
    id: '04',
    code: 'GRD-STG',
    title: 'Renewable Energy Grid Storage',
    subtitle: 'High-Inertia Buffer Storage & Microgrid Integration',
    desc: 'High-inertia buffer storage algorithms, microgrid coordination, and utility-scale integration with solar and wind variability.',
    tag: 'Grid Infrastructure',
    badgeColor: '#ffc013',
    metricLabel: 'FREQUENCY LOCK',
    metricVal: '50.00 Hz',
    schematicType: 'grid'
  },
  {
    id: '05',
    code: 'DIG-TWN',
    title: 'Battery Diagnostics & Physics Digital Twins',
    subtitle: 'Electrochemical PDE Coupling & Neural Surrogates',
    desc: 'Coupling electrochemical partial differential equations with neural surrogate models for non-invasive degradation mapping.',
    tag: 'Digital Twin',
    badgeColor: '#f94e2a',
    metricLabel: 'SOLVER SPEEDUP',
    metricVal: '10,000x',
    schematicType: 'twin'
  },
  {
    id: '06',
    code: 'IOT-EIS',
    title: 'IoT-Enabled Wireless Monitoring',
    subtitle: 'Cell-Level EIS & Ultra-Low Power Sensor Mesh',
    desc: 'Cell-level impedance spectroscopy, ultra-low power wireless sensor mesh networks, and cloud telemetry pipelines.',
    tag: 'Hardware & IoT',
    badgeColor: '#f66f00',
    metricLabel: 'MESH LATENCY',
    metricVal: '< 12ms',
    schematicType: 'iot'
  },
  {
    id: '07',
    code: 'NAT-MAT',
    title: 'Indigenous Battery Chemistries',
    subtitle: 'Domestic Sodium-Ion & Non-Critical Supply Chains',
    desc: 'Sodium-ion, iron-redox, and zinc-air architectures built entirely using domestic, non-critical raw material supply chains.',
    tag: 'Atmanirbhar R&D',
    badgeColor: '#9b338f',
    metricLabel: 'DOMESTIC SOURCING',
    metricVal: '100% India',
    schematicType: 'chem'
  },
  {
    id: '08',
    code: 'DEF-EMP',
    title: 'National Security & Defense Storage',
    subtitle: 'Sub-Zero Combat Packs & Tactical EMP Shielding',
    desc: 'Sub-zero military drone propulsion, resilient combat vehicle packs, and tactical EMP-hardened energy repositories.',
    tag: 'Strategic Defense',
    badgeColor: '#f94e2a',
    metricLabel: 'OPERATING RANGE',
    metricVal: '-40°C to +65°C',
    schematicType: 'defense'
  }
];

// Mathematical & Physics Helpers
export function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

/** Height of a sagging tension string between (0, y0) and (w, y0) at position x */
export function stringY(x, w, y0, sag) {
  const t = clamp(x / w, 0, 1);
  return y0 + 4 * sag * t * (1 - t);
}

/** Critically damped spring simulation step */
export function springStep(x, v, target, dt, k = 70) {
  const c = 2 * Math.sqrt(k);
  const nv = v + (k * (target - x) - c * v) * dt;
  return [x + nv * dt, nv];
}

/** Physical swing step on a pegged suspension point */
export function swingStep(angle, angVel, lineVel, dt, gain = 1) {
  const nw = angVel + (-38 * angle - 4.2 * angVel + lineVel * 0.0034 * gain) * dt;
  return [clamp(angle + nw * dt, -0.45, 0.45), nw];
}

export function nearestAt(off, spacing, n) {
  return clamp(Math.round(off / spacing), 0, Math.max(0, n - 1));
}

export function pad2(n) {
  return n < 10 ? '0' + n : String(n);
}

/** Uniform Engineering Vector Schematics for all 8 Problem Statements */
function ThemeVisual({ type, active }) {
  const stroke = active ? '#232424' : '#6b7280';
  const accent = active ? '#f94e2a' : '#9ca3af';
  const grid = active ? 'rgba(35,36,36,0.08)' : 'rgba(35,36,36,0.04)';

  return (
    <div className="plc-shot">
      <svg
        viewBox="0 0 280 200"
        className="plc-shot__svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Engineering Millimeter Grid */}
        <defs>
          <pattern id={`tech-grid-${type}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={grid} strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="280" height="200" fill="#f4efe6" />
        <rect width="280" height="200" fill={`url(#tech-grid-${type})`} />

        {/* Viewfinder Corner Reticles */}
        <path d="M 12 24 V 12 H 24 M 268 24 V 12 H 256 M 12 176 V 188 H 24 M 268 176 V 188 H 256" stroke={stroke} strokeWidth="1.2" opacity="0.6" />

        {/* Specific Domain Technical Schematic */}
        {type === 'bms' && (
          <g transform="translate(40, 30)">
            <rect x="20" y="20" width="160" height="100" rx="3" stroke={stroke} strokeWidth="1.5" fill="#faf7f2" />
            <rect x="55" y="45" width="90" height="50" rx="2" stroke={accent} strokeWidth="1.5" strokeDasharray="3 2" fill="rgba(249,78,42,0.05)" />
            <circle cx="100" cy="70" r="14" stroke={accent} strokeWidth="2" />
            <path d="M 94 70 L 98 74 L 108 64" stroke={accent} strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="50" x2="20" y2="50" stroke={stroke} strokeWidth="1.5" />
            <line x1="0" y1="90" x2="20" y2="90" stroke={stroke} strokeWidth="1.5" />
            <line x1="180" y1="50" x2="200" y2="50" stroke={stroke} strokeWidth="1.5" />
            <line x1="180" y1="90" x2="200" y2="90" stroke={stroke} strokeWidth="1.5" />
            <path d="M 40 30 H 70 M 130 30 H 160" stroke={stroke} strokeWidth="1" strokeDasharray="2 2" />
            <text x="100" y="110" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace" letterSpacing="1">EDGE-AI SoC/SoH</text>
          </g>
        )}

        {type === 'safety' && (
          <g transform="translate(40, 25)">
            <circle cx="100" cy="75" r="55" stroke={stroke} strokeWidth="1.2" strokeDasharray="4 3" />
            <circle cx="100" cy="75" r="38" stroke={accent} strokeWidth="1.8" fill="rgba(246,111,0,0.06)" />
            <circle cx="100" cy="75" r="16" fill={accent} opacity="0.85" />
            <line x1="100" y1="10" x2="100" y2="30" stroke={accent} strokeWidth="2" />
            <line x1="100" y1="120" x2="100" y2="140" stroke={accent} strokeWidth="2" />
            <line x1="35" y1="75" x2="55" y2="75" stroke={accent} strokeWidth="2" />
            <line x1="145" y1="75" x2="165" y2="75" stroke={accent} strokeWidth="2" />
            <path d="M 75 50 L 125 100 M 75 100 L 125 50" stroke={stroke} strokeWidth="1" strokeDasharray="2 2" />
            <text x="100" y="146" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace" letterSpacing="1">THERMAL VENT &lt; 250ms</text>
          </g>
        )}

        {type === 'charging' && (
          <g transform="translate(40, 30)">
            <line x1="10" y1="110" x2="190" y2="110" stroke={stroke} strokeWidth="1.2" />
            <line x1="10" y1="20" x2="10" y2="110" stroke={stroke} strokeWidth="1.2" />
            <path d="M 10 100 Q 40 20 75 60 T 140 40 T 190 25" stroke={accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 10 100 L 40 60 L 60 75 L 90 35 L 115 55 L 150 20 L 190 25" stroke={stroke} strokeWidth="1" strokeDasharray="3 2" fill="none" />
            <path d="M 98 62 L 106 50 L 102 62 L 112 62 L 96 82 L 100 68 Z" fill={accent} stroke={stroke} strokeWidth="0.8" />
            <text x="100" y="128" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace" letterSpacing="1">DYNAMIC PULSE +35%</text>
          </g>
        )}

        {type === 'grid' && (
          <g transform="translate(40, 25)">
            <path d="M 45 125 L 80 30 L 115 125" stroke={stroke} strokeWidth="1.8" />
            <path d="M 95 125 L 130 30 L 165 125" stroke={stroke} strokeWidth="1.8" />
            <line x1="55" y1="75" x2="105" y2="75" stroke={accent} strokeWidth="1.5" />
            <line x1="105" y1="75" x2="155" y2="75" stroke={accent} strokeWidth="1.5" />
            <line x1="65" y1="100" x2="95" y2="100" stroke={stroke} strokeWidth="1.2" />
            <line x1="115" y1="100" x2="145" y2="100" stroke={stroke} strokeWidth="1.2" />
            <circle cx="80" cy="30" r="4.5" fill={accent} />
            <circle cx="130" cy="30" r="4.5" fill={accent} />
            <path d="M 20 135 Q 100 135 190 135" stroke={stroke} strokeWidth="1" />
            <text x="100" y="146" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace" letterSpacing="1">GRID BUFFER 50.00Hz</text>
          </g>
        )}

        {type === 'twin' && (
          <g transform="translate(40, 30)">
            <rect x="15" y="25" width="65" height="70" rx="2" stroke={stroke} strokeWidth="1.5" fill="#faf7f2" />
            <rect x="120" y="25" width="65" height="70" rx="2" stroke={accent} strokeWidth="1.5" strokeDasharray="3 2" fill="rgba(249,78,42,0.04)" />
            <path d="M 85 60 H 115" stroke={accent} strokeWidth="2" />
            <polygon points="115,60 108,56 108,64" fill={accent} />
            <path d="M 25 75 C 38 45 55 45 70 75" stroke={stroke} strokeWidth="1.6" fill="none" />
            <path d="M 130 75 C 143 45 160 45 175 75" stroke={accent} strokeWidth="2" fill="none" />
            <text x="100" y="118" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace" letterSpacing="1">PDE ⇄ NEURAL 10,000x</text>
          </g>
        )}

        {type === 'iot' && (
          <g transform="translate(40, 25)">
            <circle cx="100" cy="75" r="14" fill={accent} />
            <path d="M 100 48 A 27 27 0 0 1 127 75" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M 73 75 A 27 27 0 0 1 100 48" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M 100 30 A 45 45 0 0 1 145 75" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="4 3" />
            <path d="M 55 75 A 45 45 0 0 1 100 30" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeDasharray="4 3" />
            <circle cx="45" cy="115" r="5" stroke={stroke} strokeWidth="1.5" fill="#faf7f2" />
            <circle cx="155" cy="115" r="5" stroke={stroke} strokeWidth="1.5" fill="#faf7f2" />
            <line x1="45" y1="115" x2="90" y2="82" stroke={stroke} strokeWidth="1" strokeDasharray="2 2" />
            <line x1="155" y1="115" x2="110" y2="82" stroke={stroke} strokeWidth="1" strokeDasharray="2 2" />
            <text x="100" y="146" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace" letterSpacing="1">WIRELESS EIS &lt; 12ms</text>
          </g>
        )}

        {type === 'chem' && (
          <g transform="translate(40, 25)">
            <polygon points="100,25 145,50 145,100 100,125 55,100 55,50" stroke={stroke} strokeWidth="1.8" fill="#faf7f2" />
            <polygon points="100,40 130,57 130,93 100,110 70,93 70,57" stroke={accent} strokeWidth="1.5" strokeDasharray="3 2" fill="rgba(155,51,143,0.06)" />
            <circle cx="100" cy="75" r="18" fill={accent} />
            <text x="100" y="81" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Na⁺</text>
            <text x="100" y="146" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace" letterSpacing="1">SODIUM-ION 100% INDIA</text>
          </g>
        )}

        {type === 'defense' && (
          <g transform="translate(40, 25)">
            <path d="M 100 25 L 150 45 V 85 C 150 112 100 130 100 130 C 100 130 50 112 50 85 V 45 Z" stroke={stroke} strokeWidth="1.8" fill="#faf7f2" />
            <path d="M 100 38 L 135 52 V 80 C 135 100 100 114 100 114 C 100 114 65 100 65 80 V 52 Z" stroke={accent} strokeWidth="1.5" fill="rgba(249,78,42,0.06)" />
            <path d="M 90 75 L 97 82 L 112 65" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="100" y="146" textAnchor="middle" fill={stroke} fontSize="8" fontFamily="monospace" letterSpacing="1">EMP SHIELD · -40°C</text>
          </g>
        )}

        {/* Technical Sub-label in Top Left */}
        <text x="16" y="24" fill={stroke} fontSize="7" fontFamily="monospace" opacity="0.7">FIG-{type.toUpperCase()}</text>
        <text x="264" y="24" textAnchor="end" fill={accent} fontSize="7" fontFamily="monospace" fontWeight="bold">REF.08</text>
      </svg>
    </div>
  );
}

export default function ThemesGrid() {
  const n = HACKATHON_THEMES.length;
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [size, setSize] = useState({ w: 1200, h: 620, cw: 290 });

  const rootRef = useRef(null);
  const pathRef = useRef(null);
  const cardsRef = useRef([]);
  const sim = useRef({ off: 0, vel: 0, target: 0, a: [], w: [] });
  const drag = useRef(null);
  const lastTouch = useRef(0);
  const activeRef = useRef(0);

  const sag = 38; // Sagging distance of string in px
  const swingGain = 1.0;
  const spacing = size.cw * 1.12;

  const goTo = useCallback(
    (idx) => {
      sim.current.target = clamp(idx, 0, n - 1) * spacing;
    },
    [n, spacing]
  );

  // ResizeObserver to adapt card width dynamically on mobile & desktop
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ro = new ResizeObserver(() => {
      const rect = root.getBoundingClientRect();
      // Keep cardWidth well within height bounds so it never clips
      const cw = Math.round(Math.max(240, Math.min(310, rect.width * 0.38, rect.height * 0.48)));
      setSize({ w: rect.width, h: rect.height, cw });
    });

    ro.observe(root);
    return () => ro.disconnect();
  }, []);

  // Sync target when spacing updates
  useEffect(() => {
    sim.current.target = activeRef.current * spacing;
    sim.current.off = activeRef.current * spacing;
  }, [spacing]);

  // Main Physics Simulation Loop (Spring settling + Sagging Wire + Pegged Pendulum)
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let visible = true;
    let raf = 0;
    let prev = performance.now();
    const S = sim.current;

    const frame = (now) => {
      raf = 0;
      if (!visible) return;

      const dt = Math.min(0.033, (now - prev) / 1000);
      prev = now;

      const { w, h, cw } = size;
      const y0 = Math.max(45, h * 0.16);
      const d = drag.current;

      let lineVel = 0;
      if (d && d.moved) {
        lineVel = d.v * 1000;
      } else {
        const before = S.off;
        [S.off, S.vel] = springStep(S.off, S.vel, S.target, dt);
        lineVel = -(S.off - before) / Math.max(dt, 1e-3);
      }

      const g = reduce ? 0 : swingGain;
      const near = nearestAt(S.off, spacing, n);

      for (let i = 0; i < n; i++) {
        const el = cardsRef.current[i];
        if (!el) continue;

        const x = w / 2 + i * spacing - S.off;

        // Culling out of view
        if (x < -cw * 1.5 || x > w + cw * 1.5) {
          el.style.visibility = 'hidden';
          continue;
        }

        el.style.visibility = 'visible';

        let angle = S.a[i] || 0;
        let angVel = S.w[i] || 0;

        // Physical pendulum reaction to line acceleration
        [angle, angVel] = swingStep(angle, angVel, lineVel, dt, g);
        // Organic gentle ambient breeze sway
        if (g) angle += Math.sin(now / 1300 + i * 1.7) * 0.0009 * g;

        S.a[i] = angle;
        S.w[i] = angVel;

        const y = stringY(x, w, y0, sag) - 6;
        const isNear = i === near;

        el.style.transform = `translate(${(x - cw / 2).toFixed(1)}px, ${y.toFixed(1)}px) rotate(${angle.toFixed(4)}rad)`;
        el.style.zIndex = String(isNear ? n + 2 : n - Math.abs(i - near));
      }

      // Update tension cable SVG curve
      if (pathRef.current) {
        pathRef.current.setAttribute(
          'd',
          `M 0 ${y0} Q ${w / 2} ${y0 + 2 * sag} ${w} ${y0}`
        );
      }

      if (near !== activeRef.current) {
        activeRef.current = near;
        setActive(near);
      }

      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) {
        prev = performance.now();
        raf = requestAnimationFrame(frame);
      }
    });

    io.observe(root);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [size, spacing, n]);

  // Subtle Autoplay: Advances every 5.5s unless user is interacting
  useEffect(() => {
    const timer = setInterval(() => {
      if (document.hidden || drag.current || performance.now() - lastTouch.current < 5000) {
        return;
      }
      goTo(activeRef.current >= n - 1 ? 0 : activeRef.current + 1);
    }, 5500);

    return () => clearInterval(timer);
  }, [n, goTo]);

  // Pointer Drag Interaction
  const onDown = (e) => {
    if (e.target.closest('.plc-bar') || e.target.closest('button') || e.target.closest('a')) return;
    lastTouch.current = performance.now();
    drag.current = {
      x: e.clientX,
      off: sim.current.off,
      lx: e.clientX,
      lt: e.timeStamp,
      v: 0,
      moved: false
    };
  };

  const onMove = (e) => {
    const d = drag.current;
    if (!d) return;

    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 4) {
      d.moved = true;
      setDragging(true);
      rootRef.current?.setPointerCapture(e.pointerId);
    }

    if (!d.moved) return;

    const dt = Math.max(1, e.timeStamp - d.lt);
    d.v = 0.7 * ((e.clientX - d.lx) / dt) + 0.3 * d.v;
    d.lx = e.clientX;
    d.lt = e.timeStamp;

    const max = (n - 1) * spacing;
    let off = d.off - dx;

    // Resistance overshoot at boundary limits
    if (off < 0) off *= 0.35;
    if (off > max) off = max + (off - max) * 0.35;

    sim.current.off = off;
  };

  const onUp = (e) => {
    const d = drag.current;
    drag.current = null;
    lastTouch.current = performance.now();
    if (!d) return;

    if (d.moved) {
      setDragging(false);
      sim.current.vel = -d.v * 1000;
      goTo(nearestAt(sim.current.off - d.v * 180, spacing, n));
      return;
    }

    // Direct click on a specific card to slide it to center
    const card = e.target.closest('[data-i]');
    if (card) {
      goTo(Number(card.getAttribute('data-i')));
    }
  };

  const step = (dir) => {
    lastTouch.current = performance.now();
    goTo(clamp(activeRef.current + dir, 0, n - 1));
  };

  const onKey = (e) => {
    if (e.key === 'ArrowRight') step(1);
    else if (e.key === 'ArrowLeft') step(-1);
    else return;
    e.preventDefault();
  };

  const activeTheme = HACKATHON_THEMES[active] || HACKATHON_THEMES[0];

  return (
    <section className="themes-section" id="themes">
      {/* Editorial Chapter Header */}
      <div className="themes-section__intro">
        <p className="article-block__chapter-label article-block__chapter-label--yellow">
          01 / Core Problem Statements
        </p>
        <h2 className="article-block__heading">
          Eight strategic domains shaping the next energy century.
        </h2>
        <p className="themes-section__subhead">
          Drag the suspended dossier line or use navigation arrows to explore all 8 official hackathon challenges. All submissions are benchmarked against these engineering pillars.
        </p>
      </div>

      {/* Physics-Based Pegged Line Carousel */}
      <div
        ref={rootRef}
        className="plc-root"
        data-drag={dragging ? '1' : '0'}
        role="region"
        aria-roledescription="carousel"
        aria-label="Hackathon Problem Statements Carousel"
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        style={{ '--pl-cw': `${size.cw}px` }}
      >
        {/* Tension String / Cable SVG */}
        <svg className="plc-string" aria-hidden="true">
          <path
            ref={pathRef}
            fill="none"
            stroke="var(--color-ink, #232424)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.32"
          />
        </svg>

        {/* Pegged Prints (All 8 Themes) */}
        {HACKATHON_THEMES.map((theme, i) => {
          const isActive = i === active;
          return (
            <div
              key={theme.id}
              className="plc-card"
              data-i={i}
              data-on={isActive ? '1' : '0'}
              ref={(el) => (cardsRef.current[i] = el)}
              aria-hidden={isActive ? undefined : true}
            >
              {/* Wooden / Brass Clothespin Peg */}
              <div className="plc-peg" aria-hidden="true">
                <div className="plc-peg__groove" />
              </div>

              {/* Physical Polaroid Dossier Print */}
              <div className="plc-print">
                {/* Visual Viewport with Uniform Engineering Schematic */}
                <ThemeVisual type={theme.schematicType} active={isActive} />

                {/* Hand-Stamped Dossier Note Strip */}
                <div className="plc-note">
                  <span
                    className="plc-note__tag"
                    style={{ background: theme.badgeColor }}
                  >
                    {theme.id}
                  </span>
                  <span className="plc-note__title">{theme.title}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Bottom Editorial Telemetry & Control Bar */}
        <div className="plc-bar">
          <div className="plc-cap" key={active} aria-hidden="true">
            <div className="plc-cap__meta">
              <span
                className="plc-cap__tag"
                style={{ background: activeTheme.badgeColor }}
              >
                {activeTheme.id} / {activeTheme.tag}
              </span>
              <span className="plc-cap__metric">
                BENCHMARK: <b>{activeTheme.metricVal}</b>
              </span>
            </div>
            <span className="plc-title">
              {activeTheme.title}
            </span>
            <span className="plc-sub">{activeTheme.desc}</span>
          </div>

          <div className="plc-controls">
            <span className="plc-count" aria-hidden="true">
              <b>{pad2(active + 1)}</b> / {pad2(n)}
            </span>

            <div className="plc-nav-btns">
              <button
                type="button"
                className="plc-btn"
                aria-label="Previous Theme"
                onClick={() => step(-1)}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                type="button"
                className="plc-btn"
                aria-label="Next Theme"
                onClick={() => step(1)}
              >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

