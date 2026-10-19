import React, { useState } from 'react';

/**
 * Prompt-Split Component (Conventional Blind Pack vs Intelligent Cell 4.0)
 * Replicating Applied Imagination's interactive design-thinking stage with genuine battery schematics
 */
export default function PromptSplit() {
  const [activeLayer1, setActiveLayer1] = useState(false);
  const [activeLayer2, setActiveLayer2] = useState(false);

  return (
    <section className="prompt-split" id="architecture" aria-label="Two approaches to battery innovation">
      <div className="prompt-split__grid">
        {/* Group 1: Conventional Blind Architecture */}
        <article className="prompt-split__column">
          <div>
            <span className="prompt-split__label prompt-split__label--one">Group 1: Incremental Patch</span>
            <h2 className="prompt-split__font-source">
              "Add an external temperature thermistor to an unmonitored lithium pack."
            </h2>
            <p style={{ color: 'var(--color-ink-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              The legacy way: relying on surface-level sensors that detect heat only after catastrophic internal chemical breakdown has already started.
            </p>
          </div>

          <div className="prompt-split__paper-stage">
            <img
              src="/brand/gpc/props/conventional-battery-schematic.svg"
              alt="Conventional battery schematic with blind thermal core"
              className={`prompt-split__sketch-img ${activeLayer1 ? 'is-crumpled' : ''}`}
            />
            <button
              type="button"
              className="prompt-split__tool-badge"
              onClick={() => setActiveLayer1(!activeLayer1)}
            >
              <img src="/brand/gpc/props/vintage-fountain-pen.png" alt="" style={{ width: '18px', height: 'auto' }} />
              <span>{activeLayer1 ? 'Inspect Normal View' : 'Highlight Thermal Hotspot'}</span>
            </button>
          </div>
        </article>

        {/* Group 2: The Intelligent Cell 4.0 Reimagination */}
        <article className="prompt-split__column">
          <div>
            <span className="prompt-split__label prompt-split__label--two">Group 2: Intelligent Cell 4.0</span>
            <h2 className="prompt-split__font-source">
              "Embed in-situ optical sensors and edge neural physics directly inside the cell."
            </h2>
            <p style={{ color: 'var(--color-ink-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              The Hackathon 2026 challenge: predicting micro-dendrite nucleation, impedance shifts, and mechanical strain in real-time before temperature rises.
            </p>
          </div>

          <div className="prompt-split__paper-stage">
            <img
              src="/brand/gpc/props/intelligent-cell-schematic.svg"
              alt="Intelligent Cell 4.0 schematic with optical fiber and edge BMS"
              className={`prompt-split__sketch-img ${activeLayer2 ? 'is-crumpled' : ''}`}
            />
            <button
              type="button"
              className="prompt-split__tool-badge"
              onClick={() => setActiveLayer2(!activeLayer2)}
            >
              <img src="/brand/gpc/props/vintage-scissors.png" alt="" style={{ width: '18px', height: 'auto' }} />
              <span>{activeLayer2 ? 'Default Blueprint' : 'Activate AI Sensor Spine'}</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
