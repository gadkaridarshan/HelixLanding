// helix: components/sections/MetricsBand.tsx
/**
 * @helix:story USER-397000
 *
 * MetricsBand — quantifiable outcome strip rendered just above the
 * FinalCTA. Reinforces the value of Helix with hard, scannable
 * numbers so buyers can judge ROI without reading the copy.
 *
 * Pure server component. Content is sourced from
 * `@/lib/content/useCases.METRICS` to stay in lockstep with the
 * rest of the marketing surface.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

import { METRICS, type MetricIcon } from "@/lib/content/useCases";

export interface MetricsBandProps {
  className?: string;
}

function MetricIconGlyph({ name }: { name: MetricIcon }): React.ReactElement {
  const common = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "h-5 w-5",
  } as const;

  switch (name) {
    case "bolt":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
          />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4"
          />
        </svg>
      );
    case "stack":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 18l9 5 9-5"
          />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7v5l3 2"
          />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"
          />
        </svg>
      );
    case "graph":
    default:
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 20h18M5 16l4-6 4 4 6-9"
          />
        </svg>
      );
  }
}

export function MetricsBand({
  className,
}: MetricsBandProps): React.ReactElement {
  return (
    <section
      id="metrics"
      aria-labelledby="metrics-heading"
      className={cn(
        "relative isolate overflow-hidden border-y border-white/5 bg-white/[0.02] py-16 sm:py-20",
        className ?? "",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-cyan-500/[0.05] to-transparent"
      />

      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90 sm:text-sm">
            By the numbers
          </p>
          <h2
            id="metrics-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Outcomes you can verify, not vibes
          </h2>
          <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">
            Helix ships in measurable increments. Every metric below is
            computed across real customer runs in the last 90 days.
          </p>
        </header>

        <dl className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              data-metric-id={metric.id}
              className="flex flex-col gap-3 bg-slate-950/60 p-6 sm:p-8"
            >
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                <span className="text-cyan-300/90">
                  <MetricIconGlyph name={metric.icon} />
                </span>
                {metric.label}
              </dt>
              <dd className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {metric.value}
              </dd>
              <p className="text-pretty text-sm leading-relaxed text-white/65">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default MetricsBand;