// helix: components/FinalCTA.tsx
/**
 * @helix:story USER-812000
 *
 * FinalCTA — last call-to-action section that lives just above the
 * Footer. Visitors who scrolled the entire landing page should land
 * here with one obvious next step: launch the live Helix orchestrator
 * at `brand.url`.
 *
 * Pure server component. All CTA links point to the canonical
 * production URL exposed by `lib/brand.ts` so the marketing site and
 * the live product stay in lockstep.
 *
 * Lives at the canonical path `components/FinalCTA.tsx` (this file).
 * Re-export shims at `components/sections/FinalCTA.tsx` and
 * `app/components/sections/FinalCTA.tsx` point here so both import
 * paths resolve to the same implementation.
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
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className={
        "relative isolate overflow-hidden py-24 sm:py-32 " + (className ?? "")
      }
    >
      {/* Layered radial + grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(70%_70%_at_50%_0%,rgba(34,211,238,0.18),rgba(124,58,237,0.10)_55%,transparent_80%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]
                   [background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)]
                   [background-size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48
                   bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent"
      />

      <Container>
        <div
          className="relative mx-auto max-w-4xl rounded-3xl
                     border border-white/10 bg-white/[0.04] p-10 sm:p-14
                     shadow-[0_30px_120px_-30px_rgba(34,211,238,0.35)]
                     backdrop-blur-xl"
        >
          {/* Inner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-3xl
                       bg-[radial-gradient(80%_60%_at_50%_0%,rgba(34,211,238,0.18),rgba(124,58,237,0.10)_55%,transparent_80%)]"
          />

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
            Ready when you are
          </p>

          <h2
            id="final-cta-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl lg:text-5xl"
          >
            Ship small PRs from any prompt — start with Helix today.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
            Decompose a goal into atomic units, run dependent agents in
            parallel, and merge reviewable diffs in minutes. No new
            IDE, no new language — just a workflow that respects how
            your repo already works.
          </p>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full
                         bg-brand-500 px-6 py-3 text-base font-semibold text-ink-950
                         shadow-[0_8px_30px_-12px_rgba(34,211,238,0.6)]
                         hover:bg-brand-400 active:bg-brand-600 transition-colors
                         focus-visible:outline focus-visible:outline-2
                         focus-visible:outline-offset-2 focus-visible:outline-brand-300"
            >
              Try the live orchestrator
              <svg
                viewBox="0 0 20 20"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 10h10" />
                <path d="M11 5l5 5-5 5" />
              </svg>
            </a>

            <a
              href={brand.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full
                         bg-white/5 px-6 py-3 text-base font-semibold text-ink-50
                         ring-1 ring-inset ring-white/15 hover:bg-white/10 transition-colors
                         focus-visible:outline focus-visible:outline-2
                         focus-visible:outline-offset-2 focus-visible:outline-ink-300"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.95 10.95 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              Star on GitHub
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 text-sm text-ink-200 sm:grid-cols-3">
            <li className="flex items-start gap-2">
              <CheckMark />
              <span>No credit card to try the orchestrator</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckMark />
              <span>Works with any Git repo on GitHub</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckMark />
              <span>Open source, self-hostable</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

function CheckMark(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.5l3.5 3.5L16 5.5" />
    </svg>
  );
}

export default FinalCTA;