import React from 'react';
import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">

      <div className="mx-auto flex h-22.5 max-w-335 items-center justify-between px-6">
        <img src={logo} alt="DevStack Logo" className="w-37.5" />

        <div>
          <ul className="hidden items-center gap-9 md:flex">
            <li className="font-medium text-pink-500 transition hover:text-pink-600">Home</li>
            <li>Technologies</li>
            <li >Projects</li>
            <li >About</li>
            <li >Contact</li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden font-medium text-gray-600 transition hover:text-pink-500 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600 px-7 py-3 font-medium text-white transition hover:bg-pink-700">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;