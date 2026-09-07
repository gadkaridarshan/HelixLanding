// helix: components/sections/how-it-works/HowItWorks.tsx
/**
 * @helix:story USER-507000
 *
 * HowItWorks — the canonical 3-step orchestration flow for Helix,
 * shown as a vertical step list with connectors, atom tiles,
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

import { StepsList, type HowItWorksStep } from "./StepsList";

export interface HowItWorksProps {
  className?: string;
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
      {/* Aurora backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          headingId="how-it-works-heading"
        />

        <div className="mt-12">
          <StepsList steps={content.steps} />
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;