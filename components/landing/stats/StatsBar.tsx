// helix: components/landing/stats/StatsBar.tsx
/**
 * @helix:story USER-303000
 *
 * StatsBar — short row of social-proof metrics rendered directly under
 * the Hero. Server-rendered, no interactivity.
 */
import * as React from "react";

interface Stat {
  readonly value: string;
  readonly label: string;
}

const stats: readonly Stat[] = [
  { value: "4×", label: "faster PR throughput" },
  { value: "92%", label: "atomic units green on first run" },
  { value: "0", label: "manual context switching" },
  { value: "100%", label: "diff traceability" },
];

export function StatsBar(): React.ReactElement {
  return (
    <section
      aria-label="Helix at a glance"
      className="relative pb-8 sm:pb-12"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card-glass grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-start gap-1 bg-brand-ink/40 p-6"
            >
              <span className="text-3xl font-semibold text-white sm:text-4xl">
                {s.value}
              </span>
              <span className="text-sm text-brand-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;