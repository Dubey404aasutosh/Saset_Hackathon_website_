import React from 'react';

const EVALUATION_ROUNDS = [
  {
    step: 'ROUND 01',
    title: 'Abstract & Feasibility Screening',
    dates: 'Submission by 30 Oct 2026',
    weight: '30% Weightage',
    criteria: [
      'Originality & depth of understanding of electrochemical bottlenecks',
      'Clear choice and mapping to one of the 8 Hackathon themes',
      'Realistic technical feasibility and domestic supply chain awareness',
      'Competency and interdisciplinary balance of the applicant team'
    ]
  },
  {
    step: 'ROUND 02',
    title: 'Pre-Finale Mentoring & Prototyping Sprint',
    dates: 'Completed throughout November 2026',
    weight: '35% Weightage',
    criteria: [
      'Active participation in weekly 1-on-1 scientist mentoring sessions',
      'Implementation of AI/ML digital twin models or embedded BMS code',
      'Progress on hardware simulation, battery cycler data, or physical cell assembly',
      'Response to technical jury checkpoints and edge-case stress testing'
    ]
  },
  {
    step: 'ROUND 03',
    title: 'Grand Finale & National Jury Pitch',
    dates: 'Grand Finale on 01 Dec 2026',
    weight: '35% Weightage',
    criteria: [
      'Live functional demonstration of the software, algorithm, or hardware prototype',
      'Validation of safety enhancements (thermal mitigation, state estimation accuracy)',
      'Potential for commercial incubation, patentability, and defense deployment',
      'Jury defense on unit economics, manufacturing scalability, and second-life viability'
    ]
  }
];

export default function EvaluationSection() {
  return (
    <section className="article-block" id="evaluation" style={{ maxWidth: 'var(--container-max)', padding: '6rem 2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 4rem' }}>
        <p className="article-block__chapter-label article-block__chapter-label--yellow">
          04 / Rigorous Evaluation
        </p>
        <h2 className="article-block__heading">Evaluation Criteria & Hackathon Stages</h2>
        <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.1rem' }}>
          Every submission is evaluated against rigorous academic, industrial, and national security benchmarks by leading battery electrochemists.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {EVALUATION_ROUNDS.map((r) => (
          <div key={r.step} className="theme-card" style={{ padding: '2.5rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="theme-card__idx">{r.step}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-red)' }}>{r.weight}</span>
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
