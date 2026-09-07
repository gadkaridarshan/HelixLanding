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
];

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
      "Main hasn't been red in three months — that's a first for us with AI agents in the loop.",
    author: "Marcus D.",
    role: "Founding Engineer",
    company: "Dev Tools Startup",
  },
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
        "relative border-y border-white/5 bg-white/[0.02] py-20 sm:py-24",
        className,
      )}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="hx-chip mx-auto">
            <span className="hx-chip-dot" />
            Trusted by teams shipping with AI
          </span>
          <h2
            id="social-proof-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Engineers and teams use Helix to ship AI-generated code they
            actually trust.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            From solo makers to platform teams at scale — Helix turns
            AI-generated diffs into review-ready units.
          </p>
        </div>

        {/* Logo wordmark band */}
        <ul
          role="list"
          aria-label="Companies using Helix"
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/40"
        >
          {LOGOS.map((logo) => (
            <li
              key={logo.label}
              className={cn(
                "text-lg uppercase tracking-[0.2em]",
                logo.className,
              )}
            >
              {logo.label}
            </li>
          ))}
        </ul>

        {/* Testimonial cards */}
        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial) => (
            <li
              key={testimonial.author}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/10 backdrop-blur"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-cyan-400/70"
              >
                <path
                  d="M7.17 6C4.87 6 3 7.87 3 10.17c0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46C10.5 7.87 8.63 6 7.17 6zm10 0c-2.3 0-4.17 1.87-4.17 4.17 0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46 0-2.3-1.87-4.17-4.17-4.17z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-4 text-sm leading-relaxed text-white/80">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-5 text-xs text-white/50">
                <span className="font-semibold text-white/80">
                  {testimonial.author}
                </span>
                {" · "}
                {testimonial.role}, {testimonial.company}
              </figcaption>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default SocialProof;