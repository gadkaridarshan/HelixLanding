// helix: app/components/sections/FAQ.tsx
"use client";

import { useState, useId, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/components/ui/cn";

/**
 * @helix:story USER-212100
 * FAQ — accessible accordion section answering the last objections before deploy.
 * Client component (interactive disclosure). Imports only from components/ui.
 */

interface FAQItem {
  id: string;
  question: string;
  answer: ReactNode;
}

const faqs: FAQItem[] = [
  {
    id: "what-is-helix",
    question: "What is Helix, in one sentence?",
    answer: (
      <>
        Helix is an <strong className="text-white">atomic work-breakdown orchestrator</strong>:
        it decomposes a product requirement into small, reviewable cards and dispatches
        coding agents to ship each one in parallel — without losing control of your
        files, your conventions, or your review process.
      </>
    ),
  },
  {
    id: "how-parallelization",
    question: "How does Helix run agents in parallel without stomping on my code?",
    answer: (
      <>
        Before any agent writes, Helix produces a dependency graph of the work and
        assigns each card an explicit <em>protected path</em>. Agents only operate inside
        their assigned files, so two cards can never edit the same region at the same
        time. Conflicts that do arise are surfaced as a single reviewable diff stream
        instead of a git rebase nightmare.
      </>
    ),
  },
  {
    id: "supported-stacks",
    question: "Which stacks and languages does Helix support today?",
    answer: (
      <>
        Helix ships with first-class prompts for <strong className="text-white">TypeScript, JavaScript, Python, Go, Rust, and Swift</strong>,
        and a generic fallback for anything else. It understands monorepos,
        framework conventions (Next.js, React, Vite, FastAPI, Rails), and your
        project&apos;s lint + test commands so every card is verified before it&apos;s marked Done.
      </>
    ),
  },
  {
    id: "vs-chat-agent",
    question: "How is Helix different from a chat-based coding agent?",
    answer: (
      <>
        A chat agent gives you one long, ambiguous conversation. Helix gives you a
        structured <strong className="text-white">board</strong>: each task is bounded,
        scoped, and reviewable. You can run multiple agents in parallel, pause them,
        rerun a single card, or hand a card back to a human — without rewriting the
        whole plan. It&apos;s the difference between &ldquo;ask an LLM to code&rdquo; and
        &ldquo;operate a small engineering team.&rdquo;
      </>
    ),
  },
  {
    id: "self-host",
    question: "Can I self-host Helix, or is it Vercel / SaaS only?",
    answer: (
      <>
        Both. The default deploy is a one-click <strong className="text-white">Vercel + GitHub</strong> setup
        with the orchestrator running as serverless functions. If you need it on your
        own infra, the same code runs on any Node 20+ host, behind your VPN, with
        your choice of model provider (OpenAI, Anthropic, or a local Ollama endpoint).
      </>
    ),
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "h-5 w-5 shrink-0 text-violet-300 transition-transform duration-300",
        open && "rotate-180"
      )}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function FAQRow({
  item,
  isOpen,
  onToggle,
  panelId,
  buttonId,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
  buttonId: string;
}) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-200",
        isOpen ? "border-violet-400/30 bg-white/[0.06]" : "hover:border-white/20 hover:bg-white/[0.05]"
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-white sm:px-6 sm:py-5 sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-2xl"
        >
          <span className="text-balance">{item.question}</span>
          <ChevronIcon open={isOpen} />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-300 sm:px-6 sm:pb-6 sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  // Allow only one panel open at a time — keeps the page focused.
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);
  const baseId = useId();

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Questions, answered.</>}
      description={
        <>
          The five things every evaluator asks before clicking deploy. Still curious?
          Ping us on GitHub and we&apos;ll add yours to the list.
        </>
      }
      align="center"
      className="border-t border-white/5"
    >
      <Container size="md" className="mx-auto">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:gap-4">
          {faqs.map((item) => {
            const panelId = `${baseId}-${item.id}-panel`;
            const buttonId = `${baseId}-${item.id}-button`;
            return (
              <FAQRow
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() =>
                  setOpenId((current) => (current === item.id ? null : item.id))
                }
                panelId={panelId}
                buttonId={buttonId}
              />
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-400">
          Don&apos;t see your question?{" "}
          <a
            href="https://github.com/gadkaridarshan/Helix/issues"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-violet-300 underline-offset-4 transition hover:text-violet-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
          >
            Open an issue on GitHub
          </a>
          .
        </p>
      </Container>
    </Section>
  );
}

export default FAQ;