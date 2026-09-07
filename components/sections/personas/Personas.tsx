// helix: components/sections/personas/Personas.tsx
/**
 * @helix:story USER-495000
 *
 * Personas — role-targeted value props for six user types:
 *   • Developer
 *   • Engineering Manager
 *   • Product Manager
 *   • AI/ML Engineer
 *   • Startup Founder
 *   • Enterprise Architect
 *
 * Pure server component. The tabs are interactive on the client via a
 * small dedicated client island (`PersonasTabs`), which keeps this file
 * a server component while still letting visitors switch between roles.
 *
 * Each panel renders a `PersonaCard` (the shared UI primitive in
 * `@/components/ui/persona-card`) for visual consistency with the rest
 * of the marketing surface.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { PersonaCard } from "@/components/ui/persona-card";
import { PersonasTabs } from "@/components/sections/personas/PersonasTabs";
import personas from "@/content/personas.json";

interface PersonasContent {
  body: string;
  bullets: ReadonlyArray<string>;
}

interface PersonasRole {
  id: string;
  label: string;
  valueProp: string;
  icon:
    | "Code2"
    | "Users"
    | "Briefcase"
    | "Cpu"
    | "Rocket"
    | "Building2";
  content: PersonasContent;
}

const roles = (personas as { roles: PersonasRole[] }).roles;

export function Personas(): React.ReactElement {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className="relative isolate py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.08),transparent_60%)]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Built for every role
          </p>
          <h2
            id="personas-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl lg:text-5xl"
          >
            See yourself in the workflow
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
            Pick the role that sounds most like you. Each one shows the
            exact value Helix delivers for that workflow — no fluff, no
            hand-waving.
          </p>
        </div>

        <div className="mt-12">
          <PersonasTabs
            roles={roles}
            labelledById="personas-heading"
            renderPanel={(role) => (
              <PersonaCard
                id={role.id}
                label={role.label}
                valueProp={role.valueProp}
                icon={role.icon}
                body={role.content.body}
                bullets={role.content.bullets}
              />
            )}
          />
        </div>
      </Container>
    </section>
  );
}

export default Personas;