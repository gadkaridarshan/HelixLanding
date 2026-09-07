// helix: components/landing/cta/FinalCTA.tsx
/**
 * @helix:story USER-956000
 *
 * Closing call-to-action block rendered before the footer.
 * Reads copy from `content/cta.json`.
 */
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import ctaData from "@/content/cta.json";

interface CTA {
  label: string;
  href: string;
  external?: boolean;
}

interface CTAContent {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  tertiaryCta?: CTA;
  badges?: string[];
}

function renderCTA(cta: CTA, variant: "primary" | "secondary" | "tertiary") {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-base";
  const styles: Record<typeof variant, string> = {
    primary:
      "bg-gradient-to-r from-sky-400 to-violet-500 text-slate-950 shadow-lg shadow-sky-500/25 hover:from-sky-300 hover:to-violet-400 focus-visible:ring-sky-300",
    secondary:
      "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 focus-visible:ring-white/40",
    tertiary:
      "text-slate-300 hover:text-white underline-offset-4 hover:underline px-3 py-2",
  };
  const className = `${base} ${styles[variant]}`;
  const externalProps = cta.external
    ? { target: "_blank", rel: "noreferrer noopener" as const }
    : {};
  return (
    <Link href={cta.href} className={className} {...externalProps}>
      <span>{cta.label}</span>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4"
      >
        <path
          d="M5 10h10M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export function FinalCTA(): React.ReactElement {
  const data = ctaData as CTAContent;

  return (
    <section
      id="get-started"
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_50%_100%,_rgba(168,85,247,0.18),_transparent_55%)]"
      />
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-sm sm:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            {data.eyebrow ? (
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sky-300/80">
                {data.eyebrow}
              </p>
            ) : null}
            <h2
              id="final-cta-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {data.title}
            </h2>
            {data.subtitle ? (
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                {data.subtitle}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              {renderCTA(data.primaryCta, "primary")}
              {data.secondaryCta ? renderCTA(data.secondaryCta, "secondary") : null}
            </div>
            {data.tertiaryCta ? (
              <div className="mt-4 flex justify-center">
                {renderCTA(data.tertiaryCta, "tertiary")}
              </div>
            ) : null}
            {data.badges && data.badges.length > 0 ? (
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 sm:text-sm">
                {data.badges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;