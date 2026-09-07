/**
 * @helix:story USER-63000
 *
 * StatsBar — credibility row of headline numbers (PRs shipped,
 * repos decomposed, agent-hours saved, etc.). Pure server
 * component; content sourced from `@/content/stats.json` so the
 * marketing team can update copy without touching this file.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import statsData from "@/content/stats.json";

export interface StatsBarProps {
  className?: string;
}

interface StatItem {
  readonly label: string;
  readonly value: string;
  readonly suffix?: string;
}

interface StatsContent {
  readonly eyebrow?: string;
  readonly items: ReadonlyArray<StatItem>;
}

const content = statsData as StatsContent;

export function StatsBar({ className }: StatsBarProps): React.ReactElement {
  return (
    <section
      id="stats"
      aria-label="Helix by the numbers"
      className={
        "relative isolate border-y border-white/10 bg-slate-950/40 backdrop-blur " +
        (className ?? "")
      }
    >
      <Container className="py-12 sm:py-16">
        {content.eyebrow ? (
          <p className="mb-8 text-center text-xs font-mono uppercase tracking-[0.2em] text-brand-300">
            {content.eyebrow}
          </p>
        ) : null}
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {content.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1 text-center"
            >
              <dt className="text-xs uppercase tracking-[0.16em] text-ink-300">
                {item.label}
              </dt>
              <dd className="text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl">
                {item.value}
                {item.suffix ? (
                  <span className="text-brand-400">{item.suffix}</span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default StatsBar;