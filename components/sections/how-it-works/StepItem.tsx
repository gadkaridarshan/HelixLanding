// helix: components/sections/how-it-works/StepItem.tsx
/**
 * @helix:story USER-507000
 *
 * StepItem — single step row used by the HowItWorks section.
 *
 * Pure server component. Renders the step number, title,
 * description, and bullet list. Visuals are pure Tailwind utilities
 * + brand tokens.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface StepItemBullet {
  label: string;
  detail: string;
}

export interface StepItemProps {
  number: string;
  title: string;
  description: string;
  bullets: ReadonlyArray<string>;
  /** Optional tailwind className override. */
  className?: string;
  /** Render an alternative "reverse" layout for alternating rows. */
  reverse?: boolean;
}

export function StepItem({
  number,
  title,
  description,
  bullets,
  className,
  reverse = false,
}: StepItemProps): React.ReactElement {
  return (
    <li
      className={cn(
        "group relative grid grid-cols-1 gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur",
        "sm:grid-cols-12 sm:p-8",
        "transition-colors duration-200 hover:border-brand-500/40 hover:bg-white/[0.05]",
        className,
      )}
    >
      {/* Step number tile */}
      <div
        className={cn(
          "sm:col-span-3 flex items-start",
          reverse ? "sm:order-last" : undefined,
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/30 to-accent-500/20 text-base font-semibold tracking-tight text-brand-200 ring-1 ring-inset ring-brand-500/40"
        >
          {number}
        </span>
      </div>

      {/* Copy column */}
      <div className="sm:col-span-9">
        <h3 className="text-lg font-semibold tracking-tight text-ink-50 sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-300 sm:text-base">
          {description}
        </p>

        {bullets.length > 0 ? (
          <ul role="list" className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-sm text-ink-200"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-400"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}

export default StepItem;