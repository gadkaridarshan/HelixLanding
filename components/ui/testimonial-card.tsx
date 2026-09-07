// helix: components/ui/testimonial-card.tsx
/**
 * @helix:story USER-171000
 *
 * TestimonialCard — reusable social-proof card primitive.
 *
 * Renders a quote, optional 5-star rating, author name, role, and
 * company. Designed to slot into a responsive grid in the
 * SocialProof section without any per-instance styling.
 *
 * Pure server component — no client interactivity.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany?: string;
  rating?: number;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

function StarIcon({ filled }: { filled: boolean }): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function QuoteIcon(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-7 w-7 text-brand-400/70"
    >
      <path d="M7.17 6C4.32 6 2 8.32 2 11.17v6.83h6.83V11.17H5.17C5.17 9.79 6.13 8.83 7.5 8.83V6h-.33zm10 0c-2.85 0-5.17 2.32-5.17 5.17v6.83h6.83V11.17h-3.66c0-1.38.96-2.34 2.33-2.34V6h-.33z" />
    </svg>
  );
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps): React.ReactElement {
  const rating = Math.max(0, Math.min(5, testimonial.rating ?? 5));

  return (
    <figure
      className={cn(
        "relative flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] transition-colors hover:border-white/20 hover:bg-white/[0.05]",
        className,
      )}
    >
      <QuoteIcon />

      <blockquote className="text-base leading-relaxed text-ink-100">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {rating > 0 ? (
        <div
          className="flex items-center gap-0.5 text-amber-400"
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < rating} />
          ))}
        </div>
      ) : null}

      <figcaption className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
        <div
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-accent-500 text-sm font-semibold text-ink-950"
        >
          {testimonial.authorName.slice(0, 1).toUpperCase()}
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-white">
            {testimonial.authorName}
          </div>
          <div className="truncate text-xs text-ink-300">
            {testimonial.authorRole}
            {testimonial.authorCompany ? ` · ${testimonial.authorCompany}` : ""}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export default TestimonialCard;