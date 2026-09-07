import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:opacity-50 disabled:pointer-events-none select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-glow-brand hover:shadow-card-lg hover:brightness-110 active:brightness-95",
  secondary:
    "bg-white/10 text-ink-50 border border-white/10 hover:bg-white/15 hover:border-white/20",
  ghost:
    "bg-transparent text-ink-100 hover:bg-white/5",
  outline:
    "bg-transparent text-ink-50 border border-ink-700 hover:border-brand-400 hover:text-brand-200",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  href: string;
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export default Button;