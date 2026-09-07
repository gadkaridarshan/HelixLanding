// helix: app/components/sections/StatsBar.tsx
/**
 * @helix:story USER-993000
 *
 * StatsBar section — scaffold placeholder.
 */

import type { ReactElement } from "react";

export function StatsBar(): ReactElement {
  return (
    <section
      id="stats"
      aria-label="Stats"
      className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="surface-grid glass relative overflow-hidden rounded-3xl p-8">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-300">
          Social proof
        </p>
        <p className="mt-2 text-ink-200">
          Scaffold placeholder. Stats and testimonials land in a follow-up
          card.
        </p>
      </div>
    </section>
  );
}

export default StatsBar;