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
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(60% 50% at 15% 20%, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0) 60%), radial-gradient(55% 45% at 85% 25%, rgba(167,139,250,0.20) 0%, rgba(167,139,250,0) 65%), radial-gradient(50% 50% at 50% 90%, rgba(192,132,252,0.15) 0%, rgba(192,132,252,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-7">
          <HeroCopy />
        </div>
        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

export default Hero;