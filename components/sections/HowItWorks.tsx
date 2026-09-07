// helix: components/sections/HowItWorks.tsx
/**
 * @helix:story USER-23000
 *
 * HowItWorks — three-step pipeline that explains Helix's orchestration flow:
 * 1. Plan — decompose your prompt into atomic, reviewable units.
 * 2. Execute — run units in dependency order with explicit gating.
 * 3. Verify — each unit passes types, tests, and lint before shipping.
 *
 * Pure server component. Renders three step cards laid out on a
 * responsive grid.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

export interface HowItWorksProps {
  className?: string;
}

interface Step {
  id: string;
  index: number;
  title: string;
  description: string;
  proof: string;
}

const steps: ReadonlyArray<Step> = [
  {
    id: "plan",
    index: 1,
    title: "Plan",
    description:
      "Helix reads your prompt and decomposes it into small, reviewable units — each one with a clear contract.",
    proof: "Every unit gets a plan card you can read and approve.",
  },
  {
    id: "execute",
    index: 2,
    title: "Execute",
    description:
      "Units run in dependency order. Parallel work is gated on the units that must land first.",
    proof: "No silent cross-cutting changes — dependencies are explicit.",
  },
  {
    id: "verify",
    index: 3,
    title: "Verify",
    description:
      "Each unit is checked against types, tests, and lint before it reaches your review queue.",
    proof: "Reviewers see a small, green diff — every time.",
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
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-it-works-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            From prompt to small, verified PR — in three steps.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.id}
              className="relative rounded-card border border-white/10 bg-white/5 p-6"
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 left-6 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 font-mono text-xs font-bold text-slate-950"
              >
                {step.index}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {step.description}
              </p>
              <p className="mt-4 text-xs font-medium text-cyan-300">
                {step.proof}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;