// helix: app/components/sections/HowItWorks.tsx
/**
 * @helix:story USER-993000
 *
 * HowItWorks section — scaffold placeholder.
 */

import type { ReactElement } from "react";

export function HowItWorks(): ReactElement {
  return (
    <section
      id="how-it-works"
      aria-label="How it works"
      className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="glass relative overflow-hidden rounded-3xl p-10">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-300">
          How it works
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-ink-50 sm:text-4xl">
          Plan → write → review, atomically.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-300">
          Scaffold placeholder. Step-by-step breakdown lands in a follow-up
          card.
        </p>
      </div>
    </section>
  );
}

export default HowItWorks;