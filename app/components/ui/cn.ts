// helix: app/components/ui/cn.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * `cn` — class name composition utility.
 *
 * Merges Tailwind classes intelligently, removing duplicates and conflicting
 * utilities so callers can safely compose conditional class strings.
 *
 * Example:
 *   cn("p-4 text-sm", isActive && "bg-violet-500", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}