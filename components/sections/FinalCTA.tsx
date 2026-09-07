// helix: components/sections/FinalCTA.tsx
/**
 * @helix:story USER-956000
 *
 * FinalCTA section — canonical implementation.
 */

import type { ReactElement } from "react";

import { brand, gradients } from "@/lib/brand";

export function FinalCTA(): ReactElement {
  return (
    <section
      id="cta"
      aria-label="Get started"
      className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div
        className="relative overflow-hidden rounded-3xl p-12 text-center"
        style={{ backgroundImage: gradients.brand }}
      >
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Ready to ship code atomically?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Start orchestrating with {brand.name} today.
        </p>
      </div>
    </section>
  );
}

export default FinalCTA;