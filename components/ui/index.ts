// helix: components/ui/index.ts
/**
 * @helix:story USER-445000
 *
 * Barrel module — re-exports every reusable UI primitive from
 * `@/components/ui/*` so section components can import the whole
 * surface from a single path: `import { Container, Button } from
 * "@/components/ui"`.
 */
export { Button, type ButtonProps, type ButtonVariant, type ButtonSize } from "./Button";
export { Container, type ContainerProps, type ContainerWidth } from "./Container";
export { SectionHeading, type SectionHeadingProps, type SectionHeadingAlign } from "./SectionHeading";
export { cn } from "./cn";