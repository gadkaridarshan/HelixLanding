// helix: components/landing/stats-bar/StatsBar.tsx
/**
 * @helix:story USER-303000
 *
 * StatsBar — quick metric strip rendered just below the Hero.
 *
 * Pure server component. Section id is `stats` for navbar anchors.
 */
import * as React from "react";

export interface StatsBarProps {
  className?: string;
}

interface Stat {
  readonly value: string;
  readonly label: string;
}

const stats: ReadonlyArray<Stat> = [
  { value: "Atomic", label: "Per-unit review surface" },
  { value: "100%", label: "Repo-aware verification" },
  { value: "1×PR", label: "One unit, one commit" },
  { value: "TS/Node", label: "First-class today" },
];

export function StatsBar({ className }: StatsBarProps): React.ReactElement {
  return (
    <section
      id="stats"
      aria-label="At-a-glance metrics"
      className={
        "relative isolate border-y border-white/10 bg-white/[0.02] py-8 " +
        (className ?? "")
      }
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 sm:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;