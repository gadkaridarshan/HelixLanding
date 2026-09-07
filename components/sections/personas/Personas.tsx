// helix: components/sections/personas/Personas.tsx
/**
 * @helix:story USER-495000
 *
 * Personas — canonical audience-targeted value-prop section.
 *
 * Composed of:
 *   • `PersonasTabs` (client island, keyboard-navigable role switcher)
 *   • `PersonaCard`  (server-rendered value-prop card primitive)
 *   • `personas.json` content (sourced from `@/content/personas.json`)
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import personasData from "@/content/personas.json";
import { PersonaCard } from "@/components/ui/persona-card";
import { PersonasTabs } from "@/components/sections/personas/PersonasTabs";

export interface PersonasProps {
  className?: string;
}

export interface PersonaItem {
  id: string;
  role: string;
  title: string;
  description: string;
  outcomes: ReadonlyArray<string>;
  quote?: string;
}

interface PersonasContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: ReadonlyArray<PersonaItem>;
}

const content: PersonasContent = personasData as PersonasContent;

export function Personas({ className }: PersonasProps): React.ReactElement {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-28 " + (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[360px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-brand-500/15 blur-3xl" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
        />

        <PersonasTabs items={content.items}>
          {(active) => <PersonaCard persona={active} />}
        </PersonasTabs>

        {/* Static list below tabs — visible to crawlers / no-JS */}
        <ul className="mt-12 hidden [html.no-js_&]:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((persona) => (
            <li key={persona.id}>
              <PersonaCard persona={persona} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Personas;