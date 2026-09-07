/**
 * @helix:story USER-933000
 *
 * SocialProof — the canonical trust band for the Helix landing page.
 *
 *   • An "as featured in" logo row (placeholder wordmarks rendered as
 *     styled badges; safe to swap with real SVG logos later).
 *   • Three placeholder testimonial cards with quote, author, role,
 *     and company.
 *   • A metrics strip with four headline stats.
 *
 * Content is sourced from `@/content/social-proof.json` so the copy
 * can evolve without touching the component tree.
 *
 * Pure server component. Uses `Container` and Tailwind brand tokens.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

import socialProofData from "@/content/social-proof.json";

export interface SocialProofProps {
  className?: string;
}

interface SocialProofLogo {
  name: string;
  label: string;
}

interface SocialProofTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface SocialProofStat {
  value: string;
  label: string;
}

interface SocialProofContent {
  eyebrow: string;
  heading: string;
  logos: SocialProofLogo[];
  testimonials: SocialProofTestimonial[];
  stats: SocialProofStat[];
}

const content: SocialProofContent = socialProofData as SocialProofContent;

function LogoBadge({ label }: { label: string }): React.ReactElement {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 text-base font-semibold tracking-tight text-slate-200 transition-colors hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white"
    >
      {label}
    </div>
  );
}

function QuoteIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 text-cyan-400/60"
    >
      <path
        d="M7.17 6C4.87 6 3 7.87 3 10.17c0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46C10.5 7.87 8.63 6 7.17 6zm10 0c-2.3 0-4.17 1.87-4.17 4.17 0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46 0-2.3-1.87-4.17-4.33-4.17z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SocialProof({
  className,
}: SocialProofProps): React.ReactElement {
  const { eyebrow, heading, logos, testimonials, stats } = content;

  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-28 lg:py-32 " +
        (className ?? "")
      }
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            {eyebrow}
          </span>
          <h2
            id="social-proof-heading"
            className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {heading}
          </h2>
        </div>

        {/* Logos */}
        <ul
          role="list"
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {logos.map((logo) => (
            <li key={logo.name}>
              <LogoBadge label={logo.label} />
            </li>
          ))}
        </ul>

        {/* Testimonials */}
        <ul
          role="list"
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {testimonials.map((t) => (
            <li
              key={`${t.author}-${t.company}`}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <QuoteIcon />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-200">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/30 text-sm font-semibold text-white"
                >
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-slate-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </li>
          ))}
        </ul>

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:grid-cols-4 lg:p-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {stat.label}
              </dt>
              <dd className="mt-2 bg-gradient-to-br from-cyan-300 to-violet-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default SocialProof;