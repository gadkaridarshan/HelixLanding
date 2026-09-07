// helix: components/landing/faq/FAQAccordionItem.tsx
/**
 * @helix:story USER-956000
 *
 * Single accordion row used by `<FAQ />`. Client component — owns
 * open/closed state via native `<details>`/`<summary>` so it works
 * without JS and degrades gracefully.
 */
"use client";

import { useId, useState } from "react";

export interface FAQAccordionItemProps {
  id: string;
  question: string;
  answer: string;
  /** Optional override; defaults to `question-${id}`. */
  headingId?: string;
}

export function FAQAccordionItem({
  id,
  question,
  answer,
  headingId,
}: FAQAccordionItemProps): React.ReactElement {
  const autoId = useId();
  const panelId = headingId ?? `${id}-panel-${autoId}`;
  const buttonId = `${id}-button-${autoId}`;
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm transition-colors hover:border-white/20"
      data-faq-item={id}
    >
      <h3 className="m-0">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-medium text-white transition-colors hover:bg-white/5 sm:text-lg"
        >
          <span className="flex-1">{question}</span>
          <span
            aria-hidden="true"
            className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-200 transition-transform duration-200 ${
              open ? "rotate-45 bg-white/10" : "rotate-0"
            }`}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                d="M10 4v12M4 10h12"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="px-5 pb-5 pt-0 text-sm leading-relaxed text-slate-300 sm:text-base"
      >
        <div className="border-t border-white/5 pt-4">{answer}</div>
      </div>
    </div>
  );
}

export default FAQAccordionItem;