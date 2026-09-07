// helix: components/ui/Section.tsx
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
}

/**
 * `Section` — vertical rhythm wrapper that pairs an optional eyebrow / title /
 * description block above arbitrary section content. Keeps marketing sections
 * visually consistent without locking in structure.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-24 lg:py-28",
        className
      )}
      {...rest}
    >
      {(eyebrow || title || description) && (
        <div
          className={cn(
            "mb-12 sm:mb-16 max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}