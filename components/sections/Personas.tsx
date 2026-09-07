// helix: components/sections/Personas.tsx
/**
 * @helix:story USER-303000
 *
 * Personas — three-up social-proof / "who is this for" cards. Pure server
 * render.
 */
import * as React from "react";

export interface PersonaItem {
  readonly role: string;
  readonly quote: string;
  readonly benefit: string;
}

export interface PersonasProps {
  className?: string;
}

const PERSONAS: ReadonlyArray<PersonaItem> = [
  {
    role: "For staff engineers",
    quote:
      "I review 10× more AI changes per day — and every diff still fits in my head.",
    benefit:
      "Keep architectural oversight without reviewing 4,000-line mega-PRs.",
  },
  {
    role: "For indie hackers",
    quote:
      "Helix ships the boring half of the product while I focus on taste.",
    benefit:
      "Move faster without giving up the parts of the build that actually matter.",
  },
  {
    role: "For platform teams",
    quote:
      "Every AI change passes the same bar as a human change — by construction.",
    benefit:
      "Standardise how AI-generated code enters your repo, with full audit trail.",
  },
];

export function Personas({
  className,
}: PersonasProps): React.ReactElement {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className={
        "relative border-t border-white/5 py-20 md:py-28 " + (className ?? "")
      }
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-300">
            Who it&apos;s for
          </span>
          <h2
            id="personas-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Different teams. Same problem.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Helix is built for engineers who review their own AI-generated
            code — and who refuse to trade review quality for review speed.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {PERSONAS.map((persona) => (
            <li
              key={persona.role}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                {persona.role}
              </h3>
              <blockquote className="mt-4 text-lg font-medium leading-snug text-white">
                “{persona.quote}”
              </blockquote>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {persona.benefit}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Personas;