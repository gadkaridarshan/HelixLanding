// helix: components/sections/finalcta/FinalCTA.tsx
/**
 * @helix:story USER-303000
 *
 * FinalCTA — last-mile conversion moment before the footer.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/brand";

import finalCta from "@/content/finalcta.json";

interface FinalCtaContent {
  eyebrow: string;
  heading: string;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

const content: FinalCtaContent = finalCta as FinalCtaContent;

export interface FinalCTAProps {
  className?: string;
}

export function FinalCTA({ className }: FinalCTAProps): React.ReactElement {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className={"section-pad " + (className ?? "")}
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[120%] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(34,211,238,0.25),rgba(15,23,42,0)_70%)]"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-300">
              {content.eyebrow}
            </p>
            <h2
              id="final-cta-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl"
            >
              {content.heading}
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              {content.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button href={content.primary.href} variant="primary" size="lg">
                {content.primary.label}
              </Button>
              <Button href={content.secondary.href} variant="secondary" size="lg">
                {content.secondary.label}
              </Button>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              Open source on GitHub · {brand.url.replace(/^https?:\/\//, "")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;