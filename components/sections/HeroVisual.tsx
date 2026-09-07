// helix: components/sections/HeroVisual.tsx
/**
 * @helix:story USER-773000
 *
 * HeroVisual — purely decorative SVG hero illustration for the
 * above-the-fold Hero. Renders an atom/orbit motif (matching the Helix
 * brand) plus a layered "code surface" suggesting atomic work-breakdown.
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
          <linearGradient id="hv-orbit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="hv-card" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="hv-bar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>

        {/* background glow */}
        <circle cx="300" cy="300" r="260" fill="url(#hv-glow)" />

        {/* concentric orbits */}
        <g
          fill="none"
          stroke="rgba(148, 163, 184, 0.18)"
          strokeWidth="1"
          transform="translate(300 300)"
        >
          <ellipse cx="0" cy="0" rx="240" ry="90" />
          <ellipse
            cx="0"
            cy="0"
            rx="240"
            ry="90"
            transform="rotate(60)"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="240"
            ry="90"
            transform="rotate(120)"
          />
        </g>

        {/* orbit ring with gradient sweep */}
        <g transform="translate(300 300)">
          <ellipse
            cx="0"
            cy="0"
            rx="180"
            ry="180"
            fill="none"
            stroke="url(#hv-orbit)"
            strokeWidth="1.5"
          />
        </g>

        {/* nucleus */}
        <g transform="translate(300 300)">
          <circle r="44" fill="rgba(15, 23, 42, 0.9)" stroke="#22d3ee" strokeWidth="1.5" />
          <circle r="28" fill="none" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="1" />
          <circle r="10" fill="#22d3ee" />
          <circle r="10" fill="none" stroke="#22d3ee" strokeOpacity="0.6">
            <animate
              attributeName="r"
              values="10;22;10"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.6;0;0.6"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* orbiting nodes */}
        <g>
          <circle cx="480" cy="300" r="6" fill="#22d3ee" />
          <circle cx="120" cy="300" r="6" fill="#a78bfa" />
          <circle cx="300" cy="60" r="6" fill="#f472b6" />
          <circle cx="300" cy="540" r="6" fill="#34d399" />
        </g>

        {/* floating "atomic unit" cards */}
        <g transform="translate(60 410)">
          <rect
            width="200"
            height="74"
            rx="10"
            fill="url(#hv-card)"
            stroke="rgba(148, 163, 184, 0.25)"
          />
          <circle cx="18" cy="22" r="4" fill="#22d3ee" />
          <rect x="32" y="17" width="120" height="6" rx="3" fill="rgba(226, 232, 240, 0.7)" />
          <rect x="32" y="29" width="80" height="4" rx="2" fill="rgba(148, 163, 184, 0.55)" />
          <rect x="14" y="46" width="170" height="6" rx="3" fill="rgba(148, 163, 184, 0.18)" />
          <rect x="14" y="46" width="110" height="6" rx="3" fill="url(#hv-bar)" />
        </g>

        <g transform="translate(360 110)">
          <rect
            width="180"
            height="64"
            rx="10"
            fill="url(#hv-card)"
            stroke="rgba(148, 163, 184, 0.25)"
          />
          <rect x="14" y="14" width="100" height="6" rx="3" fill="rgba(226, 232, 240, 0.7)" />
          <rect x="14" y="26" width="60" height="4" rx="2" fill="rgba(148, 163, 184, 0.55)" />
          <rect x="14" y="42" width="150" height="6" rx="3" fill="rgba(148, 163, 184, 0.18)" />
          <rect x="14" y="42" width="70" height="6" rx="3" fill="url(#hv-bar)" />
          <circle cx="158" cy="14" r="4" fill="#a78bfa" />
        </g>

        {/* connecting lines */}
        <g
          fill="none"
          stroke="rgba(148, 163, 184, 0.35)"
          strokeWidth="1"
          strokeDasharray="3 4"
        >
          <path d="M260 410 L300 344" />
          <path d="M360 174 L300 256" />
        </g>
      </svg>
    </div>
  );
}

export default HeroVisual;