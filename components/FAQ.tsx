// helix: components/Faq.tsx
/**
 * @helix:story USER-23000
 *
 * Faq — accessible FAQ section using native `<details>` disclosure
 * widgets. Fully server-rendered, no client JS required.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

export interface FaqProps {
  className?: string;
}

interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

const faqs: ReadonlyArray<FaqEntry> = [
  {
    id: "what-is-helix",
    question: "What is Helix?",
    answer:
      "Helix is the atomic work-breakdown orchestrator for AI coding agents. It decomposes every prompt into small, reviewable units, executes them in dependency order, and verifies each one (types, tests, lint) before opening a PR.",
  },
  {
    id: "how-is-it-different",
    question: "How is Helix different from a normal AI coding agent?",
    answer:
      "Most agents produce one large, hard-to-review diff. Helix produces many small, dependency-ordered, verified PRs — so review stays fast and the codebase stays green.",
  },
  {
    id: "what-stacks",
    question: "Which stacks does Helix support?",
    answer:
      "Helix works with TypeScript / JavaScript, Python, Go, and Rust out of the box, and adapts to most monorepos via language-aware protected paths.",
  },
  {
    id: "self-hosted",
    question: "Can I self-host Helix?",
    answer:
      "Yes. Helix runs locally against your existing repository, and CI integration keeps the same quality bar on every push.",
  },
  {
    id: "pricing",
    question: "How is Helix priced?",
    answer:
      "Early-access is free for solo developers and small teams. Pricing for larger teams scales with verified units shipped.",
  },
];

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
          <h2
            id="faq-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Everything you need to know before shipping with Helix.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((entry) => (
            <details
              key={entry.id}
              className="group rounded-card border border-white/10 bg-white/5 p-5 open:bg-white/[7%]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white">
                <span>{entry.question}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-slate-400 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-300">{entry.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Faq;