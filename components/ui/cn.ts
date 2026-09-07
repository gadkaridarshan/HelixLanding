// helix: components/ui/cn.ts
/**
 * `cn` — minimal class-name joiner.
 *
 * Joins truthy string fragments with a single separator while keeping
 * ordering stable. Avoids pulling in `clsx` + `tailwind-merge` for one
 * tiny helper used by every UI primitive.
 */
export type ClassValue = string | number | false | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter((v): v is string | number => Boolean(v)).join(" ");
}