// helix: components/sections/hero/HeroCopy.tsx
/**
 * @helix:story USER-303000
 *
 * HeroCopy — text column of the Hero.
 */
import * as React from "react";

import { Button } from "@/components/ui/Button";

export interface HeroCopyProps {
  className?: string;
}

export function HeroCopy({
  className,
}: HeroCopyProps): React.ReactElement {
  return (
    <div className={className}>
      <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-brand-300">
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        />
        Helix · AI orchestrator
      </p>

      <h1
        id="hero-heading"
        className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-ink-50 sm:text-5xl lg:text-6xl"
      >
        Ship features,{" "}
        <span className="bg-gradient-to-r from-brand-300 via-cyan-300 to-brand-400 bg-clip-text text-transparent">
          not diffs.
        </span>
      </h1>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
        Helix turns a single prompt into atomic, verified code units — so
        your main branch stays green, your reviewers stay sane, and your
        AI ships the change that matters.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Button href="#cta" variant="primary" size="lg">
          Get started
        </Button>
        <Button
          href="https://github.com/gadkaridarshan/Helix"
          variant="secondary"
          size="lg"
        >
          View on GitHub
        </Button>
      </div>

      <ul className="mt-8 grid max-w-xl gap-2 text-sm text-slate-300 sm:grid-cols-3">
        <li className="flex items-center gap-2">
          <Check /> Atomic units
        </li>
        <li className="flex items-center gap-2">
          <Check /> Verified each step
        </li>
        <li className="flex items-center gap-2">
          <Check /> Main stays green
        </li>
      </ul>
    </div>
  );
}

function Check(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 text-brand-400"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default HeroCopy;