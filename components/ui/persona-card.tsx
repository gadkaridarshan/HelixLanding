// helix: components/ui/persona-card.tsx
/**
 * @helix:story USER-495000
 *
 * PersonaCard — shared UI primitive used by the Personas section to
 * render the active role's value prop, blurb, and supporting bullets.
 *
 * Pure server component. Styling matches the rest of the marketing
 * surface: dark glass card, gradient accent, ink/brand tokens via
 * Tailwind utilities.
 *
 * Visual structure:
 *   • Header: role icon + label + one-line value prop.
 *   • Body: long-form blurb.
 *   • Bullets: 2–4 outcome / proof points.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export type PersonaCardIconName =
  | "Code2"
  | "Users"
  | "Briefcase"
  | "Cpu"
  | "Rocket"
  | "Building2";

export interface PersonaCardProps {
  id: string;
  label: string;
  valueProp: string;
  icon: PersonaCardIconName;
  body: string;
  bullets: ReadonlyArray<string>;
  className?: string;
}

function PersonaIcon({
  name,
}: {
  name: PersonaCardIconName;
}): React.ReactElement {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "Code2":
      return (
        <svg {...common}>
          <path d="M9 8l-4 4 4 4" />
          <path d="M15 8l4 4-4 4" />
        </svg>
      );
    case "Users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M15 20c.3-2 1.7-3.5 4-3.5s3.5 1.5 3.5 3.5" />
        </svg>
      );
    case "Briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
          <path d="M3 13h18" />
        </svg>
      );
    case "Cpu":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </svg>
      );
    case "Rocket":
      return (
        <svg {...common}>
          <path d="M14 4c4 0 6 2 6 6 0 4-4 8-9 9-2-5-5-9-5-9s4-6 8-6z" />
          <circle cx="15" cy="9" r="1.5" />
          <path d="M9 15l-3 3M11 17l-2 4" />
        </svg>
      );
    case "Building2":
      return (
        <svg {...common}>
          <path d="M4 21V8l8-5 8 5v13" />
          <path d="M9 21v-6h6v6" />
          <path d="M8 11h2M8 14h2M14 11h2M14 14h2" />
        </svg>
      );
    default: {
      const exhaustive: never = name;
      void exhaustive;
      return <svg {...common} />;
    }
  }
}

export function PersonaCard({
  id,
  label,
  valueProp,
  icon,
  body,
  bullets,
  className,
}: PersonaCardProps): React.ReactElement {
  return (
    <article
      data-persona-id={id}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_-30px_rgba(2,6,23,0.8)] backdrop-blur sm:p-8",
        className,
      )}
    >
      {/* Gradient accent strip */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand-500/10 blur-3xl"
      />

      <header className="flex items-start gap-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300">
          <PersonaIcon name={icon} />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-300">
            {label}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-ink-50 sm:text-2xl">
            {valueProp}
          </h3>
        </div>
      </header>

      <p className="mt-5 text-pretty text-base leading-relaxed text-ink-200">
        {body}
      </p>

      {bullets.length > 0 ? (
        <ul className="mt-6 space-y-2">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 text-sm leading-relaxed text-ink-200"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-400 to-accent-400"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export default PersonaCard;