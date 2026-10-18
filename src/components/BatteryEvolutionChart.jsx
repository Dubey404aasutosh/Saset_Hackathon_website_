import React, { useState, useEffect } from 'react';

/**
 * Battery Evolution SVG Line Chart
 * Replicating the Applied Imagination SVG Chart with animated paths, axis ticks, and vintage prop heads
 */
export default function BatteryEvolutionChart() {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('battery-chart');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setDrawn(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <figure className="imagination-chart" id="battery-chart">
      <div className="imagination-chart__header">
        <h3 className="imagination-chart__title">Battery Cycle Life vs. AI Optimization Fidelity</h3>
        <p className="imagination-chart__subtitle">
          Comparing unmonitored degradation, rule-based BMS, and AI-driven Digital Twin 4.0 retention.
        </p>
      </div>

      <div className="imagination-chart__plot">
        <svg
          className="imagination-chart__svg"
          viewBox="0 0 1000 520"
          aria-hidden="true"
        >
          {/* Grid lines */}
          <g className="imagination-chart__grid">
            {[450, 360, 270, 180, 90].map((y) => (
              <line key={y} x1="80" x2="960" y1={y} y2={y} />
            ))}
            {[180, 320, 460, 600, 740, 880].map((x) => (
              <line key={x} x1={x} x2={x} y1="50" y2="450" />
            ))}
          </g>

          {/* Axes */}
          <g className="imagination-chart__axis">
            <line x1="80" x2="960" y1="450" y2="450" />
            <line x1="80" x2="80" y1="50" y2="450" />
          </g>

          {/* Axis Labels & Ticks */}
          <g className="imagination-chart__ticks">
            <text x="65" y="450" textAnchor="end" dominantBaseline="middle">0%</text>
            <text x="65" y="360" textAnchor="end" dominantBaseline="middle">25%</text>
            <text x="65" y="270" textAnchor="end" dominantBaseline="middle">50%</text>
            <text x="65" y="180" textAnchor="end" dominantBaseline="middle">75%</text>
            <text x="65" y="90" textAnchor="end" dominantBaseline="middle">100%</text>

            <text x="80" y="480" textAnchor="middle">0</text>
            <text x="240" y="480" textAnchor="middle">400 Cycles</text>
            <text x="440" y="480" textAnchor="middle">800 Cycles</text>
            <text x="640" y="480" textAnchor="middle">1,200 Cycles</text>
            <text x="840" y="480" textAnchor="middle">1,600 Cycles</text>
            <text x="960" y="480" textAnchor="middle">2,000 Cycles</text>
          </g>

          {/* Data Curves */}
          <g className="imagination-chart__lines">
            {/* Curve 1: Conventional Unmonitored Cell (Steep drop-off) */}
            <path
              className="imagination-chart__line"
              d="M 80 90 L 220 110 L 360 160 L 500 280 L 640 400 L 780 440 L 960 450"
              pathLength="1"
              style={{
                '--line-accent': 'var(--color-red)',
                '--line-draw': drawn ? '1' : '0'
              }}
            />

            {/* Curve 2: Rule-based BMS (Moderate Linear Fade) */}
            <path
              className="imagination-chart__line"
              d="M 80 90 L 220 105 L 360 140 L 500 185 L 640 240 L 780 310 L 960 380"
              pathLength="1"
              style={{
                '--line-accent': 'var(--color-yellow)',
                '--line-draw': drawn ? '1' : '0'
              }}
            />

            {/* Curve 3: Intelligent Cell 4.0 Digital Twin (High retention 92%) */}
            <path
              className="imagination-chart__line"
              d="M 80 90 L 220 92 L 360 95 L 500 102 L 640 112 L 780 120 L 960 130"
              pathLength="1"
              style={{
                '--line-accent': 'var(--color-purple)',
                '--line-draw': drawn ? '1' : '0'
              }}
            />
          </g>
        </svg>
      </div>

      <ul className="imagination-chart__legend">
        <li className="imagination-chart__legend-item" style={{ '--line-accent': 'var(--color-purple)' }}>
          <span className="imagination-chart__legend-box" aria-hidden="true" />
          <span>Intelligent Cell 4.0 (AI Digital Twin & Smart Chemistry)</span>
        </li>
        <li className="imagination-chart__legend-item" style={{ '--line-accent': 'var(--color-yellow)' }}>
          <span className="imagination-chart__legend-box" aria-hidden="true" />
          <span>Rule-based Standard BMS</span>
        </li>
        <li className="imagination-chart__legend-item" style={{ '--line-accent': 'var(--color-red)' }}>
          <span className="imagination-chart__legend-box" aria-hidden="true" />
          <span>Unmonitored / Conventional Lithium-Ion Pack</span>
        </li>
      </ul>

      <figcaption className="imagination-chart__caption">
        Figure 1.0 — Predictive digital twins prevent micro-dendrite formation, preserving state-of-health up to 3x longer than traditional cut-off thresholds.
      </figcaption>
    </figure>
  );
}
