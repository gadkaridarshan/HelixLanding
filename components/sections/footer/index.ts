// helix: components/sections/footer/index.ts
/**
 * @helix:story USER-63000
 *
 * Barrel export for the Footer section. Re-exports the canonical
 * component so callers can write:
 *
 *     import { Footer } from "@/components/sections/footer";
 *
 * without leaking the internal file layout.
 */
export { Footer, default } from "./Footer";
export type { FooterProps } from "./Footer";