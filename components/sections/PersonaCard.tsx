// helix: components/sections/PersonaCard.tsx
/**
 * @helix:story USER-128000
 *
 * PersonaCard — reusable card for a single Helix persona.
 *
 * Renders one role (e.g. Solo Founder, Staff Engineer) with:
 *   • an icon glyph + role title + short description
 *   • "Pain points" Helix removes
 *   • "Outcomes" Helix delivers
 *
 * Pure server component — no client interactivity. Designed to be
 * composed inside the tabbed `Personas` section, used as a chip
 * strip, or rendered standalone in hero-adjacent contexts.
 *
 * Variants:
 *   • `panel` (default) — full card with all sections, used inside
 *     the tabbed Personas panel where each role gets full treatment.
 *   • `chip`  — compact icon + title + tagline, used as a clickable
 *     summary in dense layouts / horizontal persona strips.
 *
 * The component is data-driven: callers pass a `PersonaItem` shape
 * that matches the one already exported by `components/Personas.tsx`,
 * so the same JSON content (`@/content/personas.json`) feeds every
 * surface that renders personas.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface PersonaCardProps {
  /** The persona data to render. Matches the JSON-driven Personas shape. */
  persona: PersonaCardData;
  /** Visual density. `panel` = full card, `chip` = compact summary. */
  variant?: "panel" | "chip";
  /** Whether this card represents the currently active persona. */
  active?: boolean;
  /** Optional extra classes appended to the root element. */
  className?: string;
  /** Optional id used by tab labels (`aria-controls`) / buttons. */
  id?: string;
}

/**
 * The shape of a single persona. Mirrors `PersonaItem` from
 * `components/Personas.tsx` so this card can be fed directly from
 * the canonical personas JSON content.
 */
export interface PersonaCardData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  painPoints: ReadonlyArray<string>;
  outcomes: ReadonlyArray<string>;
  icon: string;
}

/**
 * A small registry of inline SVG icons used by every persona card.
 * Pure server, no external requests, no client JS. Keys match the
 * `icon` field in `content/personas.json`.
 */
const ICON_PATHS: Record<string, React.ReactNode> = {
  founder: (
    <>
      <path
        d="M12 4.5l1.7 3.7 4 .6-2.9 2.8.7 4-3.5-1.9-3.5 1.9.7-4-2.9-2.8 4-.6L12 4.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  engineer: (
    <>
      <path
        d="M8.5 8.5l-3 3 3 3M15.5 8.5l3 3-3 3M13.5 6.5l-3 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  manager: (
    <>
      <circle cx="9" cy="9" r="2.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 18c.8-2.5 3-4 5.5-4s4.7 1.5 5.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 18c.4-1.4 1.6-2.4 3-2.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
  lead: (
    <>
      <path
        d="M5 6h11M5 12h11M5 18h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="18.5" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  ai: (
    <>
      <rect
        x="5"
        y="6"
        width="14"
        height="11"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="9" cy="11" r="1.25" fill="currentColor" />
      <circle cx="15" cy="11" r="1.25" fill="currentColor" />
      <path
        d="M9.5 14.5c.8.7 2 .9 2.5.9s1.7-.2 2.5-.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 3v3M9 4l3 2 3-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

function PersonaIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}): React.ReactElement {
  const content = ICON_PATHS[name] ?? ICON_PATHS.engineer;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {content}
    </svg>
  );
}

function PainPointsList({
  items,
}: {
  items: ReadonlyArray<string>;
}): React.ReactElement {
  return (
    <ul className="mt-4 space-y-2 text-sm text-ink-300">
      {items.map((point) => (
        <li key={point} className="flex items-start gap-2">
          <span
            aria-hidden="true"
            className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400/80"
          />
          <span className="leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>
  );
}

function OutcomesList({
  items,
}: {
  items: ReadonlyArray<string>;
}): React.ReactElement {
  return (
    <ul className="mt-4 space-y-2 text-sm text-ink-100">
      {items.map((outcome) => (
        <li key={outcome} className="flex items-start gap-2">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-300"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2.5 6.5l2.4 2.4L9.5 3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="leading-relaxed">{outcome}</span>
        </li>
      ))}
    </ul>
  );
}

export function PersonaCard({
  persona,
  variant = "panel",
  active = false,
  className,
  id,
}: PersonaCardProps): React.ReactElement {
  if (variant === "chip") {
    return (
      <div
        id={id}
        role="group"
        aria-label={persona.title}
        data-active={active ? "true" : "false"}
        className={cn(
          "inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm transition-colors",
          active
            ? "border-brand-400/60 bg-brand-500/10 text-brand-100"
            : "border-white/10 bg-white/[0.03] text-ink-200 hover:border-white/20 hover:bg-white/[0.06]",
          className,
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "inline-flex h-7 w-7 items-center justify-center rounded-full",
            active ? "bg-brand-500/20 text-brand-200" : "bg-white/5 text-ink-200",
          )}
        >
          <PersonaIcon name={persona.icon} className="h-4 w-4" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-xs uppercase tracking-wide text-ink-400">
            For
          </span>
          <span className="font-medium">{persona.title}</span>
        </span>
      </div>
    );
  }

  return (
    <article
      id={id}
      aria-labelledby={`${persona.id}-title`}
      data-persona-id={persona.id}
      className={cn(
        "relative isolate flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_-30px_rgba(34,211,238,0.45)] transition-colors sm:p-8",
        active && "border-brand-400/40 bg-brand-500/[0.06]",
        className,
      )}
    >
      <header className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/30 to-accent-500/30 text-brand-200 ring-1 ring-inset ring-white/10"
        >
          <PersonaIcon name={persona.icon} className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300/90">
            {persona.tagline}
          </p>
          <h3
            id={`${persona.id}-title`}
            className="mt-1 text-xl font-semibold text-ink-50 sm:text-2xl"
          >
            {persona.title}
          </h3>
        </div>
      </header>

      <p className="mt-5 text-sm leading-relaxed text-ink-300 sm:text-base">
        {persona.description}
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <section aria-labelledby={`${persona.id}-pains`}>
          <h4
            id={`${persona.id}-pains`}
            className="text-xs font-semibold uppercase tracking-wider text-ink-400"
          >
            Pain points we remove
          </h4>
          <PainPointsList items={persona.painPoints} />
        </section>
        <section aria-labelledby={`${persona.id}-outcomes`}>
          <h4
            id={`${persona.id}-outcomes`}
            className="text-xs font-semibold uppercase tracking-wider text-brand-300"
          >
            Outcomes you get
          </h4>
          <OutcomesList items={persona.outcomes} />
        </section>
      </div>
    </article>
  );
}

export default PersonaCard;