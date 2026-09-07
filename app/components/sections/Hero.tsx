// helix: app/components/sections/Hero.tsx
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

/**
 * @helix:story USER-347000
 * Hero — top-of-page marketing section.
 * Server component. Imports only from components/ui.
 */
export function Hero() {
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

      <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mx-auto">Now shipping · Vercel + GitHub ready</Badge>

          <h1
            id="hero-heading"
            className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            The atomic work-breakdown{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
              orchestrator
            </span>{" "}
            that turns requirements into parallel agent-ready cards.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
            Helix plans your work at the right granularity, then dispatches
            coding agents in parallel — with protected paths, language-aware
            prompts, and a reviewable diff trail. Ship faster without losing
            control of your codebase.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#deploy"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:from-violet-400 hover:to-fuchsia-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
            >
              Start on Vercel
            </a>
            <a
              href="https://github.com/gadkaridarshan/Helix"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              View on GitHub
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M12 .5C5.73.5.78 5.45.78 11.72c0 4.96 3.22 9.16 7.69 10.65.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.94.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.11 1.16.9-.25 1.86-.38 2.82-.38s1.92.13 2.82.38c2.16-1.46 3.11-1.16 3.11-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.29-5.14 5.57.4.35.76 1.03.76 2.08v3.08c0 .3.21.65.78.54 4.46-1.49 7.68-5.69 7.68-10.65C23.22 5.45 18.27.5 12 .5z" />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-xs text-white/40">
            One command from prompt to preview · Protected paths · Language-aware
          </p>
        </div>

        {/* Floating board mock */}
        <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="absolute -inset-x-6 -inset-y-6 -z-10 rounded-3xl bg-gradient-to-tr from-violet-500/20 via-fuchsia-500/10 to-sky-500/20 blur-2xl" />
          <div
            aria-hidden="true"
            className="absolute inset-x-12 -top-2 -z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-violet-900/30 ring-1 ring-white/5 backdrop-blur">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              </div>
              <div className="rounded-md bg-white/5 px-3 py-1 font-mono text-xs text-white/50">
                helix plan "Add OAuth + billing"
              </div>
              <div className="w-12" />
            </div>

            {/* Board content */}
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 sm:gap-6 sm:p-6">
              {/* Column 1 — summary */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    Summary
                  </span>
                  <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-medium text-violet-300">
                    root
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-white/90">
                  Add OAuth + billing
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/50">
                  12 atomic cards · 3 parallel tracks · ~42 min
                </p>
                <div className="mt-4 space-y-2">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                  </div>
                  <div className="flex justify-between text-[10px] text-white/40">
                    <span>8 / 12 complete</span>
                    <span>66%</span>
                  </div>
                </div>
              </div>

              {/* Column 2 — delivery_strategy */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    delivery_strategy
                  </span>
                  <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-medium text-sky-300">
                    parallel
                  </span>
                </div>
                <ul className="mt-3 space-y-2 text-xs text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>
                      <span className="font-medium text-white/90">Track A</span>{" "}
                      — provider adapter, env, secrets
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300" />
                    <span>
                      <span className="font-medium text-white/90">Track B</span>{" "}
                      — UI + checkout flow
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                    <span>
                      <span className="font-medium text-white/90">Track C</span>{" "}
                      — webhook + tests
                    </span>
                  </li>
                </ul>
              </div>

              {/* Column 3 — cards */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    Cards
                  </span>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                    12
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-[11px]">
                  <li className="flex items-center gap-2 rounded-md border border-emerald-400/20 bg-emerald-400/5 px-2 py-1.5 text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="flex-1 truncate">USER-101 provider</span>
                    <span className="text-white/40">done</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-md border border-emerald-400/20 bg-emerald-400/5 px-2 py-1.5 text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="flex-1 truncate">USER-102 env</span>
                    <span className="text-white/40">done</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-md border border-violet-400/30 bg-violet-400/10 px-2 py-1.5 text-white">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                    <span className="flex-1 truncate font-medium">
                      USER-201 checkout
                    </span>
                    <span className="text-violet-300">run</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1.5 text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <span className="flex-1 truncate">USER-202 webhook</span>
                    <span className="text-white/40">todo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}