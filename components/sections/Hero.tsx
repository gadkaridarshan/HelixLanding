// helix: components/sections/Hero.tsx
/**
 * @helix:story USER-303000
 *
 * Hero — above-the-fold value proposition with headline, dual CTAs,
 * social-proof bullets, and a decorative atom/orbit SVG.
 *
 * Section is composed of three sub-components:
 *   • `HeroCopy`  — the text column (headline, subhead, CTAs, bullets)
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.15),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(2,6,23,0)_0%,_rgba(2,6,23,0.6)_100%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <HeroCopy />
        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;