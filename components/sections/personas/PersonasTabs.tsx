// helix: components/sections/personas/PersonasTabs.tsx
/**
 * @helix:story USER-495000
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

function panelId(itemId: string): string {
  return `persona-panel-${itemId}`;
}

function tabId(itemId: string): string {
  return `persona-tab-${itemId}`;
}

export function PersonasTabs({
  items,
  children,
  initialId,
}: PersonasTabsProps): React.ReactElement {
  const fallbackId = items[0]?.id ?? "";
  const [activeId, setActiveId] = React.useState<string>(initialId ?? fallbackId);
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = React.useMemo(
    () => items.findIndex((item) => item.id === activeId),
    [items, activeId],
  );

  const focusTab = React.useCallback((index: number) => {
    const node = tabRefs.current[index];
    if (node) node.focus();
  }, []);

  const moveSelection = React.useCallback(
    (nextIndex: number) => {
      const safe = (nextIndex + items.length) % items.length;
      const next = items[safe];
      if (!next) return;
      setActiveId(next.id);
      // Defer focus until after re-render commits.
      window.requestAnimationFrame(() => focusTab(safe));
    },
    [items, focusTab],
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          moveSelection(index + 1);
          break;
        case "ArrowLeft":
          event.preventDefault();
          moveSelection(index - 1);
          break;
        case "Home":
          event.preventDefault();
          moveSelection(0);
          break;
        case "End":
          event.preventDefault();
          moveSelection(items.length - 1);
          break;
        default:
          break;
      }
    },
    [moveSelection, items.length],
  );

  const active = items[activeIndex] ?? items[0];

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label="Personas"
        aria-orientation="horizontal"
        className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur"
      >
        {items.map((item, index) => {
          const selected = item.id === activeId;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={tabId(item.id)}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId(item.id)}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={
                "rounded-full px-4 py-1.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 " +
                (selected
                  ? "bg-brand-500 text-ink-950 shadow-[0_4px_24px_-8px_rgba(34,211,238,0.6)]"
                  : "text-ink-300 hover:text-ink-100")
              }
            >
              {item.role}
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {active ? (
          <div
            key={active.id}
            id={panelId(active.id)}
            role="tabpanel"
            aria-labelledby={tabId(active.id)}
            tabIndex={0}
          >
            {children(active)}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default PersonasTabs;