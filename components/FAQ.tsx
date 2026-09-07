// helix: components/FAQ.tsx
/**
 * @helix:story USER-73000
 * @helix:story USER-303000
 *
 * FAQ — accordion section answering the most common decision-maker
 * questions about Helix: orchestration, deployment, integrations,
 * pricing, and security.
 *
 * Renders a list of common questions with a native `<details>`
 * disclosure so visitors can expand each item. Each question becomes
 * a smooth, accessible disclosure without shipping a client island —
 * `details/summary` ships zero JS.
 *
 * Pure server component. Content is colocated so it always ships
 * with the page even if the shared `@/content/faq.json` file is
 * in flux.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

export interface FAQItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

const FAQS: ReadonlyArray<FAQItem> = [
  {
    id: "what-is-helix",
    question: "What is Helix and how does it work?",
    answer:
      "Helix is an AI orchestrator for software teams. It reads your prompt, plans the work as a sequence of atomic units, executes each unit through a coding agent, and verifies the result with your existing type-check, test, and lint pipelines before handing you review-ready PRs.",
  },
  {
    id: "which-agents",
    question: "Which AI coding agents does Helix support?",
    answer:
      "Helix is agent-agnostic. It works with the OpenAI, Anthropic, and Google model APIs, and integrates with agent SDKs that expose a tool-call interface. You can swap models per unit without changing your workflow.",
  },
  {
    id: "deployment",
    question: "How do I deploy Helix?",
    answer:
      "Helix is a Node.js application that runs against any Git repository. You can self-host it on your own infrastructure or deploy it to Vercel, Fly, or Railway in minutes. The only required secrets are your Git provider token and the model API keys you want to use.",
  },
  {
    id: "integrations",
    question: "Does Helix integrate with my existing CI and code review tools?",
    answer:
      "Yes. Helix runs your existing verification pipelines (TypeScript, ESLint, Jest, Vitest, pytest, Go test, etc.) and pushes review-ready branches to GitHub, GitLab, or Bitbucket. Every unit becomes a real PR you can review like any other change.",
  },
  {
    id: "security",
    question: "Is Helix safe to run on production codebases?",
    answer:
      "Helix never modifies your main branch directly. Every unit runs in an isolated worktree, and merges only happen after your verification pipeline passes. You can scope Helix to specific directories, branches, and repos so it stays inside your existing security perimeter.",
  },
  {
    id: "pricing",
    question: "How is Helix priced?",
    answer:
      "Helix is free during early access. You'll only pay for the model API usage that Helix drives on your behalf — billed directly by your model provider. Team and enterprise plans with shared dashboards, audit trails, and SSO are coming soon.",
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
      className={
        "relative py-24 sm:py-32 " + (className ?? "")
      }
    >
      <Container size="md">
        <div className="mx-auto max-w-2xl text-center">
          <span className="hx-chip mx-auto">
            <span className="hx-chip-dot" />
            Frequently asked
          </span>
          <h2
            id="faq-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Questions, answered.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Everything you need to know before you let Helix touch your
            repository.
          </p>
        </div>

        <div className="mt-12 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {FAQS.map((item) => (
            <details
              key={item.id}
              className="group px-5 py-5 sm:px-6 sm:py-6 open:bg-white/[0.02]"
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-white sm:text-lg"
              >
                <span>{item.question}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 shrink-0 text-white/60 transition-transform group-open:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;