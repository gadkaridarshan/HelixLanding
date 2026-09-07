// helix: components/sections/final-cta/FinalCTA.tsx
/**
 * @helix:story USER-63000
 *
 * FinalCTA — closing high-contrast conversion band that appears just
 * before the footer.
 *
 * Composition:
 *   • Eyebrow + headline + supporting copy
 *   • Primary CTA (start / deploy) — solid brand fill
 *   • Secondary CTA (open the GitHub repository) — translucent glass
 *   • Background: layered radial glows + subtle grid mask so the band
 *     reads as a deliberate "closing argument", not a flat slab.
 *
 * Pure server component. No client interactivity — links are real
 * `<a>` tags so they work without JS and are deep-linkable.
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
      {/* Background — layered radial glows over a deep slate ramp */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-[280px] w-[280px] rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
            Ready when you are
          </p>

          <h2
            id="final-cta-heading"
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl md:text-5xl"
          >
            Ship the next{" "}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent-400 bg-clip-text text-transparent">
              ten features
            </span>{" "}
            while you sleep.
          </h2>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
            Helix decomposes every prompt into atomic, reviewable units —
            runs them in order, verifies each against your repo, and opens
            small PRs. Start with a single repo, scale from there.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Button
              href={`mailto:${brand.contactEmail}?subject=Helix%20early%20access`}
              variant="primary"
              size="lg"
              external
            >
              Start deploying
            </Button>
            <Button
              href={brand.githubUrl}
              variant="secondary"
              size="lg"
              external
            >
              Open GitHub repo
            </Button>
          </div>

          <p className="mt-6 text-xs text-ink-400">
            No credit card. Open source. Self-host or run on Vercel.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;