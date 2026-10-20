import React, { useState, useCallback } from 'react';

const BRAND_COLORS = [
  'var(--color-red)',
  'var(--color-orange)',
  'var(--color-purple)',
  'var(--color-yellow)'
];

export default function Masthead() {
  const [colorIndex, setColorIndex] = useState(0);

  const cycleBrandColor = useCallback(() => {
    setColorIndex((prev) => (prev + 1) % BRAND_COLORS.length);
  }, []);

  return (
    <header className="masthead" id="top">
      <div className="masthead__frame">
        {/* Navigation Bar */}
        <div className="masthead__nav">
          <a
            className="masthead__brand"
            href="#top"
            aria-label="IBC 4.0 home"
            onPointerEnter={cycleBrandColor}
            onFocus={cycleBrandColor}
            style={{ '--brand-mark-hue': BRAND_COLORS[colorIndex] }}
          >
            <span className="masthead__brand-mark">IBC 4.0</span>
            <span className="masthead__brand-tag">INDIA HACKATHON 2026</span>
          </a>

          {/* Navigation */}
          <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Themes', href: '#themes' },
              { label: 'Architecture', href: '#architecture' },
              { label: 'Dates', href: '#timeline' },
              { label: 'Prizes', href: '#fees' },
              { label: 'FAQ', href: '#faq' }
            ].map(link => (
              <a key={link.label} href={link.href} className="masthead__nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Hero Content */}
        <div className="masthead__content">
          <div className="masthead__badge-row">
            <span className="masthead__badge masthead__badge--live">EOI Floated (Live Now)</span>
            <span className="masthead__badge">8 Themes</span>
            <span className="masthead__badge">Up to ₹2 Lakh Cash Prizes</span>
            <span className="masthead__badge">Mentoring &amp; Incubation</span>
          </div>

          <h1 className="masthead__title-semantic">
            <span>Intelligent</span>
            <span>Battery Cell 4.0</span>
            <em>Hackathon 2026</em>
          </h1>

          <p className="masthead__dek">
            Bringing participants together to develop innovative solutions for the future of battery technology, using AI to advance battery safety, sustainability, and indigenous innovation.
          </p>
        </div>

        {/* Footer with Meta & Scroll Cue */}
        <div className="masthead__footer">
          <p className="masthead__meta">
            <span>Registration Opens: 09 Oct 2026</span>
            <span aria-hidden="true">·</span>
            <span>Deadline: 30 Oct 2026</span>
            <span aria-hidden="true">·</span>
            <span>Grand Finale Announcement: 01 Dec 2026 (Tentative)</span>
          </p>
        </div>

        {/* Scroll Cue — Staggered Letter Roll Animation */}
        <p className="scroll-cue" aria-hidden="true">
          <span className="scroll-cue__word">
            {'Scroll'.split('').map((letter, i) => (
              <span key={i} className="scroll-cue__letter" style={{ '--i': i }}>
                <span className="scroll-cue__glyph">{letter}</span>
              </span>
            ))}
          </span>
        </p>
      </div>
    </header>
  );
}
