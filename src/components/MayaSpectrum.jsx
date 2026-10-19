import React, { useState, useRef, useCallback } from 'react';

/**
 * MAYA Spectrum Component — Interactive Range Slider
 * Gradient track: purple → sky-blue → yellow → orange → red
 * Spawns polaroid-style cards with halftone texture on drag
 */
const CONVENTIONAL_TECHS = [
  { label: '18650 Legacy Li-ion Cell', note: 'Commodity cell with high thermal hotspot risk' },
  { label: 'Lead-Acid Heavy Block', note: 'Low energy density, toxic electrolyte' },
  { label: 'Rule-Based Relay BMS', note: 'Rigid voltage thresholds, blind to impedance shifts' },
  { label: 'Standard LiFePO4 Prism', note: 'Safe but passive; no predictive digital twin' }
];

const RADICAL_TECHS = [
  { label: 'Intelligent Cell 4.0', note: 'In-situ optical fiber sensor with edge AI BMS' },
  { label: 'AI Neural Digital Twin', note: 'Predicts micro-dendrites at atomic layer in real time' },
  { label: 'Sovereign Sodium-Ion', note: 'Indigenous non-lithium domestic supply chain' },
  { label: 'Solid-State Ceramic', note: 'High density but difficult to mass manufacture' }
];

export default function MayaSpectrum() {
  const [sliderVal, setSliderVal] = useState(50);
  const [spawned, setSpawned] = useState([
    { ...CONVENTIONAL_TECHS[2], key: 'init-1', isRadical: false },
    { ...RADICAL_TECHS[0], key: 'init-2', isRadical: true }
  ]);
  const lastValRef = useRef(sliderVal);

  const handleSliderChange = useCallback((e) => {
    const val = Number(e.target.value);
    setSliderVal(val);

    if (Math.abs(val - lastValRef.current) >= 12) {
      lastValRef.current = val;
      const isRadical = val > 50;
      const pool = isRadical ? RADICAL_TECHS : CONVENTIONAL_TECHS;
      const randomItem = pool[Math.floor(Math.random() * pool.length)];

      setSpawned((prev) => [
        ...prev.slice(-4),
        { ...randomItem, key: `${Date.now()}-${Math.random()}`, isRadical }
      ]);
    }
  }, []);

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

        <section className="maya-spectrum" aria-label="Innovation spectrum slider">
          <div className="maya-spectrum__inner">
            {/* Endpoint Labels */}
            <div className="maya-spectrum__labels">
              <span className="maya-spectrum__label maya-spectrum__label--familiar">
                ← Too Conventional
              </span>
              <span className="maya-spectrum__label maya-spectrum__label--radical">
                Too Radical →
              </span>
            </div>

            {/* Slider Control with Gradient Track */}
            <div className="maya-spectrum__control">
              <div className="maya-spectrum__track" aria-hidden="true" />
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

            {/* Drag Cue */}
            <p className="maya-spectrum__drag-cue" aria-hidden="true">
              ← Drag to explore →
            </p>
          </div>

          {/* Spawned Tech Cards */}
          <div className="maya-spectrum__stage">
            {spawned.map((item) => (
              <div
                key={item.key}
                className={`maya-spawn-card ${item.isRadical ? 'maya-spawn-card--radical' : ''}`}
                style={{
                  '--spawn-rotation': `${(Math.random() - 0.5) * 16}deg`,
                  '--spawn-drift-x': `${(Math.random() - 0.5) * 30}px`,
                  '--spawn-lift-y': `${-8 - Math.random() * 12}px`,
                  '--spawn-fall-y': `${20 + Math.random() * 15}px`
                }}
              >
                {/* Jittery colored backdrop */}
                <div className="maya-spawn-card__backdrop" aria-hidden="true" />

                {/* Card image placeholder with halftone */}
                <div className="maya-spawn-card__image">
                  <div
                    style={{
                      width: '100%',
                      height: '90px',
                      background: item.isRadical
                        ? 'linear-gradient(135deg, #f94e2a22, #f66f0022)'
                        : 'linear-gradient(135deg, #9b338f22, #8cb8d122)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem'
                    }}
                    aria-hidden="true"
                  >
                    {item.isRadical ? '⚡' : '🔋'}
                  </div>
                  <div className="maya-spawn-card__halftone" aria-hidden="true" />
                </div>

                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
