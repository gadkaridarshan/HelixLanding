// helix: components/landing/features/Features.tsx
/**
 * @helix:story USER-303000
 *
 * Features — six core capabilities of Helix arranged in a 3-column grid
 * on md+ screens, single column on mobile.
 *
 * Each feature card has an inline SVG glyph (no third-party icon
 * dependency), a title, and a one-sentence description.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

interface Feature {
  title: string;
  description: string;
  glyph: React.ReactNode;
}

const FEATURES: ReadonlyArray<Feature> = [
  {
    title: "Atomic decomposition",
    description:
      "Every prompt is split into reviewable units with explicit acceptance criteria, not one monolithic change.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4 7h16M4 12h10M4 17h16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Ordered execution",
    description:
      "Units run in topological order with explicit dependencies — Helix never loses track of what depends on what.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M6 4v6m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m6-4v4m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m6-8v12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Repo-aware verification",
    description:
      "Each unit is checked against the rest of your repo — types, tests, lint, build — before it ships.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="m5 12 4 4 10-10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Small, reviewable PRs",
    description:
      "Helix opens one PR per unit, so reviewers see a focused diff they can actually reason about.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M7 4v12a3 3 0 0 0 3 3h7M7 4l-3 3m3-3 3 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Works with any agent",
    description:
      "Pluggable executor interface — bring your favourite coding agent; Helix orchestrates the loop.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4 7h6m6 0h4M4 12h4m4 0h8M4 17h10m4 0h2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Auditable by default",
    description:
      "Every step is logged: decomposition, decisions, verifications, retries. Reproducible from the same prompt.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 9h8M8 13h6M8 17h4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function Features(): React.ReactElement {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative py-20 sm:py-28"
    >
      <Container size="lg">
        <div className="mx-auto max-w-2xl text-center">
          <span className="hx-eyebrow">Features</span>
          <h2 id="features-heading" className="hx-heading-sm mt-3">
            Everything an AI coding agent{" "}
            <span className="hx-text-gradient">forgets to do</span>.
          </h2>
          <p className="hx-subheading mx-auto mt-4">
            Helix is the orchestration layer that turns "make me a feature"
            into a sequence of small, verified, mergeable changes.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className="hx-surface group relative flex flex-col gap-3 p-6 transition-colors hover:border-helix-border-strong"
            >
              <span
                aria-hidden="true"
                className="grid h-9 w-9 place-items-center rounded-lg border border-helix-border-strong bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-cyan-300"
              >
                {f.glyph}
              </span>
              <h3 className="text-base font-semibold text-helix-text">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-helix-text-muted">
                {f.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Features;