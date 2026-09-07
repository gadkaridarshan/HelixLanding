// helix: components/landing/personas/PersonasTabs.tsx
/**
 * @helix:story USER-308000
 *
 * PersonasTabs — client island for the Personas section. Renders a
 * tab list and swaps the highlighted persona's content. The parent
 * owns the panel rendering through `renderPanel` so the panel can
 * include rich content (pain points, outcomes, descriptions, icons)
 * without bloating this client island.
 *
 * Kept as a tiny dedicated client component so the parent `Personas`
 * section can stay a pure server component.
 */
"use client";

import * as React from "react";

export interface PersonaTab {
  id: string;
  label: string;
  role: string;
  bullets: ReadonlyArray<string>;
  description?: string;
  painPoints?: ReadonlyArray<string>;
  icon?: string;
}

export interface PersonasTabsProps {
  tabs: ReadonlyArray<PersonaTab>;
  renderPanel?: (tab: PersonaTab) => React.ReactNode;
}

export function PersonasTabs({
  tabs,
  renderPanel,
}: PersonasTabsProps): React.ReactElement {
  const firstId = tabs[0]?.id ?? "";
  const [activeId, setActiveId] = React.useState<string>(firstId);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  if (!active) {
    return <div className="text-ink-300">No personas configured.</div>;
  }

  return (
    <div className="mx-auto mt-12 max-w-5xl">
      <div
        role="tablist"
        aria-label="Personas"
        className="flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === active.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`persona-panel-${tab.id}`}
              id={`persona-tab-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={
                "rounded-xl px-4 py-2 text-sm font-medium transition-colors " +
                (isActive
                  ? "bg-brand-500 text-ink-950 shadow-[0_8px_30px_-12px_rgba(34,211,238,0.6)]"
                  : "text-ink-300 hover:bg-white/5 hover:text-ink-50")
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {renderPanel ? (
        <>{renderPanel(active)}</>
      ) : (
        <div
          id={`persona-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`persona-tab-${active.id}`}
          className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            {active.label}
          </p>
          <p className="mt-3 text-xl font-semibold tracking-tight text-ink-50">
            {active.role}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {active.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl bg-white/5 p-4 text-sm text-ink-200"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-400"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}