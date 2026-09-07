// helix: components/landing/footer/index.ts
/**
 * @helix:story USER-303000
 *
 * Re-export the canonical Footer implementation so the
 * `components/landing/footer` alias resolves from both the
 * `app/` and root-level section trees.
 */
export { Footer } from "@/components/landing/footer/Footer";
export { default } from "@/components/landing/footer/Footer";
export type { FooterProps, FooterColumn, FooterLink } from "@/components/landing/footer/Footer";