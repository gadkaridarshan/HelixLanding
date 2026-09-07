// helix: components/Personas.tsx
/**
 * @helix:story USER-308000
 *
 * Personas — role-targeted value props for Developer, Tech Lead, AI Engineer,
 * Product Manager, and Founder. Tabbed UI that swaps the highlighted role.
 *
 * Pure server component. The tabs are interactive on the client via a small
 * dedicated client island (`PersonasTabs`), which keeps this file a server
 * component while still letting visitors switch between roles.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { PersonasTabs } from "@/components/landing/personas/PersonasTabs";
import { personas } from "@/content/personas";

export interface PersonasProps {
  className?: string;
}

export function Personas({ className }: PersonasProps): React.ReactElement {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      {/* Decorative background — soft aurora glow + faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-200">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-brand-400"
            />
            Built for every role
          </p>
          <h2
            id="personas-heading"
            className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            One orchestrator. Five ways to win.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-200 sm:text-lg">
            Whether you write the code, review the PRs, or sign off the
            roadmap — Helix makes AI-driven delivery feel like a teammate you
            actually trust.
          </p>
        </div>

        <div className="mt-12 sm:mt-16">
          <PersonasTabs personas={personas} />
        </div>
      </Container>
    </section>
  );
}

export default Personas;