// helix: app/components/sections/Features.tsx
/**
 * @helix:story USER-993000
 *
 * Features section — scaffold placeholder. Final implementation lands in
 * USER-993000 / USER-956000 follow-ups.
 */

import type { ReactElement } from "react";

export function Features(): ReactElement {
  return (
    <section
      id="features"
      aria-label="Features"
      className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="glass noise relative overflow-hidden rounded-3xl p-10">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-300">
          Features
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-ink-50 sm:text-4xl">
          Everything you need to ship atomic PRs.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-300">
          Scaffold placeholder. Detailed feature grid lands in a follow-up
          card.
        </p>
      </div>
    </section>
  );
}

export default Features;