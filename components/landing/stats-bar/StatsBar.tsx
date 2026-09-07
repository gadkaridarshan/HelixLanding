// helix: components/landing/stats-bar/StatsBar.tsx
/**
 * @helix:story USER-303000
 *
 * StatsBar — quick metric strip that sits directly below the Hero.
 * Pure server render, no client state.
 */
import * as React from "react";

export interface StatItem {
  readonly value: string;
  readonly label: string;
}

export interface StatsBarProps {
  className?: string;
}

const STATS: ReadonlyArray<StatItem> = [
  { value: "12×", label: "Faster review cycles" },
  { value: "94%", label: "First-pass type-check rate" },
  { value: "<2k", label: "Average diff per unit" },
  { value: "0", label: "Sprawling mega-PRs" },
];

export function StatsBar({ className }: StatsBarProps): React.ReactElement {
  return (
    <section
      aria-label="Product metrics"
      className={
        "relative border-y border-white/10 bg-slate-950/40 backdrop-blur-sm " +
        (className ?? "")
      }
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <div className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;