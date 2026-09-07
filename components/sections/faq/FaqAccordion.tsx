// helix: components/sections/faq/FaqAccordion.tsx
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
                  "flex w-full items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6 text-left text-base sm:text-lg font-medium text-white hover:bg-white/[0.03] focus-visible:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transition-colors"
                )}
              >
                <span>{item.question}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "h-5 w-5 flex-none text-cyan-300 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-6 pt-0 text-sm leading-relaxed text-white/70 sm:px-6"
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