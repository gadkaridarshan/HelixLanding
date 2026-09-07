"use client";

// helix: components/sections/personas/PersonasTabs.tsx
/**
 * @helix:story USER-495000
 *
 * PersonasTabs — small client island that swaps the highlighted role.
 * Pure presentational: receives the role list as props (no global
 * state). Keyboard navigable (←/→/Home/End), focus stays on the
 * active tab, and ARIA follows the WAI-ARIA tabs pattern.
 *
 * The panel renderer is injected by the parent server component so
 * this client island owns zero copy/layout — only the active index
 * state.
 */
import * as React from "react";

export interface PersonaContent {
  /** Long-form blurb shown in the panel. */
  body: string;
  /** 2–4 short bullets. */
  bullets: ReadonlyArray<string>;
}

export type PersonaIconName =
  | "Code2"
  | "Users"
  | "Briefcase"
  | "Cpu"
  | "Rocket"
  | "Building2";

export interface PersonaRole {
  /** Stable id used for the key + tabpanel labelling. */
  id: string;
  /** Short role label rendered on the tab button. */
  label: string;
  /** One-line value prop shown beneath the label. */
  valueProp: string;
  /** Inline-SVG icon name from the shared icon set. */
  icon: PersonaIconName;
  /** Rich content rendered in the tabpanel. */
  content: PersonaContent;
}

export interface PersonasTabsProps {
  roles: ReadonlyArray<PersonaRole>;
  /** Optional id used by the parent <section> for aria-labelledby. */
  labelledById?: string;
  /** Renderer for the active panel — typically a `<PersonaCard />`. */
  renderPanel: (role: PersonaRole) => React.ReactNode;
}

const ICON_STROKE: React.SVGProps<SVGSVGElement> = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function RoleIcon({
  name,
}: {
  name: PersonaIconName;
}): React.ReactElement {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    ...ICON_STROKE,
  } satisfies React.SVGProps<SVGSVGElement>;

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

export function PersonasTabs({
  roles,
  labelledById,
  renderPanel,
}: PersonasTabsProps): React.ReactElement {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = React.useCallback((index: number) => {
    const node = tabRefs.current[index];
    if (node) node.focus();
  }, []);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      const last = roles.length - 1;
      let next: number | null = null;
      switch (event.key) {
        case "ArrowRight":
          next = index === last ? 0 : index + 1;
          break;
        case "ArrowLeft":
          next = index === 0 ? last : index - 1;
          break;
        case "Home":
          next = 0;
          break;
        case "End":
          next = last;
          break;
        default:
          break;
      }
      if (next !== null) {
        event.preventDefault();
        setActiveIndex(next);
        // Defer focus to next tick so React commits the new active
        // state before we re-focus the freshly mounted button.
        window.requestAnimationFrame(() => focusTab(next as number));
      }
    },
    [focusTab, roles.length],
  );

  if (roles.length === 0) {
    return <div className="text-center text-ink-300">No personas yet.</div>;
  }

  const active = roles[activeIndex];
  const tabsId = "personas-tablist";

  return (
    <div className="mx-auto max-w-5xl">
      <div
        role="tablist"
        id={tabsId}
        aria-label="Personas"
        aria-labelledby={labelledById}
        className="flex flex-wrap items-stretch justify-center gap-2 sm:gap-3"
      >
        {roles.map((role, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={role.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`persona-tab-${role.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`persona-panel-${role.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={
                "group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition " +
                (selected
                  ? "border-brand-400/60 bg-brand-500/10 text-brand-200 shadow-[0_0_0_1px_rgba(34,211,238,0.25)]"
                  : "border-white/10 bg-white/5 text-ink-200 hover:bg-white/10 hover:text-ink-50")
              }
            >
              <span
                className={
                  "inline-flex h-7 w-7 items-center justify-center rounded-full " +
                  (selected
                    ? "bg-brand-500/20 text-brand-300"
                    : "bg-white/5 text-ink-200 group-hover:text-ink-50")
                }
              >
                <RoleIcon name={role.icon} />
              </span>
              <span className="whitespace-nowrap">{role.label}</span>
            </button>
          );
        })}
      </div>

      <div
        key={active.id}
        id={`persona-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`persona-tab-${active.id}`}
        className="mt-8"
      >
        {renderPanel(active)}
      </div>
    </div>
  );
}

export default PersonasTabs;