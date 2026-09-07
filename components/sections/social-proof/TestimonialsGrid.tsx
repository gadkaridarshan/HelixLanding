// helix: components/sections/social-proof/TestimonialsGrid.tsx
/**
 * @helix:story USER-167000
 *
 * TestimonialsGrid — internal subcomponent for the SocialProof
 * section. Renders the testimonial cards from a list passed in by
 * the parent `<SocialProof />`. Pure server component.
 */
import * as React from "react";

export interface SocialProofTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TestimonialsGridProps {
  testimonials: ReadonlyArray<SocialProofTestimonial>;
  className?: string;
}

function QuoteIcon(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 text-cyan-400/60"
    >
      <path
        d="M7.17 6C4.87 6 3 7.87 3 10.17c0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46C10.5 7.87 8.63 6 7.17 6zm10 0c-2.3 0-4.17 1.87-4.17 4.17 0 1.94 1.34 3.55 3.13 4.01-.2 1.34-.85 2.51-2.13 3.49 2.36-.34 4.13-1.45 5.16-3.04.71-1.1 1.34-2.54 1.34-4.46 0-2.3-1.87-4.17-4.17-4.17z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TestimonialsGrid({
  testimonials,
  className,
}: TestimonialsGridProps): React.ReactElement {
  if (testimonials.length === 0) {
    return (
      <div
        className={
          "rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-sm text-slate-400 " +
          (className ?? "")
        }
      >
        Testimonials coming soon.
      </div>
    );
  }

  return (
    <div
      className={
        "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 " + (className ?? "")
      }
    >
      {testimonials.map((t) => (
        <figure
          key={`${t.author}-${t.company}`}
          className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
        >
          <QuoteIcon />
          <blockquote className="text-base leading-relaxed text-slate-200">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-auto text-sm text-slate-400">
            <span className="font-semibold text-white">{t.author}</span> ·{" "}
            {t.role}, {t.company}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default TestimonialsGrid;