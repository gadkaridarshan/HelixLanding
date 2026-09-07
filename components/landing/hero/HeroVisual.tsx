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
          <linearGradient id="hv-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="hv-card" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
          <pattern
            id="hv-grid"
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M22 0 L0 0 0 22"
              fill="none"
              stroke="rgba(148,163,184,0.10)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="600" height="600" fill="transparent" />
        <rect width="600" height="600" fill="url(#hv-grid)" />
        <circle cx="300" cy="300" r="240" fill="url(#hv-glow)" />

        {/* Orbits */}
        <g
          fill="none"
          stroke="url(#hv-stroke)"
          strokeWidth="1.2"
          opacity="0.85"
        >
          <ellipse cx="300" cy="300" rx="220" ry="80" />
          <ellipse
            cx="300"
            cy="300"
            rx="220"
            ry="80"
            transform="rotate(60 300 300)"
          />
          <ellipse
            cx="300"
            cy="300"
            rx="220"
            ry="80"
            transform="rotate(120 300 300)"
          />
        </g>

        {/* Nucleus */}
        <circle cx="300" cy="300" r="28" fill="#0a0f1f" />
        <circle
          cx="300"
          cy="300"
          r="28"
          fill="none"
          stroke="url(#hv-stroke)"
          strokeWidth="2"
        />
        <circle cx="300" cy="300" r="6" fill="#22d3ee" />

        {/* Electrons / nodes */}
        <g fill="#22d3ee">
          <circle cx="520" cy="300" r="5" />
          <circle cx="80" cy="300" r="5" />
          <circle cx="410" cy="170" r="5" />
          <circle cx="190" cy="430" r="5" />
          <circle cx="410" cy="430" r="5" />
          <circle cx="190" cy="170" r="5" />
        </g>

        {/* Code-surface card */}
        <g>
          <rect
            x="120"
            y="430"
            width="360"
            height="120"
            rx="14"
            fill="url(#hv-card)"
            stroke="rgba(148,163,184,0.25)"
          />
          <g fontFamily="JetBrains Mono, monospace" fontSize="11">
            <circle cx="138" cy="450" r="4" fill="#ef4444" opacity="0.7" />
            <circle cx="152" cy="450" r="4" fill="#f59e0b" opacity="0.7" />
            <circle cx="166" cy="450" r="4" fill="#10b981" opacity="0.7" />
            <text x="138" y="480" fill="#94a3b8">
              $ helix plan "add OAuth login"
            </text>
            <text x="138" y="500" fill="#67e8f9">
              → 4 atomic units
            </text>
            <text x="138" y="520" fill="#c084fc">
              ✓ unit 1/4 — tests pass
            </text>
            <text x="138" y="540" fill="#94a3b8">
              … awaiting review
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default HeroVisual;