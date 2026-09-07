// helix: components/sections/how-it-works/index.ts
/**
 * @helix:story USER-507000
 *
 * Barrel export for the HowItWorks section. Keeps the canonical
 * section folder self-contained: a single import line from any
 * consumer resolves to the canonical section, the step primitive,
 * and the step list wrapper.
 */
export { HowItWorks, default } from "./HowItWorks";
export { StepItem } from "./StepItem";
export type { StepItemProps } from "./StepItem";
export { StepsList } from "./StepsList";
export type { StepsListProps, HowItWorksStep } from "./StepsList";