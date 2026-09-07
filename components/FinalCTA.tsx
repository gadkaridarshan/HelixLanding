// helix: components/FinalCta.tsx
/**
 * @helix:story USER-63000
 *
 * FinalCTA — last-call-to-action band rendered just above the
 * Footer. Headline + supporting copy + primary CTA + secondary
 * "view on GitHub" link. Brand surface sourced from `lib/brand.ts`
 * so the CTA URL stays in sync with metadata and the footer.
 *
 * Pure server component.
 */
import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface FinalCtaProps {
  className?: string;
}

export function FinalCTA({
  className,
}: FinalCtaProps): React.ReactElement {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      {/* Aurora backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora-500/20 blur-3xl" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-950/60 px-6 py-12 text-center shadow-[0_30px_120px_-30px_rgba(34,211,238,0.35)] backdrop-blur sm:px-12 sm:py-16">
          <h2
            id="final-cta-heading"
            className="text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl lg:text-5xl"
          >
            Ready to ship smaller, reviewable PRs?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-ink-300">
            Spin up Helix against your repo and watch a single prompt
            decompose into auditable, verifiable, merge-ready diffs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href={brand.url} variant="primary" size="lg" external>
              Try {brand.name}
            </Button>
            <Button
              href={brand.githubUrl}
              variant="secondary"
              size="lg"
              external
            >
              View on GitHub
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;