// helix: components/FAQ.tsx
/**
 * @helix:story USER-73000
 * @helix:story USER-434000
 *
 * FAQ — canonical landing-page FAQ section.
 *
 *   • Server-rendered eyebrow / heading / description.
 *   • Single-open accordion using a small "use client" island for
 *     accessible disclosure semantics (aria-expanded, aria-controls,
 *     keyboard friendly).
 *   • Content is colocated so the section ships independently of
 *     any in-flight `@/content/faq.json` refactor.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

import { FaqAccordion } from "@/components/faq/FaqAccordion";
import type { FaqItem } from "@/components/faq/FaqAccordion";

const FAQ_ITEMS: ReadonlyArray<FaqItem> = [
  {
    id: "what-is-helix",
    question: "What is Helix, exactly?",
    answer:
      "Helix is an AI orchestrator that turns a single prompt into atomic, verified code units. It plans the work, executes it unit-by-unit against your repo, and verifies every change before merge.",
  },
  {
    id: "how-is-it-different",
    question: "How is Helix different from a coding agent?",
    answer:
      "A coding agent writes one big diff. Helix writes many small, scoped units — each type-checked, tested, and linted against the rest of your repo. Failures pause the loop, so main stays green.",
  },
  {
    id: "what-languages",
    question: "Which languages and frameworks does Helix support?",
    answer:
      "Helix is language-agnostic. It works with any repo that has a working type-check, test, and lint pipeline — TypeScript, Go, Python, Rust, and more.",
  },
  {
    id: "self-hosted",
    question: "Can I self-host Helix?",
    answer:
      "Yes. Helix is open source and runs anywhere you can run Node.js — your laptop, a CI runner, or your own infrastructure.",
  },
  {
    id: "pricing",
    question: "How is Helix priced?",
    answer:
      "Helix itself is open source and free. You bring your own model and your own compute — Helix orchestrates the loop.",
  },
  {
    id: "open-source",
    question: "Is Helix open source?",
    answer:
      "Yes. The full source is on GitHub under a permissive license, and contributions are welcome.",
  },
];

export interface FAQProps {
  className?: string;
}

export function FAQ({ className }: FAQProps): React.ReactElement {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={cn("section-pad", className)}
    >
      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90 sm:text-sm">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            Questions, answered.
          </h2>
          <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">
            Everything you need to know before you wire Helix into your
            workflow.
          </p>
        </header>

        <div className="mx-auto mt-12 w-full max-w-3xl">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </Container>
    </section>
  );
}

export default FAQ;