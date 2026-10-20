import React, { useState } from 'react';

const FAQS = [
  {
    q: 'Who can participate in this Hackathon?',
    a: 'Three participant categories can register: (1) Students and research scholars; (2) Student start-ups (with university/college-enrolled students); and (3) MSMEs and registered start-ups.'
  },
  {
    q: 'What is the focus of the event?',
    a: 'Intelligent Battery Cell 4.0 Hackathon 2026 will bring participants together to develop innovative solutions for the future of battery technology. The event focuses on using AI to advance battery safety, sustainability, and indigenous innovation.'
  },
  {
    q: 'What are the hackathon themes?',
    a: 'Intelligent battery management systems; Battery safety; Smart charging and second-life applications; Renewable energy storage; Battery diagnostics and digital twins; IoT-enabled monitoring; Indigenous battery technologies; and Other relevant themes, including those related to the national security domain.'
  },
  {
    q: 'What is the registration fee?',
    a: 'Students and research scholars: ₹500/-. Student start-ups (with university/college-enrolled students): ₹1,500/-. MSMEs and registered start-ups: ₹2,000/-.'
  },
  {
    q: 'What are the important dates?',
    a: 'Registration opens on 9 October 2026 (EOI has been floated). The registration deadline is 30 October 2026. The final Grand Finale will be announced on 1 December 2026 (tentative). Mentoring, product development and screening will be completed in between.'
  },
  {
    q: 'What do participants get?',
    a: 'Attractive cash prizes and certificates for the winners, with up to ₹2 lakh in cash prize money; mentoring sessions for shortlisted applicants before the Grand Finale; and incubation opportunities for participants.'
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="article-block split-section" id="faq">
      <header className="split-section__intro">
        <p className="article-block__chapter-label article-block__chapter-label--yellow">
          05 / Participant Clarifications
        </p>
        <h2 className="split-section__heading">
          Frequently Asked <em>Questions</em>
        </h2>
        <p className="split-section__lede">
          Eligibility, themes, fees, dates and participant benefits.
        </p>
      </header>

      <div className="split-section__body faq-list">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={`faq-card${isOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                style={{
                  width: '100%',
                  padding: '1.6rem 2rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--color-neutral-500)'
                }}
              >
                <span>{faq.q}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--color-red)' }}>
                  {isOpen ? '—' : '+'}
                </span>
              </button>

              {isOpen && (
                <div id={`faq-answer-${idx}`} style={{ padding: '0 2rem 1.8rem', borderTop: '1px dashed var(--color-border)' }}>
                  <p style={{ marginTop: '1.2rem', fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-ink-muted)', fontFamily: 'var(--font-sans)' }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
