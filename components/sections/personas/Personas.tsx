// helix: components/sections/personas/Personas.tsx
/**
 * @helix:story USER-303000
 *
 * Personas — "Built for" grid.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface PersonaItem {
  id: string;
  role: string;
  title: string;
  description: string;
  outcomes: ReadonlyArray<string>;
  quote?: string;
}

import personasData from "@/content/personas.json";

interface PersonasContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: ReadonlyArray<PersonaItem>;
}

const content: PersonasContent = personasData as PersonasContent;

export interface PersonasProps {
  className?: string;
}

export function Personas({ className }: PersonasProps): React.ReactElement {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className={"section-pad " + (className ?? "")}
    >
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
        />
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2"
        >
          {content.items.map((persona) => (
            <li
              key={persona.id}
              className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-300">
                {persona.role}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink-50">
                {persona.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {persona.description}
              </p>
              <ul role="list" className="mt-4 space-y-2 text-sm text-slate-300">
                {persona.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand-400"
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              {persona.quote ? (
                <blockquote className="mt-5 border-l-2 border-brand-400/60 pl-3 text-sm italic text-slate-300">
                  “{persona.quote}”
                </blockquote>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Personas;