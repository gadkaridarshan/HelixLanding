// helix: components/ui/Container.tsx
/**
 * @helix:story USER-303000
 *
 * Container — max-width, horizontally-padded layout wrapper.
 */
import type { HTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * When true, removes the default horizontal padding.
   */
  flush?: boolean;
}

export function Container({
  className,
  flush = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        flush && "px-0",
        className,
      )}
      {...props}
    />
  );
}

export default Container;