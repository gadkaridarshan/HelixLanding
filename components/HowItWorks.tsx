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
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-full hidden h-8 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/40 via-violet-400/40 to-transparent md:block"
    />
  );
}

export function HowItWorks({
  className,
}: HowItWorksProps): React.ReactElement {
  const { eyebrow, heading, description, steps } = content;

  return (
    <section
      id="how-it-works"
      data-testid="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-28 lg:py-32 " +
        (className ?? "")
      }
    >
      {/* Decorative background — soft aurora glow + faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {eyebrow}
          </span>
          <h2
            id="how-it-works-heading"
            className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>

        <ol
          role="list"
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-6"
        >
          {steps.map((step, idx) => (
            <li
              key={step.number}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              {idx < steps.length - 1 ? <StepConnector /> : null}

              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 font-mono text-sm font-bold text-cyan-300">
                  {step.number}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Step {idx + 1}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {step.description}
              </p>

              <ul role="list" className="mt-5 space-y-2">
                {step.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                    >
                      <path
                        d="M4 10.5l4 4 8-9"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;