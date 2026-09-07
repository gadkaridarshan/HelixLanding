// helix: components/landing/personas/PersonasTabs.tsx
"use client";

/**
 * @helix:story USER-308000
 *
 * PersonasTabs — small client-side island that powers the role tabs on
 * the Personas section. Keeps the parent `Personas` component a pure
 * server component while still allowing interactive role switching.
 */
import * as React from "react";

export interface PersonaTabDescriptor {
  id: string;
  label: string;
  role: string;
  description: string;
  bullets: ReadonlyArray<string>;
  painPoints: ReadonlyArray<string>;
  icon: string;
}

export interface PersonasTabsProps {
  tabs: ReadonlyArray<PersonaTabDescriptor>;
  renderPanel: (tab: PersonaTabDescriptor) => React.ReactNode;
}

export function PersonasTabs({
  tabs,
  renderPanel,
}: PersonasTabsProps): React.ReactElement {
  const [activeId, setActiveId] = React.useState<string>(
    tabs[0]?.id ?? ""
  );

  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label="Persona"
        className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === active?.id;
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
                "rounded-full px-4 py-2 text-sm font-medium transition " +
                (isActive
                  ? "bg-brand-500 text-ink-950 shadow-[0_8px_30px_-12px_rgba(34,211,238,0.6)]"
                  : "text-ink-200 hover:text-ink-50 hover:bg-white/10")
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {active ? (
          <div
            role="tabpanel"
            id={`persona-panel-${active.id}`}
            aria-labelledby={`persona-tab-${active.id}`}
          >
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                {active.role}
              </p>
              <p className="mt-2 text-base leading-relaxed text-ink-300 sm:text-lg">
                {active.description}
              </p>
            </div>
            {renderPanel(active)}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default PersonasTabs;