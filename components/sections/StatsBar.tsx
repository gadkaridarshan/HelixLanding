// helix: components/sections/StatsBar.tsx
/**
 * @helix:story USER-349000
 *
 * StatsBar section — canonical implementation.
 *
 * Numeric reinforcement strip. Four headline metrics with short
 * sub-copy.
 */

import type { ReactElement } from "react";

import { Container } from "@/components/ui/Container";

interface Stat {
  readonly value: string;
  readonly label: string;
}

const STATS: ReadonlyArray<Stat> = [
  { value: "10k+", label: "Atomic PRs shipped" },
  { value: "<2s", label: "Plan-to-decompose" },
  { value: "0", label: "Broken file diagnostics" },
  { value: "100%", label: "Reviewable diffs" },
];

export function StatsBar(): ReactElement {
  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="relative py-20"
    >
      <Container>
        <h2 id="stats-heading" className="sr-only">
          By the numbers
        </h2>
        <div className="grid grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold tracking-tight text-gradient-brand sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-ink-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StatsBar;