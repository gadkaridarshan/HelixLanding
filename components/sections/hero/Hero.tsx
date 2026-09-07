// helix: components/sections/hero/Hero.tsx
/**
 * @helix:story USER-303000
 *
 * Hero — above-the-fold hook. Headline, supporting copy, dual CTA,
 * and a subtle visual treatment (gradient orbs + grid backdrop).
 * Pure server component.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps): React.ReactElement {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className={
        "relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 " +
        (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-[24rem] w-[24rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <Container className="text-center">
        <a
          href={brand.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/80 backdrop-blur transition hover:bg-white/[0.08] sm:text-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          Open source on GitHub
          <span aria-hidden="true">→</span>
        </a>

        <h1
          id="hero-title"
          className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          The atomic work-breakdown orchestrator for{" "}
          <span className="gradient-text">AI coding agents</span>.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
          {brand.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={brand.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          >
            View on GitHub
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            How it works
          </a>
        </div>

        <p className="mt-6 text-xs text-white/50 sm:text-sm">
          Built for solo founders, staff engineers, product teams, and enterprise.
        </p>
      </Container>
    </section>
  );
}

export default Hero;