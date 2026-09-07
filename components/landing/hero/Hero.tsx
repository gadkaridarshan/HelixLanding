// helix: components/landing/hero/Hero.tsx
/**
 * @helix:story USER-993000
 *
 * Hero — above-the-fold section. Composes eyebrow, headline, sub-headline,
 * primary/secondary CTAs, trust line, and the decorative HeroVisual.
 */
import * as React from "react";
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
      id="hero"
      className={
        "relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 " +
        (className ?? "")
      }
    >
      {/* layered background: radial glow + faint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -z-10 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -top-10 right-0 -z-10 h-[360px] w-[360px] rounded-full bg-violet-500/20 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              {eyebrow}
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              {headline}{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                {highlight}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300 lg:mx-0">
              {subheadline}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start lg:items-start">
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:from-cyan-300 hover:to-violet-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                {primaryCta.label}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
              >
                {secondaryCta.label}
              </a>
            </div>

            <p className="mt-6 text-xs uppercase tracking-wider text-slate-500">
              {trustLine}
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 blur-2xl"
            />
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;