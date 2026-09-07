// helix: components/landing/hero/Hero.tsx
/**
 * @helix:story USER-303000
 *
 * Hero — above-the-fold section for the Helix landing page.
 * Server-rendered, no client interactivity. Pairs copy + dual CTAs
 * with the decorative `HeroVisual` SVG.
 */

import * as React from "react";
import { brand } from "@/lib/brand";
import { HeroVisual } from "@/components/landing/hero/HeroVisual";

export function Hero(): React.ReactElement {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Copy column */}
          <div className="lg:col-span-7">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              v0.1 — Orchestrating the agent loop
            </span>

            <h1
              id="hero-title"
              className="h-display mt-6 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
            >
              One prompt.{" "}
              <span className="text-gradient-brand">Atomic PRs.</span>
              <br />
              A coherent codebase.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted sm:text-xl">
              {brand.name} breaks every coding request into small, reviewable
              units, executes them in order, and verifies each one against the
              rest of your repo — so autonomous agents ship working code
              instead of tangles.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="btn-primary">
                Get early access
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-secondary">
                See how it works
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-muted">
              <li className="flex items-center gap-2">
                <CheckIcon />
                Works with any code agent
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Atomic, reviewable PRs
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Repo-aware verification
              </li>
            </ul>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-brand-cyan/20 via-brand-violet/15 to-transparent blur-2xl"
              />
              <div className="card-glass rounded-3xl p-3">
                <HeroVisual className="rounded-2xl bg-brand-ink/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-brand-emerald"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.5 7.6a.75.75 0 0 1-1.073.004L3.29 8.95a.75.75 0 1 1 1.06-1.06l4.085 4.085 7.207-7.3a.75.75 0 0 1 1.062.015Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Hero;