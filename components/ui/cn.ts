// helix: components/ui/cn.ts
/**
 * Tiny class-name combinator. Filters out falsy values and joins the
 * remainder with single spaces. Mirrors the popular `clsx` API for
 * the limited subset we actually use.
 */
export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | true
  | ClassValue[]
  | { [key: string]: unknown };

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string" || typeof input === "number") {
      out.push(String(input));
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) out.push(nested);
    } else if (typeof input === "object") {
      for (const key of Object.keys(input)) {
        if (Boolean((input as Record<string, unknown>)[key])) {
          out.push(key);
        }
      }
    }
  }
  return out.join(" ");
}

export default cn;