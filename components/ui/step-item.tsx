// helix: components/ui/step-item.tsx
/**
 * @helix:story USER-507000
 *
 * StepItem — re-export shim so `@/components/ui/step-item` resolves
 * to the canonical implementation at
 * `@/components/sections/how-it-works/StepItem`.
 *
 * Keeping a top-level UI alias lets older imports continue to work
 * after the canonical implementation moved into the section folder.
 */
export { StepItem } from "@/components/sections/how-it-works/StepItem";
export { default } from "@/components/sections/how-it-works/StepItem";
export type { StepItemProps } from "@/components/sections/how-it-works/StepItem";