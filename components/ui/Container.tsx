// helix: components/ui/Container.tsx
/**
 * @helix:story USER-63000
 *
 * `Container` — shared max-width wrapper for every section.
 *
 * Caps the content at a comfortable reading width, applies consistent
 * horizontal padding at every breakpoint, and renders a `<div>` by
 * default. Sections can pass `as="section"` (or any other element)
 * to opt into semantic HTML without prop-drilling.
 *
 * Pure server component. No client interactivity.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";

type ContainerElement = keyof React.JSX.IntrinsicElements;

export interface ContainerProps {
  /** Optional extra classes appended after the base styles. */
  className?: string;
  /** Render as a different element. Defaults to `<div>`. */
  as?: ContainerElement;
  /** Rendered children. */
  children?: React.ReactNode;
  /** Optional id, useful for anchor navigation from the navbar. */
  id?: string;
  /** Optional aria-label override when `as` is a landmark element. */
  "aria-label"?: string;
}

export function Container({
  className,
  as,
  children,
  id,
  ...rest
}: ContainerProps): React.ReactElement {
  const Tag = (as ?? "div") as ContainerElement;
  const base =
    "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
  return (
    <Tag id={id} className={cn(base, className)} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;