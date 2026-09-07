// helix: components/landing/how-it-works/HowItWorks.tsx
/**
 * @helix:story USER-993000
 *
 * HowItWorks — numbered step-by-step explanation of the Helix workflow.
 */
import * as React from "react";
import { howItWorksContent } from "@/lib/content";

export interface HowItWorksProps {
  className?: string;
}

export function HowItWorks({
  className,
}: HowItWorksProps): React.ReactElement {
  const { eyebrow, heading, description, steps } = howItWorksContent;

  return (
    <section
      id="how-it-works"
      className={
        "relative py-20 sm:py-24 " + (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            {eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/30 transition hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-400/20 font-mono text-sm font-semibold text-cyan-300 ring-1 ring-inset ring-cyan-400/30">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-slate-50">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {step.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-400">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan-400"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition group-hover:opacity-100"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;