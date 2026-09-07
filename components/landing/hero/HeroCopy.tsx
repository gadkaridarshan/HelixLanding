// helix: components/landing/hero/HeroCopy.tsx
/**
 * @helix:story USER-303000
 *
 * HeroCopy — text column for the Hero: eyebrow, headline, subhead,
 * primary + secondary CTAs, and a row of social-proof bullets.
 *
 * Pure server component.
 */
import * as React from "react";

export interface HeroCopyProps {
  className?: string;
}

const bullets: ReadonlyArray<{ label: string }> = [
  { label: "Atomic work-breakdown" },
  { label: "Dependency-aware execution" },
  { label: "Type-checked every unit" },
];

export function HeroCopy({ className }: HeroCopyProps): React.ReactElement {
  return (
    <div className={"max-w-2xl " + (className ?? "")}>
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
        Atomic work-breakdown for AI coding agents
      </span>

      <h1
        id="hero-heading"
        className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        Ship{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
          reviewable
        </span>{" "}
        AI-generated code, one atomic unit at a time.
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
        Helix decomposes every prompt into small, dependency‑ordered units,
        executes them in sequence, and produces small PRs your team can
        actually review — instead of one sprawling diff.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#cta"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-violet-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:from-cyan-300 hover:to-violet-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Get early access
          <span aria-hidden="true">→</span>
        </a>
        <a
          href="#how-it-works"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          See how it works
        </a>
      </div>

      <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
        {bullets.map((b) => (
          <li key={b.label} className="flex items-center gap-2">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/70"
              aria-hidden="true"
            />
            {b.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroCopy;