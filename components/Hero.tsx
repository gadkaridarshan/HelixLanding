// helix: components/Hero.tsx
/**
 * @helix:story USER-615000
 *
 * Hero — above-the-fold value proposition with headline, subhead, dual CTA
 * (live site + GitHub), social-proof bullets, and a decorative atom/orbit SVG.
 *
 * Single source of truth: `components/landing/hero/Hero`, composed of
 * `HeroCopy` (headline, subhead, dual CTAs, bullets) and `HeroVisual`
 * (decorative atom/orbit motif + code surface).
 *
 * This file is a thin re-export so `@/components/Hero` resolves to the
 * same component consumed by `app/page.tsx` via `app/components/sections/Hero`.
 *
 * Acceptance scope for USER-615000:
 *   • Hero copy with headline, subhead, dual CTAs (live site + GitHub).
 *   • Decorative visual atom/orbit SVG.
 *   • Social-proof bullets reinforcing trust.
 *   • Pure server component — no client interactivity.
 */
export { Hero } from "@/components/landing/hero/Hero";
export { default } from "@/components/landing/hero/Hero";