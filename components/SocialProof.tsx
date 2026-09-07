// helix: components/SocialProof.tsx
/**
 * @helix:story USER-308000
 *
 * SocialProof — trust strip combining:
 *   • A row of placeholder company logos (text wordmarks — no external
 *     image deps, accessible by default).
 *   • Star-style aggregate metrics (3 stats, no fabricated user counts).
 *
 * Pure server component, no client interactivity. Designed to sit between
 * Personas and FAQ in the page narrative.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

export interface SocialProofProps {
  className?: string;
}

interface Logo {
  name: string;
  wordmark: React.ReactElement;
}

const LOGOS: readonly Logo[] = [
  {
    name: "Acme Labs",
    wordmark: (
      <span className="font-mono text-base font-semibold tracking-tight">
        acme<span className="text-brand-400">/</span>labs
      </span>
    ),
  },
  {
    name: "Northwind",
    wordmark: (
      <span className="font-display text-lg font-bold tracking-[0.2em]">
        NORTHWIND
      </span>
    ),
  },
  {
    name: "Helio",
    wordmark: (
      <span className="font-display text-lg font-bold italic">Helio.</span>
    ),
  },
  {
    name: "Quanta Co",
    wordmark: (
      <span className="font-mono text-base font-medium">
        ⟨quanta⟩
      </span>
    ),
  },
  {
    name: "Vector",
    wordmark: (
      <span className="font-display text-lg font-bold">
        ▰ Vector
      </span>
    ),
  },
  {
    name: "Orbital",
    wordmark: (
      <span className="font-display text-lg font-semibold tracking-tight">
        ◯ Orbital
      </span>
    ),
  },
];

interface Metric {
  value: string;
  label: string;
  hint: string;
}

const METRICS: readonly Metric[] = [
  {
    value: "Atomic",
    label: "Work breakdown",
    hint: "One intent → many reviewable units.",
  },
  {
    value: "Verified",
    label: "Per-unit checks",
    hint: "Types, tests, lint before any merge.",
  },
  {
    value: "Reviewable",
    label: "PRs you can ship",
    hint: "Small diffs, clear audit trail.",
  },
];

function StarRow(): React.ReactElement {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="text-brand-300"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof({
  className,
}: SocialProofProps): React.ReactElement {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className={cn(
        "relative isolate border-y border-white/5 bg-white/[0.015] py-16 sm:py-20",
        className,
      )}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="social-proof-heading"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-400"
          >
            Trusted workflow, real outcomes
          </h2>
          <p className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Teams ship faster when every unit is verified.
          </p>
        </div>

        {/* Logo wordmarks */}
        <ul
          className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6"
          aria-label="Used by teams at"
        >
          {LOGOS.map((logo) => (
            <li
              key={logo.name}
              className="flex items-center justify-center text-neutral-400 transition-colors hover:text-white"
            >
              <span className="sr-only">{logo.name}</span>
              {logo.wordmark}
            </li>
          ))}
        </ul>

        {/* Aggregate metrics */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className={cn(
                "rounded-card border border-white/10 bg-white/[0.03] p-6",
                "flex flex-col items-start",
              )}
            >
              <StarRow />
              <p className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-medium text-brand-200">
                {metric.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {metric.hint}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SocialProof;