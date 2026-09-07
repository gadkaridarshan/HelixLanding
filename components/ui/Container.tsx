/**
 * @helix:story USER-604000
 *
 * Container — layout primitive that constrains page content
 * to a responsive max-width with consistent horizontal padding.
 *
 * Pure server component.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({
  as: Tag = "div",
  size = "lg",
  className,
  children,
  ...rest
}: ContainerProps): React.ReactElement {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeMap[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Container;