// helix: components/landing/hero/Hero.tsx
/**
 * @helix:story USER-303000
 *
 * Hero — above-the-fold value proposition.
 *
 *   • Eyebrow chip ("Atomic work-breakdown · v1")
 *   • Headline with gradient accent on the key phrase.
 *   • Subheading explaining what Helix does in one sentence.
 *   • Dual CTAs (primary → early access, ghost → reference site demo).
 *   • Social-proof bullets (the three things Helix guarantees).
 *   • Decorative HeroVisual (SVG) on the right at md+ screens.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

import { HeroVisual } from "./HeroVisual";

const PROOFS: ReadonlyArray<{ label: string; detail: string }> = [
  {
    label: "Atomic units",
    detail: "Every prompt becomes small, reviewable work items.",
  },
  {
    label: "Verified output",
    detail: "Each unit is checked against your repo's types, tests, lint.",
  },
  {
    label: "Small PRs",
    detail: "Ship incremental diffs, not one sprawling change.",
  },
];

export function Hero(): React.ReactElement {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      <Container
        size="lg"
        className="grid grid-cols-1 items-center gap-14 md:grid-cols-2"
      >
        <div className="text-left">
          <span className="hx-chip">
            <span className="hx-chip-dot" />
            {brand.name} · v1 — atomic work-breakdown
          </span>

          <h1 id="hero-heading" className="hx-heading mt-6">
            <span className="hx-text-gradient">Atomic work-breakdown</span>
            <br />
            for AI coding agents.
          </h1>

          <p className="hx-subheading mt-6">
            {brand.name} decomposes every prompt into atomic, reviewable
            units, executes them in order with explicit dependencies, and
            verifies each one against your repo — producing small,
            reviewable PRs instead of one sprawling diff.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="hx-btn-primary">
              Get early access
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={brand.referenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hx-btn-ghost"
              aria-label={`${brand.name} reference site (visual / brand reference only, opens in a new tab)`}
              title="Reference site — visual / brand reference only"
            >
              See reference site
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PROOFS.map((p) => (
              <li
                key={p.label}
                className="hx-surface p-4"
              >
                <p className="text-sm font-semibold text-helix-text">
                  {p.label}
                </p>
                <p className="mt-1 text-xs text-helix-text-muted">
                  {p.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 mx-auto h-72 max-w-md rounded-full bg-gradient-to-br from-cyan-500/20 via-violet-500/15 to-pink-500/10 blur-3xl"
          />
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

export default Hero;