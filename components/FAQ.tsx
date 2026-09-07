// helix: components/Faq.tsx
/**
 * @helix:story USER-308000
 *
 * Faq — accessible FAQ section.
 *
 * Implemented with native `<details>`/`<summary>` so the accordion works
 * without client-side JavaScript and remains crawlable for SEO. Each
 * question is a stable anchor for deep-links.
 *
 * Pure server component.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/components/ui/cn";

export interface FaqProps {
  className?: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const ITEMS: readonly FaqItem[] = [
  {
    q: "What does Helix actually do?",
    a: "Helix takes a high-level intent (a prompt, a ticket, a design doc) and decomposes it into small atomic units of work. Each unit has a clear scope, runs in order, and is verified against the rest of your repo before any of it is merged.",
  },
  {
    q: "How is this different from just running an agent in a loop?",
    a: "A plain agent loop produces one big diff you have to review top-to-bottom. Helix produces many small, reviewable diffs, each tied to a single intent — with explicit dependencies between them and per-unit verification.",
  },
  {
    q: "Do I need to change my stack?",
    a: "No. Helix works on top of your existing repo, tests, linters, and CI. You plug in the verification rules you already trust; Helix only decides what to run and in what order.",
  },
  {
    q: "Will it touch my main branch?",
    a: "Never automatically. Every unit ships as its own branch / PR and waits for your review and approval. You stay in control of what lands on main.",
  },
  {
    q: "How do I get started?",
    a: "Drop the Helix runner into your repo, point it at an intent, and review the resulting PRs. Most teams ship their first atomic unit within an hour of install.",
  },
  {
    q: "Is Helix open source?",
    a: "Helix is built openly and the source is public on GitHub. You can audit every step the agent takes, every dependency it claims, and every check it runs.",
  },
];

function PlusIcon({
  open,
}: {
  open: boolean;
}): React.ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn(
        "shrink-0 text-brand-300 transition-transform duration-base",
        open && "rotate-45",
      )}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function FaqRow({
  item,
  index,
}: {
  item: FaqItem;
  index: number;
}): React.ReactElement {
  const id = `faq-${index}`;
  // Server components can't read open state, so we render a static plus
  // icon. The accordion itself is fully driven by the native <details>
  // toggle, which provides the open/close UX.
  return (
    <details
      className={cn(
        "group rounded-card border border-white/10 bg-white/[0.02] open:bg-white/[0.04]",
        "transition-colors duration-base",
      )}
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4",
          "text-left text-base font-semibold text-white sm:text-lg",
        )}
      >
        <span id={`${id}-q`}>{item.q}</span>
        <PlusIcon open={false} />
      </summary>
      <div
        id={`${id}-a`}
        aria-labelledby={`${id}-q`}
        className="px-5 pb-5 text-sm leading-relaxed text-neutral-300 sm:text-base"
      >
        {item.a}
      </div>
    </details>
  );
}

export function Faq({ className }: FaqProps): React.ReactElement {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={cn(
        "relative isolate py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.08),transparent_55%)]"
      />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent-300">
            Questions, answered
          </p>
          <h2
            id="faq-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Frequently asked
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            If you don&apos;t see your question here, reach out and
            we&apos;ll add it.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {ITEMS.map((item, i) => (
            <FaqRow key={item.q} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Faq;