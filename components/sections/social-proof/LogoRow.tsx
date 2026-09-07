// helix: components/sections/social-proof/LogoRow.tsx
/**
 * @helix:story USER-933000
 *
 * LogoRow — internal subcomponent for the SocialProof section. Renders
 * the "as featured in" placeholder logo badges sourced from
 * `@/content/social-proof.json`. Pure server component.
 *
 * Consumers should normally use `<SocialProof />` directly; this
 * subcomponent exists to keep the section composable for future layouts.
 */
import * as React from "react";

import socialProofData from "@/content/social-proof.json";

export interface LogoRowProps {
  className?: string;
}

interface Logo {
  name: string;
  label: string;
}

interface SocialProofContent {
  logos: Logo[];
}

const { logos } = socialProofData as SocialProofContent;

export function LogoRow({ className }: LogoRowProps): React.ReactElement {
  return (
    <ul
      role="list"
      className={
        "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 " +
        (className ?? "")
      }
    >
      {logos.map((logo) => (
        <li key={logo.name}>
          <div
            role="img"
            aria-label={logo.label}
            className="flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 text-base font-semibold tracking-tight text-slate-200 transition-colors hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white"
          >
            {logo.label}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LogoRow;