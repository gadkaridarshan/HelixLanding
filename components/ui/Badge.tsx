import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type Tone = "neutral" | "brand" | "accent" | "success" | "warning";

const tones: Record<Tone, string> = {
  neutral:
    "bg-white/5 text-ink-200 border-white/10",
  brand:
    "bg-brand-500/10 text-brand-200 border-brand-400/20",
  accent:
    "bg-accent-500/10 text-accent-200 border-accent-400/20",
  success:
    "bg-emerald-500/10 text-emerald-200 border-emerald-400/20",
  warning:
    "bg-amber-500/10 text-amber-200 border-amber-400/20",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

/**
 * Badge — small inline pill used for status, tags, or feature highlights.
 */
export function Badge({
  className,
  tone = "neutral",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;