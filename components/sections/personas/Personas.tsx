// helix: components/sections/personas/Personas.tsx
/**
 * @helix:story USER-167000
 *
 * Personas — canonical audience-targeted value-prop section.
 *
 * Composed of:
 *   • `PersonasTabs` (client island, keyboard-navigable role switcher)
 *   • `PersonaCard`  (server-rendered value-prop card primitive)
 *   • `personas.json` content (sourced from `@/content/personas.json`)
 *
 * Renders at least four persona tiles (founders, PMs, engineering
 * leads, solo devs, agencies).
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import personasData from "@/content/personas.json";
import { PersonaCard } from "@/components/ui/persona-card";
import { PersonasTabs } from "./PersonasTabs";

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

const tabItems = content.items.map((p) => ({ id: p.id, role: p.role }));

export function Personas({ className }: PersonasProps): React.ReactElement {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className={
        "relative isolate scroll-mt-24 py-20 sm:py-28 " + (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          headingId="personas-heading"
        />

        <PersonasTabs items={tabItems}>
          {(active) => {
            const persona = content.items.find((p) => p.id === active.id);
            if (!persona) {
              return null;
            }
            return <PersonaCard persona={persona} />;
          }}
        </PersonasTabs>
      </Container>
    </section>
  );
}

export default Personas;