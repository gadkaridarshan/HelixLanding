// helix: components/landing/hero/HeroVisual.tsx
/**
 * @helix:story USER-128000
 *
 * HeroVisual — purely decorative SVG hero illustration for the
 * above-the-fold Hero. Renders an atom/orbit motif (matching the Helix
 * brand) plus a layered "code surface" suggesting atomic
 * work-breakdown.
 *
 * No client interactivity — server-rendered SVG with deterministic
 * sizing.
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
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="hv-card" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1e293b" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Soft glow backdrop */}
        <circle cx="300" cy="300" r="260" fill="url(#hv-glow)" />

        {/* Outer orbits */}
        <g
          fill="none"
          stroke="url(#hv-orbit)"
          strokeWidth="1.25"
          opacity="0.75"
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

        {/* Electron nodes */}
        <g>
          <circle cx="540" cy="300" r="7" fill="#22d3ee" />
          <circle cx="180" cy="300" r="7" fill="#22d3ee" />
          <circle cx="420" cy="378" r="5" fill="#a78bfa" />
          <circle cx="180" cy="222" r="5" fill="#a78bfa" />
          <circle cx="420" cy="222" r="5" fill="#a78bfa" />
        </g>

        {/* Central nucleus */}
        <g>
          <circle cx="300" cy="300" r="48" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="22" fill="url(#hv-orbit)" opacity="0.9" />
        </g>

        {/* Code surface */}
        <g transform="translate(150, 380)">
          <rect
            x="0"
            y="0"
            width="300"
            height="120"
            rx="12"
            fill="url(#hv-card)"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
          {/* Window dots */}
          <circle cx="18" cy="18" r="4" fill="#ef4444" opacity="0.7" />
          <circle cx="34" cy="18" r="4" fill="#f59e0b" opacity="0.7" />
          <circle cx="50" cy="18" r="4" fill="#22c55e" opacity="0.7" />

          {/* Code lines */}
          <g fill="rgba(148,163,184,0.9)" fontFamily="ui-monospace, monospace" fontSize="9">
            <rect x="18" y="42" width="80" height="6" rx="2" fill="#22d3ee" opacity="0.7" />
            <rect x="104" y="42" width="60" height="6" rx="2" fill="#a78bfa" opacity="0.7" />
            <rect x="34" y="58" width="120" height="6" rx="2" fill="#cbd5e1" opacity="0.4" />
            <rect x="34" y="74" width="100" height="6" rx="2" fill="#cbd5e1" opacity="0.4" />
            <rect x="34" y="90" width="140" height="6" rx="2" fill="#cbd5e1" opacity="0.4" />
            <rect x="18" y="106" width="40" height="6" rx="2" fill="#22d3ee" opacity="0.7" />
            <rect x="64" y="106" width="60" height="6" rx="2" fill="#a78bfa" opacity="0.7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default HeroVisual;