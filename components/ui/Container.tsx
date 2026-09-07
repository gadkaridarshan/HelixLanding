// helix: components/ui/Container.tsx
/**
 * @helix:story USER-604000
 *
 * Container — shared width-constrained wrapper used by every section
 * to keep content aligned to the same max-width gutters.
 *
 * Pure server component. Renders a `<div>` with the configured
 * `max-w-*` class plus responsive horizontal padding.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({
  className,
  children,
}: ContainerProps): React.ReactElement {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;