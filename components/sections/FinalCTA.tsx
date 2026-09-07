// helix: components/sections/FinalCTA.tsx
/**
 * @helix:story USER-63000
 *
 * FinalCTA — high-contrast closing conversion block at the bottom of
 * the page, just above the footer. Hosts the primary "Deploy Helix"
 * call-to-action plus a secondary GitHub link, framed inside a
 * gradient panel with an aurora glow.
 *
 * Pure server component — no client interactivity. Content is
 * hard-coded because this is a brand-level, low-change surface.
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
      id="get-started"
      aria-labelledby="final-cta-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-28 lg:py-32 " +
        (className ?? "")
      }
    >
      {/* Decorative background grid + aurora glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_30%,rgba(34,211,238,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_80%,rgba(139,92,246,0.18),transparent_70%)]" />
      </div>

      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-10 shadow-2xl shadow-brand-500/10 backdrop-blur sm:p-14 lg:p-20">
          {/* Inner aurora highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-64 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.35),transparent_70%)] blur-2xl"
            />

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-300">
              Ready when you are
            </p>
            <h2
              id="final-cta-heading"
              className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink-50 sm:text-5xl lg:text-6xl"
            >
              Ship small, reviewable PRs with {brand.name}.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-ink-300 sm:text-lg">
              One <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-brand-300">vercel --prod</code> away
              from a production landing page. Deploy the marketing site
              in under two minutes, then iterate on the copy as the
              product grows.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={brand.url} variant="primary" size="lg">
                Deploy {brand.name} now
                <span aria-hidden="true">→</span>
              </Button>
              <Button
                href={brand.githubUrl}
                external
                variant="secondary"
                size="lg"
              >
                <span aria-hidden="true">★</span>
                Star on GitHub
              </Button>
            </div>

            <p className="mt-6 text-xs text-ink-400">
              Free, MIT-licensed, and ready for your next deploy.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;