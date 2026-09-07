// helix: components/sections/FAQ.tsx
/**
 * @helix:story USER-303000
 *
 * FAQ — accessible details/summary accordion. Pure server render,
 * progressively enhanced by the browser.
 */
import * as React from "react";

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface FAQProps {
  className?: string;
}

const ITEMS: ReadonlyArray<FaqItem> = [
  {
    question: "How is Helix different from a normal AI coding agent?",
    answer:
      "Most agents produce one large diff per prompt. Helix decomposes the work into atomic, reviewable units with explicit dependencies and verifies each unit against your repo before it ships.",
  },
  {
    question: "Does Helix run my tests and type-checks?",
    answer:
      "Yes. After every unit, Helix runs your project's type-checker, linter, and test command. A unit is only marked complete when the repo is green.",
  },
  {
    question: "Where does my code go?",
    answer:
      "Your code stays in your repo, on your machine or your CI. Helix orchestrates the work — it does not require you to upload your codebase to a hosted service.",
  },
  {
    question: "Can I pause or edit a unit mid-flight?",
    answer:
      "Yes. You can pause the run, reorder units, edit a unit's plan, or hand a unit back to a human. Helix augments your workflow — it does not replace it.",
  },
  {
    question: "Which languages and frameworks are supported?",
    answer:
      "Helix is language-agnostic at the orchestration layer. Verified integrations exist for TypeScript / Node, Python, Go, and Rust, with more on the way.",
  },
];

function FaqAccordionItem({
  item,
}: {
  item: FaqItem;
}): React.ReactElement {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition open:border-cyan-400/40 open:bg-white/[0.05]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white">
        <span>{item.question}</span>
        <span
          aria-hidden="true"
          className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-300 transition group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        {item.answer}
      </p>
    </details>
  );
}

export function FAQ({ className }: FAQProps): React.ReactElement {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={
        "relative border-t border-white/5 py-20 md:py-28 " + (className ?? "")
      }
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Questions, answered.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            The questions we get most often about how Helix works, what it
            touches in your repo, and what it doesn&apos;t.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {ITEMS.map((item) => (
            <FaqAccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;