// helix: components/sections/features/FeatureIcon.tsx
/**
 * @helix:story USER-507000
 *
 * FeatureIcon — tiny inline SVG icon set used by FeatureCard.
 *
 * Renders a server-side icon (no client JS) by name. Each glyph
 * follows the brand line-icon style: 24×24, 1.5px stroke, current
 * color, rounded caps.
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
  | "review";

export interface FeatureIconProps {
  name: FeaturesIconName;
  className?: string;
  title?: string;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Atom(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="2" {...stroke} />
      <ellipse cx="12" cy="12" rx="10" ry="4" {...stroke} />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" {...stroke} />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" {...stroke} />
    </svg>
  );
}

function Graph(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="6" cy="6" r="2" {...stroke} />
      <circle cx="18" cy="6" r="2" {...stroke} />
      <circle cx="6" cy="18" r="2" {...stroke} />
      <circle cx="18" cy="18" r="2" {...stroke} />
      <circle cx="12" cy="12" r="2" {...stroke} />
      <path d="M7.5 7.5 10.5 10.5M16.5 7.5 13.5 10.5M7.5 16.5 10.5 13.5M16.5 16.5 13.5 13.5" {...stroke} />
    </svg>
  );
}

function Shield(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 3 4 6v6c0 4.5 3.2 8.4 8 9 4.8-.6 8-4.5 8-9V6l-8-3Z" {...stroke} />
      <path d="m9 12 2 2 4-4" {...stroke} />
    </svg>
  );
}

function Git(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="6" cy="6" r="2" {...stroke} />
      <circle cx="6" cy="18" r="2" {...stroke} />
      <circle cx="18" cy="12" r="2" {...stroke} />
      <path d="M6 8v8M8 6h6a4 4 0 0 1 4 4" {...stroke} />
    </svg>
  );
}

function Cards(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="6" width="14" height="10" rx="2" {...stroke} />
      <rect x="7" y="9" width="14" height="10" rx="2" {...stroke} />
    </svg>
  );
}

function Persona(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="3.5" {...stroke} />
      <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" {...stroke} />
    </svg>
  );
}

function Stack(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" {...stroke} />
      <path d="m3 13 9 5 9-5M3 18l9 5 9-5" {...stroke} />
    </svg>
  );
}

function Review(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 5h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9l-5 4V5Z" {...stroke} />
      <path d="M9 10h6M9 13h4" {...stroke} />
    </svg>
  );
}

const registry: Record<FeaturesIconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  atom: Atom,
  graph: Graph,
  shield: Shield,
  git: Git,
  cards: Cards,
  persona: Persona,
  stack: Stack,
  review: Review,
};

export function FeatureIcon({
  name,
  className,
  title,
}: FeatureIconProps): React.ReactElement {
  const Glyph = registry[name];
  return (
    <span className={className} role={title ? "img" : undefined}>
      <Glyph focusable="false" />
      {title ? <title>{title}</title> : null}
    </span>
  );
}

export default FeatureIcon;