// helix: components/sections/footer/Footer.tsx
/**
 * @helix:story USER-63000
 *
 * Footer — section-level re-export shim so
 * `@/components/sections/footer/Footer` resolves to the canonical
 * implementation at `@/components/Footer` without producing a
 * circular import alias.
 */
export { Footer, default } from "@/components/Footer";
export type { FooterProps } from "@/components/Footer";