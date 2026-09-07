// helix: components/CTA.tsx
/**
 * @helix:story USER-434000
 *
 * CTA — canonical landing-page closing call-to-action banner.
 *
 * Delegates to `FinalCtaBanner` from `@/components/cta` with content
 * sourced from `@/content/cta.json`. Server-rendered.
 */
import * as React from "react";

import { FinalCtaBanner } from "@/components/cta/FinalCtaBanner";
import type { FinalCtaContent } from "@/components/cta/FinalCtaBanner";

import ctaData from "@/content/cta.json";

export interface CTAProps {
  className?: string;
}

export function CTA({ className }: CTAProps): React.ReactElement {
  const content = ctaData as FinalCtaContent;
  return <FinalCtaBanner content={content} className={className} />;
}

export default CTA;