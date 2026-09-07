// helix: components/sections/FAQ.tsx
/**
 * @helix:story USER-215000
 *
 * FAQ — accessible FAQ accordion section for the Helix landing page.
 *
 * Covers product, technical, and user-type questions relevant to all
 * personas surfaced elsewhere on the page (Developers, Product managers,
 * Founders, Enterprise teams). Content is sourced from
 * `@/content/faq.json` so marketing can evolve the copy without touching
 * the component tree.
 *
 * Implementation notes:
 *   • Pure server component — accessibility wiring is delegated to the
 *     `"use client"` `FaqAccordion` island, which already implements the
 *     WAI-ARIA Accordion pattern (button + aria-expanded + aria-controls,
 *     one-item-open semantics, keyboard-friendly).
 *   • Section identity: `id="faq"`, `aria-labelledby="faq-heading"` so
 *     in-page nav and assistive tech can target the section as a region.
 *   • Visual treatment matches the rest of the marketing surface: brand
 *     gradient background, glass card, container tokens, and the shared
 *     `SectionHeading` primitive for consistent eyebrow + heading + lede.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { FaqAccordion } from "@/components/landing/faq/FaqAccordion";

import faqData from "@/content/faq.json";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: FaqItem[];
}

const content = faqData as FaqContent;

export interface FAQProps {
  className?: string;
}

export function FAQ({ className }: FAQProps): React.ReactElement {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={
        "relative overflow-hidden py-24 sm:py-32 " + (className ?? "")
      }
    >
      {/* Background gradient layer */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_55%)]" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-gradient-to-t from-violet-500/15 via-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-grid-overlay opacity-30" />
      </div>

      <Container size="6xl" className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              align="left"
              eyebrow={content.eyebrow}
              headingId="faq-heading"
              heading={content.heading}
              lede={content.description}
            />
          </div>

          <div className="w-full">
            <FaqAccordion items={content.items} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;