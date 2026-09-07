// helix: components/Cta.tsx
/**
 * @helix:story USER-63000
 *
 * FinalCTA — gradient-panel closing call-to-action.
 *
 * Sits at the bottom of the page (just above the Footer) and gives a
 * visitor who scrolled all the way through one last, unmistakable
 * next step: primary deploy/start CTA + secondary GitHub link.
 *
 * Brand surface (canonical URL, GitHub URL, name, tagline) is
 * sourced from `lib/brand.ts` so the same identity shows up in the
 * layout metadata, the Footer, and this block without duplication.
 *
 * Pure server component — no client interactivity.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface CtaProps {
  className?: string;
}

export function Cta({ className }: CtaProps): React.ReactElement {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      {/* Decorative aurora glow + faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-1/3 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-500/30 via-accent-500/25 to-aurora-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900/90 via-ink-950/90 to-ink-900/90 px-6 py-16 shadow-glow backdrop-blur sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          {/* Inner highlight ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-brand-500/15 via-accent-500/15 to-aurora-500/15"
          />

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-200">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" />
              Early access
            </p>

            <h2
              id="cta-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ship atomic PRs with{" "}
              <span className="bg-gradient-to-r from-brand-300 via-accent-300 to-aurora-500 bg-clip-text text-transparent">
                {brand.name}
              </span>{" "}
              today.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
              {brand.shortDescription} Get started in under five minutes —
              no credit card, no infra to stand up.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={brand.url}
                className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-gradient-to-r from-brand-500 to-accent-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-0.5 hover:from-brand-400 hover:to-accent-400 sm:w-auto"
              >
                Start orchestrating
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="M4 10h12m0 0-4-4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href={brand.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-pill border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors duration-200 hover:bg-white/10 sm:w-auto"
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
                    d="M12 2C6.475 2 2 6.475 2 12a9.99 9.99 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.025-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.513 2.338 1.088 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
                  />
                </svg>
                Star on GitHub
                <span
                  aria-hidden="true"
                  className="ml-1 inline-flex items-center rounded-md border border-white/15 bg-white/5 px-1.5 text-xs font-medium text-ink-200"
                >
                  ★
                </span>
              </a>
            </div>

            <p className="mt-6 text-xs text-ink-400">
              Free during the early-access window · Self-hostable · Apache-2.0
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Cta;