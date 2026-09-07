// helix: components/sections/Personas.tsx
/**
 * @helix:story USER-349000
 *
 * Personas section — canonical implementation.
 *
 * Renders four persona cards targeting the user segments discovered
 * on the existing Helix site: developer, founder / solo, platform
 * engineer, and enterprise evaluator.
 */

import type { ReactElement, ReactNode } from "react";

import { Container } from "@/components/ui/Container";

interface Persona {
  readonly role: string;
  readonly headline: string;
  readonly outcome: string;
  readonly glyph: ReactNode;
}

const PERSONAS: ReadonlyArray<Persona> = [
  {
    role: "Developer",
    headline: "Ship features, not PRs you have to defend.",
    outcome:
      "Hand Helix a Jira ticket and review clean, atomic diffs. Get back to the work you actually enjoy.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 18l-6-6 6-6M15 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    role: "Founder / Solo",
    headline: "One person, ten pull requests a day.",
    outcome:
      "Move like a team without hiring one. Helix is your 24/7 senior engineer who never sleeps.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    role: "Platform Engineer",
    headline: "Roll out AI safely across the org.",
    outcome:
      "Every change ships as a unit. Every unit is reviewable. Every review keeps the bar your team set.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="14"
          width="18"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
        <circle cx="7" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    role: "Enterprise Evaluator",
    headline: "Compliance, audit, and zero surprises.",
    outcome:
      "Helix keeps a full trail of every unit, every diff, and every approval. SOC 2-ready out of the box.",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Personas(): ReactElement {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className="relative py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
            Built for every kind of builder
          </p>
          <h2
            id="personas-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl"
          >
            Whoever you are, Helix has a workflow for you.
          </h2>
          <p className="mt-4 text-lg text-ink-300">
            From solo developers to enterprise platform teams — Helix adapts to
            the way you ship.
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PERSONAS.map((persona) => (
            <li
              key={persona.role}
              className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-accent/40 hover:bg-white/[0.06]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent ring-1 ring-brand-accent/30">
                <span className="block h-6 w-6">{persona.glyph}</span>
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-300">
                {persona.role}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink-50">
                {persona.headline}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-300">
                {persona.outcome}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Personas;