// helix: components/ui/feature-card.tsx
/**
 * @helix:story USER-507000
 *
 * FeatureCard — re-export shim so `@/components/ui/feature-card`
 * resolves to the canonical implementation at
 * `@/components/sections/features/FeatureCard`.
 *
 * Keeping a top-level UI alias lets older imports continue to work
 * after the canonical implementation moved into the section folder.
 */
export { FeatureCard } from "@/components/sections/features/FeatureCard";
export { default } from "@/components/sections/features/FeatureCard";
export type { FeatureCardProps } from "@/components/sections/features/FeatureCard";