import React, { useState } from 'react';
import confetti from 'canvas-confetti';

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

    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f94e2a', '#ffc013', '#9b338f', '#232424']
    });

    setSubmitted(true);
  };

  return (
    <div className="ground" id="register">
      <div className="ground__contact">
        <form className="ground-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="ground-form__success">
              <h3>Expression of Interest Received</h3>
              <p>
                Thank you, <strong>{formData.name}</strong>. Your preliminary registration for the Intelligent Battery Cell 4.0 Hackathon has been logged. Our technical screening committee will reach out to <strong>{formData.email}</strong> with next steps, discord access, and mentoring schedules before October 30, 2026.
              </p>
              <button
                type="button"
                className="cut-button"
                style={{ marginTop: '1.8rem', maxWidth: '240px' }}
                onClick={() => setSubmitted(false)}
              >
                Register Another Team
              </button>
            </div>
          ) : (
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
                  <option value="student-startups">Student Start-ups (Enrolled Students) — ₹1,500/-</option>
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
                  Abstract / Proposed Technical Approach <span style={{ opacity: 0.6 }}>(Optional)</span>
                </label>
                <textarea
                  id="note-message"
                  rows={3}
                  placeholder="Summarize your cell chemistry, algorithm, or hardware prototype concept..."
                  className="ground-form__input"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Honeypot anti-spam trap */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input id="note-website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <button type="submit" className="cut-button">
                Submit Expression of Interest (EOI)
              </button>
            </div>
          )}
        </form>

        {/* Substack / Organizer Section */}
        <aside className="substack">
          <div className="substack__portrait">
            <img src="/brand/gpc/pete-sena.jpg" alt="Pete Sena / Jury Lead" />
          </div>
          <div className="substack__copy-wrap">
            <p className="substack__name">ORGANIZING ADVISORY COUNCIL</p>
            <h3 className="substack__heading">Guided by World-Class Energy Leaders</h3>
            <p className="substack__copy">
              Organized by the National Battery R&D Taskforce, partnering with academic incubators and frontier technologists to build sovereign battery independence.
            </p>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="ground__footer">
        <a
          className="ground__maker"
          href="https://theresonance.studio"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/brand/resonance/glyph-dark.svg" alt="The Resonance Mark" />
          <span>Aesthetic Architecture after The Resonance</span>
        </a>

        <p className="ground__copyright">
          <span>© 2026 Intelligent Battery Cell 4.0 Hackathon</span>
          <a className="ground__privacy" href="#top">Back to Altitude</a>
        </p>
      </footer>
    </div>
  );
}
