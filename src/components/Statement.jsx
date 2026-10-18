import React from 'react';

/**
 * Statement Section with Cut-Corner Polygon Badges
 * Replicating the high-impact editorial statement cards from Applied Imagination
 */
export default function Statement() {
  return (
    <section className="statement" aria-label="The bottleneck of modern battery development">
      <div className="statement__sticky">
        <h2 className="statement__heading">
          Most battery innovations never survive past academic journals.
        </h2>
        <h2 className="statement__heading" style={{ color: 'var(--color-red)' }}>
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
    </section>
  );
}
