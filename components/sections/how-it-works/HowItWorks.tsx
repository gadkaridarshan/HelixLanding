// helix: components/sections/how-it-works/HowItWorks.tsx
/**
 * @helix:story USER-167000
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
 * brand tokens via Tailwind utilities.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import howItWorksData from "@/content/how-it-works.json";

import { StepsList } from "./StepsList";
import type { HowItWorksStep } from "./StepsList";

export interface HowItWorksProps {
  className?: string;
}

export type { HowItWorksStep };

interface HowItWorksContent {
  eyebrow: string;
  heading: string;
  description: string;
  steps: ReadonlyArray<HowItWorksStep>;
}

const content: HowItWorksContent = howItWorksData as HowItWorksContent;

export function HowItWorks({ className }: HowItWorksProps): React.ReactElement {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={
        "relative isolate scroll-mt-24 py-20 sm:py-28 " + (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-slate-950" />
        <div
          className="absolute left-1/2 top-1/3 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
        />
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