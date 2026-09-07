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
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <linearGradient id="hv-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.08" />
          </linearGradient>
          <filter id="hv-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>

        {/* Outer glow */}
        <circle cx="300" cy="300" r="260" fill="url(#hv-glow)" />

        {/* Orbit rings */}
        <g
          fill="none"
          stroke="url(#hv-stroke)"
          strokeWidth="1.25"
          opacity="0.65"
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
            transform="rotate(120 300 300)"
          />
        </g>

        {/* Inner nucleus */}
        <circle
          cx="300"
          cy="300"
          r="78"
          fill="url(#hv-fill)"
          stroke="url(#hv-stroke)"
          strokeWidth="1.5"
        />
        <circle cx="300" cy="300" r="14" fill="#67e8f9" opacity="0.85" />

        {/* Electrons */}
        <g fill="#67e8f9">
          <circle cx="540" cy="300" r="6" />
          <circle cx="180" cy="210" r="5" opacity="0.85" />
          <circle cx="420" cy="390" r="5" opacity="0.85" />
          <circle cx="300" cy="60" r="4" opacity="0.7" />
          <circle cx="300" cy="540" r="4" opacity="0.7" />
        </g>

        {/* Atomic units (work-breakdown tiles) */}
        <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="11" fill="#cbd5ff">
          <g transform="translate(70 90)">
            <rect width="130" height="42" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
            <text x="14" y="26">unit · 01</text>
          </g>
          <g transform="translate(400 130)">
            <rect width="130" height="42" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
            <text x="14" y="26">unit · 02</text>
          </g>
          <g transform="translate(80 430)">
            <rect width="130" height="42" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
            <text x="14" y="26">unit · 03</text>
          </g>
          <g transform="translate(420 440)">
            <rect width="130" height="42" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
            <text x="14" y="26">unit · 04</text>
          </g>
        </g>

        {/* Connector lines */}
        <g
          fill="none"
          stroke="url(#hv-stroke)"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.55"
        >
          <path d="M200 111 L260 250" />
          <path d="M400 152 L340 250" />
          <path d="M210 451 L270 360" />
          <path d="M420 461 L340 360" />
        </g>
      </svg>
    </div>
  );
}

export default HeroVisual;