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
          className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3"
        >
          {content.testimonials.map((t) => (
            <li
              key={`${t.author}-${t.company}`}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-cyan-300/80"
              >
                <path d="M7.17 6C4.87 6 3 7.87 3 10.17c0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46C10.5 7.87 8.63 6 7.17 6zm10 0c-2.3 0-4.17 1.87-4.17 4.17 0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46 0-2.3-1.87-4.17-4.17-4.17z" />
              </svg>
              <p className="text-pretty text-base text-white/85">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-auto text-sm text-white/60">
                <span className="font-medium text-white">{t.author}</span>
                {" · "}
                {t.role}, {t.company}
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default SocialProof;