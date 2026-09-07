// helix: components/ui/Container.tsx
/**
 * @helix:story USER-303000
 *
 * Container — horizontal layout rail that constrains content to a
 * readable max-width while keeping responsive gutters. Used by every
 * landing section so spacing rhythm stays consistent.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface ContainerProps {
  readonly className?: string;
  readonly children: React.ReactNode;
  readonly as?: keyof React.JSX.IntrinsicElements;
  readonly id?: string;
}

export function Container({
  className,
  children,
  as: Tag = "div",
  id,
}: ContainerProps): React.ReactElement {
  const Component = Tag as React.ElementType;
  return (
    <Component
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </Component>
  );
}

export default Container;