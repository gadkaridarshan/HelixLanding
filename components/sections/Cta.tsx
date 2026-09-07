// helix: components/sections/CTA.tsx
/**
 * @helix:story USER-521000
 *
 * CTA — high-conversion call-to-action section that prompts visitors
 * to try Helix. Renders a single, full-width gradient panel with:
 *
 *   • Eyebrow chip
 *   • Bold headline + supporting subheadline
 *   • Two CTAs (primary "Get started", secondary "Star on GitHub")
 *   • Trust footnote for the cautious reader
 *
 * Content is sourced from `@/content/cta.json` so the marketing
 * copy can evolve without touching the component tree.
 *
 * Pure server component. Uses the shared `Container` primitive and
 * brand tokens via Tailwind utilities.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
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

const content = ctaData as CTAContent;

export interface CTAProps {
  className?: string;
}

export function CTA({ className }: CTAProps): React.ReactElement {
  const { eyebrow, title, subtitle, primaryCta, secondaryCta, footnote } =
    content;

  const rel = primaryCta.external ? "noopener noreferrer" : undefined;
  const target = primaryCta.external ? "_blank" : undefined;

  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className={[
        "relative isolate overflow-hidden",
        "py-20 sm:py-28",
        "bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.18),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.18),transparent_55%)]",
        "border-y border-white/10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-slate-950/60"
      />

      <Container size="lg" className="text-center">
        <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200 backdrop-blur">
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          />
          {eyebrow}
        </span>

        <h2
          id="cta-title"
          className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={primaryCta.href}
            target={target}
            rel={rel}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {primaryCta.label}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M4 10h12m0 0-4-4m4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href={secondaryCta.href}
            target={secondaryCta.external ? "_blank" : undefined}
            rel={secondaryCta.external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            {secondaryCta.label}
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-400">{footnote}</p>
      </Container>
    </section>
  );
}

export default CTA;