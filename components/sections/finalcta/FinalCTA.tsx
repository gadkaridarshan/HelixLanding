// helix: components/sections/finalcta/FinalCTA.tsx
/**
 * @helix:story USER-303000
 *
 * FinalCTA — closing conversion moment right before the footer.
 * Two strong actions and a single-sentence value prop.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface FinalCTAProps {
  className?: string;
}

export function FinalCTA({ className }: FinalCTAProps): React.ReactElement {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-title"
      className={
        "relative isolate overflow-hidden py-24 sm:py-32 " +
        (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-3xl" />
      </div>
      <Container className="text-center">
        <h2
          id="final-cta-title"
          className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Ship verified AI code with{" "}
          <span className="gradient-text">{brand.name}</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/70 sm:text-lg">
          Open source. Model-agnostic. Built for teams that take main seriously.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={brand.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          >
            Get started — it&apos;s open source
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            See the features
          </a>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;