// helix: components/landing/faq/FAQ.tsx
/**
 * @helix:story USER-956000
 *
 * FAQ — canonical implementation for the FAQ accordion section.
 *
 * Renders a list of common questions about Helix (orchestration,
 * deployment, integrations, pricing, security) with a native
 * `<details>` disclosure so visitors can expand each item. Each
 * question becomes a smooth, accessible disclosure without
 * shipping a client island — `details/summary` ships zero JS.
 *
 * Pure server component. Content is sourced from
 * `@/content/faq.json` so marketing copy can evolve without
 * touching the component tree. Section anchors are also exposed
 * via `#faq` so the Navbar can deep-link here.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import faqData from "@/content/faq.json";

export interface FAQProps {
  className?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: ReadonlyArray<FAQItem>;
}

const content: FAQContent = faqData as FAQContent;

export function FAQ({ className }: FAQProps): React.ReactElement {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={
        "relative isolate scroll-mt-24 py-20 sm:py-28 " + (className ?? "")
      }
    >
      {/* Subtle radial glow background, distinct from other sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.08),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.06),transparent_60%)]"
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={content.eyebrow}
            heading={content.heading}
            description={content.description}
            headingId="faq-heading"
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <ul className="flex flex-col gap-3">
            {content.items.map((item, index) => (
              <li key={item.id}>
                <details
                  open={index === 0}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-0 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-ink-100 [&::-webkit-details-marker]:hidden"
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 rounded-full bg-white/5 p-1 text-ink-300 transition-transform duration-200 group-open:rotate-45"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 1.75v10.5M1.75 7h10.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-ink-300 sm:text-base">
                    <p>{item.answer}</p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;