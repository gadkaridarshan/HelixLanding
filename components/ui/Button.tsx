// helix: components/ui/Button.tsx
/**
 * @helix:story USER-63000
 *
 * Button — shared primitive for every CTA across the marketing site.
 *
 * Renders as an `<a>` when `href` is provided (anchor CTAs that may be
 * external or hash links) and as a `<button>` otherwise. The visual
 * surface is identical in both cases — the only thing that changes is
 * the semantic element. This keeps the FinalCTA / Footer / Hero CTAs
 * visually consistent without duplicating the gradient + glow styling.
 *
 * Variants:
 *   • `primary`  — gradient brand→accent surface, high contrast, used
 *                  for the single most important action per surface.
 *   • `secondary`— translucent white surface with border, used for the
 *                  parallel action next to a primary.
 *   • `ghost`    — bare link with a subtle underline-on-hover, used
 *                  for tertiary actions inside dense surfaces.
 *
 * Sizes:
 *   • `sm` / `md` / `lg` — tokenised height + padding so the same
 *     component can drive a tiny inline CTA up to the FinalCTA hero
 *     button without copy-pasting Tailwind classes.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

export type ButtonLinkProps = BaseButtonProps & {
  href: string;
  external?: boolean;
  type?: never;
  disabled?: boolean;
  onClick?: never;
};

export type ButtonActionProps = BaseButtonProps & {
  href?: undefined;
  external?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ButtonProps = ButtonLinkProps | ButtonActionProps;

const baseSurface =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight " +
  "transition-colors transition-shadow duration-150 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 " +
  "disabled:cursor-not-allowed disabled:opacity-60 select-none whitespace-nowrap";

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm rounded-lg",
  md: "h-11 px-5 text-sm rounded-xl",
  lg: "h-12 px-6 text-base rounded-xl sm:h-14 sm:px-8 sm:text-lg",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "text-slate-950 bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 " +
    "shadow-[0_10px_40px_-12px_rgba(34,211,238,0.55)] " +
    "hover:from-cyan-200 hover:via-cyan-300 hover:to-violet-300 " +
    "active:from-cyan-300 active:via-cyan-400 active:to-violet-400",
  secondary:
    "text-white border border-white/15 bg-white/[0.06] backdrop-blur-sm " +
    "hover:bg-white/[0.1] hover:border-white/25",
  ghost:
    "text-slate-200 bg-transparent hover:text-white " +
    "underline-offset-4 hover:underline",
};

function composeClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
): string {
  return cn(baseSurface, sizeStyles[size], variantStyles[variant], className);
}

export function Button(props: ButtonProps): React.ReactElement {
  const variant: ButtonVariant = props.variant ?? "primary";
  const size: ButtonSize = props.size ?? "md";
  const composed = composeClassName(variant, size, props.className);

  if (props.href !== undefined) {
    const { href, external } = props;
    const isExternal = external ?? /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          className={composed}
          target="_blank"
          rel="noreferrer noopener"
        >
          {props.children}
        </a>
      );
    }
    return (
      <a href={href} className={composed}>
        {props.children}
      </a>
    );
  }

  const { type, disabled, onClick } = props;
  return (
    <button
      type={type ?? "button"}
      className={composed}
      disabled={disabled}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;