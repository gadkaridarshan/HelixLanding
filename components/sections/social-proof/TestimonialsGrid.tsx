// helix: components/sections/social-proof/TestimonialsGrid.tsx
/**
 * @helix:story USER-933000
 *
 * TestimonialsGrid — internal subcomponent for the SocialProof section.
 * Renders the placeholder testimonial cards sourced from
 * `@/content/social-proof.json`. Pure server component.
 *
 * Consumers should normally use `<SocialProof />` directly; this
 * subcomponent exists to keep the section composable for future layouts.
 */
import * as React from "react";

import socialProofData from "@/content/social-proof.json";

export interface TestimonialsGridProps {
  className?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface SocialProofContent {
  testimonials: Testimonial[];
}

const { testimonials } = socialProofData as SocialProofContent;

function QuoteIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 text-cyan-400/60"
    >
      <path
        d="M7.17 6C4.87 6 3 7.87 3 10.17c0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46C10.5 7.87 8.63 6 7.17 6zm10 0c-2.3 0-4.17 1.87-4.17 4.17 0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46 0-2.3-1.87-4.17-4.33-4.17z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TestimonialsGrid({
  className,
}: TestimonialsGridProps): React.ReactElement {
  return (
    <ul
      role="list"
      className={
        "grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 " + (className ?? "")
      }
    >
      {testimonials.map((t) => (
        <li
          key={`${t.author}-${t.company}`}
          className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
        >
          <QuoteIcon />
          <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-200">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
            <div
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/30 text-sm font-semibold text-white"
            >
              {t.author
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="text-sm">
              <div className="font-semibold text-white">{t.author}</div>
              <div className="text-slate-400">
                {t.role} · {t.company}
              </div>
            </div>
          </figcaption>
        </li>
      ))}
    </ul>
  );
}

export default TestimonialsGrid;