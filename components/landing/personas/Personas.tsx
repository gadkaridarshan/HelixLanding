// helix: components/landing/personas/Personas.tsx
/**
 * @helix:story USER-993000
 *
 * Personas — section enumerating every user type the live site targets,
 * each with pain points and outcomes.
 */
import * as React from "react";
import { personasContent } from "@/lib/content";

export interface PersonasProps {
  className?: string;
}

function PersonaIcon({ name }: { name: string }): React.ReactElement {
  const common = "h-5 w-5 text-cyan-300";
  switch (name) {
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M5 19c0-4 4-12 9-14 1 5-2 13-9 14z" />
          <path d="M9 14c-2 1-4 3-5 5" />
          <circle cx="14" cy="10" r="1.5" fill="currentColor" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="m9 15 2-6 6-2-2 6z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M4 20V8M10 20V4M16 20v-8M22 20H2" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6z" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6" strokeLinecap="round" />
          <path d="m6 6 3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export function Personas({ className }: PersonasProps): React.ReactElement {
  const { eyebrow, heading, description, items } = personasContent;

  return (
    <section
      id="personas"
      className={"relative py-20 sm:py-24 " + (className ?? "")}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      />
      <div
        aria-hidden="true"
        className="absolute -top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 right-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            {eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((persona) => (
            <article
              key={persona.id}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-400/15 ring-1 ring-inset ring-cyan-400/20">
                  <PersonaIcon name={persona.icon} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate-50">
                    {persona.title}
                  </h3>
                  <p className="text-xs text-cyan-300">{persona.tagline}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {persona.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="mb-2 font-semibold uppercase tracking-wider text-slate-500">
                    Pain points
                  </p>
                  <ul className="space-y-1.5 text-slate-400">
                    {persona.painPoints.map((p) => (
                      <li key={p} className="flex gap-1.5">
                        <span
                          aria-hidden="true"
                          className="mt-1 h-1 w-1 flex-none rounded-full bg-rose-400"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold uppercase tracking-wider text-slate-500">
                    Outcomes
                  </p>
                  <ul className="space-y-1.5 text-slate-300">
                    {persona.outcomes.map((o) => (
                      <li key={o} className="flex gap-1.5">
                        <span
                          aria-hidden="true"
                          className="mt-1 h-1 w-1 flex-none rounded-full bg-cyan-400"
                        />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Personas;