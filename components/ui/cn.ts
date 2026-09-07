// helix: components/ui/cn.ts
/**
 * `cn` — minimal class-name joiner.
 * Joins truthy string fragments with a single separator and keeps ordering stable.
 * Avoids pulling a runtime dependency for one tiny helper.
 */
export type ClassValue = string | number | false | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter((v): v is string | number => Boolean(v)).join(" ");
}