// @helix:story [USER-88000]
export default function Footer() {
  return (
    <footer className="bg-dark text-white section-padding">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="mb-4 text-xl font-bold">Helix AI</h3>
            <p className="text-secondary">
              Professional AI workflow automation platform designed for teams
              that demand performance, reliability, and scalability.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold">Product</h4>
            <ul className="space-y-2 text-secondary">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-secondary">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold">Resources</h4>
            <ul className="space-y-2 text-secondary">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary/20 text-center text-sm text-secondary">
          <p>&copy; {new Date().getFullYear()} Helix AI Orchestrator. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}