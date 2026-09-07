// helix: components/sections/SocialProof.tsx
/**
 * @helix:story USER-303000
 *
 * SocialProof — testimonial band driven by `@/content/social-proof.json`.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import socialProofData from "@/content/social-proof.json";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface SocialProofContent {
  eyebrow: string;
  heading: string;
  description: string;
  testimonials: ReadonlyArray<Testimonial>;
}

const content: SocialProofContent = socialProofData as SocialProofContent;

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
        "relative border-y border-white/5 bg-white/[0.02] py-16 " +
        (className ?? "")
      }
    >
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
        />
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3"
        >
          {content.testimonials.map((t) => (
            <li
              key={`${t.author}-${t.company}`}
              className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm leading-relaxed text-slate-200">
                “{t.quote}”
              </p>
              <div className="mt-4 text-xs text-slate-400">
                <span className="font-medium text-ink-50">{t.author}</span>
                {" · "}
                {t.role}, {t.company}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default SocialProof;