import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section
      id="deploy"
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden"
    >
      {/* Full-bleed gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-br from-violet-700 via-indigo-700 to-sky-700"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.18),_transparent_55%),_radial-gradient(ellipse_at_bottom_right,_rgba(236,72,153,0.35),_transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 mix-blend-overlay [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-100/90">
            Ready when you are
          </p>
          <h2
            id="final-cta-heading"
            className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Stop reading. Start shipping with Helix.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-violet-50/90">
            One deploy to Vercel and you&apos;re orchestrating parallel coding
            agents on your real repo tonight. No chat transcripts to re-interpret.
            No mystery writes. Just a plan, a diff, and a shipped URL.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgadkaridarshan%2FHelix"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-slate-950/30 transition hover:bg-violet-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M12 2L2 19.5h20L12 2zm0 4.6L18.5 18h-13L12 6.6z" />
              </svg>
              Deploy to Vercel
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4 transition group-hover:translate-x-0.5"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://github.com/gadkaridarshan/Helix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-label="GitHub"
                role="img"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                />
              </svg>
              <span>Star on GitHub</span>
              <span
                aria-hidden="true"
                className="ml-1 rounded-full border border-white/40 px-2 py-0.5 text-xs font-medium text-violet-50"
              >
                ★
              </span>
            </a>
          </div>

          <p className="mt-8 text-sm text-violet-50/80">
            Open-core · Self-hostable · No vendor lock-in
          </p>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;