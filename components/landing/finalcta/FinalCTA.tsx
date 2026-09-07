// helix: components/landing/finalcta/FinalCTA.tsx
/**
 * @helix:story USER-303000
 *
 * FinalCTA — closing call-to-action panel above the FAQ/footer area.
 * Server-rendered with a gradient backdrop and dual CTAs.
 */
import * as React from "react";

export function FinalCTA(): React.ReactElement {
  return (
    <section id="cta" aria-labelledby="cta-title" className="section-pad">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(800px 400px at 20% 20%, rgba(34,211,238,0.25), transparent 60%), radial-gradient(700px 350px at 80% 80%, rgba(139,92,246,0.25), transparent 60%), linear-gradient(135deg, #0a0f1f 0%, #0b1020 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-grid-overlay opacity-40"
          />

          <h2
            id="cta-title"
            className="h-display text-3xl font-semibold text-white sm:text-4xl"
          >
            Ready to ship{" "}
            <span className="text-gradient-brand">coherent code</span> with
            agents?
          </h2>
          <p className="mt-4 max-w-2xl text-brand-muted">
            Join the early-access cohort. We’ll help you wire Helix into your
            repo and your existing coding agent.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="mailto:hello@helix.dev" className="btn-primary">
              Request access
            </a>
            <a
              href="https://github.com/gadkaridarshan/Helix"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;