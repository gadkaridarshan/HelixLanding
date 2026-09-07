// helix: components/sections/Hero.tsx
/**
 * @helix:story USER-303000
 * @helix:story USER-868000
 *
 * Hero — above-the-fold headline, dual CTAs, social-proof bullets, and
 * the decorative atom/orbit SVG visual. Pure server render. The
 * reference-site link inside the Hero is explicitly labelled as such
 * (never as the live site).
 */
import * as React from "react";

import { HeroVisual } from "@/components/landing/hero/HeroVisual";

export interface HeroProps {
  className?: string;
}

const REFERENCE_SITE_URL = "https://helix-ai-orchestrator.vercel.app";

export function Hero({ className }: HeroProps): React.ReactElement {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className={
        "relative overflow-hidden py-20 md:py-28 " + (className ?? "")
      }
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 helix-pulse" />
            Now in private beta
          </span>
          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
          >
            Ship AI code in{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
              small, reviewable units
            </span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Helix decomposes every prompt into atomic work units, executes
            them in order with explicit dependencies, and verifies each unit
            against the rest of your repo — so you get focused PRs instead of
            one sprawling diff.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110"
            >
              Request early access
            </a>
            <a
              href={REFERENCE_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reference site (visual / brand reference only — not the live site)"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              View reference site
              <span className="text-xs font-normal text-slate-400">
                (visual reference only)
              </span>
            </a>
          </div>

          <ul className="mt-10 grid gap-2 text-sm text-slate-400 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300"
              >
                ✓
              </span>
              Atomic, single-purpose units
            </li>
            <li className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300"
              >
                ✓
              </span>
              Verified against your repo
            </li>
            <li className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300"
              >
                ✓
              </span>
              Reviewable PRs, not mega-diffs
            </li>
            <li className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300"
              >
                ✓
              </span>
              Stays on your machine / CI
            </li>
          </ul>
        </div>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

export default Hero;