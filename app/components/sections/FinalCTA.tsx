// helix: app/components/sections/FinalCTA.tsx
import type { ReactElement } from "react";
import { Container } from "../ui/Container";
import { Button } from "../../../components/ui/Button";

/** @helix:story USER-212000 */

export function FinalCTA(): ReactElement {
  return (
    <section
      id="deploy"
      aria-label="Deploy Helix to Vercel"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-fuchsia-600 to-amber-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.12),transparent_55%)]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Ready in minutes
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ship Helix to Vercel in one click.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Spin up the orchestrator, wire your model keys, and start dispatching
            parallel agents — all from a single Vercel deploy.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgadkaridarshan%2FHelix"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-slate-950 text-white hover:bg-slate-900 hover:brightness-100 shadow-2xl shadow-black/30"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M12 2L2 19.5h20L12 2z" />
                </svg>
                Deploy to Vercel
              </Button>
            </a>

            <a
              href="https://github.com/gadkaridarshan/Helix"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block"
            >
              <Button
                variant="secondary"
                size="lg"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                </svg>
                Star on GitHub
              </Button>
            </a>
          </div>

          <p className="mt-6 text-xs text-white/70 sm:text-sm">
            No credit card. Free for hobby projects. Bring your own model keys.
          </p>
        </div>
      </Container>
    </section>
  );
}