// helix: components/ui/cn.ts
/**
 * @helix:story USER-171000
 *
 * `cn` — small Tailwind class-name composer built on `clsx` and
 * `tailwind-merge`. Deduplicates conflicting Tailwind classes so the
 * later (more specific) utility wins.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export default cn;