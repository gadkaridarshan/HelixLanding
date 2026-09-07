// helix: components/landing/stats-bar/index.ts
/**
 * @helix:story USER-303000
 *
 * Re-export the canonical StatsBar implementation so the
 * `components/landing/stats-bar` alias resolves from both the
 * `app/` and root-level section trees.
 */
export { StatsBar } from "@/components/landing/stats-bar/StatsBar";
export { default } from "@/components/landing/stats-bar/StatsBar";
export type { StatItem, StatsBarProps } from "@/components/landing/stats-bar/StatsBar";