// helix: components/sections/hero/HeroVisual.tsx
/**
 * @helix:story USER-495000
 *
 * HeroVisual — purely decorative SVG hero illustration for the
 * above-the-fold Hero. Renders an atom/orbit motif (matching the
 * Helix brand) plus a layered "code surface" suggesting atomic
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
          <linearGradient id="hv-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="hv-surface" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Ambient glow */}
        <circle cx="300" cy="300" r="260" fill="url(#hv-glow)" />

        {/* Orbits */}
        <g
          fill="none"
          stroke="url(#hv-ring)"
          strokeWidth="1.25"
          opacity="0.55"
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

        {/* Nucleus */}
        <circle cx="300" cy="300" r="22" fill="#22d3ee" />
        <circle
          cx="300"
          cy="300"
          r="22"
          fill="none"
          stroke="#67e8f9"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Electrons */}
        <g fill="#e2e8f0">
          <circle cx="540" cy="300" r="5" />
          <circle cx="60" cy="300" r="5" />
          <circle cx="420" cy="385" r="5" />
          <circle cx="180" cy="215" r="5" />
          <circle cx="180" cy="385" r="5" />
          <circle cx="420" cy="215" r="5" />
        </g>

        {/* Code surface card */}
        <g transform="translate(120 360)">
          <rect
            width="360"
            height="170"
            rx="14"
            fill="url(#hv-surface)"
            stroke="rgba(255,255,255,0.08)"
          />
          {/* Window chrome */}
          <circle cx="18" cy="18" r="4" fill="#475569" />
          <circle cx="32" cy="18" r="4" fill="#475569" />
          <circle cx="46" cy="18" r="4" fill="#475569" />
          {/* Code lines */}
          <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="11">
            <rect x="16" y="44" width="60" height="8" rx="2" fill="#22d3ee" opacity="0.7" />
            <rect x="84" y="44" width="160" height="8" rx="2" fill="#475569" />
            <rect x="36" y="62" width="120" height="8" rx="2" fill="#a78bfa" opacity="0.8" />
            <rect x="164" y="62" width="80" height="8" rx="2" fill="#475569" />
            <rect x="36" y="80" width="60" height="8" rx="2" fill="#22d3ee" opacity="0.7" />
            <rect x="104" y="80" width="200" height="8" rx="2" fill="#475569" />
            <rect x="36" y="98" width="140" height="8" rx="2" fill="#e2e8f0" opacity="0.6" />
            <rect x="36" y="116" width="90" height="8" rx="2" fill="#22d3ee" opacity="0.5" />
            <rect x="134" y="116" width="120" height="8" rx="2" fill="#475569" />
            <rect x="36" y="134" width="60" height="8" rx="2" fill="#a78bfa" opacity="0.7" />
            <rect x="104" y="134" width="80" height="8" rx="2" fill="#475569" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default HeroVisual;