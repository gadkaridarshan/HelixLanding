// helix: components/sections/personas/PersonasTabs.tsx
"use client";

/**
 * @helix:story USER-742000
 *
 * PersonasTabs — small client island that swaps the highlighted role.
 * Pure presentational: receives the role list + content map as props,
 * no global state. Keyboard navigable (←/→/Home/End), focus stays on
 * the active tab, and ARIA follows the WAI-ARIA tabs pattern.
 */
import * as React from "react";

export interface PersonaContent {
  /** Long-form blurb shown in the panel. */
  body: string;
  /** 2–4 short bullets. */
  bullets: ReadonlyArray<string>;
}

export interface PersonaRole {
  /** Stable id used for the key + tabpanel labelling. */
  id: string;
  /** Short role label rendered on the tab button. */
  label: string;
  /** One-line value prop shown beneath the label. */
  valueProp: string;
  /** Inline-SVG icon name from the icon set in Personas.tsx. */
  icon:
    | "Code2"
    | "Users"
    | "Briefcase"
    | "Cpu"
    | "Rocket"
    | "Building2";
  /** Rich content rendered in the tabpanel. */
  content: PersonaContent;
}

export interface PersonasTabsProps {
  roles: ReadonlyArray<PersonaRole>;
  /** Optional id used by the parent <section> for aria-labelledby. */
  labelledById?: string;
}

export function PersonasTabs({
  roles,
  labelledById,
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
          return;
      }
      event.preventDefault();
      setActiveIndex(next);
      focusTab(next);
    },
    [focusTab, roles.length],
  );

  if (roles.length === 0) {
    return <div className="text-slate-400">No personas to display.</div>;
  }

  const active = roles[activeIndex] ?? roles[0];
  const tablistId = React.useId();
  const panelId = `${tablistId}-panel`;

  return (
    <div className="mt-10 lg:mt-14">
      {/* Tab list */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        aria-label={labelledById ? undefined : "Personas"}
        className="flex flex-wrap justify-center gap-2 sm:gap-3"
      >
        {roles.map((role, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={role.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${tablistId}-tab-${role.id}`}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 " +
                (selected
                  ? "border-cyan-400/60 bg-cyan-400/10 text-white shadow-[0_0_0_1px_rgba(34,211,238,0.35)]"
                  : "border-white/10 bg-slate-900/40 text-slate-300 hover:border-white/20 hover:text-white")
              }
            >
              <span
                aria-hidden="true"
                className={
                  "inline-block h-1.5 w-1.5 rounded-full " +
                  (selected ? "bg-cyan-300" : "bg-slate-500")
                }
              />
              {role.label}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={panelId}
        aria-labelledby={`${tablistId}-tab-${active.id}`}
        tabIndex={0}
        className="mt-8 sm:mt-10"
      >
        <div className="mx-auto grid max-w-4xl gap-8 rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10 lg:p-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              Built for
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {active.label}
            </h3>
            <p className="mt-3 text-base text-cyan-300/90">
              {active.valueProp}
            </p>
          </div>
          <div>
            <p className="text-base leading-relaxed text-slate-300/90">
              {active.content.body}
            </p>
            <ul
              role="list"
              className="mt-5 space-y-2 text-sm text-slate-200/90"
            >
              {active.content.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-cyan-300"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonasTabs;