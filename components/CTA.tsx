// helix: components/Cta.tsx
/**
 * @helix:story USER-812000
 *
 * FinalCTA — closing conversion block at the bottom of the landing
 * page. Single high-contrast call-to-action that invites the visitor
 * to "try the live orchestrator" — primary button goes to the live
 * Helix site (`brand.url`), secondary button surfaces the GitHub
 * repository for the more skeptical reader.
 *
 * Pure server component. Uses the shared `Container` + `Button`
 * primitives so the visual surface stays consistent with the Hero CTAs
 * and the Footer deploy badge.
 */
import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface CtaProps {
  className?: string;
}

export function Cta({ className }: CtaProps): React.ReactElement {
  return (
    <section
      id="get-started"
      aria-labelledby="final-cta-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-28 lg:py-32 " +
        (className ?? "")
      }
    >
      {/* Decorative background — soft aurora glow under the panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />
        {/* Faint grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-8 shadow-[0_30px_120px_-30px_rgba(34,211,238,0.35)] backdrop-blur-sm sm:p-12 lg:p-16">
          {/* Inner glow ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(34,211,238,0.18),transparent_70%)]"
          />

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400"
              />
              Ready when you are
            </span>

            <h2
              id="final-cta-heading"
              className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Try the live orchestrator and{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                ship your next PR in atoms
              </span>
              .
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Open the hosted Helix orchestrator, point it at a repo, and
              watch a single prompt decompose into small, verified, reviewable
              units — each one a PR you can actually merge.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                href={brand.url}
                external
                variant="primary"
                size="lg"
              >
                Try the live orchestrator
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="M4 10h12m0 0l-4-4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>

              <Button
                href={brand.githubUrl}
                external
                variant="secondary"
                size="lg"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                Star on GitHub
              </Button>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              No signup required — the live orchestrator is open and ready.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Cta;