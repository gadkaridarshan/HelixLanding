// helix: lib/content.ts
/**
 * @helix:story USER-993000
 *
 * Content loader helpers — typed accessors over the JSON content files
 * living under `content/`. Components import from here so the underlying
 * storage (JSON files colocated with the route tree) can be swapped without
 * touching section components.
 */

import hero from "@/content/hero.json";
import howItWorks from "@/content/how-it-works.json";
import features from "@/content/features.json";
import personas from "@/content/personas.json";
import socialProof from "@/content/social-proof.json";

export interface HeroCopy {
  eyebrow: string;
  headline: string;
  highlight: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustLine: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface HowItWorksCopy {
  eyebrow: string;
  heading: string;
  description: string;
  steps: HowItWorksStep[];
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface FeaturesCopy {
  eyebrow: string;
  heading: string;
  description: string;
  items: FeatureItem[];
}

export interface Persona {
  id: string;
  title: string;
  tagline: string;
  description: string;
  painPoints: string[];
  outcomes: string[];
  icon: string;
}

export interface PersonasCopy {
  eyebrow: string;
  heading: string;
  description: string;
  items: Persona[];
}

export interface SocialProofCopy {
  eyebrow: string;
  heading: string;
  logos: { name: string; label: string }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
  }[];
  stats: { value: string; label: string }[];
}

export const heroContent = hero as HeroCopy;
export const howItWorksContent = howItWorks as HowItWorksCopy;
export const featuresContent = features as FeaturesCopy;
export const personasContent = personas as PersonasCopy;
export const socialProofContent = socialProof as SocialProofCopy;