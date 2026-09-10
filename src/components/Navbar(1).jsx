import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-lg font-bold text-blue-600 sm:text-xl md:text-2xl">
            Front End Web Development
          </h1>

          {/* Desktop menu */}
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#home"
              className="text-gray-600 transition hover:text-blue-600"
            >
              Home 
            </a>

            <a
              href="#features"
              className="text-gray-600 transition hover:text-blue-600"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-gray-600 transition hover:text-blue-600"
            >
              About
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              // Close icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-blue-600"
              >
                Home
              </a>

              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-blue-600"
              >
                Features
              </a>

              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-blue-600"
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
