// helix: components/landing/how-it-works/HowItWorks.tsx
/**
 * @helix:story USER-303000
 *
 * HowItWorks — four-step flow that walks a visitor through the
 * Helix pipeline: prompt → plan → execute → verify → PR.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

interface Step {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

const STEPS: ReadonlyArray<Step> = [
  {
    number: "01",
    title: "Prompt",
    description:
      "Describe what you want changed. A short paragraph is enough — no special DSL required.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Helix decomposes the prompt into a dependency graph: inputs, outputs, and ordered units.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Each unit runs against your real codebase, in order, with the prior unit's output as context.",
  },
  {
    number: "04",
    title: "Verify & PR",
    description:
      "Every unit is gated by types, tests, and lint. The result lands as one clean, reviewable PR.",
  },
];

export function HowItWorks(): React.ReactElement {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="how-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="hx-eyebrow">How it works</p>
          <h2 id="how-heading" className="hx-heading mt-3">
            From prompt to PR,{" "}
            <span className="hx-text-gradient">one verified step at a time</span>.
          </h2>
          <p className="hx-subheading">
            Helix turns a vague ask into a concrete plan and walks it across
            your repo — never producing a diff you can&apos;t reason about.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="hx-card relative flex gap-5 overflow-hidden"
            >
              <span
                aria-hidden="true"
                className="hx-mono text-3xl font-bold leading-none text-cyan-400/80"
              >
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;