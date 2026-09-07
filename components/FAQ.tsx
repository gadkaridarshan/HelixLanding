// helix: components/Faq.tsx
/**
 * @helix:story USER-63000
 *
 * Faq — minimal FAQ section using native `<details>` disclosure so it
 * remains a pure server component with zero client JS. Content is
 * sourced from `@/content/faq.json`.
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

export function Faq({ className }: FaqProps): React.ReactElement {
  return (
    <section
      id="faq"
      data-testid="faq"
      aria-labelledby="faq-heading"
      className={
        "relative isolate py-20 sm:py-28 lg:py-32 " + (className ?? "")
      }
    >
      <Container width="default">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {content.eyebrow}
          </span>
          <h2
            id="faq-heading"
            className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {content.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
          {content.items.map((item) => (
            <details
              key={item.question}
              className="group px-6 py-5 [&[open]>summary_svg]:rotate-45"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white">
                <span>{item.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-cyan-300 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Faq;