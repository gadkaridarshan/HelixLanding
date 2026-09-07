// helix: components/sections/personas/Personas.tsx
/**
 * @helix:story USER-303000
 *
 * Personas — "Built for" grid.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { PersonaCard } from "@/components/sections/PersonaCard";
import personasData from "@/content/personas.json";

interface PersonaItem {
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
          className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {content.items.map((persona) => (
            <li key={persona.id} className="h-full">
              <PersonaCard
                role={persona.role}
                title={persona.title}
                description={persona.description}
                outcomes={persona.outcomes}
                variant="panel"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Personas;