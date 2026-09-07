// helix: app/components/sections/StatsBar.tsx
import type { ReactElement } from "react";
import { Container } from "../ui/Container";

/** @helix:story USER-212000 */

interface Stat {
  value: string;
  label: string;
  detail: string;
}

const stats: Stat[] = [
  {
    value: "3x",
    label: "Parallel agents",
    detail: "Run up to three concurrent Helix agents per workspace.",
  },
  {
    value: "100%",
    label: "Language-locked",
    detail: "Planning and writes stay inside your repo's stack.",
  },
  {
    value: "0",
    label: "Untracked writes",
    detail: "Protected globs guard migrations and config files.",
  },
  {
    value: "1-click",
    label: "Vercel deploy",
    detail: "Ship the landing page, API, and docs from one push.",
  },
];

export function StatsBar(): ReactElement {
  return (
    <section
      id="stats"
      aria-label="Helix proof points"
      className="relative border-y border-white/10 bg-white/[0.02] py-12 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.10),transparent_60%)]" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-1 bg-slate-950/60 px-6 py-6 text-center sm:py-8"
            >
              <span className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {s.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-300 sm:text-sm">
                {s.label}
              </span>
              <span className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
                {s.detail}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}