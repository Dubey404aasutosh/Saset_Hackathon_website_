import React, { useState } from 'react';

/**
 * Probability Simulator — Sticky Scroll-Pinned Section
 * Interactive token-probability-style bar simulator for battery innovation domains
 */
const CANDIDATES = [
  {
    word: 'Thermal Safety',
    prob: 45,
    color: 'var(--color-red)',
    desc: 'Mitigating micro-dendrite thermal runaway before catastrophic failure.'
  },
  {
    word: 'Digital Twins',
    prob: 31,
    color: 'var(--color-orange)',
    desc: 'Real-time electrochemical physics simulation running on IoT edge nodes.'
  },
  {
    word: 'Second-Life Reuse',
    prob: 17,
    color: 'var(--color-purple)',
    desc: 'Cascading EV battery packs into grid-scale renewable energy storage.'
  },
  {
    word: 'Indigenous Tech',
    prob: 7,
    color: 'var(--color-yellow)',
    desc: 'Sovereign sodium-ion and national security storage independent of global supply.'
  }
];

export default function ProbabilitySimulator() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="probability" aria-labelledby="prob-heading">
      <div className="probability__sticky">
        <div className="probability__inner">
          <p className="probability__eyebrow">Electrochemical Paradigm Shift</p>
          <h2 id="prob-heading" className="probability__heading">
            The future of battery technology is{' '}
            <em style={{ color: CANDIDATES[selectedIndex].color, fontStyle: 'italic' }}>
              {CANDIDATES[selectedIndex].word}.
            </em>
          </h2>

          <ol className="probability__candidates">
            {CANDIDATES.map((cand, idx) => (
              <li
                key={cand.word}
                className={`probability__candidate ${selectedIndex === idx ? 'is-active' : ''}`}
                style={{
                  '--cand-color': cand.color,
                  '--cand-fill': selectedIndex === idx ? '1' : `${cand.prob / 100}`
                }}
                onPointerEnter={() => setSelectedIndex(idx)}
                onClick={() => setSelectedIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedIndex(idx);
                  }
                }}
                aria-pressed={selectedIndex === idx}
                tabIndex={0}
                role="button"
              >
                <div className="probability__candidate-bar" />
                <div>
                  <span className="probability__candidate-word">{cand.word}</span>
                  <p className="probability__candidate-desc">{cand.desc}</p>
                </div>
                <span className="probability__candidate-value">{cand.prob}%</span>
              </li>
            ))}
          </ol>

          <p className="probability__takeaway">
            "The conventional engineering choice is rarely the breakthrough that reimagines an industry."
          </p>
        </div>
      </div>
    </section>
  );
}
