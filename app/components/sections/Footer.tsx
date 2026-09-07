/**
 * @helix:story USER-63000
 *
 * Footer — app-level re-export shim so
 * `@/app/components/sections/Footer` resolves to the canonical
 * implementation at `@/components/sections/footer/Footer`.
 */
export { Footer, default } from "@/components/sections/footer/Footer";
export type { FooterProps } from "@/components/sections/footer/Footer";