// helix: components/sections/StatsBar.tsx
/**
 * @helix:story USER-303000
 *
 * StatsBar — quick metric strip reinforcing Helix's value props.
 * Pure server component.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

interface Stat {
  readonly value: string;
  readonly label: string;
}

const STATS: ReadonlyArray<Stat> = [
  { value: "Atomic", label: "Scoped units per change" },
  { value: "Verified", label: "Type-check, test & lint each step" },
  { value: "Sequential", label: "Dependencies always satisfied" },
  { value: "Main green", label: "No 2,000-line AI PRs" },
];

export interface StatsBarProps {
  className?: string;
}

export function StatsBar({ className }: StatsBarProps): React.ReactElement {
  return (
    <section
      aria-label="Helix at a glance"
      className={
        "relative border-y border-white/5 bg-white/[0.02] py-10 " +
        (className ?? "")
      }
    >
      <Container>
        <dl className="grid grid-cols-2 gap-y-6 gap-x-8 text-center md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="text-sm uppercase tracking-[0.18em] text-white/60">
                {stat.label}
              </dt>
              <dd className="text-2xl font-semibold tracking-tight gradient-text sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default StatsBar;