// helix: components/StatsBar.tsx
/**
 * @helix:story USER-303000
 *
 * StatsBar — slim metric strip rendered directly below the Hero.
 * Surfaces three trust signals (atoms executed, PR cycle time,
 * reviewable diff size) so visitors can quantify the value prop
 * before reading further.
 *
 * Pure server component. Copy is sourced from
 * `@/content/stats-bar.json` to keep marketing tweaks out of the
 * component tree.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

import statsBarData from "@/content/stats-bar.json";

export interface StatsBarProps {
  className?: string;
}

interface StatsBarItem {
  value: string;
  label: string;
}

interface StatsBarContent {
  eyebrow: string;
  items: StatsBarItem[];
}

const content: StatsBarContent = statsBarData as StatsBarContent;

export function StatsBar({ className }: StatsBarProps): React.ReactElement {
  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className={
        "relative isolate border-y border-white/10 bg-slate-950/40 py-12 sm:py-16 " +
        (className ?? "")
      }
    >
      <Container>
        <h2
          id="stats-heading"
          className="sr-only"
        >
          {content.eyebrow}
        </h2>
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {content.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center"
            >
              <dt className="text-sm font-medium uppercase tracking-wider text-ink-400">
                {item.label}
              </dt>
              <dd className="mt-2 text-4xl font-bold tracking-tight text-brand-400 sm:text-5xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default StatsBar;