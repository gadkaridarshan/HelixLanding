// helix: components/sections/faq/FAQAccordionItem.tsx
/**
 * @helix:story USER-956000
 *
 * Single accordion item — a small "use client" island that owns the
 * open/close state for one question. Uses native <details>/<summary>
 * semantics for accessibility, plus a custom chevron animation.
 */
"use client";

import { useId, useState, type ReactElement } from "react";

export interface FAQAccordionItemProps {
  id: string;
  question: string;
  answer: string;
}

export function FAQAccordionItem({
  id,
  question,
  answer,
}: FAQAccordionItemProps): ReactElement {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  return (
    <div className="group">
      <h3>
        <button
          type="button"
          id={`faq-${id}-trigger`}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6 text-left text-base sm:text-lg font-medium text-white hover:bg-white/[0.03] focus-visible:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transition-colors"
        >
          <span>{question}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={
              "h-5 w-5 flex-none text-cyan-300 transition-transform duration-200 " +
              (open ? "rotate-180" : "")
            }
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={`faq-${id}-trigger`}
        hidden={!open}
        className="px-5 pb-6 pt-0 text-sm leading-relaxed text-white/70 sm:px-6"
      >
        {answer}
      </div>
    </div>
  );
}

export default FAQAccordionItem;