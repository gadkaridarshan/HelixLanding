import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  /** Vertical padding scale */
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  /** Use a translucent panel background instead of fully transparent */
  panel?: boolean;
}

const spacingMap: Record<NonNullable<SectionProps["spacing"]>, string> = {
  none: "py-0",
  sm: "py-10 sm:py-14",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
  xl: "py-24 sm:py-32",
};

/**
 * Section — semantic <section> wrapper with consistent vertical rhythm.
 * `panel` adds a subtle translucent surface for contrast on long pages.
 */
export function Section({
  className,
  spacing = "lg",
  panel = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative w-full",
        spacingMap[spacing],
        panel &&
          "bg-ink-900/40 border-y border-white/5 backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;