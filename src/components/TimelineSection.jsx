import React from 'react';

const TIMELINE_STEPS = [
  {
    phase: 'PHASE 01',
    date: '09 OCT 2026',
    status: 'ACTIVE NOW',
    title: 'Registration & EOI Opens',
    desc: 'Expression of Interest (EOI) is officially floated across national universities, research labs, and startups. Portal open for team submissions.'
  },
  {
    phase: 'PHASE 02',
    date: '30 OCT 2026',
    status: 'HARD DEADLINE',
    title: 'Registration Deadline',
    desc: 'Final cutoff for initial abstract proposals, team rosters, and theme domain selections. Screening of applications begins immediately.'
  },
  {
    phase: 'PHASE 03',
    date: 'NOV 2026',
    status: 'INCUBATION & DEV',
    title: 'Mentoring & Rapid Prototyping',
    desc: 'Shortlisted applicants receive technical mentoring from leading battery scientists, digital twin architects, and electrochemical patent holders.'
  },
  {
    phase: 'PHASE 04',
    date: '01 DEC 2026',
    status: 'TENTATIVE ANNOUNCEMENT',
    title: 'Grand Finale Showcase',
    desc: 'Final live prototype evaluation, investor jury pitches, award of ₹2 Lakh prize money, and incubation partner onboarding.'
  }
];

export default function TimelineSection() {
  return (
    <section className="timeline-section" id="timeline">
      <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
        <p className="article-block__chapter-label article-block__chapter-label--yellow">
          02 / Important Milestones
        </p>
        <h2 className="article-block__heading">Critical Timeline & Roadmap</h2>
        <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.1rem' }}>
          Mark these mandatory deadlines to ensure your team qualifies for mentorship and finale consideration.
        </p>
      </div>

      <div className="timeline-grid">
        {TIMELINE_STEPS.map((step) => (
          <div key={step.phase} className="timeline-card">
            <span className="timeline-card__phase">{step.phase} · {step.status}</span>
            <h3 className="timeline-card__date">{step.date}</h3>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.6rem', color: 'var(--color-neutral-500)' }}>
              {step.title}
            </h4>
            <p className="timeline-card__desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
