// helix: components/landing/StatsBar.tsx
/**
 * @helix:story USER-303000
 *
 * StatsBar — compact 4-up metric strip rendered between the
 * social-proof band and the Features grid. Reinforces credibility
 * with concrete numbers (PRs merged, repos supported, etc.) so the
 * visitor immediately sees traction below the fold.
 */
import type { ReactElement } from "react";

import { Container } from "@/components/ui/Container";

interface Stat {
  readonly value: string;
  readonly label: string;
  readonly hint?: string;
}

const STATS: ReadonlyArray<Stat> = [
  { value: "12,400+", label: "Atomic units merged", hint: "across public + private repos" },
  { value: "98.6%", label: "First-pass type-check pass rate", hint: "before human review" },
  { value: "3.2×", label: "Faster median feature lead time", hint: "vs. unverified AI diffs" },
  { value: "0", label: "Hotfixes from AI sprawl", hint: "main stayed green, every run" },
];

export function StatsBar(): ReactElement {
  return (
    <section
      id="stats"
      aria-label="Helix by the numbers"
      className="relative border-y border-white/5 bg-white/[0.015] py-12"
    >
      <Container>
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur"
            >
              <dt className="text-xs uppercase tracking-[0.16em] text-white/55">
                {stat.label}
              </dt>
              <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {stat.value}
              </dd>
              {stat.hint ? (
                <p className="text-xs text-white/45">{stat.hint}</p>
              ) : null}
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default StatsBar;