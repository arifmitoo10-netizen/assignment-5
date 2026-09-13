import React from "react";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-15 w-full border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-335 px-6">

        {/* Main Footer */}
        <div className="flex flex-col justify-between gap-10 py-12 md:flex-row">

          {/* Brand */}
          <div className="max-w-85">
            <img
              src={logo}
              alt="Dev Stack"
              className="w-24"
            />

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <ul className="mt-5 flex gap-5 text-sm text-gray-600">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-16 sm:grid-cols-3 sm:gap-24">

            {/* Product */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-900">
                Product
              </h3>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-900">
                Company
              </h3>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-900">
                Legal
              </h3>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col justify-between gap-4 border-t border-gray-100 py-6 text-xs text-gray-400 sm:flex-row">

          <p>© 2026 Dev Stack. All rights reserved.</p>

          <ul className="flex gap-6">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;