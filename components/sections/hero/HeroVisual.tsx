// helix: components/sections/hero/HeroVisual.tsx
/**
 * @helix:story USER-167000
 *
 * HeroVisual — decorative SVG that visualizes Helix as a central
 * atom orbited by smaller "unit" nodes, communicating the
 * atomic-decomposition theme of the product. Pure server component.
 */
import * as React from "react";

export function HeroVisual(): React.ReactElement {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-violet-400/15 to-fuchsia-400/20 blur-3xl"
      />
      <svg
        viewBox="0 0 400 400"
        aria-hidden="true"
        className="relative h-full w-full"
      >
        <defs>
          <radialGradient id="hero-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#a78bfa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
          <filter id="hero-glow">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbital ring */}
        <g
          fill="none"
          stroke="url(#hero-ring)"
          strokeOpacity="0.45"
          strokeWidth="1.25"
        >
          <ellipse cx="200" cy="200" rx="160" ry="60" transform="rotate(0 200 200)" />
          <ellipse cx="200" cy="200" rx="160" ry="60" transform="rotate(60 200 200)" />
          <ellipse cx="200" cy="200" rx="160" ry="60" transform="rotate(120 200 200)" />
        </g>

        {/* Unit nodes */}
        <g filter="url(#hero-glow)">
          <circle cx="360" cy="200" r="5" fill="#22d3ee" />
          <circle cx="120" cy="200" r="5" fill="#22d3ee" />
          <circle cx="280" cy="80" r="5" fill="#a78bfa" />
          <circle cx="120" cy="320" r="5" fill="#a78bfa" />
          <circle cx="280" cy="320" r="5" fill="#c084fc" />
        </g>

        {/* Core atom */}
        <g>
          <circle cx="200" cy="200" r="110" fill="url(#hero-core)" />
          <circle
            cx="200"
            cy="200"
            r="42"
            fill="none"
            stroke="#67e8f9"
            strokeOpacity="0.7"
            strokeWidth="1.5"
          />
          <circle cx="200" cy="200" r="10" fill="#e0f2fe" />
          <circle cx="200" cy="158" r="5" fill="#67e8f9" />
          <circle cx="234" cy="220" r="5" fill="#a78bfa" />
          <circle cx="166" cy="220" r="5" fill="#c084fc" />
        </g>
      </svg>
    </div>
  );
}

export default HeroVisual;