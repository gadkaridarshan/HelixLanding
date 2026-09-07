// helix: components/Footer.tsx
/**
 * @helix:story USER-434000
 *
 * Footer — canonical site-wide footer for the landing page.
 *
 * Delegates to the `Footer` from `@/components/footer` with content
 * sourced from `@/content/footer.json`. Pure server component.
 */
import * as React from "react";

import { Footer as FooterImpl } from "@/components/footer/Footer";
import type { FooterContent } from "@/components/footer/Footer";

import footerData from "@/content/footer.json";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps): React.ReactElement {
  const content = footerData as FooterContent;
  return <FooterImpl content={content} className={className} />;
}

export default Footer;