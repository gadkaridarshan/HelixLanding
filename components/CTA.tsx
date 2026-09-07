// helix: components/Cta.tsx
/**
 * @helix:story USER-308000
 *
 * Cta — final above-the-fold conversion block placed just above the
 * Footer. Single primary action with secondary "view on GitHub" link.
 *
 * Pure server component. Visually anchors the page on a brand/aurora
 * gradient card so the visitor's eye lands on a clear next step.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

export interface CtaProps {
  className?: string;
}

export function Cta({ className }: CtaProps): React.ReactElement {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className={cn(
        "relative isolate py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "relative overflow-hidden rounded-card border border-white/10",
            "bg-gradient-to-br from-brand-500/15 via-ink-900 to-accent-500/15",
            "p-8 sm:p-12 lg:p-16",
          )}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(167,139,250,0.25),transparent_60%)]"
          />
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="final-cta-heading"
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ship code your team actually wants to review.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-200 sm:text-lg">
              Install Helix in your repo, point it at an intent, and watch
              the work break down into small, verified units — ready to
              merge.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="#hero"
                className={cn(
                  "inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm font-semibold sm:text-base",
                  "bg-brand-400 text-ink-950 shadow-glow transition-colors duration-base",
                  "hover:bg-brand-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-200",
                )}
              >
                Get early access
                <svg
                  className="ml-2"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="https://github.com/gadkaridarshan/Helix"
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  "inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm font-semibold sm:text-base",
                  "border border-white/15 bg-white/[0.04] text-white transition-colors duration-base",
                  "hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                )}
              >
                View on GitHub
              </a>
            </div>
            <p className="mt-6 text-xs text-neutral-400">
              Free to install. Open source. No vendor lock-in.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Cta;