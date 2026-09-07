// helix: components/Hero.tsx
/**
 * @helix:story USER-954000
 *
 * Hero — root-level re-export of the canonical implementation so
 * `@/components/Hero` resolves to the same component consumed by
 * `app/page.tsx` via `app/components/sections/Hero`.
 *
 * Single source of truth: `components/landing/hero/Hero`, composed of
 * `HeroCopy` (headline, subhead, CTAs, bullets) and `HeroVisual`
 * (decorative atom/orbit SVG).
 */
export { Hero } from "@/components/landing/hero/Hero";
export { default } from "@/components/landing/hero/Hero";