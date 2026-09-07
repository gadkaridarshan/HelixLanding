// helix: components/sections/how-it-works/StepsList.tsx
/**
 * @helix:story USER-933000
 *
 * StepsList — internal subcomponent for the HowItWorks section. Renders
 * a horizontal/responsive grid of step cards sourced from the HowItWorks
 * content JSON. Pure server component.
 *
 * Consumers should normally use `<HowItWorks />` directly; this subcomponent
 * exists to keep the section composable for future layouts.
 */
import * as React from "react";

import howItWorksData from "@/content/how-it-works.json";

export interface StepsListProps {
  className?: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
  bullets: string[];
}

interface HowItWorksContent {
  eyebrow: string;
  heading: string;
  description: string;
  steps: Step[];
}

const { steps } = howItWorksData as HowItWorksContent;

export function StepsList({
  className,
}: StepsListProps): React.ReactElement {
  return (
    <ol
      role="list"
      className={
        "grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-6 " +
        (className ?? "")
      }
    >
      {steps.map((step, idx) => (
        <li
          key={step.number}
          className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/30 hover:bg-white/[0.05]"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 font-mono text-sm font-bold text-cyan-300">
              {step.number}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Step {idx + 1}
            </span>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-white">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {step.description}
          </p>
          <ul role="list" className="mt-5 space-y-2">
            {step.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-sm text-slate-300"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                >
                  <path
                    d="M4 10.5l4 4 8-9"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default StepsList;