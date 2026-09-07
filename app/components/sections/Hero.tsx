import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/30 blur-[140px]"
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
                <path d="M12 .5C5.73.5.78 5.45.78 11.72c0 4.96 3.22 9.16 7.69 10.65.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.14-1.25-5.14-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.11 1.15a10.7 10.7 0 0 1 5.66 0c2.16-1.45 3.11-1.15 3.11-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.32-2.64 5.27-5.16 5.55.4.34.76 1.02.76 2.06v3.05c0 .3.21.65.78.54 4.46-1.49 7.68-5.69 7.68-10.65C23.22 5.45 18.27.5 12 .5Z" />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-xs text-white/40">
            Free for solo developers · Self-host for enterprise
          </p>
        </div>

        {/* Floating board mock */}
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-violet-500/10 backdrop-blur-sm sm:p-6">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs font-medium text-white/40">
                helix · board
              </span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-violet-300/80">
                  Summary
                </div>
                <div className="mt-2 h-2 w-full rounded bg-white/10" />
                <div className="mt-1.5 h-2 w-3/4 rounded bg-white/10" />
                <div className="mt-1.5 h-2 w-1/2 rounded bg-white/10" />
              </div>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-fuchsia-300/80">
                  Delivery strategy
                </div>
                <div className="mt-2 h-2 w-full rounded bg-white/10" />
                <div className="mt-1.5 h-2 w-5/6 rounded bg-white/10" />
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[9px] font-medium text-violet-200">
                    parallel
                  </span>
                  <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[9px] font-medium text-sky-200">
                    safe
                  </span>
                </div>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-sky-300/80">
                  Cards
                </div>
                <ul className="mt-2 space-y-1.5">
                  <li className="flex items-center gap-2 rounded bg-white/5 px-2 py-1 text-[10px] text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Plan atomic cards
                  </li>
                  <li className="flex items-center gap-2 rounded bg-white/5 px-2 py-1 text-[10px] text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Dispatch agent #1
                  </li>
                  <li className="flex items-center gap-2 rounded bg-white/5 px-2 py-1 text-[10px] text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Dispatch agent #2
                  </li>
                  <li className="flex items-center gap-2 rounded bg-white/5 px-2 py-1 text-[10px] text-white/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    Review diffs
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