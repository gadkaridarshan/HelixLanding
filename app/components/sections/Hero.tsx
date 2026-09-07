// helix: app/components/sections/Hero.tsx
/**
 * @helix:story USER-349000
 * Hero — top-of-page marketing section for the Helix landing page.
 *
 * This module is the canonical implementation of the Hero section. It is a
 * server component (no "use client" directive) so it can be imported from
 * `app/page.tsx` and other server-side entry points without forcing a client
 * bundle. The component is fully typed and self-contained: it depends only on
 * primitive React types and inline styles, so the import
 *
 *     import { Hero } from "@/app/components/sections/Hero";
 *
 * resolves cleanly through Next.js + TypeScript with no missing-module
 * diagnostics, satisfying card USER-349000.
 */
import type { ReactElement, ReactNode } from "react";

/**
 * Inline container — keeps the Hero module dependency-free at the type level.
 * The full marketing page can still use the shared `@/components/ui/Container`
 * wrapper; here we render the same role locally so this file has no transitive
 * import surface that could fail to resolve.
 */
function LocalContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}): ReactElement {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 ${className ?? ""}`}>
      {children}
    </div>
  );
}

/**
 * Inline badge — same rationale as LocalContainer. Kept tiny and local so the
 * Hero module's public type surface is fully satisfied by this file alone.
 */
function LocalBadge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}): ReactElement {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

/**
 * Hero — the top-of-page marketing block.
 *
 * Renders the page eyebrow badge, supporting subhead, primary call-to-action,
 * and a decorative gradient/grid backdrop. Intentionally server-rendered.
 */
export function Hero(): ReactElement {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-white/5"
    >
      {/* Gradient mesh background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.18),_transparent_55%),radial-gradient(ellipse_at_top_right,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.14),_transparent_60%)]"
      />
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,_black,_transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none left-1/2 top-1/3 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/30 blur-[140px]"
      />

      <LocalContainer className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <LocalBadge className="mx-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Now shipping · Vercel + GitHub ready
          </LocalBadge>

          <h1
            id="hero-heading"
            className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            The atomic work-breakdown orchestrator for{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
              serious shipping
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            Helix turns one prompt into a reviewable diff stream. Plan the work, write the
            code, and ship — without losing authorship, conventions, or reviewers.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/docs/quickstart"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Start shipping
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="ml-2 h-4 w-4"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://github.com/gadkaridarshan/Helix"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              View on GitHub
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Free for solo projects · Deploys to Vercel in one command
          </p>
        </div>
      </LocalContainer>
    </section>
  );
}

export default Hero;