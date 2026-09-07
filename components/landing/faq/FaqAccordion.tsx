// helix: components/landing/faq/FaqAccordion.tsx
"use client";

/**
 * @helix:story USER-308000
 *
 * FaqAccordion — accessible accordion (one item open at a time).
 * Client island because of local state.
 */
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
                  "flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium text-white transition",
                  "hover:bg-white/5 focus:outline-none focus-visible:bg-white/5 focus-visible:ring-2 focus-visible:ring-cyan-400/60",
                  isOpen && "bg-white/[0.04]",
                )}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-cyan-300 transition-transform",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-relaxed text-slate-300 sm:text-base"
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