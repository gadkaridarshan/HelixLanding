// helix: components/SocialProof.tsx
/**
 * @helix:story USER-308000
 *
 * SocialProof — logos row + testimonial-style metric cards reinforcing
 * trust. Pure server component.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { socialProof } from "@/content/socialProof";

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
      className={
        "relative isolate border-y border-white/10 bg-white/[0.02] py-16 sm:py-20 " +
        (className ?? "")
      }
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="social-proof-heading"
            className="text-sm font-semibold uppercase tracking-widest text-cyan-300"
          >
            Trusted workflow
          </h2>
          <p className="mt-3 text-pretty text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Built for teams who measure AI by{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              shipped, green PRs — not vibes.
            </span>
          </p>
        </div>

        {/* Logo strip */}
        <ul
          aria-label="Reference customers"
          className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6"
        >
          {socialProof.logos.map((logo) => (
            <li
              key={logo}
              className="flex h-12 items-center justify-center rounded-lg border border-white/10 bg-black/30 px-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400"
            >
              {logo}
            </li>
          ))}
        </ul>

        {/* Metric cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialProof.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6"
            >
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-sm text-slate-300">{m.label}</p>
              {m.helper ? (
                <p className="mt-1 text-xs text-slate-500">{m.helper}</p>
              ) : null}
            </div>
          ))}
        </div>

        {/* Testimonial-style quotes */}
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {socialProof.quotes.map((q) => (
            <figure
              key={q.author}
              className="rounded-2xl border border-white/10 bg-black/30 p-6"
            >
              <blockquote className="text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">
                <span className="font-semibold text-white">{q.author}</span>
                {" · "}
                <span>{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SocialProof;