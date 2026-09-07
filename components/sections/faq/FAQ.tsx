// helix: components/sections/faq/FAQ.tsx
/**
 * @helix:story USER-303000
 *
 * FAQ — last-mile objection handling. Pure server component shell
 * delegating to a client accordion for open/close state.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { FaqAccordion, type FaqItem } from "./FaqAccordion";

const ITEMS: ReadonlyArray<FaqItem> = [
  {
    id: "what",
    question: "What does Helix actually do?",
    answer:
      "Helix reads your prompt and codebase, plans the work into atomic units, executes them with your coding agent, and verifies each one (types, tests, lint) before merge.",
  },
  {
    id: "why",
    question: "Why atomic units instead of one big change?",
    answer:
      "Small, scoped units are reviewable in minutes, run quickly, and keep main green. Big AI diffs are hard to verify and easy to break.",
  },
  {
    id: "models",
    question: "Which models does Helix support?",
    answer:
      "Helix is model-agnostic. Bring Claude, GPT, Gemini, or your own inference endpoint — Helix orchestrates the loop, not the model.",
  },
  {
    id: "stack",
    question: "Does Helix work with my stack?",
    answer:
      "If your repo has a working type-check, test, and lint pipeline, Helix works with it. TypeScript, Python, Go, Rust, Java — all supported.",
  },
  {
    id: "open-source",
    question: "Is Helix open source?",
    answer:
      "Yes. Helix is open source under the MIT license. Star the repo, file issues, and contribute.",
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
      className={"section-pad " + (className ?? "")}
    >
      <Container>
        <SectionHeading
          eyebrow="Questions"
          heading="Frequently asked."
          description="Everything you need to know before wiring Helix into your workflow."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion items={[...ITEMS]} />
        </div>
      </Container>
    </section>
  );
}

export default FAQ;