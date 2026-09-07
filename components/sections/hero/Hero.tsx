// helix: components/sections/hero/Hero.tsx
/**
 * @helix:story USER-495000
 *
 * Hero — canonical above-the-fold value proposition for Helix.
 *
 * Composed from `HeroCopy` (text column) and `HeroVisual`
 * (decorative atom/orbit SVG). Pure server component, no client
 * interactivity.
 *
 * Layout:
 *   • Layered radial gradients + subtle grid texture backdrop.
 *   • Two-column grid on `lg+` (text left, visual right).
 *   • Brand-led headline, dual CTAs, four social-proof bullets.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { HeroCopy } from "@/components/sections/hero/HeroCopy";
import { HeroVisual } from "@/components/sections/hero/HeroVisual";

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(167,139,250,0.14),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <HeroCopy />
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

export default Hero;