// helix: components/sections/Hero.tsx
/**
 * @helix:story USER-993000
 *
 * Hero section — the above-the-fold pitch for Helix. Server component,
 * intentionally free of interactivity so the first paint stays fast.
 */

import type { ReactElement } from "react";

import { brand, gradients } from "@/lib/brand";

export function Hero(): ReactElement {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: gradients.brandSoft }}
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {brand.name} — atomic work-breakdown orchestrator
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink-50 sm:text-6xl">
            Ship code in{" "}
            <span
              className="text-gradient-brand"
              style={{ backgroundImage: gradients.textBrand }}
            >
              atomic, reviewable steps
            </span>
            .
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-300">
            {brand.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;