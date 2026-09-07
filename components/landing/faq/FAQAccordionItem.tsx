// helix: components/landing/faq/FAQAccordionItem.tsx
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
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={
              "h-5 w-5 shrink-0 text-cyan-400 transition-transform duration-200 " +
              (open ? "rotate-180" : "rotate-0")
            }
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
              fill="currentColor"
            />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={`faq-${id}-trigger`}
        hidden={!open}
        className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-slate-300"
      >
        {answer}
      </div>
    </div>
  );
}

export default FAQAccordionItem;