// helix: components/landing/social-proof/index.ts
/**
 * @helix:story USER-303000
 *
 * Re-export the canonical SocialProof implementation so the
 * `components/landing/social-proof` alias resolves from both the
 * `app/` and root-level section trees.
 */
export { SocialProof } from "@/components/landing/social-proof/SocialProof";
export { default } from "@/components/landing/social-proof/SocialProof";