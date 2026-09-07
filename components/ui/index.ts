// helix: components/ui/index.ts
/**
 * @helix:story USER-63000
 *
 * Barrel export for shared UI primitives. Lets callers do
 * `import { Container, Button } from "@/components/ui"` without
 * caring about individual file paths.
 */
export { Container } from "@/components/ui/Container";
export type { ContainerProps } from "@/components/ui/Container";

export { Button } from "@/components/ui/Button";
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ButtonLinkProps,
  ButtonActionProps,
} from "@/components/ui/Button";

export { cn } from "@/components/ui/cn";
export type { ClassValue } from "@/components/ui/cn";