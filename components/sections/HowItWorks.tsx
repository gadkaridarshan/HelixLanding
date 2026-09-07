// helix: components/sections/HowItWorks.tsx
/**
 * @helix:story USER-303000
 *
 * HowItWorks — numbered, four-step explainer. Pure server render.
 */
import * as React from "react";

export interface HowItWorksStep {
  readonly title: string;
  readonly description: string;
}

export interface HowItWorksProps {
  className?: string;
}

const STEPS: ReadonlyArray<HowItWorksStep> = [
  {
    title: "Describe the goal",
    description:
      "Write a normal prompt. Helix reads your repo first so it knows the conventions, the stack, and the moving parts.",
  },
  {
    title: "Decompose into units",
    description:
      "Helix plans the work as a graph of atomic units. Each unit has a single responsibility and explicit dependencies.",
  },
  {
    title: "Execute & verify",
    description:
      "Units run in order. After every unit, Helix type-checks, lints, and tests the result against the rest of the repo.",
  },
  {
    title: "Ship reviewable PRs",
    description:
      "You get focused PRs — one per unit, or grouped by feature. Every change is small enough to review in minutes.",
  },
];

export function HowItWorks({
  className,
}: HowItWorksProps): React.ReactElement {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className={
        "relative border-t border-white/5 py-20 md:py-28 " + (className ?? "")
      }
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
            How it works
          </span>
          <h2
            id="how-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            From prompt to pull request — in four steps.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Helix is a work-breakdown orchestrator for AI coding agents. It
            turns one large prompt into many small, reviewable units — and
            ships only what passes your repo.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, idx) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-slate-950">
                  {idx + 1}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;