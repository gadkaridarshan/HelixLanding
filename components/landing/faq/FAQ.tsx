// helix: components/landing/faq/FAQ.tsx
/**
 * @helix:story USER-303000
 *
 * FAQ — native `<details>`-based disclosure list (no client JS required,
 * fully accessible, keyboard-friendly). Each item answers a common
 * question about Helix.
 */
import * as React from "react";

interface QA {
  readonly q: string;
  readonly a: string;
}

const items: readonly QA[] = [
  {
    q: "What does Helix actually do?",
    a: "Helix is an orchestration layer for AI coding agents. It breaks a single prompt into small, reviewable units, executes them in order, and verifies each one against the rest of your repo before producing a pull request.",
  },
  {
    q: "Does Helix replace my coding agent?",
    a: "No. Helix plugs into the agent you already use — it plans and verifies, but your model still writes the code. Bring your own model and your own agent harness.",
  },
  {
    q: "How is this different from running an agent in a loop?",
    a: "Most agent loops produce a single sprawling diff. Helix produces atomic PRs — each one small enough to read in a few minutes — with explicit dependency ordering between them.",
  },
  {
    q: "Which languages and frameworks are supported?",
    a: "Helix is language-agnostic. Verification is driven by your repo’s existing toolchain (type-checkers, test runners, linters), so anything your project already supports is supported.",
  },
  {
    q: "Can I review or steer mid-run?",
    a: "Yes. Helix stops at every unit boundary so you can review the diff, request changes, or merge. The loop only continues when you say it can.",
  },
  {
    q: "How do I get access?",
    a: "Early access is rolling. Request access via the CTA on this page and we’ll reach out as your cohort opens.",
  },
];

export function FAQ(): React.ReactElement {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-pad">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">FAQ</span>
          <h2
            id="faq-title"
            className="h-display mt-4 text-3xl font-semibold text-white sm:text-4xl"
          >
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-brand-muted">
            Quick answers to the things people ask first.
          </p>
        </div>

        <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
          {items.map((item) => (
            <details
              key={item.q}
              className="group bg-brand-ink/40 p-6 open:bg-brand-ink/60"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-white">
                <span className="text-base font-medium sm:text-lg">
                  {item.q}
                </span>
                <PlusIcon />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlusIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-brand-cyan transition-transform duration-200 group-open:rotate-45"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default FAQ;