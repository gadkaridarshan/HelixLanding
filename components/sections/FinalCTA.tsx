// helix: components/sections/FinalCTA.tsx
/**
 * @helix:story USER-171000
 *
 * FinalCTA — closing high-contrast conversion band that appears just
 * before the footer. Renders a single, focused call-to-action with
 * one primary CTA (start / deploy) and one secondary CTA (open the
 * GitHub repository). Pure server component.
 */
import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface FinalCTAProps {
  className?: string;
}

export function FinalCTA({ className }: FinalCTAProps): React.ReactElement {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-28 " + (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 h-[260px] w-[520px] rounded-full bg-accent-500/15 blur-3xl" />
      </div>

      <Container>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center shadow-[0_24px_60px_-30px_rgba(34,211,238,0.45)] sm:px-12 sm:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-brand-400"
            />
            Ready when you are
          </span>

          <h2
            id="final-cta-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Ship the next feature with Helix tonight
          </h2>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-ink-200 sm:text-lg">
            Describe the goal in a sentence. Wake up to small, reviewable PRs
            that respect your codebase, pass your checks, and read like the
            work of a thoughtful teammate.
          </p>

          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="#early-access" variant="primary" size="lg">
              Start free during early access
            </Button>
            <Button
              href={brand.githubUrl}
              external
              variant="secondary"
              size="lg"
            >
              View on GitHub
            </Button>
          </div>

          <p className="text-xs text-ink-400">
            No credit card. No seat fees. Cancel any time.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;