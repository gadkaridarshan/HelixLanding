export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Helix</h3>
            <p className="text-gray-600">
              AI orchestration platform for complex workflows. Helix coordinates specialized agents to deliver precise,
              actionable results.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Features</li>
              <li>Workflow</li>
              <li>Pricing</li>
              <li>Enterprise</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Documentation</li>
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Webinars</li>
              <li>API Reference</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © 2024 Helix AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}