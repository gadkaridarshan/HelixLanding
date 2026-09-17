export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container-custom py-8">
        <div className="text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Helix AI Orchestrator. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}