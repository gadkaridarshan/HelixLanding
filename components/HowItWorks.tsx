// helix: components/HowItWorks.tsx
/**
 * @helix:story USER-616000
 *
 * HowItWorks — the canonical 3-step orchestration flow for Helix,
 * shown as a diagrammatic explainer with connectors, atom tiles,
 * and copy bullets.
 *
 *   1. Describe the goal        — natural language intent
 *   2. Decompose & orchestrate  — parallel agents, dependency gating
 *   3. Review & ship            — auditable PRs, replayable runs
 *
 * Content is sourced from `@/content/how-it-works.json` so the
 * marketing copy can evolve without touching the component tree.
 *
 * Pure server component. Uses the shared `Container` primitive and
 * brand tokens (ink/brand/accent/aurora) via Tailwind utilities.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import howItWorksData from "@/content/how-it-works.json";

export interface HowItWorksProps {
  className?: string;
}

export interface HowItWorksStep {
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
      className="hidden h-12 w-px self-center bg-gradient-to-b from-brand-500/0 via-brand-500/60 to-brand-500/0 lg:block"
    />
  );
}

function Step({
  step,
  index,
  total,
}: {
  step: HowItWorksStep;
  index: number;
  total: number;
}): React.ReactElement {
  return (
    <li className="flex flex-col">
      <div className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
        {/* Step number badge */}
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/10 text-sm font-semibold text-brand-300 ring-1 ring-inset ring-brand-500/30">
            {step.number}
          </span>
          <span className="text-xs uppercase tracking-[0.18em] text-ink-400">
            Step {index + 1} of {total}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink-100 sm:text-xl">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-300 sm:text-base">
          {step.description}
        </p>

        <ul className="mt-5 flex flex-col gap-2 border-t border-white/5 pt-5">
          {step.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-sm text-ink-200"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m4 10 4 4 8-8" />
              </svg>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Diagrammatic atom-tile motif in corner */}
        <svg
          aria-hidden="true"
          viewBox="0 0 80 80"
          className="pointer-events-none absolute right-3 top-3 h-12 w-12 text-white/[0.04]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="40" cy="40" r="2" fill="currentColor" />
          <ellipse cx="40" cy="40" rx="32" ry="11" />
          <ellipse
            cx="40"
            cy="40"
            rx="32"
            ry="11"
            transform="rotate(60 40 40)"
          />
          <ellipse
            cx="40"
            cy="40"
            rx="32"
            ry="11"
            transform="rotate(120 40 40)"
          />
        </svg>
      </div>
    </li>
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
        "relative isolate scroll-mt-24 py-20 sm:py-28 " + (className ?? "")
      }
    >
      {/* Distinct aurora gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.06),transparent_60%)]"
      />
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={content.eyebrow}
            heading={content.heading}
            description={content.description}
            headingId="how-it-works-heading"
          />
        </div>

        <ol className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-0">
          {content.steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <Step step={step} index={index} total={content.steps.length} />
              {index < content.steps.length - 1 ? <StepConnector /> : null}
            </React.Fragment>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;