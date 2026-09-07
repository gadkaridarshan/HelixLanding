// helix: components/sections/features/FeatureIcon.tsx
/**
 * @helix:story USER-303000
 *
 * FeatureIcon — minimal stroke-only SVG icon set used by FeatureCard.
 * Pure server component.
 */
import * as React from "react";

export type FeaturesIconName =
  | "units"
  | "verified"
  | "shield"
  | "stack"
  | "model"
  | "trace";

export interface FeatureIconProps {
  name: FeaturesIconName;
  className?: string;
}

function pathFor(name: FeaturesIconName): string {
  switch (name) {
    case "units":
      return "M4 6h16M4 12h10M4 18h7";
    case "verified":
      return "M5 12l4 4L19 6";
    case "shield":
      return "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z";
    case "stack":
      return "M4 4h16v16H4zM4 9h16M9 4v16";
    case "model":
      return "M12 6a3 3 0 100-6 3 3 0 000 6zM6 14a3 3 0 100-6 3 3 0 000 6zM18 14a3 3 0 100-6 3 3 0 000 6z";
    case "trace":
      return "M3 12h4l3-8 4 16 3-8h4";
    default:
      return "M12 4v16M4 12h16";
  }
}

export function FeatureIcon({
  name,
  className,
}: FeatureIconProps): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={"h-6 w-6 " + (className ?? "")}
    >
      <path d={pathFor(name)} />
    </svg>
  );
}

export default FeatureIcon;