// helix: components/sections/FinalCTA.tsx
/**
 * @helix:story USER-349000
 *
 * FinalCTA section — canonical implementation.
 *
 * Closing conversion moment. Branded gradient panel, headline,
 * sub-copy, and primary CTA. Designed to be the last thing a
 * visitor reads.
 */

import type { ReactElement } from "react";

import { Container } from "@/components/ui/Container";

export function FinalCTA(): ReactElement {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative py-24 sm:py-32"
    >
      <Container>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-primary/30 via-brand-violet/20 to-brand-accent/30 p-12 text-center shadow-glow sm:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -top-24 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-brand-primary/40 blur-[100px]" />
            <div className="absolute -bottom-24 right-0 h-[20rem] w-[20rem] rounded-full bg-brand-accent/30 blur-[100px]" />
          </div>
          <h2
            id="cta-heading"
            className="text-3xl font-semibold tracking-tight text-ink-50 sm:text-5xl"
          >
            Ready to ship atomic PRs?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-100">
            Install Helix and watch your backlog decompose into reviewable
            steps in seconds. Open source, self-hostable, free to start.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#top"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink transition hover:bg-ink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
            >
              Get started — it&apos;s free
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-ink-50 backdrop-blur transition hover:bg-white/20"
            >
              Read the docs
            </a>
          </div>
          <p className="mt-6 text-xs text-ink-100/80">
            MIT licensed · Deploys to Vercel in 60 seconds · No vendor lock-in.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;