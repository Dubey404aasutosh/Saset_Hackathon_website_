import React, { useState } from 'react';

const FAQS = [
  {
    q: 'Who is eligible to participate in this Hackathon?',
    a: 'Participation is open across three categories: (1) Students & Research Scholars enrolled in undergraduate, postgraduate, or doctoral programs; (2) Student Start-ups led by enrolled students; and (3) Registered MSMEs and deeptech startups. Cross-institutional and multidisciplinary teams (chemists + computer scientists + electrical engineers) are strongly encouraged.'
  },
  {
    q: 'Is a physical cell hardware prototype strictly mandatory?',
    a: 'No. Submissions can be purely software algorithms (e.g. edge AI BMS firmware, SoC/SoH neural networks), physics-based digital twins, CAD/simulation models, or physical hardware setups. Teams working on hardware will be provided guidance and lab testing protocols during the November mentoring phase.'
  },
  {
    q: 'What is the exact registration fee structure?',
    a: 'Registration fees are tiered to ensure equitable access: Students & Research Scholars pay ₹500/-; Student Start-ups pay ₹1,500/-; and MSMEs/Registered Start-ups pay ₹2,000/-. Fees are payable upon abstract shortlisting and directly support compute grants, laboratory testing infrastructure, and prize disbursals.'
  },
  {
    q: 'What are the key dates and milestones?',
    a: 'Registration & Expression of Interest (EOI) opened on 9 October 2026. The final deadline for abstract submissions is 30 October 2026. During November 2026, shortlisted applicants undergo intensive technical mentoring, screening, and product development. The Grand Finale is tentatively announced for 1 December 2026.'
  },
  {
    q: 'Who owns the Intellectual Property (IP) developed during the event?',
    a: 'All intellectual property, patents, source code, and hardware designs developed by participants remain 100% their own exclusive property. Organizers and incubation partners provide acceleration support without taking premature equity or non-consensual IP rights.'
  },
  {
    q: 'How will the ₹2,00,000 cash prize and incubation be disbursed?',
    a: 'Cash prizes totaling up to ₹2,00,000 will be awarded directly to the top winning teams across student, startup, and technical domain categories during the Grand Finale on 1 December 2026, accompanied by official certificates of achievement and fast-track incubation offers.'
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="article-block" id="faq" style={{ maxWidth: 'var(--container-max)', padding: '6rem 2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 4rem' }}>
        <p className="article-block__chapter-label article-block__chapter-label--yellow">
          05 / Participant Clarifications
        </p>
        <h2 className="article-block__heading">Frequently Asked Questions</h2>
        <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.1rem' }}>
          Everything you need to know about team eligibility, submission requirements, mentoring, and prizes.
        </p>
      </div>

      <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              style={{
                background: 'var(--color-canvas)',
                border: '1px solid var(--color-border)',
                borderRadius: '2px',
                overflow: 'hidden',
                transition: 'border-color 0.2s ease'
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
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
                <div style={{ padding: '0 2rem 1.8rem', borderTop: '1px dashed var(--color-border)' }}>
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
