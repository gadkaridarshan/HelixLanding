// helix: components/sections/hero/Hero.tsx
/**
 * @helix:story USER-167000
 *
 * Hero — canonical above-the-fold value proposition for Helix.
 *
 * Composed of `HeroCopy` (headline, subheadline, primary + secondary
 * CTAs and supporting bullets) and `HeroVisual` (decorative atom/orbit
 * SVG). Pure server component, no client interactivity.
 *
 * Layout:
 *   • Layered radial gradients + subtle grid texture backdrop.
 *   • Two-column grid on `lg+` (text left, visual right).
 *   • Brand-led headline, dual CTAs (Get Started + Star on GitHub).
 */
import * as React from "react";

import { HeroCopy } from "./HeroCopy";
import { HeroVisual } from "./HeroVisual";

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
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
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