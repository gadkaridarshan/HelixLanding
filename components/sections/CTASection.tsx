// helix: components/sections/CTASection.tsx
/**
 * @helix:story USER-641000
 * @helix:story USER-303000
 * @helix:story USER-440000
 * @helix:story USER-868000
 *
 * CTASection — final, full-bleed call-to-action block at the bottom of
 * the landing surface, just above the footer.
 *
 * Two primary actions:
 *   1. GitHub → https://github.com/gadkaridarshan/Helix
 *   2. Live Site → https://helix-ai-orchestrator.vercel.app
 *
 * Self-contained: uses Container + globals.css tokens. Responsive.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export function CTASection(): React.ReactElement {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden border-t border-white/5 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-cyan-500/[0.06] to-transparent"
      />
      <Container>
        <div className="glass ring-glow mx-auto max-w-4xl rounded-3xl px-6 py-10 text-center sm:px-12 sm:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/90">
            Ready to ship verified code?
          </p>
          <h2
            id="cta-title"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            Stop reviewing 2,000-line <span className="gradient-text">AI PRs</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
            {brand.name} plans the work into atomic units, executes them in order,
            and verifies each one before it can merge. Main stays green.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={brand.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              Star on GitHub →
            </a>
            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Visit live site
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;