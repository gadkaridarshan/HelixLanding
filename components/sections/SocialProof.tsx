// helix: components/sections/SocialProof.tsx
/**
 * @helix:story USER-171000
 *
 * SocialProof — testimonial/social-proof band showing credible signals
 * for prospective Helix users. Renders a section heading plus a
 * responsive grid of `TestimonialCard`s sourced from
 * `@/content/social-proof.json`.
 *
 * Pure server component — no client JS. Content is JSON-driven so
 * marketing copy can evolve without touching the component tree.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard, type Testimonial } from "@/components/ui/testimonial-card";

import socialProofData from "@/content/social-proof.json";

export interface SocialProofProps {
  className?: string;
}

interface SocialProofContent {
  eyebrow: string;
  heading: string;
  description: string;
  testimonials: ReadonlyArray<Testimonial>;
}

const content: SocialProofContent = socialProofData as SocialProofContent;

export function SocialProof({ className }: SocialProofProps): React.ReactElement {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-28 " + (className ?? "")
      }
    >
      {/* Background: subtle aurora gradient + grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950" />
        <div className="absolute left-1/2 top-0 h-[320px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          headingId="social-proof-heading"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SocialProof;