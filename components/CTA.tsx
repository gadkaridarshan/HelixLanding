// helix: components/Cta.tsx
/**
 * @helix:story USER-308000
 *
 * Final CTA — closing conversion surface with a primary action and a
 * secondary GitHub action. Pure server component.
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
        "relative isolate overflow-hidden py-20 sm:py-28 lg:py-32 " +
        (className ?? "")
      }
    >
      {/* Aurora background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.18),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-10 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.35),transparent_70%)] blur-2xl"
          />

          <p className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
            Ship AI work you can actually merge
          </p>
          <h2
            id="cta-heading"
            className="relative mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Stop reviewing AI diffs.{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Start merging AI units.
            </span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            {brand.name} turns every prompt into a queue of small, verified,
            reviewable PRs — so your team ships faster without sacrificing
            trust.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={brand.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:from-cyan-300 hover:to-violet-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Try {brand.name}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={brand.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              Star on GitHub
            </a>
          </div>

          <p className="relative mt-6 text-xs text-slate-500">
            Free during early access · self-host or cloud · no vendor lock-in
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Cta;