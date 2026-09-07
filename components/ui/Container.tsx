import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}

const sizeMap: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

/**
 * Container — centers content with a responsive horizontal max-width.
 * Use for all top-level page sections to keep rhythm consistent.
 */
export function Container({
  className,
  size = "xl",
  as: Tag = "div",
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizeMap[size], className)}
      {...props}
    />
  );
}

export default Container;