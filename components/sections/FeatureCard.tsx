// helix: components/sections/FeatureCard.tsx
/**
 * @helix:story USER-616000
 *
 * FeatureCard — a single feature card used inside the Features grid.
 *
 * Renders an icon, a title, and a description with a hover lift, a
 * brand-cyan gradient ring on hover, and a subtle inner glow so the
 * grid feels tactile and modern. Pure server component: zero JS.
 *
 * Variants:
 *   • `default` — standard card sizing for desktop grids.
 *   • `compact` — tighter padding for dense layouts.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export type FeatureIconName =
  | "atom"
  | "graph"
  | "shield"
  | "git"
  | "cards"
  | "persona"
  | "stack"
  | "review";

export interface FeatureCardProps {
  className?: string;
  icon: FeatureIconName;
  title: string;
  description: string;
  variant?: "default" | "compact";
}

function FeatureIcon({
  icon,
}: {
  icon: FeatureIconName;
}): React.ReactElement {
  const common =
    "h-6 w-6 text-brand-400 transition-colors group-hover:text-brand-300";

  switch (icon) {
    case "atom":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case "graph":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="2.25" />
          <circle cx="18" cy="6" r="2.25" />
          <circle cx="12" cy="18" r="2.25" />
          <path d="M7.5 7.5 11 16.5" />
          <path d="M16.5 7.5 13 16.5" />
          <path d="M8 6h8" />
        </svg>
      );
    case "shield":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <path d="M12 3 4.5 6v6.5C4.5 17 7.5 20.25 12 21.5 16.5 20.25 19.5 17 19.5 12.5V6L12 3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "git":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="2.25" />
          <circle cx="6" cy="18" r="2.25" />
          <circle cx="18" cy="12" r="2.25" />
          <path d="M6 8.25v7.5" />
          <path d="M18 14.25V12a3 3 0 0 0-3-3H8.25" />
        </svg>
      );
    case "cards":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <rect x="3.5" y="6" width="13" height="10" rx="2" />
          <rect x="7.5" y="9" width="13" height="10" rx="2" />
          <path d="M11 13h6" />
        </svg>
      );
    case "persona":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="3.25" />
          <path d="M5 20c1-3.5 4-5.5 7-5.5s6 2 7 5.5" />
          <path d="M19 6.5a2.25 2.25 0 1 1-1.5 2" />
        </svg>
      );
    case "stack":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 13 9 5 9-5" />
          <path d="m3 18 9 5 9-5" />
        </svg>
      );
    case "review":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <path d="M4.5 4.5h11a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H8.5l-4 3v-15Z" />
          <path d="M9 10.5h6" />
          <path d="M9 14h4" />
        </svg>
      );
    default:
      return <span className={common} aria-hidden="true" />;
  }
}

export function FeatureCard({
  className,
  icon,
  title,
  description,
  variant = "default",
}: FeatureCardProps): React.ReactElement {
  const padding = variant === "compact" ? "p-5" : "p-6";

  return (
    <article
      className={cn(
        "group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]",
        "transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]",
        "hover:shadow-[0_20px_60px_-30px_rgba(34,211,238,0.35)]",
        padding,
        className,
      )}
    >
      {/* Inner brand glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(34,211,238,0.10), transparent 60%)",
        }}
      />

      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
        <FeatureIcon icon={icon} />
      </div>

      <h3 className="mt-4 text-base font-semibold tracking-tight text-ink-100 sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-300">{description}</p>
    </article>
  );
}

export default FeatureCard;