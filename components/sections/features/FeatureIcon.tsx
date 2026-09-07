// helix: components/sections/features/FeatureIcon.tsx
/**
 * @helix:story USER-167000
 *
 * FeatureIcon — inline-SVG icon set for FeatureCard. Each icon is a
 * server-rendered glyph with no runtime dependency.
 */
import * as React from "react";

export type FeaturesIconName =
  | "atom"
  | "graph"
  | "shield"
  | "git"
  | "cards"
  | "persona"
  | "stack"
  | "review"
  | "vercel"
  | "spark";

export interface FeatureIconProps {
  name: FeaturesIconName;
  className?: string;
}

function baseProps(className?: string): React.SVGProps<SVGSVGElement> {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    className: "h-5 w-5 " + (className ?? ""),
  };
}

export function FeatureIcon({
  name,
  className,
}: FeatureIconProps): React.ReactElement {
  const props = baseProps(className);
  switch (name) {
    case "atom":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "graph":
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M8 6h8M7 7l4 9M17 7l-4 9" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "git":
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M6 8v8M8 6h6a4 4 0 014 4v6" />
        </svg>
      );
    case "cards":
      return (
        <svg {...props}>
          <rect x="3" y="6" width="14" height="12" rx="2" />
          <rect x="7" y="2" width="14" height="12" rx="2" />
          <path d="M11 8h6" />
        </svg>
      );
    case "persona":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
        </svg>
      );
    case "stack":
      return (
        <svg {...props}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 13l9 5 9-5" />
          <path d="M3 17l9 5 9-5" />
        </svg>
      );
    case "review":
      return (
        <svg {...props}>
          <path d="M3 5h18v12H8l-5 4z" />
          <path d="M8 10h8M8 14h5" />
        </svg>
      );
    case "vercel":
      return (
        <svg {...props}>
          <path d="M12 3l9 16H3z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "spark":
      return (
        <svg {...props}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}

export default FeatureIcon;