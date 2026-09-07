// helix: components/landing/personas/PersonasTabs.tsx
"use client";

/**
 * @helix:story USER-308000
 *
 * PersonasTabs — interactive tab strip that swaps the highlighted persona
 * card. Client island because it manages local state (active tab).
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface PersonaItem {
  id: string;
  role: string;
  tagline: string;
  pain: string;
  value: string;
  bullets: string[];
  accent: "cyan" | "violet" | "fuchsia" | "emerald" | "amber";
}

export interface PersonasTabsProps {
  personas: PersonaItem[];
}

const accentMap: Record<PersonaItem["accent"], string> = {
  cyan: "from-cyan-400/30 to-cyan-500/10 text-cyan-200 ring-cyan-400/40",
  violet:
    "from-violet-400/30 to-violet-500/10 text-violet-200 ring-violet-400/40",
  fuchsia:
    "from-fuchsia-400/30 to-fuchsia-500/10 text-fuchsia-200 ring-fuchsia-400/40",
  emerald:
    "from-emerald-400/30 to-emerald-500/10 text-emerald-200 ring-emerald-400/40",
  amber: "from-amber-400/30 to-amber-500/10 text-amber-200 ring-amber-400/40",
};

export function PersonasTabs({
  personas,
}: PersonasTabsProps): React.ReactElement {
  const [activeId, setActiveId] = React.useState<string>(
    personas[0]?.id ?? "",
  );

  const active = React.useMemo(
    () => personas.find((p) => p.id === activeId) ?? personas[0],
    [activeId, personas],
  );

  return (
    <div className="mx-auto max-w-5xl">
      {/* Tab list */}
      <div
        role="tablist"
        aria-label="Personas"
        className="flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur"
      >
        {personas.map((p) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              id={`persona-tab-${p.id}`}
              aria-selected={isActive}
              aria-controls={`persona-panel-${p.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(p.id)}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
                isActive
                  ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                  : "text-slate-300 hover:text-white hover:bg-white/5",
              )}
            >
              {p.role}
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      {active ? (
        <div
          role="tabpanel"
          id={`persona-panel-${active.id}`}
          aria-labelledby={`persona-tab-${active.id}`}
          className={cn(
            "mt-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-8 ring-1 backdrop-blur",
            accentMap[active.accent],
          )}
        >
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                {active.tagline}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {active.role}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                <span className="font-semibold text-white/90">Pain: </span>
                {active.pain}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                <span className="font-semibold text-white/90">Helix: </span>
                {active.value}
              </p>
            </div>
            <ul className="lg:col-span-3 space-y-3">
              {active.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-current"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PersonasTabs;