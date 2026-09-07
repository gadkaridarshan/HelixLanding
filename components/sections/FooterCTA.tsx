// helix: components/sections/FooterCTA.tsx
/**
 * @helix:story USER-956000
 *
 * FooterCTA — re-export shim so `@/components/sections/FooterCTA`
 * resolves to the canonical FinalCTA implementation at
 * `@/components/FinalCta`. The "footer CTA" is the last conversion
 * band that sits immediately above the site Footer.
 */
export { FinalCTA as FooterCTA } from "@/components/FinalCta";
export { FinalCTA } from "@/components/FinalCta";
export { default } from "@/components/FinalCta";