/**
 * @helix:story USER-248000
 *
 * CTA section — final call-to-action block.
 * Data is sourced from @/content/cta.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";
import { ctaContent } from "@/content/cta";

export function CTASection(): React.ReactElement {
  const { eyebrow, title, subtitle, primaryCta, secondaryCta, footnote } = ctaContent;

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden border-t border-white/5 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-cyan-500/[0.06] to-transparent"
      />
      <Container>
        <div className="mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8">
          {eyebrow && (
            <p className="hx-chip mx-auto inline-flex items-center rounded-md bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-white/[0.6]">
              <span className="hx-chip-dot" />
              {eyebrow}
            </p>
          )}
          <h2 id="cta-heading" className="h-display text-3xl font-semibold text-white mt-4 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-xl text-white/[0.8] leading-relaxed sm:mt-8">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-6">
            <a
              href={primaryCta.href}
              target={primaryCta.external ? "_blank" : undefined}
              rel={primaryCta.external ? "noopener noreferrer" : undefined}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/[0.08] transition-colors sm:w-auto"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              target={secondaryCta.external ? "_blank" : undefined}
              rel={secondaryCta.external ? "noopener noreferrer" : undefined}
              className="mt-6 sm:mt-0 flex w-full items-center justify-center rounded-md border border-white/10 bg-transparent px-6 py-3 text-base font-medium text-white/[0.8] hover:bg-white/[0.05] sm:w-auto"
            >
              {secondaryCta.label}
            </a>
          </div>
          {footnote && (
            <p className="mt-8 text-xs text-white/[0.5] leading-none">
              {footnote}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}