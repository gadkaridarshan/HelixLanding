// helix: components/landing/personas/PersonasTabs.tsx
/**
 * @helix:story USER-23000
 *
 * PersonasTabs — client island that powers the role tabs in the
 * Personas section. The parent `Personas` component stays a pure
 * server component, while this small client island handles the
 * active-tab state.
 */
"use client";

import * as React from "react";

import { cn } from "@/components/ui/cn";
import type { Persona } from "@/content/personas";

export interface PersonasTabsProps {
  personas: ReadonlyArray<Persona>;
  className?: string;
}

export function PersonasTabs({
  personas,
  className,
}: PersonasTabsProps): React.ReactElement {
  const [activeId, setActiveId] = React.useState<string>(
    personas[0]?.id ?? "",
  );
  const active = personas.find((p) => p.id === activeId) ?? personas[0];

  if (!active) {
    return <div className={className} />;
  }

  return (
    <div className={cn("mt-10", className)}>
      <div
        role="tablist"
        aria-label="Personas"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {personas.map((persona) => {
          const isActive = persona.id === active.id;
          return (
            <button
              key={persona.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(persona.id)}
              className={cn(
                "rounded-pill border px-4 py-1.5 text-sm font-medium transition",
                isActive
                  ? "border-transparent bg-white text-slate-950"
                  : "border-white/15 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white",
              )}
            >
              {persona.shortRole}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        aria-labelledby={`persona-tab-${active.id}`}
        className="mx-auto mt-8 max-w-3xl rounded-card border border-white/10 bg-white/5 p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
          {active.role}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
          {active.headline}
        </h3>
        <p className="mt-3 text-base text-slate-300">{active.description}</p>
        <ul className="mt-5 space-y-2 text-sm text-slate-200">
          {active.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
              />
              {bullet}
            </li>
          ))}
        </ul>
        <a
          href={active.ctaHref}
          className="mt-6 inline-flex items-center justify-center rounded-pill bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          {active.ctaLabel}
        </a>
      </div>
    </div>
  );
}

export default PersonasTabs;