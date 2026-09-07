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
  bullets: ReadonlyArray<string>;
}

interface HowItWorksContent {
  eyebrow: string;
  heading: string;
  description: string;
  steps: ReadonlyArray<HowItWorksStep>;
}

const content: HowItWorksContent = howItWorksData as HowItWorksContent;

function StepConnector(): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 h-0.5 w-full bg-gradient-to-r from-brand-500/0 via-brand-500/40 to-accent-500/0"
    />
  );
}

function StepCard({
  step,
  index,
}: {
  step: HowItWorksStep;
  index: number;
}): React.ReactElement {
  return (
    <div className="relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-lg font-bold text-ink-950 shadow-[0_8px_30px_-12px_rgba(34,211,238,0.6)]">
        {step.number}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-ink-50">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-ink-300">
        {step.description}
      </p>
      <ul className="mt-4 space-y-2">
        {step.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-sm text-ink-200"
          >
            <span
              aria-hidden="true"
              className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-400"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {index < content.steps.length - 1 ? <StepConnector /> : null}
    </div>
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
        <div className="mx-auto max-w-3xl text-center">
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

        <ol className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, index) => (
            <li key={step.number} className="relative">
              <StepCard step={step} index={index} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;