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
      aria-labelledby="how-it-works-heading"
      className={"section-pad " + (className ?? "")}
    >
      <Container>
        <SectionHeading
          eyebrow="How it works"
          heading="Plan. Execute. Verify."
          description="A simple loop that turns AI output into work you actually want to merge."
        />
        <ol
          role="list"
          className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3"
        >
          {STEPS.map((step) => (
            <li
              key={step.num}
              className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="font-mono text-xs text-brand-300">
                {step.num}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
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