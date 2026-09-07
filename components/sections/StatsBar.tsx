// helix: components/sections/StatsBar.tsx
/**
 * @helix:story USER-993000
 *
 * StatsBar — thin standalone stats strip kept as its own composition root
 * so the page assembly layer can choose between StatsBar (compact) and the
 * full SocialProof section (logos + stats + testimonials) without coupling.
 */
import * as React from "react";
import { socialProofContent } from "@/lib/content";

export interface StatsBarProps {
  className?: string;
}

export function StatsBar({ className }: StatsBarProps): React.ReactElement {
  const { stats } = socialProofContent;
  return (
    <section
      id="stats-bar"
      className={"relative py-12 sm:py-16 " + (className ?? "")}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-slate-950"
      />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center"
            >
              <dt className="text-xs uppercase tracking-wider text-slate-500">
                {stat.label}
              </dt>
              <dd className="mt-3 bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default StatsBar;