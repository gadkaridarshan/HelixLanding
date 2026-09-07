// helix: components/sections/how-it-works/StepsList.tsx
/**
 * @helix:story USER-167000
 *
 * StepsList — vertical list of `StepItem` rows used by HowItWorks.
 * Pure server component; renders an accessible ordered list with
 * connectors between rows.
 */
import * as React from "react";

import { StepItem } from "./StepItem";

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  bullets: ReadonlyArray<string>;
}

export interface StepsListProps {
  steps: ReadonlyArray<HowItWorksStep>;
  className?: string;
}

export function StepsList({
  steps,
  className,
}: StepsListProps): React.ReactElement {
  return (
    <ol
      role="list"
      className={
        "relative mx-auto flex w-full max-w-5xl flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-6 " +
        (className ?? "")
      }
    >
      {steps.map((step) => (
        <li key={step.number} className="relative">
          <StepItem
            number={step.number}
            title={step.title}
            description={step.description}
            bullets={step.bullets}
          />
        </li>
      ))}
    </ol>
  );
}

export default StepsList;