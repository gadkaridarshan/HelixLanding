// helix: components/sections/Features.tsx
/**
 * @helix:story USER-349000
 *
 * Features section — canonical implementation.
 *
 * Renders a 3×2 capability grid. Each card highlights a Helix
 * primitive with a small SVG glyph, headline, and short copy.
 */

import type { ReactElement, ReactNode } from "react";

import { Container } from "@/components/ui/Container";

interface Feature {
  readonly title: string;
  readonly description: string;
  readonly glyph: ReactNode;
}

const FEATURES: ReadonlyArray<Feature> = [
  {
    title: "Atomic work-breakdown",
    description:
      "Helix decomposes every request into the smallest reviewable units — files, diffs, and decisions — so nothing ships hidden.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3v18M21 12H3M16.5 7.5l-9 9M16.5 16.5l-9-9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "File integrity guarantees",
    description:
      "Every write passes a typed, scoped check before it lands. Diagnostics, missing imports, and broken modules are caught — not shipped.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Reviewable diffs by default",
    description:
      "Each unit ships as a clean, reviewable diff. No 10,000-line PRs. No surprise refactors. Just the change you asked for.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 6h18M3 12h18M3 18h12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Pause at every boundary",
    description:
      "Helix stops for review between units. Approve, redirect, or skip — your team stays in the driver's seat.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="6"
          y="5"
          width="4"
          height="14"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="5"
          width="4"
          height="14"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Team-ready defaults",
    description:
      "Code style, test runners, lint, type checks — Helix learns your repo's defaults and applies them to every unit automatically.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Deploy anywhere",
    description:
      "Run Helix as a CLI, embed it in CI, or deploy to Vercel in minutes. Open source under MIT — your code, your infra.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3l9 5-9 5-9-5 9-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M3 13l9 5 9-5M3 18l9 5 9-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Features(): ReactElement {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
            Features
          </p>
          <h2
            id="features-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl"
          >
            Everything you need to ship with AI agents.
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            Work breakdown, file integrity, reviewable diffs, and team-ready
            defaults — built in from day one.
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-primary/40 hover:bg-white/[0.06]"
            >
              <div
                aria-hidden="true"
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-300 ring-1 ring-brand-primary/30"
              >
                <span className="block h-6 w-6">{feature.glyph}</span>
              </div>
              <h3 className="text-lg font-semibold text-ink-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-300">
                {feature.description}
              </p>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent opacity-0 transition group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Features;