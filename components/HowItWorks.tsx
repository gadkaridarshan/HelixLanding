// helix: components/HowItWorks.tsx
/**
 * @helix:story USER-933000
 *
 * HowItWorks — the canonical 4-step orchestration flow for Helix:
 *
 *   1. Describe the goal
 *   2. Decompose into atoms (atomic work-breakdown)
 *   3. Apply, review, merge (parallel agents, dependency gating)
 *   4. Ship with confidence (delivery_strategy: auditable, replayable)
 *
 * Content is sourced from `@/content/how-it-works.json` so the marketing
 * copy can evolve without touching the component tree.
 *
 * Pure server component. Uses the shared `Container` primitive and
 * brand tokens (ink/brand/accent/aurora) via Tailwind utilities.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

import howItWorksData from "@/content/how-it-works.json";

export interface HowItWorksProps {
  className?: string;
}

interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  bullets: string[];
}

interface HowItWorksContent {
  eyebrow: string;
  heading: string;
  description: string;
  steps: HowItWorksStep[];
}

const content: HowItWorksContent = howItWorksData as HowItWorksContent;

function StepConnector(): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block"
    />
  );
}

export function HowItWorks({
  className,
}: HowItWorksProps): React.ReactElement {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            {content.eyebrow}
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl lg:text-5xl"
          >
            {content.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-300">
            {content.description}
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <StepConnector />
          <ol role="list" className="space-y-10 lg:space-y-16">
            {content.steps.map((step) => (
              <li
                key={step.number}
                className="relative grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr] lg:gap-10"
              >
                <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 font-mono text-lg font-semibold text-brand-300">
                    {step.number}
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <h3 className="text-xl font-semibold text-ink-50">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-ink-300">
                    {step.description}
                  </p>
                  <ul
                    role="list"
                    className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2"
                  >
                    {step.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-ink-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                          aria-hidden="true"
                        >
                          <path d="M5 12l4 4L19 7" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;