// helix: components/Cta.tsx
/**
 * @helix:story USER-23000
 *
 * Cta — closing gradient call-to-action panel near the bottom of the
 * landing page. Encourages visitors to get early access or view the
 * repo on GitHub.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface CtaProps {
  className?: string;
}

export function Cta({ className }: CtaProps): React.ReactElement {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      <Container>
        <div className="relative overflow-hidden rounded-12 border border-white/10 bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-slate-900 p-10 sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -z-1 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-1/4 -z-1 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2
              id="cta-heading"
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Ship your next prompt as a small, reviewable PR.
            </h2>
            <p className="mt-4 text-base text-slate-200 sm:text-lg">
              Get early access to {brand.name} — the atomic work-breakdown
              orchestrator that turns prompts into verified, dependency-ordered
              units.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-pill bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-slate-100"
              >
                Get early access
              </a>
              <a
                href={brand.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-pill border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Cta;