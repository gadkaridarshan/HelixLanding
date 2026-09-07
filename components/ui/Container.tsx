// helix: components/ui/Container.tsx
/**
 * @helix:story USER-445000
 *
 * Container — width-clamped, horizontally-padded layout primitive
 * used by every section to keep a consistent max-width.
 *
 * Renders a `<div>` with `mx-auto` + responsive horizontal padding
 * and a configurable `maxWidth` (default `6xl`). Pure server
 * component; no client interactivity.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export type ContainerWidth = "5xl" | "6xl" | "7xl";

export interface ContainerProps {
  as?: keyof React.JSX.IntrinsicElements;
  maxWidth?: ContainerWidth;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const maxWidthClasses: Record<ContainerWidth, string> = {
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export function Container({
  as = "div",
  maxWidth = "6xl",
  className,
  children,
  id,
}: ContainerProps): React.ReactElement {
  const Component = as as React.ElementType;
  return (
    <Component
      id={id}
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidthClasses[maxWidth],
        className,
      )}
    >
      {children}
    </Component>
  );
}

export default Container;