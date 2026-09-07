// helix: components/sections/features/index.tsx
/**
 * @helix:story USER-507000
 *
 * Features section barrel — re-exports the canonical Features
 * component (and shared `FeatureCard` primitive) for
 * `@/components/sections/features` consumers.
 */
export { Features, default } from "@/components/Features";
export type {
  FeaturesProps,
  FeaturesIconName,
  FeatureItem,
} from "@/components/Features";
export { FeatureCard } from "@/components/sections/FeatureCard";
export type {
  FeatureCardProps,
  FeatureIconName,
} from "@/components/sections/FeatureCard";