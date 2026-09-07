// helix: components/sections/StatsBar.tsx
/**
 * @helix:story USER-23000
 *
 * StatsBar — quick metric strip near the top of the page.
 * Pure server component.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

export interface StatsBarProps {
  className?: string;
}

interface Stat {
  id: string;
  value: string;
  label: string;
}

const stats: ReadonlyArray<Stat> = [
  { id: "atoms", value: "10k+", label: "Atomic units shipped" },
  { id: "prs", value: "1,200+", label: "Verified PRs opened" },
  { id: "stacks", value: "4", label: "Languages supported" },
  { id: "teams", value: "98%", label: "Teams staying green" },
];

export function StatsBar({
  className,
}: StatsBarProps): React.ReactElement {
  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className={
        "relative isolate border-y border-white/10 bg-white/[2%] py-10 " +
        (className ?? "")
      }
    >
      <h2 id="stats-heading" className="sr-only">
        Helix by the numbers
      </h2>
      <Container>
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <dt className="text-xs uppercase tracking-wide text-slate-400">
                {stat.label}
              </dt>
              <dd className="mt-1 font-mono text-2xl font-semibold text-white sm:text-3xl">
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