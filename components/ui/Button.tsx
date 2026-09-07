// helix: components/ui/Button.tsx
/**
 * @helix:story USER-445000
 *
 * Button — reusable button primitive.
 *
 * Variants:
 *   • `primary`   — solid brand-cyan CTA
 *   • `secondary` — bordered glass surface (secondary actions)
 *   • `ghost`     — transparent text-only link-style button
 *
 * Sizes:
 *   • `sm` `md` `lg`
 *
 * Pure server component — no client interactivity. Renders a
 * `<button>` or `<a>` (when `href` is provided). Polymorphic via
 * `as` prop with safe defaults.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "href"
  > {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-ink-950 hover:bg-brand-400 active:bg-brand-600 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.7)]",
  secondary:
    "bg-white/[0.04] text-ink-100 border border-white/10 hover:bg-white/[0.08] hover:border-white/20",
  ghost: "bg-transparent text-ink-200 hover:text-ink-50 hover:bg-white/[0.04]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-colors duration-200 focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-ink-950 disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  type,
  ...rest
}: ButtonProps): React.ReactElement {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (typeof href === "string" && href.length > 0) {
    return (
      <a className={classes} href={href} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type ?? "button"}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;