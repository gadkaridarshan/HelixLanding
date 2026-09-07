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

export function Personas({
  className,
}: PersonasProps): React.ReactElement {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            {content.eyebrow}
          </p>
          <h2
            id="personas-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl lg:text-5xl"
          >
            {content.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-300">
            {content.description}
          </p>
        </div>

        <div className="mt-12 sm:mt-16">
          <PersonasTabs items={content.items} />
        </div>
      </Container>
    </section>
  );
}

export default Personas;