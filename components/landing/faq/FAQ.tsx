// helix: components/landing/faq/FAQ.tsx
/**
 * @helix:story USER-956000
 *
 * FAQ section — server component that renders the FAQ accordion from
 * `content/faq.json`. The interactivity is delegated to a small
 * client component (`FAQAccordionItem`).
 */
import { Container } from "@/components/ui/Container";
import { FAQAccordionItem } from "./FAQAccordionItem";
import faqData from "@/content/faq.json";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQContent {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
}

export function FAQ(): React.ReactElement {
  const data = faqData as FAQContent;
  const items = Array.isArray(data.items) ? data.items : [];

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden py-20 sm:py-28"
    >
      {/* Subtle radial background so the section reads as polished, not flat. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.10),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(168,85,247,0.08),_transparent_60%)]"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {data.eyebrow ? (
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-300/80">
              {data.eyebrow}
            </p>
          ) : null}
          <h2
            id="faq-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {data.title}
          </h2>
          {data.subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {data.subtitle}
            </p>
          ) : null}
        </div>

        {items.length > 0 ? (
          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3 sm:mt-16 sm:gap-4">
            {items.map((item) => (
              <FAQAccordionItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default FAQ;