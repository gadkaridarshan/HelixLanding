// @helix:story [USER-810000]
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Helix AI Orchestrator. All rights reserved.
        </p>
      </div>
    </footer>
  );
}