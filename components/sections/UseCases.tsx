// helix: components/sections/UseCases.tsx
/**
 * @helix:story USER-397000
 *
 * UseCases — landing-page section showcasing four concrete Helix
 * scenarios (parallel agent fan-out, atomic work breakdown, Vercel
 * preview deploy, multi-persona coverage) for buyers evaluating
 * ROI and fit.
 *
 * Pure server component. Content is sourced from
 * `@/lib/content/useCases` so copy stays consistent across surfaces.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/components/ui/cn";

import { USE_CASES, type UseCaseAccent } from "@/lib/content/useCases";

export interface UseCasesProps {
  className?: string;
}

const ACCENT_CLASSES: Readonly<Record<UseCaseAccent, string>> = {
  cyan: "from-cyan-400/20 via-cyan-400/5 text-cyan-300",
  violet: "from-violet-400/20 via-violet-400/5 text-violet-300",
  fuchsia: "from-fuchsia-400/20 via-fuchsia-400/5 text-fuchsia-300",
  emerald: "from-emerald-400/20 via-emerald-400/5 text-emerald-300",
};

const ACCENT_BORDER: Readonly<Record<UseCaseAccent, string>> = {
  cyan: "hover:border-cyan-400/40",
  violet: "hover:border-violet-400/40",
  fuchsia: "hover:border-fuchsia-400/40",
  emerald: "hover:border-emerald-400/40",
};

function ScenarioIcon({
  name,
}: {
  name: (typeof USE_CASES)[number]["icon"];
}): React.ReactElement {
  const common = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "h-5 w-5",
  } as const;

  switch (name) {
    case "fanout":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h4m10 0h4M12 3v4m0 10v4M7.5 7.5l2.5 2.5m4 4l2.5 2.5M16.5 7.5L14 10m-4 4l-2.5 2.5"
          />
        </svg>
      );
    case "atomic":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    case "deploy":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM12 12l8-4.5M12 12L4 7.5M12 12v9"
          />
        </svg>
      );
    case "personas":
    default:
      return (
        <svg {...common}>
          <circle cx="8" cy="9" r="2.5" />
          <circle cx="16" cy="9" r="2.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 19c1-2.5 3-4 5-4s4 1.5 5 4M14 19c1-2.5 3-4 5-4"
          />
        </svg>
      );
  }
}

function UseCaseCard({
  useCase,
}: {
  useCase: (typeof USE_CASES)[number];
}): React.ReactElement {
  return (
    <article
      className={cn(
        "group relative isolate flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors",
        ACCENT_BORDER[useCase.accent],
      )}
      data-use-case-id={useCase.id}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br to-transparent opacity-80",
          ACCENT_CLASSES[useCase.accent],
        )}
      />

      <header className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]",
            ACCENT_CLASSES[useCase.accent].split(" ").slice(-1)[0],
          )}
        >
          {useCase.role}
        </span>
        <span className="text-white/70 transition-colors group-hover:text-white">
          <ScenarioIcon name={useCase.icon} />
        </span>
      </header>

      <h3 className="text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {useCase.headline}
      </h3>

      <p className="text-pretty text-sm leading-relaxed text-white/70 sm:text-base">
        {useCase.scenario}
      </p>

      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          Outcome
        </p>
        <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
          {useCase.outcome}
        </p>
      </div>

      <figure className="mt-auto border-t border-white/10 pt-4">
        <blockquote className="text-pretty text-sm italic leading-relaxed text-white/80">
          “{useCase.quote}”
        </blockquote>
        <figcaption className="mt-2 text-xs text-white/50">
          — {useCase.attribution}
        </figcaption>
      </figure>
    </article>
  );
}

export function UseCases({ className }: UseCasesProps): React.ReactElement {
  return (
    <section
      id="use-cases"
      aria-labelledby="use-cases-heading"
      className={cn("section-pad relative", className ?? "")}
    >
      <Container>
        <SectionHeading
          eyebrow="Use cases"
          heading="Concrete scenarios where Helix pays for itself"
          description="Four real workflows — from indie hackers to enterprise platforms — where atomic units, verification, and preview deploys turn one prompt into shipped product."
          align="center"
        />

        <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {USE_CASES.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default UseCases;