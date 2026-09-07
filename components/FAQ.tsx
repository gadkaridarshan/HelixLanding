// helix: components/Faq.tsx
/**
 * @helix:story USER-607000
 *
 * FAQ — frequently-asked questions surfaced in the marketing site.
 *
 * Pure server component. The disclosure UI is implemented with a
 * native `<details>` element so we don't ship client JS for an
 * accordion. Copy is sourced from `@/content/faq.json` to keep
 * marketing copy out of the component tree.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

import faqData from "@/content/faq.json";

export interface FaqProps {
  className?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: FaqItem[];
}

const content: FaqContent = faqData as FaqContent;

export function FAQ({ className }: FaqProps): React.ReactElement {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            {content.eyebrow}
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl lg:text-5xl"
          >
            {content.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink-300">
            {content.description}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          {content.items.map((item) => (
            <details
              key={item.question}
              className="group px-6 py-5 [&[open]]:bg-white/[0.03]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink-50 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0 text-brand-400 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-7 text-ink-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;