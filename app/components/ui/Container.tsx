import type { HTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * When true, removes the default horizontal padding.
   */
  flush?: boolean;
}

/**
 * Container — max-width, horizontally-padded layout wrapper.
 * The canonical implementation lives here; `components/ui/Container.tsx`
 * re-exports it so the `@/components/ui/Container` alias resolves from
 * both the `app/` and root-level section trees.
 */
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