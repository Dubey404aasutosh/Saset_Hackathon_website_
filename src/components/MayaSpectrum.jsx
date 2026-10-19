import React, { useState, useRef } from 'react';

/**
 * MAYA Spectrum Component (Raymond Loewy Design Philosophy applied to Battery R&D)
 * Interactive range slider between "Too Conventional" and "Too Radical"
 * Ejects technical battery cards with paper halftone jitter animations
 */
const CONVENTIONAL_TECHS = [
  { src: '/brand/gpc/battery-tech/tech-18650.svg', label: '18650 Legacy Li-ion Cell', note: 'Commodity commodity cell with high thermal hotspot risk' },
  { src: '/brand/gpc/battery-tech/tech-lead-acid.svg', label: 'Lead-Acid Heavy Block', note: 'Low energy density, toxic electrolyte, obsolete cycle life' },
  { src: '/brand/gpc/battery-tech/tech-relay-bms.svg', label: 'Rule-Based Relay BMS', note: 'Rigid voltage thresholds, blind to internal impedance shifts' },
  { src: '/brand/gpc/battery-tech/tech-lifepo4.svg', label: 'Standard LiFePO4 Prism', note: 'Safe but passive; no self-healing or predictive digital twin' }
];

const RADICAL_TECHS = [
  { src: '/brand/gpc/battery-tech/tech-cell40.svg', label: 'Intelligent Cell 4.0', note: 'In-situ optical fiber sensor with edge AI BMS (The Sweet Spot)' },
  { src: '/brand/gpc/battery-tech/tech-digital-twin.svg', label: 'AI Neural Digital Twin', note: 'Predicts micro-dendrites at the atomic layer in real time' },
  { src: '/brand/gpc/battery-tech/tech-sodium-ion.svg', label: 'Sovereign Sodium-Ion', note: 'Indigenous non-lithium domestic supply chain' },
  { src: '/brand/gpc/battery-tech/tech-solid-state.svg', label: 'Solid-State Ceramic', note: 'High density but difficult to mass manufacture at scale' }
];

export default function MayaSpectrum() {
  const [sliderVal, setSliderVal] = useState(50);
  const [spawned, setSpawned] = useState([
    CONVENTIONAL_TECHS[2],
    RADICAL_TECHS[0]
  ]);
  const lastValRef = useRef(sliderVal);

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setSliderVal(val);

    if (Math.abs(val - lastValRef.current) >= 10) {
      lastValRef.current = val;
      const isRadical = val > 50;
      const pool = isRadical ? RADICAL_TECHS : CONVENTIONAL_TECHS;
      const randomItem = pool[Math.floor(Math.random() * pool.length)];

      setSpawned((prev) => [...prev.slice(-4), { ...randomItem, key: Date.now() + Math.random() }]);
    }
  };

  return (
    <section className="loewy-maya" id="spectrum">
      <div className="loewy-maya__inner">
        <div className="loewy-maya__copy">
          <p className="loewy-maya__label">THE MAYA DESIGN PRINCIPLE IN ENERGY R&D</p>
          <h2 className="loewy-maya__heading">
            <span>Most advanced</span>
            <span><em>yet</em> acceptable.</span>
          </h2>
          <p className="loewy-maya__dek">
            If your hackathon concept is too familiar, it creates no breakthrough. If it is too radical, it cannot be manufactured. Intelligent Battery Cell 4.0 lives precisely at the threshold of practical engineering and radical imagination.
          </p>
        </div>

        <div className="maya-spectrum">
          <h3 className="maya-spectrum__heading">
            Interactive Innovation Slider: Drag to Discover the Tech Spectrum
          </h3>

          <div className="maya-spectrum__labels">
            <span className="maya-spectrum__label--familiar" style={{ opacity: 0.5 + (100 - sliderVal) / 200 }}>
              ← Too Conventional (Commodity Can)
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-purple)' }}>
              SWEET SPOT: CELL 4.0
            </span>
            <span className="maya-spectrum__label--radical" style={{ opacity: 0.5 + sliderVal / 200 }}>
              Too Radical (Unmanufacturable) →
            </span>
          </div>

          <div className="maya-spectrum__control">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              onChange={handleSliderChange}
              className="maya-spectrum__range"
              aria-label="Spectrum from conventional to radical battery tech"
            />
          </div>

          <div className="maya-spectrum__stage">
            {spawned.map((item, idx) => (
              <div key={item.key || idx} className="maya-spawn-card" style={{ width: '160px', padding: '0.8rem 0.6rem' }}>
                <img src={item.src} alt={item.label} style={{ height: '70px', objectFit: 'contain' }} />
                <span style={{ fontWeight: 500, fontSize: '0.75rem', marginTop: '0.4rem' }}>{item.label}</span>
                <p style={{ fontSize: '0.65rem', color: 'var(--color-ink-muted)', marginTop: '0.2rem', lineHeight: 1.3 }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
