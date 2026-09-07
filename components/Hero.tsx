// helix: components/Hero.tsx
/**
 * @helix:story USER-167000
 *
 * Hero — top-level re-export shim so `@/components/Hero` resolves
 * to the canonical implementation at
 * `@/components/sections/hero/Hero`.
 *
 * The canonical Hero is composed of `HeroCopy` (text column) and
 * `HeroVisual` (decorative atom/orbit SVG).
 */
export { Hero } from "@/components/sections/hero/Hero";
export { default } from "@/components/sections/hero/Hero";