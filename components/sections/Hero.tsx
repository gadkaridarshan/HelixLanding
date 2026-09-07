// helix: components/sections/Hero.tsx
/**
 * @helix:story USER-495000
 *
 * Hero — re-export shim so `@/components/sections/Hero` resolves to
 * the canonical implementation in `@/components/sections/hero/Hero`.
 *
 * The canonical Hero is composed of `HeroCopy` (text column) and
 * `HeroVisual` (decorative atom/orbit SVG).
 */
export { Hero } from "@/components/sections/hero/Hero";
export { default } from "@/components/sections/hero/Hero";