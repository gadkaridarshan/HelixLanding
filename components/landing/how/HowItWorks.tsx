// helix: components/landing/how/HowItWorks.tsx
/**
 * @helix:story USER-303000
 *
 * HowItWorks — three-step walkthrough explaining the Helix orchestration
 * loop: plan → execute → verify.
 */
import * as React from "react";

interface Step {
  readonly num: string;
  readonly title: string;
  readonly description: string;
}

const steps: readonly Step[] = [
  {
    num: "01",
    title: "Plan",
    description:
      "Helix reads your prompt and the codebase, then produces an ordered list of atomic units — each with a clear scope and acceptance criteria.",
  },
  {
    num: "02",
    title: "Execute",
    description:
      "Each unit is handed to your coding agent with just-enough context. Units run sequentially so dependencies are always satisfied.",
  },
  {
    num: "03",
    title: "Verify",
    description:
      "Every unit is type-checked, tested, and linted against the rest of the repo before it can be merged. Failures pause the loop.",
  },
];

export function HowItWorks(): React.ReactElement {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="section-pad"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">How it works</span>
          <h2
            id="how-title"
            className="h-display mt-4 text-3xl font-semibold text-white sm:text-4xl"
          >
            From prompt to PR, in three steps.
          </h2>
          <p className="mt-4 text-brand-muted">
            Helix keeps the agent loop tight — plan small, execute in order,
            verify every change.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.num}
              className="card-glass relative rounded-2xl p-6 sm:p-8"
            >
              <span className="font-mono text-sm text-brand-cyan">
                {s.num}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;