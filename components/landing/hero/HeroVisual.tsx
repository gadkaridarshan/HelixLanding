// helix: components/landing/hero/HeroVisual.tsx
/**
 * @helix:story USER-993000
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
          <linearGradient id="hv-orb" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="hv-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ambient glow */}
        <circle cx="300" cy="300" r="280" fill="url(#hv-glow)" />

        {/* orbiting rings */}
        <g
          fill="none"
          stroke="url(#hv-line)"
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

        {/* nucleus */}
        <circle cx="300" cy="300" r="46" fill="url(#hv-orb)" opacity="0.95" />
        <circle
          cx="300"
          cy="300"
          r="70"
          fill="none"
          stroke="#a78bfa"
          strokeOpacity="0.4"
          strokeWidth="1"
        />

        {/* electron dots */}
        <g fill="#e2e8f0">
          <circle cx="540" cy="300" r="6" />
          <circle cx="180" cy="234" r="5" />
          <circle cx="180" cy="366" r="5" />
        </g>

        {/* code surface — bottom card */}
        <g transform="translate(80 420)">
          <rect
            width="440"
            height="140"
            rx="14"
            fill="#0b1220"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <rect width="440" height="22" rx="14" fill="#0f172a" />
          <circle cx="14" cy="11" r="4" fill="#ef4444" />
          <circle cx="28" cy="11" r="4" fill="#f59e0b" />
          <circle cx="42" cy="11" r="4" fill="#22c55e" />
          <g
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="11"
            fill="#94a3b8"
          >
            <text x="14" y="48">$ helix plan --atomic</text>
            <text x="14" y="68" fill="#22d3ee">
              ✓ breaking change into 3 PRs
            </text>
            <text x="14" y="88" fill="#a78bfa">
              ✓ review gate passed
            </text>
            <text x="14" y="108" fill="#22c55e">
              ✓ shipped atom #042
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default HeroVisual;