import React from 'react';

const BENEFITS = [
  {
    icon: '🏆',
    title: 'Up to ₹2 Lakh Cash Prizes',
    desc: 'Attractive cash prizes and certificates for the winners, with up to ₹2 lakh in prize money.'
  },
  {
    icon: '🔬',
    title: 'Mentoring Sessions',
    desc: 'Mentoring sessions for shortlisted applicants before the Grand Finale.'
  },
  {
    icon: '🚀',
    title: 'Incubation Opportunities',
    desc: 'Incubation opportunities for participants.'
  }
];

const FEE_TIERS = [
  {
    tier: 'STUDENTS & RESEARCH SCHOLARS',
    fee: '₹500/-',
    desc: 'For students and research scholars.',
  },
  {
    tier: 'STUDENT START-UPS',
    fee: '₹1,500/-',
    desc: 'For student start-ups with university/college-enrolled students.',
    highlight: true
  },
  {
    tier: 'MSMEs & REGISTERED START-UPS',
    fee: '₹2,000/-',
    desc: 'For MSMEs and registered start-ups.',
  }
];

export default function PrizesAndFees() {
  return (
    <section className="fees-section" id="fees">
      <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
        <p className="article-block__chapter-label article-block__chapter-label--yellow">
          03 / Benefits & Fees
        </p>
        <h2 className="article-block__heading">Participant Benefits & Registration Fees</h2>
        <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.05rem', lineHeight: 1.5, fontFamily: 'var(--font-body)' }}>
          Registration fee depends on your participant category.
        </p>
      </div>

      {/* Benefits */}
      <div className="benefits-row">
        {BENEFITS.map((b) => (
          <div key={b.title} className="benefit-card">
            <div className="benefit-card__icon">{b.icon}</div>
            <h3 className="benefit-card__title">{b.title}</h3>
            <p className="benefit-card__desc">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* Pricing Grid */}
      <div className="fees-grid">
        {FEE_TIERS.map((tier) => (
          <div
            key={tier.tier}
            className={`fee-card ${tier.highlight ? 'fee-card--highlight' : ''}`}
          >
            <div>
              <span className="fee-card__tier">{tier.tier}</span>
              <div className="fee-card__amount">{tier.fee}</div>
              <p className="fee-card__desc">{tier.desc}</p>
            </div>
            <a href="#register" className="cut-button" style={{ textDecoration: 'none', width: 'auto', alignSelf: 'flex-start' }}>
              <span className="cut-button__box" style={{ '--cut-fill': tier.highlight ? 'var(--color-red)' : 'var(--color-yellow)' }} />
              <span className="cut-button__label" style={{ color: tier.highlight ? 'var(--color-neutral-100)' : 'var(--color-ink)' }}>Select & Register</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
