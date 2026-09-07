// helix: components/sections/Hero.tsx
/**
 * @helix:story USER-349000
 *
 * Hero section — canonical implementation.
 *
 * Above-the-fold hook. Renders the Helix brand gradient backdrop,
 * the headline, sub-copy, dual primary/secondary CTAs, and the
 * decorative HeroVisual (atom/orbit motif). Server-rendered SVG
 * with deterministic sizing.
 */

import type { ReactElement } from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";
import { HeroVisual } from "@/components/landing/hero/HeroVisual";

export function Hero(): ReactElement {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 pb-32 sm:pt-36 sm:pb-40"
    >
      {/* Brand gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-primary/30 blur-[120px]" />
        <div className="absolute -top-16 right-0 h-[24rem] w-[24rem] rounded-full bg-brand-accent/20 blur-[100px]" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy column */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
              {brand.tagline}
            </p>
            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-semibold tracking-tight text-ink-50 sm:text-6xl"
            >
              <span className="text-gradient-brand">Ship atomic PRs</span>
              <br />
              with an AI coding orchestrator.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink-300">
              {brand.description} Helix decomposes every request into
              reviewable units, executes them in order, and pauses for your
              review at every boundary — so your team ships more, with less
              risk.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink"
              >
                Get started — it&apos;s free
                <span
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-ink-100 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                See how it works
              </a>
            </div>
            <p className="mt-6 text-xs text-ink-400">
              Open source · Self-host or cloud · No credit card required.
            </p>
          </div>

          {/* Visual column */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/20 blur-2xl" />
            <HeroVisual className="relative" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;