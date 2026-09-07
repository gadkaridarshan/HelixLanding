// helix: components/ui/feature-card.tsx
/**
 * @helix:story USER-507000
 *
 * FeatureCard — lowercase UI primitive used inside the Features
 * grid. Renders an icon, a title, and a description with a hover
 * lift, a brand-cyan gradient ring on hover, and a subtle inner
 * glow so the grid feels tactile and modern.
 *
 * Pure server component: zero JS shipped.
 *
 * This is the kebab-case alias for `@/components/sections/FeatureCard`
 * so consumers can import the primitive from the shared `ui/`
 * namespace (e.g. `@/components/ui/feature-card`) while still using
 * a single underlying implementation.
 *
 * Variants:
 *   • `default` — standard card sizing for desktop grids.
 *   • `compact` — tighter padding for dense layouts.
 */
export { FeatureCard, default } from "@/components/sections/FeatureCard";
export type {
  FeatureCardProps,
  FeatureIconName,
} from "@/components/sections/FeatureCard";