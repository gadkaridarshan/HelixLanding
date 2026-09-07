// helix: components/ui/step-item.tsx
/**
 * @helix:story USER-507000
 *
 * StepItem — single step in the HowItWorks explainer.
 *
 * Renders an atom-tile with the step number, a connector arrow to
 * the next step (hidden on the last item + on small viewports), the
 * step title, description, and a bullet list of sub-points.
 */
import * as React from "react";

export interface StepItemProps {
  number: string;
  title: string;
  description: string;
  bullets: ReadonlyArray<string>;
  isLast?: boolean;
  className?: string;
}

export function StepItem({
  number,
  title,
  description,
  bullets,
  isLast = false,
  className,
}: StepItemProps): React.ReactElement {
  return (
    <div
      className={
        "relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] " +
        (className ?? "")
      }
    >
      {/* Atom tile + step number */}
      <div className="flex items-center gap-4">
        <div
          aria-hidden="true"
          className="relative inline-flex h-14 w-14 items-center justify-center"
        >
          <span className="absolute inset-0 rounded-2xl bg-brand-500/10 ring-1 ring-inset ring-brand-400/30" />
          <span className="absolute inset-2 rounded-xl bg-gradient-to-br from-brand-400/30 to-accent-500/30 blur-md" />
          <span className="relative font-mono text-sm font-semibold text-brand-200">
            {number}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-ink-50">{title}</h3>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-300 sm:text-[0.95rem]">
        {description}
      </p>

      {bullets.length > 0 ? (
        <ul className="mt-4 space-y-2">
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

      {/* Connector arrow to the next step (desktop only, hidden on last) */}
      {!isLast ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-1.25rem] top-1/2 hidden -translate-y-1/2 text-brand-400 lg:block"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            role="presentation"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      ) : null}
    </div>
  );
}

export default StepItem;