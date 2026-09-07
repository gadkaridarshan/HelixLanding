// helix: components/SocialProof.tsx
/**
 * @helix:story USER-567000
 *
 * SocialProof — root-level re-export of the canonical implementation
 * so `@/components/SocialProof` resolves to the same trust strip
 * consumed by `app/page.tsx`.
 *
 * Single source of truth: `components/landing/social-proof/SocialProof`.
 */
export { SocialProof } from "@/components/landing/social-proof/SocialProof";
export { default } from "@/components/landing/social-proof/SocialProof";