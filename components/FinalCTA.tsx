// helix: components/FinalCTA.tsx
/**
 * @helix:story USER-63000
 *
 * FinalCTA — the closing conversion block at the bottom of the
 * marketing page. Sits between the last content section (FAQ) and
 * the site footer.
 *
 * Composition:
 *   • High-contrast gradient panel (brand → accent) on the dark
 *     canvas so the closing CTA visually pops.
 *   • Headline, subheadline, primary CTA (Get early access) +
 *     secondary GitHub link, plus a short "what you get" bullet
 *     row to remove final friction.
 *
 * Copy is sourced from `@/content/final-cta.json` so marketing can
 * iterate without touching this component. Pure server component —
 * no client interactivity. Renders a polished `<section>` with
 * semantic landmarks and accessible focus rings.
 */
import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

import finalCtaData from "@/content/final-cta.json";

export interface FinalCTAProps {
  className?: string;
}

interface FinalCTAContent {
  eyebrow: string;
  heading: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  bullets: ReadonlyArray<string>;
}

const content = finalCtaData as FinalCTAContent;

export function FinalCTA({ className }: FinalCTAProps): React.ReactElement {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-24 lg:py-32 " +
        (className ?? "")
      }
    >
      {/* Layered radial glows — brand + accent, sitting behind the
          gradient panel so the section reads as a single, focused
          moment. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-slate-950/40 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
        <div className="absolute -top-32 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent-500/20 blur-3xl" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/90 via-brand-500/80 to-accent-600/90 px-6 py-12 shadow-[0_30px_80px_-30px_rgba(34,211,238,0.5)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Subtle inner grid texture for depth. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_70%)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {content.eyebrow}
            </span>

            <h2
              id="final-cta-heading"
              className="mt-6 text-3xl font-display font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {content.heading}
            </h2>

            <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <Button
                href={content.primaryCta.href}
                variant="primary"
                size="lg"
                className="bg-white text-ink-950 hover:bg-white/90 active:bg-white/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]"
              >
                {content.primaryCta.label}
                <span aria-hidden="true" className="ml-1">
                  →
                </span>
              </Button>
              <Button
                href={content.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 active:bg-white/30"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                  />
                </svg>
                {content.secondaryCta.label}
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
              {content.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-4 w-4 text-white"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.5a1 1 0 0 1-1.42-.004l-3.5-3.5a1 1 0 0 1 1.414-1.414L8.5 12.086l6.79-6.79a1 1 0 0 1 1.414-.006Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-white/60">
              {brand.name} — {brand.tagline}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;