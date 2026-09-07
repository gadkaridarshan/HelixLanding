// helix: components/sections/FAQ.tsx
/**
 * @helix:story USER-171000
 *
 * FAQ — accordion of common objections and answers about Helix.
 *
 * Built on the native `<details>`/`<summary>` disclosure so the
 * marketing site ships zero client JS for the FAQ. Content is
 * sourced from `@/content/faq.json`.
 *
 * Pure server component.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQItem } from "@/components/ui/faq-item";

import faqData from "@/content/faq.json";

export interface FAQProps {
  className?: string;
}

export interface FAQEntry {
  id: string;
  question: string;
  answer: string;
}

interface FAQContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: ReadonlyArray<FAQEntry>;
}

const content: FAQContent = faqData as FAQContent;

export function FAQ({ className }: FAQProps): React.ReactElement {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-28 " + (className ?? "")
      }
    >
      {/* Background: subtle radial highlight + grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
        <div className="absolute right-1/4 top-1/3 h-[280px] w-[560px] rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={content.eyebrow}
            heading={content.heading}
            description={content.description}
            headingId="faq-heading"
            align="center"
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {content.items.map((item) => (
            <FAQItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;