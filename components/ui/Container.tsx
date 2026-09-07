// helix: components/ui/Container.tsx
/**
 * @helix:story USER-63000
 *
 * Container — centered, max-width page wrapper. Owns the standard
 * horizontal padding rhythm so every section aligns to the same
 * grid without each component reinventing it.
 *
 * Pure server component.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({
  className,
  children,
  ...rest
}: ContainerProps): React.ReactElement {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Container;