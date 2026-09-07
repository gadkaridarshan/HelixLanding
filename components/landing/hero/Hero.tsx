// helix: components/landing/hero/Hero.tsx
/**
 * @helix:story USER-993000
 *
 * Hero — above-the-fold hero for the Helix landing page.
 *
 * Composition root for the Hero section. Reads its copy from
 * `lib/content.ts` (`heroContent`) and renders:
 *   - the copy column (eyebrow, headline, subheadline, CTAs, trust line)
 *   - the decorative `HeroVisual` SVG illustration
 *
 * The section is a server component (no client interactivity required);
 * the layout adapts responsively via Tailwind grid utilities.
 */

import * as React from "react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { heroContent } from "@/lib/content";
import { HeroVisual } from "@/components/landing/hero/HeroVisual";

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps): React.ReactElement {
  const {
    eyebrow,
    headline,
    highlight,
    subheadline,
    primaryCta,
    secondaryCta,
    trustLine,
  } = heroContent;

  return (
    <section
      className={
        "relative overflow-hidden bg-slate-950 text-slate-100 " +
        (className ?? "")
      }
      aria-labelledby="hero-heading"
    >
      {/* Decorative background gradient — sits behind the grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.14),_transparent_55%)]" />
      </div>

      <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Copy column */}
          <div className="lg:col-span-7">
            {eyebrow ? (
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"
                  aria-hidden="true"
                />
                {eyebrow}
              </p>
            ) : null}

            <h1
              id="hero-heading"
              className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {headline}{" "}
              {highlight ? (
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
                  {highlight}
                </span>
              ) : null}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              {subheadline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-md bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {primaryCta.label}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/60 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {secondaryCta.label}
              </Link>
            </div>

            {trustLine ? (
              <p className="mt-6 text-sm text-slate-400">{trustLine}</p>
            ) : null}
          </div>

          {/* Visual column */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;