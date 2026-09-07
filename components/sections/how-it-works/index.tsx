// helix: components/sections/how-it-works/index.tsx
/**
 * @helix:story USER-507000
 *
 * HowItWorks — canonical 3-step orchestration flow for Helix,
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
import { StepItem } from "@/components/ui/step-item";

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

export function HowItWorks({
  className,
}: HowItWorksProps): React.ReactElement {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-28 " + (className ?? "")
      }
    >
      {/* Background: subtle radial highlight + grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
        <div className="absolute right-1/2 top-1/2 h-[420px] w-[820px] translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          headingId="how-it-works-heading"
        />

        <ol className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {content.steps.map((step, idx) => (
            <li key={step.number} className="relative">
              <StepItem
                number={step.number}
                title={step.title}
                description={step.description}
                bullets={step.bullets}
                isLast={idx === content.steps.length - 1}
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default HowItWorks;