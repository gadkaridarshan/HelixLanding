// helix: components/landing/final-cta/FinalCTA.tsx
/**
 * @helix:story USER-303000
 *
 * FinalCTA — closing call-to-action panel before the footer. Pure
 * server render.
 */
import * as React from "react";

import { brand } from "@/lib/brand";

export interface FinalCTAProps {
  className?: string;
}

export function FinalCTA({ className }: FinalCTAProps): React.ReactElement {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className={
        "relative border-t border-white/5 py-20 md:py-28 " + (className ?? "")
      }
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80 p-10 md:p-16">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2
                id="cta-heading"
                className="text-3xl font-bold tracking-tight text-white md:text-4xl"
              >
                Stop reviewing AI diffs.{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  Start reviewing units.
                </span>
              </h2>
              <p className="mt-4 max-w-md text-lg text-slate-300">
                {brand.name} is in private beta. Tell us what you&apos;re
                building and we&apos;ll get you onboarded.
              </p>
            </div>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              action="mailto:hello@helix.dev"
              method="post"
              encType="text/plain"
            >
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110"
              >
                Request access
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;