// helix: components/sections/HowItWorks.tsx
/**
 * @helix:story USER-349000
 *
 * HowItWorks section — canonical implementation.
 *
 * Renders a 4-step walkthrough of the Helix workflow: describe →
 * decompose → execute → review. Each step has a glyph, headline,
 * and short copy.
 */

import type { ReactElement, ReactNode } from "react";

import { Container } from "@/components/ui/Container";

interface Step {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly glyph: ReactNode;
}

const STEPS: ReadonlyArray<Step> = [
  {
    number: "01",
    title: "Describe the goal",
    description:
      "Tell Helix what you want in plain language — a feature, a refactor, a migration. No prompt-engineering required.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h16M4 12h12M4 18h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Decompose into units",
    description:
      "Helix plans the work — files to touch, diffs to write, tests to add — and shows you the breakdown before a single line changes.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Execute, one unit at a time",
    description:
      "Helix writes each unit in order, runs file-integrity checks, and surfaces diffs as they happen. You can stop, redirect, or skip at any boundary.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 4l14 8-14 8V4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Review and ship",
    description:
      "Approve the diffs, push the branch, and merge atomic PRs. Every commit is a unit. Every unit is reviewable. Every ship is safe.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12l4 4 10-10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function HowItWorks(): ReactElement {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl"
          >
            From idea to atomic PR in four steps.
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            Helix breaks every request into reviewable units, executes them in
            order, and pauses for your review at every boundary.
          </p>
        </div>

        <ol className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-brand-300">
                  {step.number}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary/15 text-brand-300 ring-1 ring-brand-primary/30">
                  <span className="block h-5 w-5">{step.glyph}</span>
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-300">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;