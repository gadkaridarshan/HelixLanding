import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Helix</h3>
            <p className="text-gray-400">
              AI orchestration platform that transforms complex workflows into
              simple, actionable outcomes.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="/workflow" className="hover:text-white transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4 text-gray-400 hover:text-white transition">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.004 2.004a9.003 9.003 0 00-12.751 4.747A12.022 12.022 0 013.5 9.75c0 .83.07 1.636.198 2.41a9.003 9.003 0 00-2.701 4.253v.676h5.103V15h3.396v-1.476c0-1.444.162-2.888.44-4.303l3.079-.005c-.262.96-.412 2.021-.412 3.124 0 2.556.87 4.323 2.186 5.346a12.06 12.06 0 01-3.06.877v.674h5.377c-.493-2.93-.78-5.965-.78-9.062 0-3.028.77-5.71 2.028-7.873zm7.5 5.708c0 2.472-.96 4.26-2.56 5.285v-.687c1.38-.784 2.258-2.053 2.258-3.568 0-1.555-.896-2.824-2.258-3.568v.672c1.6 1.025 2.56 2.813 2.56 5.285z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-19.35c-1.49 0-2.7 1.21-2.7 2.7v18.6c0 1.49 1.21 2.7 2.7 2.7h19.35c1.49 0 2.7-1.21 2.7-2.7V2.7c0-1.49-1.21-2.7-2.7-2.7zm-10.575 21.575V11.005h-3.575v3.79h-2.26v-3.79h-3.55v5.385H8.95V11.005h-2.25v-2.37h2.25V6.55c0-1.875.97-3.05 2.88-3.05.95 0 1.665.055 1.95.1v2.205h-1.25c-.8 0-1.08.45-1.08 1.15v2.41h2.37v-1.56c0-.815.31-1.375.925-1.375.95 0 1.375.55 1.375 1.375V11h2.37v10.575h-2.37z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-1-6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm9 3.5H15v-2c0-1.105-.9-2-2-2s-2 .895-2 2v2H8v-.25c0-2.76 2.25-5 5-5s5 2.24 5 5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Helix AI Orchestrator. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
