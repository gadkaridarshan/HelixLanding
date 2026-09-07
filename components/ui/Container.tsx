// helix: components/ui/Container.tsx
/**
 * @helix:story USER-604000
 *
 * Container — shared layout primitive that constrains content to a
 * max width and applies consistent horizontal padding across all
 * sections. Pure server component.
 */
import * as React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({
  children,
  className,
  as,
}: ContainerProps): React.ReactElement {
  const Component = (as ?? "div") as React.ElementType;
  return (
    <Component
      className={
        "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 " + (className ?? "")
      }
    >
      {children}
    </Component>
  );
}

export default Container;