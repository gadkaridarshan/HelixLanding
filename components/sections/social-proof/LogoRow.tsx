// helix: components/sections/social-proof/LogoRow.tsx
/**
 * @helix:story USER-167000
 *
 * LogoRow — "as featured in" wordmark strip plus an optional GitHub
 * stars callout that links to the Helix repo. Pure server component.
 */
import * as React from "react";

export interface SocialProofLogo {
  name: string;
  label: string;
}

export interface LogoRowProps {
  logos: ReadonlyArray<SocialProofLogo>;
  githubStars?: {
    label: string;
    href: string;
  };
  className?: string;
}

function LogoBadge({ label }: { label: string }): React.ReactElement {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 text-base font-semibold tracking-tight text-slate-200 transition-colors hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white"
    >
      {label}
    </div>
  );
}

export function LogoRow({
  logos,
  githubStars,
  className,
}: LogoRowProps): React.ReactElement {
  return (
    <div
      className={
        "flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between " +
        (className ?? "")
      }
    >
      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        {logos.map((logo) => (
          <LogoBadge key={logo.name} label={logo.label} />
        ))}
      </div>

      {githubStars ? (
        <a
          href={githubStars.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-cyan-400/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.27 5.69.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55A11.5 11.5 0 0012 .5z" />
          </svg>
          {githubStars.label}
        </a>
      ) : null}
    </div>
  );
}

export default LogoRow;