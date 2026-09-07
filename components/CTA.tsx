// helix: components/CTA.tsx
/**
 * @helix:story USER-73000
 * @helix:story USER-303000
 *
 * CTA — the closing call-to-action block that converts a site
 * visitor into a user or contributor.
 *
 *   • Eyebrow + bold headline + supporting copy.
 *   • Primary CTA (Get early access) + secondary GitHub link.
 *   • Short bullet row to remove the last bit of friction.
 *
 * Pure server component. Brand surface (name, tagline, GitHub URL)
 * is sourced from `lib/brand.ts` so the CTA matches the navbar,
 * footer, and OG metadata without copy drift.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export interface CTAProps {
  className?: string;
}

export function CTA({ className }: CTAProps): React.ReactElement {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className={"relative py-24 sm:py-32 " + (className ?? "")}
    >
      <Container size="md">
        <div
          className="hx-surface-strong relative overflow-hidden rounded-3xl p-10 text-center sm:p-14"
          style={{
            backgroundImage:
              "radial-gradient(800px 400px at 20% 0%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(700px 400px at 100% 100%, rgba(139,92,246,0.18), transparent 60%)",
          }}
        >
          <span className="hx-chip mx-auto">
            <span className="hx-chip-dot" />
            Early access
          </span>

          <h2
            id="cta-heading"
            className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Ship AI-generated code you actually trust.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Join the early access program for {brand.name} — atomic units,
            verified merges, and an AI coding workflow your team can stand
            behind.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:from-cyan-300 hover:to-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            >
              Get early access
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href={brand.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49C19.14 20.62 22 16.78 22 12.25 22 6.58 17.52 2 12 2z"
                />
              </svg>
              Star on GitHub
            </a>
          </div>

          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 text-left text-sm text-white/70 sm:grid-cols-3"
          >
            <li className="flex items-start gap-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Verified atomic units</span>
            </li>
            <li className="flex items-start gap-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Bring your own CI</span>
            </li>
            <li className="flex items-start gap-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Free during early access</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default CTA;