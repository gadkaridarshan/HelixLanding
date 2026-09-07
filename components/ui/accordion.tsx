// helix: components/ui/accordion.tsx
/**
 * @helix:story USER-567000
 *
 * Accordion — minimal accessible disclosure primitive used by the FAQ
 * section. Pure server-rendered details/summary styled with brand
 * tokens; no client interactivity required.
 *
 * Each item is a `<details>` element with a styled `<summary>` that
 * toggles open/closed via the native HTML behavior. This keeps the FAQ
 * fully server-rendered, accessible by default, and keyboard-friendly
 * without shipping any client-side JS.
 *
 * Visual treatment:
 *   - Layered card surface with subtle border + hover state.
 *   - Chevron indicator that rotates on open.
 *   - Smooth height transition handled via native browser behavior
 *     (no animation library required).
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface AccordionItemProps {
  /** Unique id used to wire summary aria-controls + content id. */
  id: string;
  /** Question / trigger label rendered inside the summary. */
  title: React.ReactNode;
  /** Answer / panel content. */
  children: React.ReactNode;
  /** Render this item pre-opened on first paint. */
  defaultOpen?: boolean;
  /** Optional className passthrough for the outer container. */
  className?: string;
}

export function AccordionItem({
  id,
  title,
  children,
  defaultOpen = false,
  className,
}: AccordionItemProps): React.ReactElement {
  return (
    <details
      id={id}
      defaultOpen={defaultOpen}
      className={cn(
        "group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm",
        "transition-colors hover:border-white/20 hover:bg-white/[0.05]",
        "open:border-cyan-400/30 open:bg-white/[0.05]",
        className,
      )}
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-4",
          "px-5 py-4 sm:px-6 sm:py-5",
          "text-left text-base font-medium text-white sm:text-lg",
          "select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
          "rounded-2xl",
        )}
      >
        <span className="block">{title}</span>
        <span
          aria-hidden="true"
          className={cn(
            "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
            "border border-white/15 bg-white/[0.04] text-white/70",
            "transition-transform duration-200 ease-out",
            "group-open:rotate-180 group-open:border-cyan-400/40 group-open:text-cyan-200",
          )}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </summary>
      <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-white/70 sm:px-6 sm:pb-6 sm:pt-2 sm:text-base">
        {children}
      </div>
    </details>
  );
}

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({
  children,
  className,
}: AccordionProps): React.ReactElement {
  return (
    <div
      className={cn("flex flex-col gap-3 sm:gap-4", className)}
      role="presentation"
    >
      {children}
    </div>
  );
}

export default AccordionItem;