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
          <linearGradient id="hv-card" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b1124" />
            <stop offset="100%" stopColor="#070b1c" />
          </linearGradient>
          <linearGradient id="hv-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {/* Soft glow */}
        <circle cx="300" cy="300" r="260" fill="url(#hv-glow)" />

        {/* Code surface card */}
        <g>
          <rect
            x="120"
            y="170"
            width="360"
            height="260"
            rx="18"
            fill="url(#hv-card)"
            stroke="rgba(148,163,184,0.2)"
            strokeWidth="1"
          />
          {/* Window dots */}
          <circle cx="142" cy="192" r="5" fill="#f87171" opacity="0.7" />
          <circle cx="158" cy="192" r="5" fill="#facc15" opacity="0.7" />
          <circle cx="174" cy="192" r="5" fill="#34d399" opacity="0.7" />
          {/* Code lines */}
          <g opacity="0.85">
            <rect x="140" y="220" width="160" height="6" rx="3" fill="#22d3ee" />
            <rect x="140" y="238" width="220" height="6" rx="3" fill="#64748b" />
            <rect x="156" y="256" width="140" height="6" rx="3" fill="#8b5cf6" />
            <rect x="156" y="274" width="200" height="6" rx="3" fill="#64748b" />
            <rect x="156" y="292" width="120" height="6" rx="3" fill="#22d3ee" />
            <rect x="140" y="310" width="240" height="6" rx="3" fill="#64748b" />
            <rect x="156" y="328" width="160" height="6" rx="3" fill="#8b5cf6" />
            <rect x="140" y="346" width="200" height="6" rx="3" fill="#64748b" />
            <rect x="140" y="380" width="80" height="20" rx="6" fill="#22d3ee" opacity="0.9" />
          </g>
        </g>

        {/* Orbit rings */}
        <g className="helix-orbit-slow" style={{ transformOrigin: "300px 300px" }}>
          <ellipse
            cx="300"
            cy="300"
            rx="240"
            ry="90"
            fill="none"
            stroke="url(#hv-stroke)"
            strokeWidth="1.5"
            opacity="0.6"
          />
        </g>
        <g className="helix-orbit" style={{ transformOrigin: "300px 300px" }}>
          <ellipse
            cx="300"
            cy="300"
            rx="200"
            ry="70"
            fill="none"
            stroke="url(#hv-stroke)"
            strokeWidth="1.2"
            opacity="0.4"
            transform="rotate(35 300 300)"
          />
        </g>

        {/* Atom nucleus */}
        <circle cx="300" cy="300" r="14" fill="#22d3ee" />
        <circle cx="300" cy="300" r="22" fill="none" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="1" />

        {/* Orbiting units */}
        <g className="helix-orbit" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="540" cy="300" r="6" fill="#8b5cf6" />
        </g>
        <g className="helix-orbit-slow" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="60" cy="300" r="5" fill="#22d3ee" />
        </g>
      </svg>
    </div>
  );
}

export default HeroVisual;