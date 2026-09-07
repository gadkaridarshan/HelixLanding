// helix: components/landing/hero/Hero.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-868000
 *
 * Hero — above-the-fold introduction to Helix.
 *
 * Includes a clearly-labelled "reference site" link to the externally-hosted
 * Helix deployment at `helix-ai-orchestrator.vercel.app`. That URL is **NOT**
 * the live landing page for this product and is **NOT** deployed from this
 * repository — it is purely a visual / brand reference, and every surface
 * that renders it (badge, copy, accessible name, CTA label) makes that
 * explicit.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

import { HeroVisual } from "./HeroVisual";

const REFERENCE_SITE_URL = "https://helix-ai-orchestrator.vercel.app";

export interface HeroProps {
  className?: string;
}

const SOCIAL_PROOF_BULLETS: ReadonlyArray<string> = [
  "Atomic, reviewable units — not sprawling diffs",
  "Type-aware verification on every change",
  "Small PRs, explicit dependencies, zero ambiguity",
];

export function Hero({ className }: HeroProps): React.ReactElement {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={
        "relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 " +
        (className ?? "")
      }
    >
      {/* Decorative background — subtle radial gradient + atom motif. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.14),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      </div>

      <Container className="grid items-center gap-14 lg:grid-cols-2">
        {/* Left column: copy + CTAs */}
        <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Early access · Orchestrate every prompt
            </span>

            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              One prompt.{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Atomic units.
              </span>{" "}
              Reviewable PRs.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {brand.name} decomposes every coding prompt into atomic,
              reviewable units, executes them in order, and verifies each one
              against the rest of your repo — so you ship small, trustworthy
              PRs instead of one sprawling diff.
            </p>

            <ul className="mt-8 space-y-2 text-sm text-slate-300">
              {SOCIAL_PROOF_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                    fill="none"
                  >
                    <path
                      d="M4 10.5l3.5 3.5L16 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#final-cta"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:from-cyan-300 hover:to-violet-400"
              >
                Request early access
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="none"
                >
                  <path
                    d="M7 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
              >
                See how it works
              </a>
            </div>

            {/* Reference-site pointer — explicit badge, never labelled as live. */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400">
              <span
                aria-hidden="true"
                className="inline-flex items-center rounded-full border border-cyan-300/40 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-200"
              >
                Reference site
              </span>
              <span>
                See an existing Helix deployment at{" "}
                <a
                  href={REFERENCE_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View the Helix reference site (external — not the live deployment of this product)"
                  className="text-slate-200 underline-offset-2 hover:text-white hover:underline"
                >
                  helix-ai-orchestrator.vercel.app
                </a>{" "}
                — visual reference only, not this product's live site.
              </span>
            </div>
          </div>

        {/* Right column: decorative atom/orbit illustration. */}
        <div className="relative">
          <HeroVisual />
        </div>
      </Container>

      <h2 id="hero-subheading" className="sr-only">
        Why Helix
      </h2>
    </section>
  );
}

export default Hero;