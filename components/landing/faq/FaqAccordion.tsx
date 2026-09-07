// helix: components/landing/faq/FaqAccordion.tsx
"use client";

import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({
  items,
}: FaqAccordionProps): React.ReactElement {
  const [openId, setOpenId] = React.useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {items.map((item) => {
        const isOpen = item.id === openId;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6 text-left text-base sm:text-lg font-medium text-ink-50 transition-colors",
                  "hover:bg-white/[0.04] focus-visible:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
                )}
              >
                <span>{item.question}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className={cn(
                    "h-5 w-5 flex-none text-brand-300 transition-transform",
                    isOpen ? "rotate-180" : "rotate-0",
                  )}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 8l4 4 4-4"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-6 text-sm leading-relaxed text-slate-300 sm:px-6"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaqAccordion;