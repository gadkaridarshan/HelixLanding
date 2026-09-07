// helix: components/landing/features/Features.tsx
/**
 * @helix:story USER-993000
 *
 * Features — grid of Helix capability cards.
 */
import * as React from "react";
import { featuresContent } from "@/lib/content";

export interface FeaturesProps {
  className?: string;
}

function FeatureIcon({ name }: { name: string }): React.ReactElement {
  const common = "h-6 w-6 text-cyan-300";
  switch (name) {
    case "atom":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "convention":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 6h16M4 12h10M4 18h16" strokeLinecap="round" />
        </svg>
      );
    case "gate":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="4" y="10" width="16" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 1 1 8 0v3" />
        </svg>
      );
    case "branch":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="6" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M6 8v8M8 18h8M8 6h6a4 4 0 0 1 4 4v6" />
        </svg>
      );
    case "resume":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "local":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 10h18M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
          <path d="M7 15h6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export function Features({ className }: FeaturesProps): React.ReactElement {
  const { eyebrow, heading, description, items } = featuresContent;

  return (
    <section
      id="features"
      className={"relative py-20 sm:py-24 " + (className ?? "")}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-slate-950"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-violet-500/10 to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
            {eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-400/15 ring-1 ring-inset ring-cyan-400/20">
                <FeatureIcon name={item.icon} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-slate-50">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;