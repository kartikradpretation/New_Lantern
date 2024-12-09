import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function scrollToSection(id) {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="fixed top-8 right-0 transform -translate-x-44 md:h-[60px] z-50">
        <div className="container h-full">
          <div className="flex h-full items-center justify-between lg:justify-start">
            {/* Hamburger Menu Button (Moved to the right on small screens) */}
            <button
              className="block lg:hidden p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white absolute right-6"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open Menu</span>
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {/* Full Navbar for Large Screens */}
            <nav className="hidden lg:block">
              <ul className="flex items-center justify-between p-1 py-1 bg-black/10 bg-white/10 shadow-lg backdrop-blur-md rounded-full">
                <li>
                  <Link
                    onClick={() => scrollToSection("features")}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium text-white underline-offset-4 px-6 py-4 rounded-full transition-colors duration-200 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    to="/#features"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => scrollToSection("features-accordion")}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium text-white underline-offset-4 px-6 py-4 rounded-full transition-colors duration-200 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    to="/#features-accordion"
                  >
                    Curie AI
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => scrollToSection("testimonial")}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium text-white underline-offset-4 px-6 py-4 rounded-full transition-colors duration-200 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    to="/#testimonial"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => scrollToSection("blog-article")}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium text-white underline-offset-4 px-6 py-4 rounded-full transition-colors duration-200 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    to="/#blog-article"
                  >
                    Blog
                  </Link>
                </li>

                <Button />
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Overlay and Sliding Menu */}
      {isMenuOpen && (
        <>
          {/* Black Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          ></div>

          {/* Sliding Menu (Now from the Right) */}
          <div className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 text-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="p-4">
              <button
                className="text-white focus:outline-none focus:ring-2 focus:ring-white"
                onClick={closeMenu}
              >
                {/* Close Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <nav>
              <ul className="flex flex-col space-y-4 p-4">
                <li>
                  <Link
                    onClick={() => {
                      scrollToSection("features");
                      closeMenu();
                    }}
                    className="text-lg font-medium"
                    to="/#features"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToSection("features-accordion");
                      closeMenu();
                    }}
                    className="text-lg font-medium"
                    to="/#features-accordion"
                  >
                    Curie AI
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToSection("testimonial");
                      closeMenu();
                    }}
                    className="text-lg font-medium"
                    to="/#testimonial"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      scrollToSection("blog-article");
                      closeMenu();
                    }}
                    className="text-lg font-medium"
                    to="/#blog-article"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Button />
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
