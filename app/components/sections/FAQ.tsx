"use client";

import { useId, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: "What exactly is Helix?",
    a: "Helix is an open-core AI coding orchestrator. It breaks a goal into language-aware cards, runs multiple agents in parallel under protected write globs, and produces a reviewable, deployable diff — instead of a chat thread you'll have to re-interpret later.",
  },
  {
    q: "How does parallelization actually work?",
    a: "Helix plans first, locks the language and glob for each task, then dispatches agents to disjoint paths. Up to three agents work in parallel, each scoped to files the others cannot touch, so merges stay clean and conflicts stay rare.",
  },
  {
    q: "Which stacks does Helix support?",
    a: "Anything you can describe in text. Helix ships tuned prompts for TypeScript, JavaScript, Python, Go, and Rust, and the runtime is language-agnostic — drop in any repo with a clear README and Helix will plan in the right dialect.",
  },
  {
    q: "How is this different from a chat-based coding agent?",
    a: "Chat agents give you prose. Helix gives you a Kanban: a plan card, a language-locked write glob, a protected-path guardrail, and an auditable trace. You review structure, not transcripts.",
  },
  {
    q: "Can I self-host Helix?",
    a: "Yes. Helix is open-core and ships a self-hostable runner with pluggable model endpoints. Run it on your infra, point it at your private models, and integrate with the SSO, secrets, and observability stack you already trust.",
  },
];

export function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.10),_transparent_60%)]"
      />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">
            Frequently asked
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Questions buyers ask before they click Deploy
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            Skim the answers. If yours isn&apos;t here, open an issue on GitHub
            — we read every one.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <ul role="list" className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `${baseId}-panel-${idx}`;
              const buttonId = `${baseId}-button-${idx}`;
              return (
                <li
                  key={item.q}
                  className={cn(
                    "overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition",
                    isOpen && "border-violet-400/40 bg-white/[0.06]"
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-white hover:text-violet-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 sm:text-lg"
                    >
                      <span>{item.q}</span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className={cn(
                          "h-5 w-5 flex-none text-slate-400 transition-transform duration-200",
                          isOpen && "rotate-180 text-violet-300"
                        )}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 8l4 4 4-4"
                        />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-5 pb-5 text-sm leading-7 text-slate-300 sm:text-base"
                  >
                    {item.a}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;