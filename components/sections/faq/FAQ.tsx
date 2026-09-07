// helix: components/sections/faq/FAQ.tsx
/**
 * @helix:story USER-303000
 *
 * FAQ — frequently asked questions section. Pure server component
 * that mounts the accessible `FaqAccordion` client island with
 * content sourced from `@/content/faq.json`.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/landing/faq/FaqAccordion";

import faqData from "@/content/faq.json";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: ReadonlyArray<FaqItem>;
}

const content: FaqContent = faqData as FaqContent;

export interface FAQProps {
  className?: string;
}

export function FAQ({ className }: FAQProps): React.ReactElement {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={"section-pad " + (className ?? "")}
    >
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion items={content.items as FaqItem[]} />
        </div>
      </Container>
    </section>
  );
}

export default FAQ;