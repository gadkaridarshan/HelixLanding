/**
 * @helix:story USER-248000
 *
 * FAQ section — uses the accessible accordion primitive from @/components/ui/accordion.
 * Data is sourced from @/content/faq.
 */
import * as React from "react";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Container } from "@/components/ui/Container";
import { faqItems } from "@/content/faq";

export function FAQ(): React.ReactElement {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-pad">
      <Container size="lg">
        <h2 id="faq-heading" className="h-display text-3xl font-semibold text-white mb-10">
          Frequently asked questions
        </h2>
        <Accordion className="space-y-4">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              id={`faq-item-${item.id}`}
              title={item.question}
              defaultOpen={item.id === faqItems[0]?.id}
            >
              <p className="text-white/[0.8] text-base leading-relaxed">
                {item.answer}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}