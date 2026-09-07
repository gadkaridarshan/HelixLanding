// helix: components/Personas.tsx
/**
 * @helix:story USER-308000
 *
 * Personas — role-targeted value props for Solo Founders, Staff
 * Engineers, Engineering Managers, Tech Leads, and AI Engineers.
 * Tabbed UI that swaps the highlighted role's pain points and
 * outcomes.
 *
 * Pure server component. The tabs are interactive on the client via
 * a small dedicated client island (`PersonasTabs`), which keeps this
 * file a server component while still letting visitors switch
 * between roles.
 *
 * Content is sourced from `@/content/personas.json` so the marketing
 * copy can evolve without touching the component tree.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { PersonasTabs } from "@/components/landing/personas/PersonasTabs";

import personasData from "@/content/personas.json";

export interface PersonasProps {
  className?: string;
}

export interface PersonaItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  painPoints: ReadonlyArray<string>;
  outcomes: ReadonlyArray<string>;
  icon: string;
}

interface PersonasContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: ReadonlyArray<PersonaItem>;
}

const content: PersonasContent = personasData as PersonasContent;

function PersonaIcon({ name }: { name: string }): React.ReactElement {
  const common =
    "h-5 w-5 text-brand-300 transition-colors group-hover:text-brand-200";
  switch (name) {
    case "rocket":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={common}
        >
          <path
            d="M14.5 3.5c2.5 0 6 3.5 6 6-1.5 4.5-4 7-8.5 8.5L8 14c1.5-4.5 4-7 6.5-10.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M5 19c1-2 3-3 5-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "compass":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={common}
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="m9 15 2-6 4-1-2 6-4 1Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "graph":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={common}
        >
          <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 6h8M6 8v8M18 8v8M8 18h8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "shield":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={common}
        >
          <path
            d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="m9 12 2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={common}
        >
          <path
            d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M6 18l4-4M14 10l4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className={common}
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );
  }
}

export function Personas({ className }: PersonasProps): React.ReactElement {
  const tabs = content.items.map((item) => ({
    id: item.id,
    label: item.title,
    role: item.tagline,
    bullets: item.outcomes,
    description: item.description,
    painPoints: item.painPoints,
    icon: item.icon,
  }));

  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      {/* Decorative background — soft aurora glow + faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            {content.eyebrow}
          </p>
          <h2
            id="personas-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl"
          >
            {content.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-300">
            {content.description}
          </p>
        </div>

        <PersonasTabs
          tabs={tabs}
          renderPanel={(tab) => {
            const item = content.items.find((p) => p.id === tab.id);
            if (!item) return null;
            return (
              <div
                key={tab.id}
                id={`persona-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`persona-tab-${tab.id}`}
                className="mt-10 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-[1.1fr_1fr]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/15 ring-1 ring-inset ring-brand-400/30">
                      <PersonaIcon name={item.icon} />
                    </span>
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                      {tab.label}
                    </p>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink-50">
                    {item.tagline}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-ink-300">
                    {item.description}
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      Pain points
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-ink-200">
                      {item.painPoints.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-400"
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      Outcomes with Helix
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-ink-200">
                      {item.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2">
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="mt-0.5 h-4 w-4 flex-none text-brand-400"
                          >
                            <path
                              d="m5 12 4 4 10-10"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </Container>
    </section>
  );
}

export default Personas;