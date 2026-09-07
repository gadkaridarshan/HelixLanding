// helix: components/landing/cta/FinalCTA.tsx
/**
 * @helix:story USER-956000
 *
 * FinalCTA — closing conversion block at the end of the landing page.
 * Copy and CTAs are data-driven from `content/cta.json`.
 */
import type { ReactElement } from "react";
import { Container } from "@/app/components/ui/Container";
import ctaData from "@/content/cta.json";

interface CTAButton {
  label: string;
  href: string;
  external: boolean;
}

interface CTAContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: CTAButton;
  secondaryCta: CTAButton;
  footnote: string;
}

export function FinalCTA(): ReactElement {
  const content = ctaData as CTAContent;

  return (
    <section
      id="get-started"
      className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden"
      aria-labelledby="final-cta-title"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_55%)]" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-gradient-to-t from-cyan-500/20 via-cyan-500/5 to-transparent blur-3xl" />
      </div>

      <Container className="relative">
        <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-12 sm:px-12 sm:py-16 text-center backdrop-blur-sm shadow-2xl shadow-cyan-500/10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
            {content.eyebrow}
          </p>
          <h2
            id="final-cta-title"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
          >
            {content.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
            {content.subtitle}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={content.primaryCta.href}
              {...(content.primaryCta.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-colors"
            >
              {content.primaryCta.label}
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="ml-2 h-4 w-4"
              >
                <path
                  fill="currentColor"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                />
              </svg>
            </a>
            <a
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transition-colors"
            >
              {content.secondaryCta.label}
            </a>
          </div>

          <p className="mt-8 text-xs sm:text-sm text-slate-400">
            {content.footnote}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;