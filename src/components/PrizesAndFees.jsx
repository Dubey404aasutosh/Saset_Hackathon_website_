import React from 'react';

const BENEFITS = [
  {
    icon: '🏆',
    title: 'Up to ₹2,00,000 Cash Prizes',
    desc: 'Direct grant-style cash prize pool distributed across top category winners, alongside official national certificates.'
  },
  {
    icon: '🔬',
    title: 'Pre-Finale Scientist Mentorship',
    desc: 'Dedicated 1-on-1 weekly mentoring sessions with premier battery researchers, simulation engineers, and hardware builders.'
  },
  {
    icon: '🚀',
    title: 'Incubation & Lab Access Opportunities',
    desc: 'Fast-track incubation support, venture funding introductions, and access to advanced battery cycler & testing infrastructure.'
  }
];

const FEE_TIERS = [
  {
    tier: 'STUDENTS & SCHOLARS',
    fee: '₹500',
    desc: 'Enrolled undergraduate, postgraduate, and PhD scholars from accredited academic institutions.',
  },
  {
    tier: 'STUDENT START-UPS',
    fee: '₹1,500',
    desc: 'Early-stage venture teams founded and driven by currently enrolled university students.',
    highlight: true
  },
  {
    tier: 'MSMEs & REGISTERED ENTITIES',
    fee: '₹2,000',
    desc: 'Registered micro, small, and medium enterprises, spin-offs, and commercial technology companies.',
  }
];

export default function PrizesAndFees() {
  return (
    <section className="fees-section" id="fees">
      <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
        <p className="article-block__chapter-label article-block__chapter-label--yellow">
          03 / Value & Investment
        </p>
        <h2 className="article-block__heading">Prizes, Incubation & Registration Tiers</h2>
        <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.05rem', lineHeight: 1.5, fontFamily: 'var(--font-body)' }}>
          Transparent fee structure dedicated to fueling world-class jury evaluation, compute grants, and cash prize distribution.
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
