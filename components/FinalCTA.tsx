// helix: components/FinalCTA.tsx
/**
 * @helix:story USER-82000
 *
 * FinalCTA — last call-to-action banner that sits directly above the
 * footer. Designed as the final conversion moment: gradient headline,
 * sub-copy, and dual CTAs (live site + GitHub).
 *
 * Pure server component. Brand surface is sourced from `lib/brand.ts`.
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
      id="cta"
      aria-labelledby="cta-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-24 lg:py-28 " +
        (className ?? "")
      }
    >
      {/* Aurora backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-1/2 -z-10 h-[28rem] w-full -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,theme(colors.brand.500/0.18),transparent_60%)]" />
        <div className="absolute inset-x-0 top-1/2 -z-10 h-[24rem] w-full -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,theme(colors.accent.500/0.14),transparent_65%)]" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900/90 via-ink-900/80 to-ink-950/90 p-8 shadow-2xl shadow-brand-900/30 backdrop-blur sm:p-12 lg:p-16">
          {/* Decorative inner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/15" />
            <div className="absolute -bottom-24 right-0 h-64 w-72 rounded-full bg-accent-500/15 blur-2xl" />
          </div>

          {/* Subtle grid texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-200">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_theme(colors.brand.400)]"
              />
              Ready when you are
            </span>

            <h2
              id="cta-heading"
              className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ship small, verified PRs{" "}
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent-400 bg-clip-text text-transparent">
                from every prompt
              </span>
              .
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-200/85 sm:text-lg">
              Stop reviewing one sprawling diff. Try {brand.name} and let the
              orchestrator decompose your work into atoms your reviewers can
              actually approve.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/25 transition hover:from-brand-300 hover:to-brand-400 hover:shadow-brand-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <span>Open the live site</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href={brand.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                  />
                </svg>
                <span>Star on GitHub</span>
              </a>
            </div>

            <p className="mt-6 text-xs text-ink-300/70">
              Open source · Apache-2.0 · No vendor lock-in
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;