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

export default function ThemesGrid() {
  const n = HACKATHON_THEMES.length;
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [size, setSize] = useState({ w: 1200, h: 640, cw: 330 });

  const rootRef = useRef(null);
  const pathRef = useRef(null);
  const cardsRef = useRef([]);
  const sim = useRef({ off: 0, vel: 0, target: 0, a: [], w: [] });
  const drag = useRef(null);
  const lastTouch = useRef(0);
  const activeRef = useRef(0);

  const sag = 34; // Sagging distance of string in px
  const swingGain = 1.0;
  const spacing = size.cw * 1.14;

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
      const cw = Math.round(Math.max(280, Math.min(350, rect.width * 0.42, rect.height * 0.54)));
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
      const y0 = Math.max(50, h * 0.14);
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

        {/* Pegged Prints (All 8 Themes) - Clean Typography & Problem Statement */}
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

              {/* Physical Polaroid Dossier Print - Clean PS Description */}
              <div className="plc-print">
                {/* 1. Header with Badge & Serial */}
                <div className="plc-print__header">
                  <span
                    className="plc-print__tag"
                    style={{ background: theme.badgeColor }}
                  >
                    {theme.id} / THEME
                  </span>
                  <span className="plc-print__serial">CELL 4.0 · DOMAIN {theme.id}</span>
                </div>

                {/* 2. Bold Editorial Heading */}
                <h3 className="plc-print__title">{theme.title}</h3>

                {/* 3. Target Metric Banner */}
                <div className="plc-print__metric-line">
                  <span className="plc-print__metric-label">{theme.metricLabel}:</span>
                  <b className="plc-print__metric-val">{theme.metricVal}</b>
                </div>

                {/* 4. Full Explanatory Problem Statement Description */}
                <p className="plc-print__desc">{theme.desc}</p>

                {/* 5. Footer with Category Tag & Action Link */}
                <div className="plc-print__footer">
                  <span className="plc-print__category">
                    {theme.tag}
                  </span>
                  <a
                    href="#register"
                    className="plc-print__action"
                    onClick={(e) => e.stopPropagation()}
                  >
                    SELECT THEME →
                  </a>
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

