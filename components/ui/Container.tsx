// helix: components/ui/Container.tsx
/**
 * @helix:story USER-308000
 *
 * Container — centered, responsive max-width wrapper. Pure server component.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({
  className,
  children,
  as: Tag = "div",
}: ContainerProps): React.ReactElement {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export default Container;