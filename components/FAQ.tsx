/**
 * @helix:story USER-933000
 *
 * FAQ — the canonical Frequently Asked Questions section for the
 * Helix landing page.
 *
 * Content is sourced from `@/content/faq.json` and covers:
 *   • What Helix is
 *   • Onboarding / how it differs from raw agents
 *   • Pricing & usage
 *   • Language & framework support
 *   • Self-hosting & deployment
 *   • Verification & safety
 *
 * Renders a fully accessible server-rendered accordion using the
 * shared `<FaqAccordion>` client island — no manual ARIA wiring.
 */
import * as React from "react";

import { FaqAccordion } from "@/components/landing/faq/FaqAccordion";
import { Container } from "@/components/ui/Container";

import faqData from "@/content/faq.json";

export interface FaqProps {
  className?: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FaqItem[];
}

const content: FaqContent = faqData as FaqContent;

export function Faq({ className }: FaqProps): React.ReactElement {
  const { eyebrow, title, subtitle, items } = content;

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={
        "relative isolate overflow-hidden py-20 sm:py-28 lg:py-32 " +
        (className ?? "")
      }
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky heading column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              {eyebrow}
            </span>
            <h2
              id="faq-heading"
              className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {subtitle}
            </p>
          </div>

          {/* Accordion column */}
          <div className="lg:col-span-8">
            <FaqAccordion items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Faq;