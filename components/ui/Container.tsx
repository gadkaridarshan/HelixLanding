// helix: components/ui/Container.tsx
import type { ReactElement, ReactNode } from "react";

import { cn } from "@/components/ui/cn";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
}

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps): ReactElement {
  return (
    <Tag className={cn("container-x", className)}>{children}</Tag>
  );
}

export default Container;