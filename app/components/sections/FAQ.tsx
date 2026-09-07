// helix: app/components/sections/FAQ.tsx
"use client";

import { useState, useId } from "react";
import { Container } from "../ui/Container";
import { Section } from "../../../components/ui/Section";
import { cn } from "../../../components/ui/cn";

/** @helix:story USER-212000 */

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What is Helix?",
    a: "Helix is an AI orchestrator for software work. Instead of a single chat agent that wanders, Helix runs a deterministic plan → execute → verify loop with language-locked planning, bounded writes, and reviewable diffs. You give it a goal; it gives you code you can ship.",
  },
  {
    q: "How does parallelization actually work?",
    a: "Helix spins up up to three concurrent agents — typically planner, implementer, and verifier — that coordinate through a shared plan file. Each agent has a scoped role and write boundary, so parallelism multiplies throughput without multiplying chaos.",
  },
  {
    q: "What stacks and languages are supported?",
    a: "Helix is language-locked, not language-limited. It detects your stack from the repo and stays in it: TypeScript / Next.js, Python / FastAPI, Go, Rust, and more. It will not quietly introduce a different framework because it likes one better.",
  },
  {
    q: "How is Helix different from a chat agent?",
    a: "Chat agents are reactive — you prompt, they answer. Helix is orchestrated — it plans, writes inside protected globs, verifies the result, and reports back in plan terms. The difference shows up the moment your codebase isn't a toy.",
  },
  {
    q: "Can I self-host Helix?",
    a: "Yes. Helix ships with a deployable runtime and a clear configuration surface. Run it on Vercel for the fastest path, or self-host on your own infrastructure with the same protected-write guarantees. Your code never has to leave your perimeter.",
  },
];

/**
 * `FAQ` — accessible accordion of marketing FAQs. Each item is keyboard
 * navigable and uses `aria-expanded` / `aria-controls` for screen readers.
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Section
      id="faq"
      eyebrow="Questions, answered"
      title="Frequently asked"
      description="The things buyers and evaluators ask before they click Deploy."
    >
      <Container>
        <ul className="mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;
            return (
              <li key={item.q}>
                <button
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={cn(
                    "flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors",
                    "hover:bg-white/[0.03] focus-visible:outline-none focus-visible:bg-white/[0.04]"
                  )}
                >
                  <span className="text-base font-medium text-white sm:text-lg">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-transform duration-200",
                      isOpen && "rotate-45 border-violet-400/40 bg-violet-500/10 text-violet-200"
                    )}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="min-h-0">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}