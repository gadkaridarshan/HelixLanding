// helix: components/sections/HowItWorks.tsx
/**
 * @helix:story USER-303000
 *
 * HowItWorks — three-step execution loop:
 *   1. Decompose — break the prompt into atomic units.
 *   2. Execute   — run each unit, in dependency order.
 *   3. Verify    — check each unit against the repo (types, tests, lint).
 *
 * Pure server component. Section id is `how-it-works`.
 */
import * as React from "react";

export interface HowItWorksProps {
  className?: string;
}

interface Step {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

const steps: ReadonlyArray<Step> = [
  {
    number: "01",
    title: "Decompose",
    description:
      "Helix parses your prompt and produces a plan: each unit has an explicit goal, inputs, outputs, and acceptance criteria.",
  },
  {
    number: "02",
    title: "Execute",
    description:
      "Units run in dependency order. Each one writes code, then hands off a clean, scoped diff to the next.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Every unit is checked against your repo — types, tests, lint — before the next one starts. Failed units get fixed, not papered over.",
  },
];

export function HowItWorks({
  className,
}: HowItWorksProps): React.ReactElement {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={
        "relative isolate py-20 sm:py-28 " + (className ?? "")
      }
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-it-works-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            The three-step loop
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Decompose, execute, verify — then ship the diff as small PRs
            your reviewers will actually thank you for.
          </p>
        </div>

        <ol
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3"
        >
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6"
            >
              <span className="font-mono text-sm font-semibold text-cyan-300">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-slate-400">
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