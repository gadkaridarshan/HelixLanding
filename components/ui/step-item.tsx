// helix: components/ui/step-item.tsx
/**
 * @helix:story USER-507000
 *
 * StepItem — lowercase UI primitive representing one numbered step
 * inside the HowItWorks flow.
 *
 * Renders a step number badge, an optional atom/dot motif, the step
 * title, the description, and a list of bullet points. Pure server
 * component: zero JS shipped.
 *
 * Consumers normally compose `<HowItWorks />` directly; this primitive
 * exists so future sections (docs, pricing, onboarding) can render
 * the same step visual without duplicating markup.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface StepItemProps {
  className?: string;
  number: string;
  title: string;
  description: string;
  bullets?: ReadonlyArray<string>;
  /** Hide the trailing divider/connector (useful for the last item). */
  hideConnector?: boolean;
  /** Index (zero-based) of this step in its parent list. */
  index?: number;
}

/**
 * Atom motif — a small decorative SVG matching the Helix brand
 * (orbits + nucleus) used as a step identifier next to the number.
 */
function StepAtom(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-brand-300"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.25" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        transform="rotate(60 12 12)"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.5"
        transform="rotate(120 12 12)"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function StepItem({
  className,
  number,
  title,
  description,
  bullets,
  hideConnector = false,
  index,
}: StepItemProps): React.ReactElement {
  return (
    <li
      className={cn(
        "relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]",
        className,
      )}
    >
      {/* Number badge + atom motif */}
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 font-mono text-sm font-bold text-brand-300 ring-1 ring-inset ring-brand-400/20">
          {number}
        </span>
        <StepAtom />
        {typeof index === "number" ? (
          <span className="ml-auto text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400">
            Step {index + 1}
          </span>
        ) : null}
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-50 sm:text-xl">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-300 sm:text-base">
        {description}
      </p>

      {bullets && bullets.length > 0 ? (
        <ul className="mt-4 space-y-2" role="list">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-sm text-ink-200"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-400"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Optional vertical connector shown on lg+ to imply flow */}
      {!hideConnector ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 left-1/2 hidden h-6 w-px -translate-x-1/2 bg-gradient-to-b from-brand-500/60 to-brand-500/0 lg:block"
        />
      ) : null}
    </li>
  );
}

export default StepItem;