// helix: components/sections/features/index.ts
/**
 * @helix:story USER-507000
 *
 * Barrel export for the Features section. Keeps the canonical
 * section folder self-contained: a single import line from any
 * consumer resolves to the canonical section, the card primitive,
 * and the icon set.
 */
export { Features, default } from "./Features";
export { FeatureCard } from "./FeatureCard";
export type { FeatureCardProps } from "./FeatureCard";
export { FeatureIcon } from "./FeatureIcon";
export type { FeaturesIconName, FeatureIconProps } from "./FeatureIcon";