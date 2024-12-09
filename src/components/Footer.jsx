import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container px-6 sm:px-16 lg:px-36 mx-auto flex flex-col md:flex-row justify-between items-center md:items-start pb-4">
        {/* Left Section - Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo */}
          <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0">
            <img
              src="\src\assets\images\icon.ico"
              alt="Logo"
              className="w-10 h-10"
            />
            <h1 className="font-semibold mt-2 text-2xl md:text-3xl">New Lantern</h1>
          </div>
          {/* Copyright Text */}
          <p className="text-neutral-500 text-sm mt-2 md:mt-0">
            ©2024 New Lantern. All rights reserved.
          </p>
        </div>

        {/* Right Section - Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-6 px-0 sm:px-12 md:px-24 lg:px-48 gap-8 mt-8 md:mt-0 text-center md:text-left">
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/blog"
                  className="text-neutral-500 text-sm transition-colors hover:text-white"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://x.com/newlanternai"
                  className="text-neutral-500 text-sm transition-colors hover:text-white"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-neutral-500 text-sm transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/fulfilment-policy"
                  className="text-neutral-500 text-sm transition-colors hover:text-white"
                >
                  Fulfilment Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-neutral-500 text-sm transition-colors hover:text-white"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
