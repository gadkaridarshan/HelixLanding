/**
 * @helix:story USER-63000
 *
 * Footer — section-level re-export shim so `@/components/sections/Footer`
 * resolves to the canonical implementation at
 * `@/components/sections/footer/Footer` without producing a circular
 * import alias.
 */
export { Footer, default } from "./footer/Footer";
export type { FooterProps } from "./footer/Footer";