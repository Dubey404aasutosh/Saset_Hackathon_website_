import React, { useState } from 'react';

/**
 * Prompt-Split Component (Group 1 vs Group 2 Paper Stage)
 * Replicating Applied Imagination's interactive design-thinking stage with vintage pen/scissors
 */
export default function PromptSplit() {
  const [crumpled1, setCrumpled1] = useState(false);
  const [crumpled2, setCrumpled2] = useState(false);

  return (
    <section className="prompt-split" aria-label="Two approaches to battery innovation">
      <div className="prompt-split__grid">
        {/* Group 1: The Incremental Approach */}
        <article className="prompt-split__column">
          <div>
            <span className="prompt-split__label prompt-split__label--one">Group 1: Incremental Patch</span>
            <h2 className="prompt-split__font-source">
              "Add an external temperature probe to an off-the-shelf lithium pack."
            </h2>
          </div>

          <div className="prompt-split__paper-stage">
            <img
              src="/brand/gpc/props/refrigerator-clean-line-sketch.png"
              alt="Conventional battery pack sketch"
              className={`prompt-split__sketch-img ${crumpled1 ? 'is-crumpled' : ''}`}
              onClick={() => setCrumpled1(!crumpled1)}
            />
            <button
              type="button"
              className="prompt-split__tool-badge"
              onClick={() => setCrumpled1(!crumpled1)}
            >
              <img src="/brand/gpc/props/vintage-fountain-pen.png" alt="" style={{ width: '18px', height: 'auto' }} />
              <span>{crumpled1 ? 'Unfold Sheet' : 'Crumple & Discard'}</span>
            </button>
          </div>
        </article>

        {/* Group 2: The Reimagined Approach */}
        <article className="prompt-split__column">
          <div>
            <span className="prompt-split__label prompt-split__label--two">Group 2: Applied Imagination</span>
            <h2 className="prompt-split__font-source">
              "Design an indigenous AI digital twin that predicts dendrite formation at the atomic layer."
            </h2>
          </div>

          <div className="prompt-split__paper-stage">
            <img
              src="/brand/gpc/props/preserved-food-clean-line-sketch.png"
              alt="Electrochemical architecture sketch"
              className={`prompt-split__sketch-img ${crumpled2 ? 'is-crumpled' : ''}`}
              onClick={() => setCrumpled2(!crumpled2)}
            />
            <button
              type="button"
              className="prompt-split__tool-badge"
              onClick={() => setCrumpled2(!crumpled2)}
            >
              <img src="/brand/gpc/props/vintage-scissors.png" alt="" style={{ width: '18px', height: 'auto' }} />
              <span>{crumpled2 ? 'Reset Blueprint' : 'Cut Paper & Reimagine'}</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
