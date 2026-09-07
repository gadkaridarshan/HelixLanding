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
    "bg-white/5 text-ink-100 ring-1 ring-inset ring-white/15 hover:bg-white/10 hover:ring-white/25 backdrop-blur",
  ghost:
    "bg-transparent text-ink-200 hover:text-ink-50 hover:bg-white/5",
};

const sizeMap: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

function baseClasses(variant: ButtonVariant, size: ButtonSize): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight",
    "transition-colors duration-150 ease-out",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
    variantMap[variant],
    sizeMap[size],
  );
}

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
  const classes = cn(baseClasses(variant, size), className);

  if (href !== undefined) {
    const anchorProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
      href,
      className: classes,
      children,
    };
    if (external) {
      anchorProps.target = "_blank";
      anchorProps.rel = "noreferrer noopener";
    }
    return <a {...anchorProps} />;
  }

  return (
    <button className={classes} type={type ?? "button"} {...rest}>
      {children}
    </button>
  );
}

export default Button;