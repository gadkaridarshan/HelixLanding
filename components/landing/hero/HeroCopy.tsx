// helix: components/landing/hero/HeroCopy.tsx
/**
 * @helix:story USER-128000
 *
 * HeroCopy — the text column of the Hero section: eyebrow, headline,
 * subhead, primary + secondary CTAs, and the social-proof bullets.
 *
 * Pure server component. Copy is hard-coded because the Hero is the
 * brand's single most-edited line of marketing — keeping it inline
 * makes it obvious and easy to tweak.
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
        Atomic work-breakdown
        <br />
        <span className="bg-gradient-to-r from-brand-300 via-aurora-300 to-accent-300 bg-clip-text text-transparent">
          for AI coding agents.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-ink-200 sm:text-lg sm:leading-8">
        Helix decomposes every prompt into atomic, reviewable units,
        executes them in dependency order, and verifies each one against
        the rest of your repo — so you ship small PRs, not sprawling diffs.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href="#cta" variant="primary" size="lg">
          Get early access
        </Button>
        <Button href="#how-it-works" variant="secondary" size="lg">
          See how it works
        </Button>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-3 text-sm text-ink-200 sm:grid-cols-2">
        <li className="flex items-start gap-2">
          <CheckIcon />
          <span>Atomic decomposition · reviewable PRs</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckIcon />
          <span>Dependency-aware parallel execution</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckIcon />
          <span>Repo-aware verification (types · tests · lint)</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckIcon />
          <span>Replayable runs · full audit trail</span>
        </li>
      </ul>
    </div>
  );
}

function CheckIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l3.5 3.5L16 6" />
    </svg>
  );
}

export default HeroCopy;