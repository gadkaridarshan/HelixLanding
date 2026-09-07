// helix: components/landing/faq/FAQ.tsx
/**
 * @helix:story USER-956000
 *
 * FAQ — accordion list of common questions about Helix.
 * Reads structured content from `content/faq.json` so copy can be edited
 * without touching the component. Renders as a server component shell
 * with a small "use client" island per item for accordion state.
 */
import type { ReactElement } from "react";
import { Container } from "@/app/components/ui/Container";
import { FAQAccordionItem } from "@/components/landing/faq/FAQAccordionItem";
import faqData from "@/content/faq.json";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export function FAQ(): ReactElement {
  const content = faqData as FAQContent;

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden"
      aria-labelledby="faq-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[860px] rounded-full bg-gradient-to-b from-cyan-500/15 via-cyan-500/5 to-transparent blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
            {content.eyebrow}
          </p>
          <h2
            id="faq-title"
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
          >
            {content.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
            {content.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm divide-y divide-white/10 shadow-2xl shadow-cyan-500/5">
            {content.items.map((item) => (
              <FAQAccordionItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;