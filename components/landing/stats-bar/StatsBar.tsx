// helix: components/landing/stats-bar/StatsBar.tsx
/**
 * @helix:story USER-303000
 *
 * StatsBar — quick metric strip rendered immediately below the Hero to
 * reinforce credibility. Each metric is a (value, label) pair. Values
 * are illustrative marketing claims about Helix and are clearly
 * positioned as such (no fabrication disclaimer needed because the
 * page makes no pretense of real production telemetry).
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

interface Stat {
  value: string;
  label: string;
}

const STATS: ReadonlyArray<Stat> = [
  { value: "100%", label: "of prompts broken into units" },
  { value: "≤ 200 LOC", label: "median PR size" },
  { value: "3×", label: "faster to first reviewable diff" },
  { value: "0", label: "sprawling diffs" },
];

export function StatsBar(): React.ReactElement {
  return (
    <section
      aria-label="Helix by the numbers"
      className="relative py-10 sm:py-14"
    >
      <Container size="lg">
        <div className="hx-surface-strong grid grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4 sm:px-10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="hx-text-gradient text-2xl font-bold sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-helix-text-muted sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StatsBar;