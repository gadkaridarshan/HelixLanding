// helix: components/landing/personas/PersonasTabs.tsx
/**
 * @helix:story USER-308000
 *
 * PersonasTabs — small client island that powers the role-switcher
 * inside the Personas section. Renders a horizontal tab strip and
 * delegates panel rendering to the parent via a `renderPanel`
 * callback so the section stays a server component.
 *
 * Accessible: uses `role="tablist"` / `role="tab"` / `role="tabpanel"`
 * with `aria-selected`, arrow-key navigation, and a roving
 * `tabIndex` per the WAI-ARIA Authoring Practices.
 */
"use client";

import * as React from "react";

export interface PersonasTab {
  id: string;
  label: string;
  role: string;
  icon: string;
}

export interface PersonasTabsProps {
  tabs: ReadonlyArray<PersonasTab>;
  renderPanel: (tab: PersonasTab) => React.ReactNode;
  initialId?: string;
  className?: string;
}

function iconPath(name: string): React.ReactNode {
  switch (name) {
    case "founder":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2v20M5 9l7-7 7 7M5 15l7 7 7-7"
        />
      );
    case "staff":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"
        />
      );
    case "manager":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h18M3 12h18M3 17h12"
        />
      );
    case "lead":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 19l5-5 4 4 9-9M14 5h7v7"
        />
      );
    case "ai":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4zM5 12h14M6 16h12M8 20h8"
        />
      );
    default:
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"
        />
      );
  }
}

export function PersonasTabs({
  tabs,
  renderPanel,
  initialId,
  className,
}: PersonasTabsProps): React.ReactElement {
  const fallbackId = tabs[0]?.id ?? "";
  const [activeId, setActiveId] = React.useState<string>(
    initialId ?? fallbackId,
  );

  const activeIndex = React.useMemo(
    () => Math.max(0, tabs.findIndex((t) => t.id === activeId)),
    [tabs, activeId],
  );
  const active = tabs[activeIndex] ?? tabs[0];

  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (idx: number): void => {
    const el = tabRefs.current[idx];
    if (el) el.focus();
  };

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    idx: number,
  ): void => {
    if (tabs.length === 0) return;
    switch (event.key) {
      case "ArrowRight": {
        event.preventDefault();
        const next = (idx + 1) % tabs.length;
        setActiveId(tabs[next]!.id);
        focusTab(next);
        break;
      }
      case "ArrowLeft": {
        event.preventDefault();
        const next = (idx - 1 + tabs.length) % tabs.length;
        setActiveId(tabs[next]!.id);
        focusTab(next);
        break;
      }
      case "Home": {
        event.preventDefault();
        setActiveId(tabs[0]!.id);
        focusTab(0);
        break;
      }
      case "End": {
        event.preventDefault();
        const last = tabs.length - 1;
        setActiveId(tabs[last]!.id);
        focusTab(last);
        break;
      }
      default:
        break;
    }
  };

  if (!active) {
    return <div className={className ?? ""} />;
  }

  return (
    <div className={className ?? ""}>
      <div
        role="tablist"
        aria-label="Persona selector"
        className="flex flex-wrap items-stretch justify-center gap-2 sm:gap-3"
      >
        {tabs.map((tab, idx) => {
          const selected = tab.id === active.id;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              role="tab"
              type="button"
              id={`persona-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`persona-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={(e) => onKeyDown(e, idx)}
              className={
                "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition " +
                (selected
                  ? "bg-brand-500 text-ink-950 shadow-[0_8px_30px_-12px_rgba(34,211,238,0.6)]"
                  : "bg-white/5 text-ink-200 ring-1 ring-inset ring-white/15 hover:bg-white/10")
              }
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                {iconPath(tab.icon)}
              </svg>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`persona-panel-${active.id}`}
        aria-labelledby={`persona-tab-${active.id}`}
        className="mt-8"
      >
        {renderPanel(active)}
      </div>
    </div>
  );
}

export default PersonasTabs;