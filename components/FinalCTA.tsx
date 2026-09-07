// helix: components/FinalCTA.tsx
/**
 * @helix:story USER-82000
 *
 * FinalCTA — the closing "ship atomic PRs" call-to-action banner that
 * sits just above the site footer. This is the visitor's last chance
 * to convert before the footer links take over.
 *
 * Pure server component. CTA copy and links are sourced from
 * `lib/brand.ts` so the canonical URL / GitHub URL stay in lock-step
 * with the rest of the site. Renders with the shared `Container`
 * primitive and `Button` CTA — primary → live orchestrator,
 * secondary → GitHub repo.
 *
 * Lives at the canonical path `components/FinalCTA.tsx` (this file).
 * Re-export shims at `components/sections/FinalCTA.tsx` and
 * `app/components/sections/FinalCTA.tsx` point here so both import
 * paths resolve to the same implementation.
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
      {/* Layered aurora + radial spotlight background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div
          className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
          style={{ filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/3 translate-y-1/3 rounded-full bg-accent-500/20 blur-3xl"
          style={{ filter: "blur(120px)" }}
        />
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          {/* Eyebrow pill */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400"
            />
            Ready when you are
          </span>

          <h2
            id="final-cta-heading"
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Stop reviewing one giant diff.{" "}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent-400 bg-clip-text text-transparent">
              Ship atomic ones.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-ink-300 sm:text-lg">
            {brand.name} turns every prompt into a chain of small, reviewable,
            verified units — so your AI coding agents ship code you can
            actually merge. Try the live orchestrator or read the source on
            GitHub.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={brand.url}
              external
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Try the live orchestrator
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </Button>
            <Button
              href={brand.githubUrl}
              external
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Read on GitHub
            </Button>
          </div>

          <p className="mt-6 text-xs text-ink-400">
            Open source · Self-hostable · Built for teams that review their PRs
          </p>
        </div>
      </Container>

      {/* Decorative bottom edge to ease into footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </section>
  );
}

export default FinalCTA;