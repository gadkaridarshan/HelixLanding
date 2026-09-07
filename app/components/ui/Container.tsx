// helix: app/components/ui/Container.tsx
import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../../components/ui/cn";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
}

/**
 * `Container` — horizontal layout wrapper that constrains content width
 * and applies consistent horizontal padding across marketing sections.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}