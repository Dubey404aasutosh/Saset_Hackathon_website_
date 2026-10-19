import React, { useState, useEffect } from 'react';

/**
 * Battery Evolution SVG Line Chart
 * Animated line-draw via stroke-dashoffset controlled by scroll
 * Legend items use layered paper-cut jitter boxes
 */
export default function BatteryEvolutionChart() {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('battery-chart');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
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
        {/* Halftone texture overlay */}
        <div className="halftone-overlay" aria-hidden="true" />

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

            <text x="80" y="488" textAnchor="middle">0</text>
            <text x="240" y="488" textAnchor="middle">400</text>
            <text x="440" y="488" textAnchor="middle">800</text>
            <text x="640" y="488" textAnchor="middle">1,200</text>
            <text x="840" y="488" textAnchor="middle">1,600</text>
            <text x="960" y="488" textAnchor="middle">2,000</text>
          </g>

          {/* Axis Titles */}
          <g className="imagination-chart__axis-title">
            <text x="520" y="510" textAnchor="middle">Charge Cycles</text>
            <text x="30" y="270" textAnchor="middle" transform="rotate(-90, 30, 270)">Capacity Retention</text>
          </g>

          {/* Data Curves — animated line draw */}
          <g>
            {/* Unmonitored (steep drop-off) */}
            <path
              className="imagination-chart__line"
              d="M 80 90 L 220 110 L 360 160 L 500 280 L 640 400 L 780 440 L 960 450"
              pathLength="1"
              style={{
                '--line-accent': 'var(--color-red)',
                '--line-draw': drawn ? '1' : '0'
              }}
            />

            {/* Rule-based BMS (moderate fade) */}
            <path
              className="imagination-chart__line"
              d="M 80 90 L 220 105 L 360 140 L 500 185 L 640 240 L 780 310 L 960 380"
              pathLength="1"
              style={{
                '--line-accent': 'var(--color-yellow)',
                '--line-draw': drawn ? '1' : '0',
                transitionDelay: '0.3s'
              }}
            />

            {/* Cell 4.0 Digital Twin (high retention) */}
            <path
              className="imagination-chart__line"
              d="M 80 90 L 220 92 L 360 95 L 500 102 L 640 112 L 780 120 L 960 130"
              pathLength="1"
              style={{
                '--line-accent': 'var(--color-purple)',
                '--line-draw': drawn ? '1' : '0',
                transitionDelay: '0.6s'
              }}
            />
          </g>
        </svg>
      </div>

      {/* Legend — layered paper-cut boxes */}
      <ul className="imagination-chart__legend">
        {[
          { color: 'var(--color-purple)', label: 'Cell 4.0 (AI Digital Twin)', offset: '0s' },
          { color: 'var(--color-yellow)', label: 'Rule-based Standard BMS', offset: '0.16s' },
          { color: 'var(--color-red)', label: 'Unmonitored Li-Ion Pack', offset: '0.33s' }
        ].map(item => (
          <li
            key={item.label}
            className="imagination-chart__legend-item"
            style={{ '--line-accent': item.color, '--legend-offset': item.offset }}
          >
            <span className="imagination-chart__legend-box" aria-hidden="true" />
            <span className="imagination-chart__legend-label">{item.label}</span>
          </li>
        ))}
      </ul>

      <figcaption className="imagination-chart__caption">
        Figure 1.0 — Predictive digital twins prevent micro-dendrite formation, preserving state-of-health up to 3× longer than traditional cut-off thresholds.
      </figcaption>
    </figure>
  );
}
