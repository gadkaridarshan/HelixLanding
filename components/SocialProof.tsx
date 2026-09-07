// helix: components/SocialProof.tsx
/**
 * @helix:story USER-23000
 *
 * SocialProof — testimonial / quote block giving the landing page
 * credible third-party validation.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

export interface SocialProofProps {
  className?: string;
}

interface Quote {
  id: string;
  body: string;
  author: string;
  role: string;
}

const quotes: ReadonlyArray<Quote> = [
  {
    id: "q1",
    body: "Helix turned one 4,000-line PR into eleven small, verified PRs. Review went from a meeting to a coffee break.",
    author: "M. Reyes",
    role: "Staff Engineer, fintech platform",
  },
  {
    id: "q2",
    body: "We finally trust our AI agent to merge code while we sleep. The unit gate catches what humans used to.",
    author: "D. Okafor",
    role: "CTO, dev-tools startup",
  },
  {
    id: "q3",
    body: "Atomic plans changed how I think about prompting. I read the plan, approve it, and ship it.",
    author: "L. Tanaka",
    role: "Solo founder, two-person team",
  },
];

export function SocialProof({
  className,
}: SocialProofProps): React.ReactElement {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="social-proof-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Trusted by engineers shipping with AI agents
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((quote) => (
            <figure
              key={quote.id}
              className="flex flex-col justify-between rounded-card border border-white/10 bg-white/5 p-6"
            >
              <blockquote className="text-sm leading-relaxed text-slate-200">
                “{quote.body}”
              </blockquote>
              <figcaption className="mt-6 text-xs text-slate-400">
                <span className="font-semibold text-white">
                  {quote.author}
                </span>
                {" · "}
                {quote.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SocialProof;