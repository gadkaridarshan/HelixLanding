// helix: components/ui/Container.tsx
/**
 * @helix:story USER-23000
 *
 * `Container` — shared max-width wrapper used by every marketing
 * section. Applies consistent horizontal padding and a comfortable
 * reading width at every breakpoint.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({
  className,
  children,
  as: Tag = "div",
}: ContainerProps): React.ReactElement {
  const Element = Tag as React.ElementType;
  return (
    <Element
      className={cn(
        "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Element>
  );
}

export default Container;