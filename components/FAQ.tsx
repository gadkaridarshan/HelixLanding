// helix: components/FAQ.tsx
/**
 * @helix:story USER-308000
 *
 * Faq — accessible accordion answering the most common objections. The
 * accordion itself is a small client island (`FaqAccordion`); this file
 * stays a server component.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/landing/faq/FaqAccordion";
import { faqs } from "@/content/faqs";

export interface FaqProps {
  className?: string;
}

export function Faq({ className }: FaqProps): React.ReactElement {
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
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            The questions you’re actually asking,{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              answered straight.
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}

export default Faq;