// helix: components/landing/final-cta/FinalCTA.tsx
/**
 * @helix:story USER-303000
 *
 * FinalCTA — last call-to-action block before the footer. Reinforces
 * the value prop and gives a single, unmissable "request access"
 * affordance.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

export function FinalCTA(): React.ReactElement {
  return (
    <section
      id="cta"
      className="relative scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80 px-8 py-14 text-center shadow-[0_30px_80px_-30px_rgba(34,211,238,0.25)] sm:px-14 sm:py-20">
          {/* glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-[50%] rounded-full bg-violet-500/20 blur-3xl"
          />

          <p className="relative hx-chip mx-auto">
            <span className="hx-chip-dot" aria-hidden="true" />
            <span>Private beta — limited seats</span>
          </p>

          <h2
            id="cta-heading"
            className="relative mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Stop reviewing{" "}
            <span className="hx-text-gradient">1,000-line AI diffs</span>.
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Get onboarded to the Helix private beta and ship your next AI
            feature as a series of small, verified, mergeable PRs.
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:hello@helix.dev?subject=Helix%20early%20access" className="hx-btn-primary">
              Request early access
            </a>
            <a
              href="https://github.com/gadkaridarshan/Helix"
              target="_blank"
              rel="noreferrer noopener"
              className="hx-btn-secondary"
            >
              Read the source
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;