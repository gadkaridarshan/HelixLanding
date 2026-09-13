/**
 * @helix:story USER-248000
 *
 * Footer section — includes navigation, social links, and legal.
 */
import * as React from "react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/brand";

export function Footer(): React.ReactElement {
  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-white/[0.02]"
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Helix</h3>
            <p className="text-white/[0.6] text-sm">
              {brand.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <nav className="space-y-2">
              <a href="/" className="text-white/[0.6] hover:text-white transition-colors">
                Home
              </a>
              <a href="/early-access" className="text-white/[0.6] hover:text-white transition-colors">
                Early Access
              </a>
              <a href="/faq" className="text-white/[0.6] hover:text-white transition-colors">
                FAQ
              </a>
            </nav>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <nav className="space-y-2">
              <a href="https://github.com/gadkaridarshan/Helix" className="text-white/[0.6] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://helix-ai-orchestrator.vercel.app" className="text-white/[0.6] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Reference Site
              </a>
              <a href="/terms" className="text-white/[0.6] hover:text-white transition-colors">
                Terms
              </a>
              <a href="/privacy" className="text-white/[0.6] hover:text-white transition-colors">
                Privacy
              </a>
            </nav>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={brand.twitter}
                className="text-white/[0.6] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href={brand.linkedIn}
                className="text-white/[0.6] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={brand.github}
                className="text-white/[0.6] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/[0.4]">
          &copy; {new Date().getFullYear()} Helix. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}