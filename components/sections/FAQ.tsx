// helix: components/sections/FAQ.tsx
/**
 * @helix:story USER-993000
 *
 * Mirror shim for FAQ — the canonical implementation lives in
 * `components/landing/faq/FAQ` (owned by USER-956000). Expose a default
 * re-export so callers can import from `@/components/sections/FAQ`
 * regardless of which card is currently building the FAQ module.
 */
export { FAQ, default } from "@/components/sections/FAQ";