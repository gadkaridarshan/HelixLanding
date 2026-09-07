// helix: components/sections/how-it-works/HowItWorks.tsx
/**
 * @helix:story USER-303000
 *
 * HowItWorks — three-step walkthrough of the Helix orchestration loop.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Step {
  readonly num: string;
  readonly title: string;
  readonly description: string;
}

const STEPS: ReadonlyArray<Step> = [
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

export interface HowItWorksProps {
  className?: string;
}

export function HowItWorks({
  className,
}: HowItWorksProps): React.ReactElement {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className={"section-pad " + (className ?? "")}
    >
      <Container>
        <SectionHeading
          eyebrow="How it works"
          heading="A simple loop that ships verified code."
          description="Plan, execute, verify — Helix owns the orchestration end-to-end so every merge is merge-ready."
        />
        <ol className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.num}
              className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-cyan-400/40"
            >
              <span className="text-sm font-mono font-semibold tracking-widest text-cyan-300/90">
                {step.num}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;