// helix: components/sections/social-proof/index.tsx
/**
 * @helix:story USER-167000
 *
 * SocialProof — canonical trust band for the Helix landing page.
 *
 *   • An "as featured in" logo row (placeholder wordmarks + GitHub
 *     stars callout linking to the Helix repo).
 *   • At least two testimonial cards with quote, author, role,
 *     and company.
 *
 * Content is sourced from `@/content/social-proof.json` so the
 * marketing copy can evolve without touching the component tree.
 *
 * Pure server component.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import socialProofData from "@/content/social-proof.json";

import { LogoRow } from "./LogoRow";
import { TestimonialsGrid } from "./TestimonialsGrid";

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

interface SocialProofContent {
  eyebrow: string;
  heading: string;
  description: string;
  logos: SocialProofLogo[];
  testimonials: SocialProofTestimonial[];
  githubStars?: {
    label: string;
    href: string;
  };
}

const content: SocialProofContent = socialProofData as SocialProofContent;

export function SocialProof({
  className,
}: SocialProofProps): React.ReactElement {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className={
        "relative isolate scroll-mt-24 py-20 sm:py-28 " + (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          headingId="social-proof-heading"
        />

        <div className="mt-10">
          <LogoRow logos={content.logos} githubStars={content.githubStars} />
        </div>

        <div className="mt-12">
          <TestimonialsGrid testimonials={content.testimonials} />
        </div>
      </Container>
    </section>
  );
}

export default SocialProof;