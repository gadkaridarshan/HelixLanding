// helix: lib/cn.ts
/**
 * @helix:story USER-285000
 *
 * `cn` — tiny class-name combiner built on top of `clsx` and
 * `tailwind-merge`. Filters falsy values, lets us compose
 * conditional classes, and resolves conflicting Tailwind utilities
 * so the last-applied class wins (e.g. `p-2` vs `p-4`).
 *
 * Kept as the single source of truth across the whole codebase —
 * every component imports from here, never from `clsx` directly.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ReadonlyArray<ClassValue>): string {
  return twMerge(clsx(inputs));
}