import React from 'react';

const EVALUATION_ROUNDS = [
  {
    step: 'STAGE 01',
    title: 'Registration',
    dates: '09 Oct – 30 Oct 2026',
    criteria: [
      'Registration opens on 9 October 2026 (EOI has been floated)',
      'Registration deadline is 30 October 2026',
      'Registration fee as per participant category (₹500/-, ₹1,500/- or ₹2,000/-)'
    ]
  },
  {
    step: 'STAGE 02',
    title: 'Mentoring, Product Development & Screening',
    dates: 'Before the Grand Finale',
    criteria: [
      'Screening of applicants',
      'Mentoring sessions for shortlisted applicants',
      'Product development'
    ]
  },
  {
    step: 'STAGE 03',
    title: 'Grand Finale',
    dates: 'To be announced on 1 Dec 2026 (tentative)',
    criteria: [
      'Cash prizes of up to ₹2 lakh for the winners',
      'Certificates for the winners',
      'Incubation opportunities for participants'
    ]
  }
];

export default function EvaluationSection() {
  return (
    <section className="article-block split-section" id="evaluation">
      <header className="split-section__intro">
        <p className="article-block__chapter-label article-block__chapter-label--yellow">
          04 / How It Works
        </p>
        <h2 className="split-section__heading">
          Hackathon <em>Stages</em>
        </h2>
        <p className="split-section__lede">
          From registration to the Grand Finale: mentoring, product development and screening happen in between.
        </p>

        <div className="split-section__telemetry">
          <div className="split-section__metric">
            <span className="split-section__metric-val">03</span>
            <span className="split-section__metric-lbl">Stages</span>
          </div>
          <div className="split-section__metric">
            <span className="split-section__metric-val">08</span>
            <span className="split-section__metric-lbl">Themes</span>
          </div>
          <div className="split-section__metric">
            <span className="split-section__metric-val">₹2L</span>
            <span className="split-section__metric-lbl">Prize Money</span>
          </div>
        </div>
      </header>

      <div className="split-section__body">
        {EVALUATION_ROUNDS.map((r) => (
          <div key={r.step} className="theme-card" style={{ padding: '2.5rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="theme-card__idx">{r.step}</span>
              </div>
              <h3 className="theme-card__title" style={{ fontSize: '1.4rem' }}>{r.title}</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-orange)', marginBottom: '1.5rem' }}>
                {r.dates}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {r.criteria.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--color-red)', fontWeight: 'bold' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
