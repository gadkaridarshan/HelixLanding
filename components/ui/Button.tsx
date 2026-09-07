// helix: components/ui/Button.tsx
/**
 * @helix:story USER-63000
 *
 * Button — shared CTA primitive used by Navbar, Hero, FinalCTA, etc.
 *
 * Variants:
 *   • `primary`   — solid cyan, the dominant CTA on the page
 *   • `secondary` — translucent glass, sits next to primary
 *   • `ghost`     — text-only, used in nav and dense layouts
 *
 * Supports both `<button>` (default) and `<a>` rendering for true
 * link CTAs — pass `href` to switch. Pure server component: no
 * client-side state, no event handlers.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-ink-950 hover:bg-brand-400 active:bg-brand-600 shadow-[0_8px_30px_-12px_rgba(34,211,238,0.6)]",
  secondary:
    "bg-white/5 text-ink-100 ring-1 ring-inset ring-white/15 hover:bg-white/10 hover:ring-white/25",
  ghost:
    "bg-transparent text-ink-200 hover:bg-white/5 hover:text-ink-50",
};

const sizeMap: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  type,
  ...rest
}: ButtonProps): React.ReactElement {
  const classes = cn(baseClasses, variantMap[variant], sizeMap[size], className);

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;