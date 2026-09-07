// helix: components/HowItWorks.tsx
/**
 * @helix:story USER-719000
 *
 * HowItWorks — 3-step pipeline that explains Helix's orchestration flow.
 *
 *   1. Define   — Decompose your prompt into atomic, reviewable units.
 *   2. Orchestrate — Execute units in order with explicit dependencies.
 *   3. Ship     — Verify each unit against the repo and ship small PRs.
 *
 * Pure server component. Renders three step cards laid out on a
 * responsive grid with connector dots between them on desktop.
 * Uses the existing theme tokens (ink, brand, accent, aurora) and
 * the shared `Container` so it matches the rest of the marketing
 * page.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

export interface HowItWorksProps {
  className?: string;
}

interface Step {
  /** Stable id used for the connector key. */
  id: string;
  /** Step number shown in the card header (1 / 2 / 3). */
  index: number;
  /** Short verb that titles the step. */
  title: string;
  /** One-sentence description of what happens in this step. */
  description: string;
  /** Bullet-style proof line shown beneath the description. */
  proof: string;
}

const steps: ReadonlyArray<Step> = [
  {
    id: "define",
    index: 1,
    title: "Define",
    description:
      "Helix reads your prompt and decomposes it into atomic, reviewable units — each with an explicit contract for inputs, outputs, and acceptance criteria.",
    proof: "Every unit ships with its own task spec, so scope is never ambiguous.",
  },
  {
    id: "orchestrate",
    index: 2,
    title: "Orchestrate",
    description:
      "Units are scheduled in dependency order. Helix parallelizes where it can, gates where it must, and surfaces a live plan you can interrupt at any time.",
    proof: "Parallel-safe work runs in parallel; risky work waits for the gate.",
  },
  {
    id: "ship",
    index: 3,
    title: "Ship",
    description:
      "Each unit is verified against your repo — types, tests, lint, and the protected paths you configure — before it lands as a small, reviewable PR.",
    proof: "You get small PRs and a verified diff, never one sprawling change.",
  },
];

/**
 * Minimal inline icon — a simple geometric glyph that hints at the
 * step's intent without pulling in an icon library. Decorative only;
 * the visible text label carries the meaning.
 */
function StepIcon({ id }: { id: Step["id"] }): React.ReactElement {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (id === "define") {
    return (
      <svg {...common}>
        <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
        <path d="M8 9h8M8 13h5" />
        <circle cx="16.5" cy="13" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (id === "orchestrate") {
    return (
      <svg {...common}>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M7 6h10M6.5 7.8 10.5 16.2M17.5 7.8 13.5 16.2" />
      </svg>
    );
  }

  // ship
  return (
    <svg {...common}>
      <path d="M4 12h12" />
      <path d="m13 7 5 5-5 5" />
      <circle cx="6" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function StepCard({ step }: { step: Step }): React.ReactElement {
  return (
    <li
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-ink-900/60 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur transition hover:border-brand-400/40 hover:bg-ink-900/80 sm:p-8"
    >
      {/* Step header — index pill + icon */}
      <div className="flex items-center justify-between">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500/30 to-accent-500/30 text-sm font-semibold text-white ring-1 ring-inset ring-white/10">
          {String(step.index).padStart(2, "0")}
        </span>
        <span className="text-brand-300 transition group-hover:text-brand-200">
          <StepIcon id={step.id} />
        </span>
      </div>

      {/* Title + description */}
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-100/80 sm:text-base">
        {step.description}
      </p>

      {/* Proof line — small mono chip echoing the brand wordmark style */}
      <p className="mt-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-ink-950/60 px-3 py-1 font-mono text-xs text-ink-200">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
        {step.proof}
      </p>
    </li>
  );
}

export function HowItWorks({ className }: HowItWorksProps): React.ReactElement {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      {/* Decorative background — aurora glow + faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-64 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-ink-900/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-ink-200">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Three steps from prompt to <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent-400 bg-clip-text text-transparent">verified PR</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-100/80 sm:text-lg">
            Helix turns one big prompt into a stream of small, verified changes.
            Plan, execute, and ship — without losing reviewability.
          </p>
        </div>

        {/* Step grid */}
        <ol
          role="list"
          className="relative mt-14 grid grid-cols-1 gap-6 sm:gap-8 md:mt-16 md:grid-cols-3"
        >
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;