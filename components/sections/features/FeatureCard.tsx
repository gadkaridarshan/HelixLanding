// helix: components/sections/features/FeatureCard.tsx
/**
 * @helix:story USER-507000
 *
 * FeatureCard — value-prop card primitive used by the Features grid.
 *
 * Renders a glass surface with a tinted icon tile, title, and
 * description. Pure server component; visuals rely entirely on
 * Tailwind utilities + brand tokens.
 */
import * as React from "react";

import { cn } from "@/components/ui/cn";
import {
  FeatureIcon,
  type FeaturesIconName,
} from "@/components/sections/features/FeatureIcon";

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
      className={cn(
        "group relative flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] backdrop-blur",
        "transition-colors duration-200 hover:border-brand-500/40 hover:bg-white/[0.05]",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-inset ring-brand-500/30"
        >
          <FeatureIcon name={icon} className="h-5 w-5" />
        </span>
      </div>

      <h3 className="text-base font-semibold tracking-tight text-ink-50 sm:text-lg">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-ink-300">{description}</p>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
    </article>
  );
}

export default FeatureCard;