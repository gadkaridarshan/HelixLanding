// helix: components/ui/persona-card.tsx
/**
 * @helix:story USER-495000
 *
 * PersonaCard — server-rendered value-prop card for a single
 * persona. Used by the Personas section to render the active
 * persona (and by the no-JS fallback grid).
 *
 * Pure server component.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";
import type { PersonaItem } from "@/components/sections/personas/Personas";

export interface PersonaCardProps {
  persona: PersonaItem;
  className?: string;
}

export function PersonaCard({
  persona,
  className,
}: PersonaCardProps): React.ReactElement {
  return (
    <article
      data-persona-id={persona.id}
      className={cn(
        "relative isolate flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur",
        "transition-colors hover:border-brand-400/40 hover:bg-white/[0.06]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-500/10 via-transparent to-accent-500/10"
      />

      <header className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-500 text-base font-semibold text-ink-950">
          {persona.role.slice(0, 1).toUpperCase()}
        </span>
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-wider text-ink-400">
            {persona.role}
          </span>
          <h3 className="text-lg font-semibold text-ink-50">{persona.title}</h3>
        </div>
      </header>

      <p className="text-sm leading-6 text-ink-300">{persona.description}</p>

      <ul className="flex flex-col gap-2 text-sm text-ink-200">
        {persona.outcomes.map((outcome) => (
          <li key={outcome} className="flex items-start gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="mt-0.5 h-4 w-4 flex-none text-brand-400"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      {persona.quote ? (
        <blockquote className="mt-auto border-l-2 border-brand-400/60 pl-3 text-sm italic text-ink-300">
          “{persona.quote}”
        </blockquote>
      ) : null}
    </article>
  );
}

export default PersonaCard;