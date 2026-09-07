// helix: components/landing/stats/StatsBar.tsx
/**
 * @helix:story USER-303000
 *
 * StatsBar — compact metric strip that lands directly under the hero.
 * Three proof points: unit size, verification surface, PR cadence.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

interface Stat {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
}

const STATS: ReadonlyArray<Stat> = [
  {
    value: "~80 LOC",
    label: "per atomic unit",
    detail: "Small enough to review in under two minutes.",
  },
  {
    value: "Repo-aware",
    label: "verification",
    detail: "Types, tests, and lint gate every unit before it ships.",
  },
  {
    value: "1 PR",
    label: "per task",
    detail: "Linear, dependency-ordered history you can actually merge.",
  },
];

export function StatsBar(): React.ReactElement {
  return (
    <section
      aria-label="At a glance"
      className="relative border-y border-white/10 bg-white/[0.02] py-10 backdrop-blur-sm"
    >
      <Container>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <dt className="hx-eyebrow">{s.label}</dt>
              <dd className="text-2xl font-semibold text-white sm:text-3xl">
                {s.value}
              </dd>
              <p className="text-sm text-slate-400">{s.detail}</p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default StatsBar;