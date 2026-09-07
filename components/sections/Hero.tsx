// helix: components/sections/Hero.tsx
/**
 * @helix:story USER-128000
 *
 * Hero — above-the-fold value proposition with headline, dual CTAs,
 * social-proof bullets, and a decorative atom/orbit SVG.
 *
 * Section is composed of two sub-components:
 *   • `HeroCopy`   — the text column (headline, subhead, CTAs, bullets)
 *   • `HeroVisual` — the decorative SVG (atom/orbit motif + code surface)
 *
 * Pure server component — no client interactivity. Backgrounds use
 * layered radial gradients with subtle noise/grid texture.
 */
import * as React from "react";

import { HeroCopy } from "@/components/landing/hero/HeroCopy";
import { HeroVisual } from "@/components/landing/hero/HeroVisual";

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps): React.ReactElement {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={
        "relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32 " +
        (className ?? "")
      }
    >
      {/* Layered radial glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.20),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.18),transparent_55%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <HeroCopy />
        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;