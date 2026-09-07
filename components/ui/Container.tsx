// helix: components/ui/Container.tsx
/**
 * @helix:story USER-63000
 *
 * Container — shared layout primitive used by every marketing section.
 *
 * Centres content with a max-width and horizontal padding that scales
 * with the viewport. Exists as a single primitive so every section
 * (Hero, Features, HowItWorks, Personas, FAQ, FinalCTA, Footer)
 * aligns to the same gutter — no copy-pasted `mx-auto max-w-6xl`.
 *
 * Pure server component. No client interactivity.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  /** Override the default `max-w-6xl`. Accepts any Tailwind max-w class. */
  width?: "narrow" | "default" | "wide" | "full";
  /** Render as a different element (e.g. `<section>` or `<div>`). */
  as?: keyof React.JSX.IntrinsicElements;
}

const widthStyles: Record<NonNullable<ContainerProps["width"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export function Container({
  className,
  children,
  width = "default",
  as = "div",
}: ContainerProps): React.ReactElement {
  const Component = as as React.ElementType;
  const composed = cn(
    "mx-auto w-full px-4 sm:px-6 lg:px-8",
    widthStyles[width],
    className,
  );
  return <Component className={composed}>{children}</Component>;
}

export default Container;