// helix: components/sections/hero/Hero.tsx
/**
 * @helix:story USER-495000
 *
 * Hero — re-export shim so `@/components/sections/hero/Hero`
 * resolves to the canonical implementation at
 * `@/components/sections/Hero`.
 *
 * The actual composition (two-column grid, layered radial gradients,
 * HeroCopy + HeroVisual) lives in `components/sections/Hero.tsx`.
 */
export { Hero, default } from "@/components/sections/Hero";