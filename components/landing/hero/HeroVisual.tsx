// helix: components/landing/hero/HeroVisual.tsx
/**
 * @helix:story USER-303000
 *
 * HeroVisual — purely decorative SVG hero illustration for the above-the-fold
 * Hero. Renders an atom/orbit motif (matching the Helix brand) plus a
 * layered "code surface" suggesting atomic work-breakdown.
 *
 * No client interactivity — server-rendered SVG with deterministic sizing.
 */
import * as React from "react";

export interface HeroVisualProps {
  className?: string;
}

export function HeroVisual({
  className,
}: HeroVisualProps): React.ReactElement {
  return (
    <div
      className={
        "relative w-full max-w-xl mx-auto aspect-square " + (className ?? "")
      }
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        role="presentation"
      >
        <defs>
          <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hv-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="hv-stroke-2" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        {/* glow */}
        <circle cx="300" cy="300" r="260" fill="url(#hv-glow)" />

        {/* orbits */}
        <g
          fill="none"
          stroke="url(#hv-stroke)"
          strokeWidth="1.5"
          strokeOpacity="0.7"
        >
          <ellipse cx="300" cy="300" rx="240" ry="90" />
          <ellipse
            cx="300"
            cy="300"
            rx="240"
            ry="90"
            transform="rotate(60 300 300)"
          />
          <ellipse
            cx="300"
            cy="300"
            rx="240"
            ry="90"
            transform="rotate(-60 300 300)"
          />
        </g>

        {/* nucleus */}
        <circle cx="300" cy="300" r="18" fill="#22d3ee" />
        <circle
          cx="300"
          cy="300"
          r="38"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.4"
          strokeWidth="1"
        />

        {/* electrons */}
        <g fill="#8b5cf6">
          <circle cx="540" cy="300" r="8" />
          <circle cx="60" cy="300" r="8" />
        </g>
        <g fill="#f59e0b">
          <circle cx="420" cy="438" r="6" />
          <circle cx="180" cy="162" r="6" />
        </g>

        {/* code surface — bottom-left */}
        <g transform="translate(60 400)">
          <rect
            width="220"
            height="120"
            rx="14"
            fill="rgba(15,23,42,0.85)"
            stroke="rgba(148,163,184,0.25)"
          />
          <rect width="220" height="22" rx="14" fill="rgba(148,163,184,0.12)" />
          <circle cx="14" cy="11" r="3" fill="#f87171" />
          <circle cx="26" cy="11" r="3" fill="#fbbf24" />
          <circle cx="38" cy="11" r="3" fill="#34d399" />
          <g
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="10"
            fill="#cbd5e1"
          >
            <text x="14" y="48">unit 1: parse prompt</text>
            <text x="14" y="66" fill="#94a3b8">unit 2: scaffold types</text>
            <text x="14" y="84" fill="#22d3ee">unit 3: implement</text>
            <text x="14" y="102" fill="#94a3b8">unit 4: verify + PR</text>
          </g>
        </g>

        {/* atoms — top-right */}
        <g transform="translate(420 80)" stroke="url(#hv-stroke-2)" fill="none">
          <circle cx="0" cy="0" r="32" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="14" fill="rgba(139,92,246,0.15)" />
          <circle cx="32" cy="0" r="6" fill="#f59e0b" stroke="none" />
          <circle cx="-32" cy="0" r="6" fill="#22d3ee" stroke="none" />
        </g>
      </svg>
    </div>
  );
}

export default HeroVisual;