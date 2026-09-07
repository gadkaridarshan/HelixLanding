// helix: components/faq/FaqAccordion.tsx
"use client";

/**
 * @helix:story USER-434000
 *
 * FaqAccordion — accessible single-open accordion island.
 * Uses `aria-expanded` + `aria-controls`, and `role="region"`
 * for screen-reader navigation between trigger and panel.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items: ReadonlyArray<FaqItem>;
  className?: string;
}

export function FaqAccordion({
  items,
  className,
}: FaqAccordionProps): React.ReactElement {
  const [openId, setOpenId] = React.useState<string | null>(items[0]?.id ?? null);

  return (
    <div
      className={cn(
        "divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm",
        className,
      )}
    >
      {items.map((item) => {
        const isOpen = item.id === openId;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;
        return (
          <div key={item.id} className="group">
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6",
                  "text-left text-base sm:text-lg font-medium text-white",
                  "transition-colors hover:bg-white/[0.04]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:bg-white/[0.06]",
                )}
              >
                <span>{item.question}</span>
                <Chevron open={isOpen} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(
                "px-5 pb-6 pt-0 sm:px-6",
                "text-sm sm:text-base leading-relaxed text-slate-300",
              )}
            >
              <p className="m-0 max-w-3xl">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Chevron({ open }: { open: boolean }): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200",
        open ? "rotate-180 text-cyan-300" : "rotate-0",
      )}
    >
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}

export default FaqAccordion;