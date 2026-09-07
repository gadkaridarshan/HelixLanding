// helix: components/sections/how-it-works/StepItem.tsx
/**
 * @helix:story USER-167000
 *
 * StepItem — single step primitive used by HowItWorks. Pure server
 * component. Renders an atom tile, step number, title, description,
 * and a bullet list.
 */
import * as React from "react";

export interface StepItemBullet {
  text: string;
}

export interface StepItemProps {
  number: string;
  title: string;
  description: string;
  bullets: ReadonlyArray<string>;
  className?: string;
}

function AtomGlyph(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function StepItem({
  number,
  title,
  description,
  bullets,
  className,
}: StepItemProps): React.ReactElement {
  return (
    <div
      className={
        "relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] " +
        (className ?? "")
      }
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
          <AtomGlyph />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Step {number}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
      <ul className="mt-5 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400"
            >
              <path
                d="M4 10l4 4 8-8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StepItem;