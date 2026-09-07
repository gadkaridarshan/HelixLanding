// helix: components/ui/Container.tsx
import * as React from "react";

import { cn } from "@/components/ui/cn";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

export interface ContainerProps {
  /** Max-width token. Defaults to `xl`. */
  size?: ContainerSize;
  /** Optional className passthrough. */
  className?: string;
  /** Render as a child element (e.g. for `<main>` or `<article>` wrappers). */
  as?: keyof React.JSX.IntrinsicElements;
  /** Slot content. */
  children: React.ReactNode;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  "3xl": "max-w-[1600px]",
  "4xl": "max-w-[1760px]",
  "5xl": "max-w-[1920px]",
  "6xl": "max-w-[2048px]",
  "7xl": "max-w-[2240px]",
};

export function Container({
  size = "xl",
  className,
  as: Tag = "div",
  children,
}: ContainerProps): React.ReactElement {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}

export default Container;