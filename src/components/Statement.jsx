import React from 'react';

/**
 * Statement Section — Sticky Scroll-Pinned with Paper-Cut Tags
 * Height: 180svh creates scroll runway; inner sticky div pins at viewport center
 */
export default function Statement() {
  return (
    <section className="statement" aria-label="The bottleneck of modern battery development">
      <div className="statement__sticky">
        <div className="statement__inner" style={{ textAlign: 'center' }}>
          <h2 className="statement__heading">
            Most battery innovations never survive past academic journals.
          </h2>
          <h2 className="statement__heading" style={{ color: 'var(--color-red)', marginTop: '0.4em' }}>
            They stall in prototype cells before reaching gigawatt scale.
          </h2>

          <div className="statement__tags-row">
            <p className="statement__tag statement__tag--cost">
              Thermal Runaway Risk
            </p>
            <p className="statement__tag statement__tag--effort">
              Black-Box Cell Degradation
            </p>
            <p className="statement__tag statement__tag--tech">
              Foreign Chemistry Dependency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
