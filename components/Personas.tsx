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
        <div className="absolute -top-32 left-1/2 h-[480px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.18),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_80%)]" />
      </div>

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
            Built for every seat at the table
          </p>
          <h2
            id="personas-heading"
            className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Whether you write the code, review it, or ship it —{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Helix fits how you work.
            </span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            Pick the role closest to yours. Every persona gets a different
            angle on the same orchestrator — atomic work-breakdown, explicit
            dependencies, and reviewable PRs.
          </p>
        </div>

        <div className="mt-12">
          <PersonasTabs personas={personas} />
        </div>
      </Container>
    </section>
  );
}

export default Personas;