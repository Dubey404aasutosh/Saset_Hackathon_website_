import React, { useState } from 'react';

export default function GroundForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'students',
    theme: 'bms',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="ground" id="register">
      <div className="ground__contact">
        <form className={`ground-form ${submitted ? 'ground-form--sent' : ''}`} onSubmit={handleSubmit}>
          {submitted && (
            <div className="ground-form__success">
              <p className="ground-form__success-label">Confirmed</p>
              <h3 className="ground-form__success-heading">
                Expression of Interest Received
              </h3>
              <p className="ground-form__success-copy">
                Thank you, {formData.name}. Your preliminary registration for the Intelligent Battery Cell 4.0 Hackathon has been logged. Our technical screening committee will reach out to {formData.email} with next steps before October 30, 2026.
              </p>
              <button
                type="button"
                className="cut-button"
                style={{ width: 'auto' }}
                onClick={() => setSubmitted(false)}
              >
                <span className="cut-button__box" style={{ '--cut-fill': 'var(--color-yellow)' }} />
                <span className="cut-button__label" style={{ color: 'var(--color-ink)' }}>Register Another Team</span>
              </button>
            </div>
          )}

          <div className="ground-form__content">
            <div className="ground-form__lede">
              <h2 className="ground-form__heading">
                Ready to deploy your battery innovation at national scale?
              </h2>
              <p className="ground-form__intro">
                Submit your team's Expression of Interest (EOI). Open to students, research scholars, student startups, and registered MSMEs.
              </p>
            </div>

            <div className="ground-form__field">
              <label className="ground-form__label" htmlFor="lead-name">
                Lead Applicant Name / Team Leader
              </label>
              <input
                id="lead-name"
                type="text"
                required
                placeholder="e.g. Dr. A. Sharma / Alex Mercer"
                className="ground-form__input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="ground-form__field">
              <label className="ground-form__label" htmlFor="lead-email">
                Institutional / Corporate Email
              </label>
              <input
                id="lead-email"
                type="email"
                required
                placeholder="you@university.edu or founder@startup.in"
                className="ground-form__input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="ground-form__field">
              <label className="ground-form__label" htmlFor="category-select">
                Registration Category
              </label>
              <select
                id="category-select"
                className="ground-form__input ground-form__input--select"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="students">Students & Research Scholars — ₹500/-</option>
                <option value="student-startups">Student Start-ups (Enrolled) — ₹1,500/-</option>
                <option value="msme">MSMEs & Registered Start-ups — ₹2,000/-</option>
              </select>
            </div>

            <div className="ground-form__field">
              <label className="ground-form__label" htmlFor="theme-select">
                Primary Hackathon Theme
              </label>
              <select
                id="theme-select"
                className="ground-form__input ground-form__input--select"
                value={formData.theme}
                onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
              >
                <option value="bms">Intelligent Battery Management Systems (BMS)</option>
                <option value="safety">Battery Safety & Thermal Runaway Mitigation</option>
                <option value="second-life">Smart Charging & Second-Life Storage</option>
                <option value="renewable">Renewable Energy Grid Integration</option>
                <option value="digital-twin">Battery Diagnostics & AI Digital Twins</option>
                <option value="iot">IoT-Enabled Wireless Monitoring</option>
                <option value="indigenous">Indigenous Battery Chemistries</option>
                <option value="defense">National Security & Strategic Storage</option>
              </select>
            </div>

            <div className="ground-form__field">
              <label className="ground-form__label" htmlFor="note-message">
                Abstract / Proposed Technical Approach
                <span className="ground-form__optional">(Optional)</span>
              </label>
              <textarea
                id="note-message"
                rows={3}
                placeholder="Summarize your cell chemistry, algorithm, or hardware prototype concept..."
                className="ground-form__input ground-form__input--area"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Honeypot */}
            <div className="ground-form__trap" aria-hidden="true">
              <input id="note-website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button type="submit" className="cut-button ground-form__submit" style={{ '--cut-fill': 'var(--color-red)', '--cut-fill-hover': 'var(--color-orange)' }}>
              <span className="cut-button__box" />
              <span className="cut-button__label">Submit Expression of Interest (EOI)</span>
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="ground__footer">
        <a className="ground__maker" href="#top">
          <span>Built for India's Battery Future — Hackathon 2026</span>
        </a>

        <p className="ground__copyright">
          <span>© 2026 Intelligent Battery Cell 4.0 Hackathon</span>
          <a className="ground__privacy" href="#top">Back to Altitude</a>
        </p>
      </footer>
    </div>
  );
}
