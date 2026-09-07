// helix: components/ui/accordion.tsx
/**
 * @helix:story USER-567000
 *
 * Accordion — accessible WAI-ARIA accordion primitive.
 *
 * Behavior:
 *   • Renders as a vertical list of items with a header trigger and
 *     a collapsible content panel.
 *   • `type === "single"` (default): only one item open at a time.
 *     `type === "multiple"`: many items may be open simultaneously.
 *   • `collapsible === true` (default): every item can be closed; if
 *     false, the open item is sticky and cannot be toggled shut.
 *   • Trigger button manages `aria-expanded` and `aria-controls`.
 *     Panel exposes `aria-labelledby` pointing at the trigger.
 *   • Keyboard: native <button> semantics — Space / Click toggle.
 *
 * Implementation notes:
 *   • Client component (`"use client"`) — toggling open state requires
 *     interactivity.
 *   • No external runtime dependencies — relies on React + the local
 *     `cn` helper for class composition.
 *   • Styling hooks:
 *       - `className` on the root <ul> container.
 *       - `itemClassName` on each <li> wrapper.
 *       - `triggerClassName` on each <button>.
 *       - `panelClassName` on each <div role="region">.
 */
"use client";

import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface AccordionItemData {
  readonly id: string;
  readonly question: React.ReactNode;
  readonly answer: React.ReactNode;
}

export interface AccordionProps {
  readonly items: ReadonlyArray<AccordionItemData>;
  /**
   * `"single"` enforces one open at a time; `"multiple"` allows many.
   * @default "single"
   */
  readonly type?: "single" | "multiple";
  /**
   * When `type === "single"`, controls whether an item can be closed.
   * Ignored when `type === "multiple"`.
   * @default true
   */
  readonly collapsible?: boolean;
  readonly defaultOpenIds?: ReadonlyArray<string>;
  readonly className?: string;
  readonly itemClassName?: string;
  readonly triggerClassName?: string;
  readonly panelClassName?: string;
}

type OpenSet = ReadonlySet<string>;

function nextSingleState(
  current: OpenSet,
  id: string,
  collapsible: boolean,
): OpenSet {
  if (current.has(id)) {
    if (!collapsible) {
      // Sticky open — never close.
      return current;
    }
    return new Set();
  }
  return new Set([id]);
}

function nextMultipleState(current: OpenSet, id: string): OpenSet {
  const next = new Set(current);
  if (next.has(id)) {
    next.delete(id);
  } else {
    next.add(id);
  }
  return next;
}

export function Accordion({
  items,
  type = "single",
  collapsible = true,
  defaultOpenIds,
  className,
  itemClassName,
  triggerClassName,
  panelClassName,
}: AccordionProps): React.ReactElement {
  const initial = React.useMemo<OpenSet>(
    () => new Set(defaultOpenIds ?? []),
    [defaultOpenIds],
  );

  const [openIds, setOpenIds] = React.useState<OpenSet>(initial);

  const toggle = React.useCallback(
    (id: string) => {
      setOpenIds((prev) =>
        type === "single"
          ? nextSingleState(prev, id, collapsible)
          : nextMultipleState(prev, id),
      );
    },
    [type, collapsible],
  );

  return (
    <ul
      role="list"
      className={cn("hx-accordion divide-y divide-white/10", className)}
    >
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const triggerId = `${item.id}-trigger`;
        const panelId = `${item.id}-panel`;
        return (
          <li
            key={item.id}
            className={cn("hx-accordion-item", itemClassName)}
          >
            <h3 className="hx-accordion-heading m-0">
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className={cn(
                  "hx-accordion-trigger flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-white transition hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  triggerClassName,
                )}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "hx-accordion-icon inline-flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-200",
                    isOpen ? "rotate-45" : "rotate-0",
                  )}
                >
                  {/* Plus glyph that rotates into an X when open. */}
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5"
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
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={cn(
                "hx-accordion-panel pb-5 pr-12 text-sm leading-relaxed text-slate-300",
                panelClassName,
              )}
            >
              {item.answer}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Accordion;