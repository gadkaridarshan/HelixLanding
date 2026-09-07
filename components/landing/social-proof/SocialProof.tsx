// helix: components/landing/social-proof/SocialProof.tsx
/**
 * @helix:story USER-993000
 *
 * SocialProof — logo strip, testimonials, and stat tiles.
 */
import * as React from "react";
import { socialProofContent } from "@/lib/content";

export interface SocialProofProps {
  className?: string;
}

export function SocialProof({
  className,
}: SocialProofProps): React.ReactElement {
  const { eyebrow, heading, logos, testimonials, stats } = socialProofContent;

  return (
    <section
      id="social-proof"
      className={"relative py-20 sm:py-24 " + (className ?? "")}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-slate-950"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-cyan-500/10 to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
            {eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {heading}
          </h2>
        </div>

        {/* Logo strip */}
        <ul
          aria-label="Trusted by"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-slate-400"
        >
          {logos.map((logo) => (
            <li
              key={logo.name}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-200"
            >
              {logo.label}
            </li>
          ))}
        </ul>

        {/* Stats */}
        <dl className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center"
            >
              <dt className="text-xs uppercase tracking-wider text-slate-500">
                {stat.label}
              </dt>
              <dd className="mt-3 bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-4xl font-semibold text-transparent">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author + t.company}
              className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-200">
                <span aria-hidden="true" className="mr-1 text-cyan-400">
                  “
                </span>
                {t.quote}
                <span aria-hidden="true" className="ml-1 text-cyan-400">
                  ”
                </span>
              </blockquote>
              <figcaption className="mt-5 text-xs text-slate-400">
                <span className="font-semibold text-slate-100">{t.author}</span>
                {" · "}
                {t.role}
                {t.company ? `, ${t.company}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;