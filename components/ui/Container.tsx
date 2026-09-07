// helix: components/ui/Container.tsx
/**
 * Container — root-level re-export of the canonical Container implementation
 * kept under app/components/ui/. This exists so that sections imported from
 * app/ can resolve `@/components/ui/Container` regardless of where they sit
 * in the tree, keeping the public alias surface stable.
 */
export { Container } from "../../app/components/ui/Container";
export type { ContainerProps } from "../../app/components/ui/Container";