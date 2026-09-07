// helix: components/sections/how-it-works/StepsList.tsx
/**
 * @helix:story USER-507000
 *
 * StepsList — vertical list of `StepItem` rows used by HowItWorks.
 * Pure server component; renders an accessible ordered list with
 * connectors between rows.
 */
import * as React from "react";

import { StepItem, type StepItemBullet } from "./StepItem";

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

/**
 * `StepItem` doesn't yet consume `StepItemBullet`, but we re-export
 * the type here so consumers can grow richer step payloads later
 * without changing the public surface.
 */
export type { StepItemBullet };

export function StepsList({ steps, className }: StepsListProps): React.ReactElement {
  return (
    <ol
      role="list"
      className={
        "relative mx-auto flex w-full max-w-3xl flex-col gap-4 " +
        (className ?? "")
      }
    >
      {steps.map((step, idx) => (
        <div key={step.number} className="relative">
          {idx < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[2.05rem] top-16 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-500/40 via-white/10 to-transparent sm:block"
            />
          ) : null}
          <StepItem
            number={step.number}
            title={step.title}
            description={step.description}
            bullets={step.bullets}
            reverse={idx % 2 === 1}
          />
        </div>
      ))}
    </ol>
  );
}

export default StepsList;