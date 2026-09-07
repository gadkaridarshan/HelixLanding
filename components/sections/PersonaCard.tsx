// helix: components/sections/PersonaCard.tsx
/**
 * @helix:story USER-128000
 * @helix:story USER-303000
 *
 * PersonaCard — reusable card for a single Helix persona.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export type PersonaVariant = "panel" | "chip";

export interface PersonaCardProps {
  role: string;
  title: string;
  description: string;
  outcomes: ReadonlyArray<string>;
  variant?: PersonaVariant;
  className?: string;
}

export function PersonaCard({
  role,
  title,
  description,
  outcomes,
  variant = "panel",
  className,
}: PersonaCardProps): React.ReactElement {
  if (variant === "chip") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80",
          className
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        {role}
      </div>
    );
  }

  return (
    <article
      className={cn(
        "flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-cyan-400/40",
        className
      )}
    >
      <header className="flex flex-col gap-1">
        <span className="text-xs font-mono uppercase tracking-[0.18em] text-cyan-300/90">
          {role}
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {title}
        </h3>
      </header>
      <p className="text-sm leading-relaxed text-white/70">{description}</p>
      <ul role="list" className="mt-auto flex flex-col gap-2">
        {outcomes.map((outcome) => (
          <li
            key={outcome}
            className="flex items-start gap-2 text-sm text-white/80"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 h-4 w-4 flex-none text-cyan-300"
            >
              <path d="M5 12l4 4L19 6" />
            </svg>
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PersonaCard;