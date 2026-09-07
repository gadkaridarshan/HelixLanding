// helix: components/Personas.tsx
/**
 * @helix:story USER-308000
 *
 * Personas — role-targeted value props for Solo Founders, Staff
 * Engineers, Engineering Managers, Tech Leads, and AI Engineers.
 * Renders one card per role with pain points and outcomes.
 *
 * Pure server component — no client JS. Content is sourced from
 * `@/content/personas.json` so marketing copy can evolve without
 * touching the component tree.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

const ICON_MAP: Record<string, React.ReactNode> = {
  rocket: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2v20M5 9l7-7 7 7M5 15l7 7 7-7"
      />
    </svg>
  ),
  shield: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"
      />
    </svg>
  ),
  graph: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7h18M3 12h18M3 17h12"
      />
    </svg>
  ),
  lead: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 19l5-5 4 4 9-9M14 5h7v7"
      />
    </svg>
  ),
  ai: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4zM5 12h14M6 16h12M8 20h8"
      />
    </svg>
  ),
};

function PersonaIcon({ name }: { name: string }): React.ReactElement {
  const node = ICON_MAP[name] ?? ICON_MAP["rocket"];
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300"
    >
      {node}
    </span>
  );
}

function PersonaCard({
  persona,
}: {
  persona: PersonaItem;
}): React.ReactElement {
  return (
    <article
      id={`persona-${persona.id}`}
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.07]"
    >
      <header className="flex items-center gap-3">
        <PersonaIcon name={persona.icon} />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            {persona.tagline}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-ink-50">
            {persona.title}
          </h3>
        </div>
      </header>
      <p className="mt-4 text-sm leading-relaxed text-ink-300">
        {persona.description}
      </p>
      <div className="mt-5 grid flex-1 gap-4 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-400">
            Pain points
          </p>
          <ul className="mt-3 space-y-2">
            {persona.painPoints.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-ink-200">
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            Outcomes
          </p>
          <ul className="mt-3 space-y-2">
            {persona.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex gap-2 text-sm text-ink-200"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Personas({
  className,
}: PersonasProps): React.ReactElement {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className={
        "relative isolate scroll-mt-24 py-20 sm:py-28 lg:py-32 " +
        (className ?? "")
      }
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.10),transparent_60%)]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          headingId="personas-heading"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((persona) => (
            <PersonaCard key={persona.id} persona={persona} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Personas;