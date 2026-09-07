// helix: components/landing/final-cta/FinalCTA.tsx
/**
 * @helix:story USER-303000
 *
 * FinalCTA — the last conversion surface before the footer.
 *
 *   • Bold closing headline.
 *   • Subheadline.
 *   • Primary CTA (early access) + ghost CTA (reference site, clearly
 *     labelled).
 *
 * Background uses a stronger gradient panel so it visually stands
 * apart from the FAQ above it.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export function FinalCTA(): React.ReactElement {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative py-24 sm:py-32"
    >
      <Container size="md">
        <div
          className="hx-surface-strong relative overflow-hidden p-10 text-center sm:p-14"
          style={{
            backgroundImage:
              "radial-gradient(800px 400px at 20% 0%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(700px 400px at 100% 100%, rgba(139,92,246,0.18), transparent 60%)",
          }}
        >
          <span className="hx-chip mx-auto">
            <span className="hx-chip-dot" />
            Early access · invite-only
          </span>

          <h2
            id="cta-heading"
            className="hx-heading mt-6"
          >
            Stop reviewing{" "}
            <span className="hx-text-gradient">sprawling AI diffs</span>.
          </h2>

          <p className="hx-subheading mx-auto mt-4">
            Join the teams using atomic work-breakdown to ship AI-generated
            code their reviewers actually trust.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:hello@helix.dev" className="hx-btn-primary">
              Request early access
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={brand.referenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hx-btn-ghost"
              aria-label={`${brand.name} reference site (visual / brand reference only, opens in a new tab)`}
              title="Reference site — visual / brand reference only"
            >
              See reference site
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;