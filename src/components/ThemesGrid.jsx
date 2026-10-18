import React from 'react';

const HACKATHON_THEMES = [
  {
    id: '01',
    title: 'Intelligent Battery Management Systems (BMS)',
    desc: 'Next-generation algorithmic state estimation (SoC, SoH, SoP) with adaptive machine learning models on edge microcontrollers.',
    tag: 'Core AI Track'
  },
  {
    id: '02',
    title: 'Battery Safety & Thermal Runaway Mitigation',
    desc: 'Multi-physics early-warning detection systems, vapor pressure venting triggers, and passive/active propagation barriers.',
    tag: 'Safety Critical'
  },
  {
    id: '03',
    title: 'Smart Charging & Second-Life Cascading',
    desc: 'Dynamic pulse charging protocols, health-conscious fast charging, and algorithmic sorting of retired EV modules for stationary storage.',
    tag: 'Circular Economy'
  },
  {
    id: '04',
    title: 'Renewable Energy Grid Storage',
    desc: 'High-inertia buffer storage algorithms, microgrid coordination, and utility-scale integration with solar and wind variability.',
    tag: 'Grid Infrastructure'
  },
  {
    id: '05',
    title: 'Battery Diagnostics & Physics Digital Twins',
    desc: 'Coupling electrochemical partial differential equations with neural surrogate models for non-invasive degradation mapping.',
    tag: 'Digital Twin'
  },
  {
    id: '06',
    title: 'IoT-Enabled Wireless Monitoring',
    desc: 'Cell-level impedance spectroscopy, ultra-low power wireless sensor mesh networks, and cloud telemetry pipelines.',
    tag: 'Hardware & IoT'
  },
  {
    id: '07',
    title: 'Indigenous Battery Chemistries',
    desc: 'Sodium-ion, iron-redox, and zinc-air architectures built entirely using domestic, non-critical raw material supply chains.',
    tag: 'Atmanirbhar R&D'
  },
  {
    id: '08',
    title: 'National Security & Defense Storage',
    desc: 'Sub-zero military drone propulsion, resilient combat vehicle packs, and tactical EMP-hardened energy repositories.',
    tag: 'Strategic Defense'
  }
];

export default function ThemesGrid() {
  return (
    <section className="themes-section" id="themes">
      <div className="themes-section__intro">
        <p className="article-block__chapter-label article-block__chapter-label--yellow">
          01 / Core Problem Statements
        </p>
        <h2 className="article-block__heading">
          Eight strategic domains shaping the next energy century.
        </h2>
        <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.1rem' }}>
          Participants are invited to submit groundbreaking software algorithms, hardware prototypes, or full-stack digital twins across these critical pillars.
        </p>
      </div>

      <div className="themes-grid">
        {HACKATHON_THEMES.map((theme) => (
          <div key={theme.id} className="theme-card">
            <div>
              <span className="theme-card__idx">{theme.id} / THEME</span>
              <h3 className="theme-card__title">{theme.title}</h3>
              <p className="theme-card__desc">{theme.desc}</p>
            </div>
            <span className="theme-card__tag">{theme.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
