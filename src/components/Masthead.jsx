import React, { useState, useCallback } from 'react';

/**
 * Masthead Hero Component
 * Replicating Applied Imagination's editorial hero, dynamic brand mark cycler, and rolling scroll cue
 */
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
        {/* Navigation */}
        <div className="masthead__nav">
          <a
            className="masthead__brand"
            href="#top"
            aria-label="Battery 4.0 home"
            onPointerEnter={cycleBrandColor}
            onFocus={cycleBrandColor}
            style={{ '--brand-mark-hue': BRAND_COLORS[colorIndex] }}
          >
            {/* Authentic GPC Monogram SVG */}
            <svg viewBox="0 0 357 197" role="img" aria-label="GPC Brand Mark" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M126.258 5.20294C136.393 0.364805 148.294 -3.74013 154.569 5.61701C157.611 10.1362 156.09 16.708 159.866 18.5369C165.354 21.1948 170.193 10.7214 184.572 6.60626C234.209 -7.62125 258.532 55.552 242.717 95.3104C229.773 127.859 194.229 147.871 164.779 128.486C161.918 126.604 159.089 124.254 157.483 122.861L158.079 171.349C158.175 179.441 162.674 186.832 169.821 190.638L171.097 191.319V193.977H123.535V191.149L123.981 190.884C130.65 186.907 134.744 179.729 134.787 171.967L135.435 38.0916C134.936 26.3949 133.447 19.5253 127.108 16.3885C120.982 13.358 109.623 17.5799 104.73 30.7547C102.699 36.2309 106.113 45.2268 100.711 61.5486C92.7448 85.58 66.1558 94.9378 42.8427 90.036C34.0789 88.1857 25.7718 96.5226 27.3671 105.625C32.2493 133.558 112.484 94.5448 117.462 141.544C122.939 193.265 27.7084 213.617 3.45889 178.464C-1.21014 171.69 -1.1786 159.015 3.71377 149.774C8.02124 141.661 19.4442 136.812 19.4442 136.812C10.4465 133.622 3.78867 120.724 9.02139 106.145C13.3927 93.9702 25.8043 86.8884 27.3358 85.3572C27.3358 85.3572 24.4429 83.2518 22.9433 82.0076C15.3494 75.7445 10.1692 67.6418 8.06338 57.8485C0.40595 22.3331 34.8972 -3.1021 67.8993 6.08478C92.5527 12.9433 101.147 17.1655 126.258 5.20294ZM30.6327 138.205C12.967 144.277 18.625 170.648 34.5146 177.517C50.1701 184.291 72.8983 182.802 84.0126 177.23C95.1162 171.648 97.7649 163.438 97.3075 155.569C96.6584 144.574 82.8209 138.397 71.5048 138.354L30.6327 138.205ZM259.01 94.7469C245.375 45.6738 284.578 -11.4168 336.671 8.44611C346.647 12.2422 353.167 18.8662 356.4 23.1834L343.903 42.7283L342.968 42.6639C342.212 40.9412 340.096 37.2512 336.746 31.4881C321.526 5.34065 287.343 13.0292 281.058 42.1541V42.1434C271.826 84.8683 300.723 140.544 346.519 105.412L355.017 98.4363L356.4 99.1277C333.608 150.359 271.283 138.918 259.01 94.7469ZM214.682 36.3475C196.144 12.093 156.271 19.377 157.281 51.3621L157.388 98.1492C157.388 98.1492 162.163 108.782 169.81 114.833C186.966 128.401 210.31 120.575 219.446 100.51C228.423 80.774 227.87 53.5948 214.682 36.3475ZM53.4989 12.8055C46.4476 12.4865 40.4495 14.8901 35.5253 20.0047C30.5904 25.1406 27.9521 31.8074 27.5692 40.0057C27.0906 50.5007 29.718 59.6559 35.4823 67.4608C41.2255 75.2762 48.5002 79.3915 57.2743 79.7957C64.3364 80.1254 70.2718 77.7755 75.0898 72.7459C79.9182 67.6951 82.5134 61.1873 82.8856 53.1805C83.3855 42.3027 80.7478 32.9772 75.0048 25.1404C69.2509 17.3142 62.0606 13.2096 53.4989 12.8055Z"
                fill="currentColor"
              />
            </svg>
            <span className="masthead__brand-tag">CELL 4.0 / INDIA R&D</span>
          </a>

          <a href="#register" className="masthead__action-btn">
            Register EOI
          </a>
        </div>

        {/* Hero Title & Dek */}
        <div className="masthead__content">
          <div className="masthead__badge-row">
            <span className="masthead__badge masthead__badge--live">EOI Floated</span>
            <span className="masthead__badge">National Security & Indigenous R&D</span>
            <span className="masthead__badge">Up to ₹2 Lakh Prize Pool</span>
          </div>

          <h1 className="masthead__title-semantic">
            <span>Intelligent</span>
            <span>Battery Cell 4.0</span>
            <em>Hackathon 2026</em>
          </h1>

          <p className="masthead__dek">
            The future of energy begins when we stop treating batteries as passive chemical cans and start reimagining them with AI: intelligent BMS, digital twin diagnostics, second-life cycles, and indigenous national security storage.
          </p>
        </div>

        {/* Footer Meta & Scroll Cue */}
        <div className="masthead__footer">
          <p className="masthead__meta">
            <span>National Innovation Program</span>
            <span aria-hidden="true">·</span>
            <span>Oct 9 – Dec 1, 2026</span>
            <span aria-hidden="true">·</span>
            <span>Grand Finale</span>
          </p>

          <p className="scroll-cue" aria-hidden="true">
            <span className="scroll-cue__word">
              <span className="scroll-cue__letter" style={{ '--i': 0 }}><span className="scroll-cue__glyph">S</span></span>
              <span className="scroll-cue__letter" style={{ '--i': 1 }}><span className="scroll-cue__glyph">c</span></span>
              <span className="scroll-cue__letter" style={{ '--i': 2 }}><span className="scroll-cue__glyph">r</span></span>
              <span className="scroll-cue__letter" style={{ '--i': 3 }}><span className="scroll-cue__glyph">o</span></span>
              <span className="scroll-cue__letter" style={{ '--i': 4 }}><span className="scroll-cue__glyph">l</span></span>
              <span className="scroll-cue__letter" style={{ '--i': 5 }}><span className="scroll-cue__glyph">l</span></span>
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
