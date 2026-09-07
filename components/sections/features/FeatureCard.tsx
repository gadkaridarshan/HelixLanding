// helix: components/sections/features/FeatureCard.tsx
/**
 * @helix:story USER-167000
 *
 * FeatureCard — single capability card primitive used by Features.
 * Pure server component.
 */
import * as React from "react";

import { FeatureIcon } from "./FeatureIcon";
import type { FeaturesIconName } from "./FeatureIcon";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: FeaturesIconName;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps): React.ReactElement {
  return (
    <article
      className={
        "group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors duration-200 hover:border-cyan-400/40 hover:bg-white/[0.06] " +
        (className ?? "")
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/0 via-transparent to-violet-500/0 transition-opacity duration-200 group-hover:opacity-100"
      />
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
        <FeatureIcon name={icon} />
      </span>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-300">{description}</p>
    </article>
  );
}

export default FeatureCard;