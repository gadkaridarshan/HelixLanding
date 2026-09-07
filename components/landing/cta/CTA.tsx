// helix: components/landing/cta/CTA.tsx
/**
 * @helix:story USER-956000
 *
 * CTA — the closing call-to-action block that converts a
 * site visitor into a user or contributor.
 *
 * Renders a polished, gradient-rich card with:
 *   • a strong headline
 *   • supporting copy
 *   • dual primary/secondary CTAs (live orchestrator + GitHub)
 *
 * Pure server component. Content is sourced from
 * `@/content/cta.json`. The CTA surface intentionally reuses
 * the brand tokens (`ink`, `brand`, `accent`, `aurora`) so it
 * reads as a coherent cap on the page rather than a separate
 * mini-site.
 */
import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

import ctaData from "@/content/cta.json";

export interface CTAProps {
  className?: string;
}

interface CTAContent {
  eyebrow: string;
  heading: string;
  description: string;
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
  footnote?: string;
}

const content: CTAContent = ctaData as CTAContent;

export function CTA({ className }: CTAProps): React.ReactElement {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className={
        "relative isolate scroll-mt-24 py-20 sm:py-28 " + (className ?? "")
      }
    >
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-slate-950 px-6 py-14 text-center shadow-[0_30px_120px_-30px_rgba(34,211,238,0.35)] sm:px-10 sm:py-20">
          {/* Layered glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(167,139,250,0.25),transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            {content.eyebrow}
          </p>
          <h2
            id="cta-heading"
            className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink-50 sm:text-4xl lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-brand-300 via-aurora-300 to-accent-300 bg-clip-text text-transparent">
              {content.heading}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              href={content.primary.href}
              external
              variant="primary"
              size="lg"
            >
              {content.primary.label}
            </Button>
            <Button
              href={content.secondary.href}
              external
              variant="secondary"
              size="lg"
            >
              {content.secondary.label}
            </Button>
          </div>

          {content.footnote ? (
            <p className="mt-6 text-xs text-ink-500">{content.footnote}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default CTA;