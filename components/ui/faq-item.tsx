// helix: components/ui/faq-item.tsx
/**
 * @helix:story USER-171000
 *
 * FAQItem — a single FAQ disclosure row, implemented with the native
 * `<details>`/`<summary>` elements so the marketing site ships zero
 * client JS for the accordion.
 *
 * Pure server component.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
  className?: string;
}

function ChevronIcon(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-ink-300 transition-transform duration-200 group-open:rotate-180"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function FAQItem({
  id,
  question,
  answer,
  defaultOpen = false,
  className,
}: FAQItemProps): React.ReactElement {
  return (
    <details
      id={id}
      defaultOpen={defaultOpen}
      className={cn(
        "group rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.04] open:border-white/20 open:bg-white/[0.05]",
        className,
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <ChevronIcon />
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-ink-200">
        {answer}
      </div>
    </details>
  );
}

export default FAQItem;