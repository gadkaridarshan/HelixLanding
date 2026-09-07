// helix: components/FAQ.tsx
/**
 * @helix:story USER-434000
 *
 * FAQ — canonical landing-page FAQ section.
 *
 *   • Server-rendered eyebrow / heading / description.
 *   • Hands the items to the client-side `FaqAccordion` island for
 *     accessible single-open interaction.
 *
 * Content is sourced from `@/content/faq.json` so marketing can
 * iterate on copy without touching the component tree.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { FaqAccordion } from "@/components/faq/FaqAccordion";
import type { FaqItem } from "@/components/faq/FaqAccordion";

import faqData from "@/content/faq.json";

export interface FAQProps {
  className?: string;
}

interface FAQContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: ReadonlyArray<FaqItem>;
}

export function FAQ({ className }: FAQProps): React.ReactElement {
  const content = faqData as FAQContent;

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={`section-pad ${className ?? ""}`}
    >
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          headingId="faq-heading"
          align="center"
        />

        <div className="mx-auto mt-12 w-full max-w-3xl">
          <FaqAccordion items={content.items} />
        </div>
      </Container>
    </section>
  );
}

export default FAQ;