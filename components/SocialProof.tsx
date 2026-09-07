// helix: components/SocialProof.tsx
/**
 * @helix:story USER-73000
 * @helix:story USER-303000
 *
 * SocialProof — canonical landing-page trust strip rendered just
 * below the Hero.
 *
 *   • Eyebrow + heading + description, centered.
 *   • Logo wordmark band for visual credibility.
 *   • 3 testimonial cards with role + company attribution.
 *
 * Pure server component. Content is colocated so it always ships
 * with the page even if the shared `@/content/social-proof.json`
 * file is in flux.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

interface Testimonial {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly company: string;
}

const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    quote:
      "Helix turned our AI coding agent into a teammate we can actually trust to merge code.",
    author: "Avery K.",
    role: "Staff Engineer",
    company: "Series B Fintech",
  },
  {
    quote:
      "We ship twice as many features per sprint because reviews go from hours to minutes.",
    author: "Priya N.",
    role: "Head of Product",
    company: "B2B SaaS",
  },
  {
    quote:
      "Main hasn't been red in three months. That's a first for us with AI agents.",
    author: "Marcus D.",
    role: "Founding Engineer",
    company: "Dev Tools Startup",
  },
];

interface LogoEntry {
  readonly label: string;
  readonly className?: string;
}

const LOGOS: ReadonlyArray<LogoEntry> = [
  { label: "Acme", className: "font-semibold tracking-tight" },
  { label: "Northwind", className: "font-semibold tracking-tight" },
  { label: "Globex", className: "font-semibold tracking-tight" },
  { label: "Initech", className: "font-semibold tracking-tight" },
  { label: "Hooli", className: "font-semibold tracking-tight" },
  { label: "Stark", className: "font-semibold tracking-tight" },
];

export interface SocialProofProps {
  className?: string;
}

export function SocialProof({
  className,
}: SocialProofProps): React.ReactElement {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className={cn(
        "relative border-y border-white/5 bg-white/[0.02] py-16 sm:py-20",
        className,
      )}
    >
      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90 sm:text-sm">
            Trusted by builders
          </p>
          <h2
            id="social-proof-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Teams shipping verified AI code with Helix.
          </h2>
          <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">
            From early-stage startups to platform teams at scale, Helix is
            the orchestration layer for AI-driven development.
          </p>
        </header>

        <ul
          role="list"
          aria-label="Companies using Helix"
          className="mx-auto mt-10 flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white/45 sm:gap-x-12"
        >
          {LOGOS.map((logo) => (
            <li
              key={logo.label}
              className={cn(
                "text-lg uppercase tracking-[0.18em] sm:text-xl",
                logo.className,
              )}
              aria-label={logo.label}
            >
              {logo.label}
            </li>
          ))}
        </ul>

        <ul
          role="list"
          className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <li
              key={`${t.author}-${i}`}
              className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-cyan-400/60"
              >
                <path
                  d="M7.17 6C4.87 6 3 7.87 3 10.17c0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46C10.5 7.87 8.63 6 7.17 6zm10 0c-2.3 0-4.17 1.87-4.17 4.17 0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46 0-2.3-1.87-4.17-4.17-4.17z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-4 text-pretty text-base leading-relaxed text-white/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm text-white/55">
                <span className="font-semibold text-white/85">{t.author}</span>
                <span aria-hidden="true"> · </span>
                <span>
                  {t.role}, {t.company}
                </span>
              </figcaption>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default SocialProof;