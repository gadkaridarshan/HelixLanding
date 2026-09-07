// helix: components/landing/hero/HeroVisual.tsx
/**
 * @helix:story USER-303000
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
          <linearGradient id="hv-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="hv-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Glow */}
        <circle cx="300" cy="300" r="260" fill="url(#hv-glow)" />

        {/* Outer orbits */}
        <g
          fill="none"
          stroke="url(#hv-stroke)"
          strokeWidth="1.25"
          opacity="0.85"
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

        {/* Core nucleus */}
        <circle cx="300" cy="300" r="46" fill="url(#hv-fill)" />
        <circle
          cx="300"
          cy="300"
          r="46"
          fill="none"
          stroke="url(#hv-stroke)"
          strokeWidth="1.5"
        />

        {/* Electrons */}
        <g>
          <circle cx="540" cy="300" r="6" fill="#22d3ee" />
          <circle cx="180" cy="380" r="6" fill="#a78bfa" />
          <circle cx="420" cy="120" r="6" fill="#67e8f9" />
        </g>

        {/* Code surface */}
        <g transform="translate(120 380)">
          <rect
            width="360"
            height="160"
            rx="14"
            fill="rgba(2,6,23,0.85)"
            stroke="rgba(148,163,184,0.18)"
          />
          <g
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="11"
            fill="#94a3b8"
          >
            <text x="18" y="28">unit-01 · schema</text>
            <text x="18" y="48" fill="#22d3ee">✓ verified</text>
            <text x="18" y="76">unit-02 · types</text>
            <text x="18" y="96" fill="#22d3ee">✓ verified</text>
            <text x="18" y="124">unit-03 · ui</text>
            <text x="120" y="124" fill="#facc15">⋯ running</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default HeroVisual;