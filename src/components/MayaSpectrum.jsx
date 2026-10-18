import React, { useState, useRef } from 'react';

/**
 * MAYA Spectrum Component (Raymond Loewy Design Philosophy)
 * Interactive range slider between "Too Familiar" and "Too Radical"
 * Ejects historical product artifacts with halftone jitter animations
 */
const FAMILIAR_ITEMS = [
  { src: '/brand/gpc/maya-spectrum/smart-fridge.png', label: '18650 Pack with External Relay' },
  { src: '/brand/gpc/maya-spectrum/skeuomorphic-notes.png', label: 'Lead-Acid Legacy UPS' },
  { src: '/brand/gpc/maya-spectrum/analog-smartwatch.png', label: 'Rule-based Fixed Voltage Cutoff' },
  { src: '/brand/gpc/maya-spectrum/radio-smart-speaker.png', label: 'Standard LiFePO4 Golf Cart Battery' }
];

const RADICAL_ITEMS = [
  { src: '/brand/gpc/maya-spectrum/apple-newton.jpg', label: 'Untested Quantum Bio-Cell' },
  { src: '/brand/gpc/maya-spectrum/google-glass.png', label: 'Direct Graphene Supercapacitor' },
  { src: '/brand/gpc/maya-spectrum/sinclair-c5.webp', label: 'Pure Lithium Anode without Coating' },
  { src: '/brand/gpc/maya-spectrum/segway.png', label: 'Solid-State Electrolyte Lab Strip' }
];

export default function MayaSpectrum() {
  const [sliderVal, setSliderVal] = useState(50);
  const [spawned, setSpawned] = useState([
    FAMILIAR_ITEMS[0],
    RADICAL_ITEMS[0]
  ]);
  const lastValRef = useRef(sliderVal);

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setSliderVal(val);

    if (Math.abs(val - lastValRef.current) >= 12) {
      lastValRef.current = val;
      const isRadical = val > 50;
      const pool = isRadical ? RADICAL_ITEMS : FAMILIAR_ITEMS;
      const randomItem = pool[Math.floor(Math.random() * pool.length)];

      setSpawned((prev) => [...prev.slice(-4), { ...randomItem, key: Date.now() + Math.random() }]);
    }
  };

  return (
    <section className="loewy-maya">
      <div className="loewy-maya__inner">
        <div className="loewy-maya__copy">
          <p className="loewy-maya__label">THE ENGINEERING FRONTIER</p>
          <h2 className="loewy-maya__heading">
            <span>Most advanced</span>
            <span><em>yet</em> acceptable.</span>
          </h2>
          <p className="loewy-maya__dek">
            Push energy storage forward into the future without making it impossible to manufacture.
          </p>
        </div>

        <div className="maya-spectrum">
          <h3 className="maya-spectrum__heading">
            Balance the Innovation Spectrum: Familiarity vs. Radical Leap
          </h3>

          <div className="maya-spectrum__labels">
            <span className="maya-spectrum__label--familiar" style={{ opacity: 0.5 + (100 - sliderVal) / 200 }}>
              ← Too Conventional (Commodity Cell)
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
              aria-label="Spectrum from too familiar to too radical"
            />
          </div>

          <div className="maya-spectrum__stage">
            {spawned.map((item, idx) => (
              <div key={item.key || idx} className="maya-spawn-card">
                <img src={item.src} alt={item.label} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
