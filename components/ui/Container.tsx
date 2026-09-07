// helix: components/ui/Container.tsx
/**
 * @helix:story USER-303000
 *
 * Container — width-clamped, horizontally-padded wrapper used by every
 * landing section to keep the reading width consistent.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof React.JSX.IntrinsicElements;
  size?: "sm" | "md" | "lg" | "xl";
}

const SIZE_MAP: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({
  as = "div",
  size = "lg",
  className,
  children,
  ...rest
}: ContainerProps): React.ReactElement {
  const Component = as as React.ElementType;
  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 sm:px-8",
        SIZE_MAP[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Container;