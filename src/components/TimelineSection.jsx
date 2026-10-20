import React from 'react';

const TIMELINE_STEPS = [
  {
    phase: 'STEP 01',
    date: '09 OCT 2026',
    status: 'OPEN NOW',
    title: 'Registration Opens',
    desc: 'Registration is open. The Expression of Interest (EOI) has been floated.'
  },
  {
    phase: 'STEP 02',
    date: '30 OCT 2026',
    status: 'DEADLINE',
    title: 'Registration Deadline',
    desc: 'Last date to register for the hackathon.'
  },
  {
    phase: 'STEP 03',
    date: 'IN BETWEEN',
    status: 'BEFORE GRAND FINALE',
    title: 'Mentoring, Product Development & Screening',
    desc: 'Mentoring, product development and screening will be completed before the Grand Finale. Mentoring sessions are for shortlisted applicants.'
  },
  {
    phase: 'STEP 04',
    date: '01 DEC 2026',
    status: 'TENTATIVE',
    title: 'Grand Finale Announcement',
    desc: 'The final Grand Finale will be announced on 1 December 2026 (tentative).'
  }
];

export default function TimelineSection() {
  return (
    <section className="timeline-section" id="timeline">
      <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
        <p className="article-block__chapter-label article-block__chapter-label--yellow">
          02 / Important Dates
        </p>
        <h2 className="article-block__heading">Important Dates</h2>
        <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.1rem' }}>
          Register before 30 October 2026.
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
