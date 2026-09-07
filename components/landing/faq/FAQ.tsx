// helix: components/landing/faq/FAQ.tsx
/**
 * @helix:story USER-303000
 *
 * FAQ — accessible disclosure list of the most common questions a
 * visitor has about Helix. Uses native <details>/<summary> so it
 * works without JS and is fully accessible.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";

interface QA {
  readonly q: string;
  readonly a: string;
}

const FAQS: ReadonlyArray<QA> = [
  {
    q: "What does Helix actually do?",
    a: "Helix takes a single prompt, decomposes it into ordered, atomic units, executes each one against your real codebase, verifies the result against types/tests/lint, and ships a single reviewable PR.",
  },
  {
    q: "Is this another AI agent?",
    a: "No — Helix is the orchestrator that sits around your agent. You bring the model and the prompts; Helix handles decomposition, ordering, verification, and PR packaging.",
  },
  {
    q: "How is this different from a raw agent PR?",
    a: "Raw agent output is one long, unverifiable diff. Helix output is a sequence of small, dependency-ordered commits, each gated by your existing checks. You review one unit at a time, not one thousand lines.",
  },
  {
    q: "Does Helix lock me into a provider?",
    a: "No. Helix is provider-agnostic — it orchestrates execution. You can swap models and providers without rewriting your workflow.",
  },
  {
    q: "Can I replay a task?",
    a: "Yes. The plan and inputs are deterministic, so any prior run can be reproduced for debugging or audit.",
  },
  {
    q: "When can I try it?",
    a: "Helix is in private beta. Request access via the CTA at the bottom of this page and we'll get you onboarded.",
  },
];

export function FAQ(): React.ReactElement {
  return (
    <section
      id="faq"
      className="relative scroll-mt-24 py-20 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="hx-eyebrow">FAQ</p>
            <h2 id="faq-heading" className="hx-heading mt-3">
              Answers, before you ask.
            </h2>
            <p className="hx-subheading">
              Still curious? Email{" "}
              <a
                href="mailto:hello@helix.dev"
                className="text-cyan-300 underline-offset-4 hover:underline"
              >
                hello@helix.dev
              </a>{" "}
              and we&apos;ll get back to you.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              {FAQS.map((item, idx) => (
                <li key={item.q}>
                  <details
                    className="group p-6 [&_summary::-webkit-details-marker]:hidden"
                    open={idx === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                      <span className="text-base font-semibold text-white sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                      {item.a}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;