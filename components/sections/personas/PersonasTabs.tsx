// helix: components/sections/personas/PersonasTabs.tsx
/**
 * @helix:story USER-167000
 *
 * PersonasTabs — keyboard-navigable role switcher for the Personas
 * section. A small `"use client"` island that owns local UI state
 * for which persona is active and renders the matching child.
 *
 * Accessibility:
 *   • Implements the WAI-ARIA tabs pattern with `role="tablist"`,
 *     `role="tab"`, `aria-selected`, and `aria-controls`.
 *   • Keyboard support: Left/Right arrows move selection with
 *     roving tabindex, Home/End jump to ends, Enter/Space activate.
 *   • Each tab controls its panel via matching `aria-controls`/`id`.
 */
"use client";

import * as React from "react";

export interface PersonasTabsItem {
  id: string;
  role: string;
}

export interface PersonasTabsProps {
  items: ReadonlyArray<PersonasTabsItem>;
  children: (active: PersonasTabsItem) => React.ReactNode;
  initialId?: string;
}

function tabId(itemId: string): string {
  return `persona-tab-${itemId}`;
}

function panelId(itemId: string): string {
  return `persona-panel-${itemId}`;
}

export function PersonasTabs({
  items,
  children,
  initialId,
}: PersonasTabsProps): React.ReactElement {
  const fallbackId = items[0]?.id ?? "";
  const [activeId, setActiveId] = React.useState<string>(
    initialId && items.some((i) => i.id === initialId) ? initialId : fallbackId,
  );

  const active =
    items.find((i) => i.id === activeId) ?? items[0] ?? { id: "", role: "" };

  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = React.useCallback((idx: number) => {
    const el = tabRefs.current[idx];
    if (el) el.focus();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
    const idx = items.findIndex((i) => i.id === activeId);
    if (idx < 0) return;
    let next: number | null = null;
    switch (e.key) {
      case "ArrowRight":
        next = (idx + 1) % items.length;
        break;
      case "ArrowLeft":
        next = (idx - 1 + items.length) % items.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = items.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    const item = items[next];
    if (item) {
      setActiveId(item.id);
      focusTab(next);
    }
  };

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label="Choose a persona"
        className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur"
      >
        {items.map((item, idx) => {
          const selected = item.id === activeId;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              type="button"
              role="tab"
              id={tabId(item.id)}
              aria-selected={selected}
              aria-controls={panelId(item.id)}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              onKeyDown={onKeyDown}
              className={
                "rounded-xl px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 " +
                (selected
                  ? "bg-gradient-to-r from-cyan-400 to-violet-400 text-slate-950 shadow-[0_4px_18px_rgba(34,211,238,0.25)]"
                  : "text-slate-300 hover:bg-white/[0.06] hover:text-white")
              }
            >
              {item.role}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={panelId(active.id)}
        aria-labelledby={tabId(active.id)}
        className="mt-8"
      >
        {children(active)}
      </div>
    </div>
  );
}

export default PersonasTabs;