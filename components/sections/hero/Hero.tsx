// helix: components/sections/hero/Hero.tsx
/**
 * @helix:story USER-303000
 *
 * Hero — above-the-fold section. Headline, subhead, dual CTA,
 * and a small visual that suggests the plan → execute → verify loop.
 *
 * Pure server component. Compose `HeroCopy` + `HeroVisual` so each
 * column can iterate independently.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

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
        "relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 " +
        (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,211,238,0.18),rgba(15,23,42,0)_70%)]"
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <HeroCopy />
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

export default Hero;