import React from 'react';
import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">

      <div className="relative mx-auto flex h-[90px] max-w-[1340px] items-center justify-between px-6">
     
        <button className="text-2xl md:hidden">
          ☰
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img src={logo} alt="DevStack Logo" className="w-32.5 md:w-37.5"
          />
        </div>

        <div>
          <ul className="hidden items-center gap-9 md:flex">
            <li className="font-medium text-pink-500 transition">Home</li>
            <li>Technologies</li>
            <li >Projects</li>
            <li >About</li>
            <li >Contact</li>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-6">
          <button className="block text-sm font-medium text-gray-600 transition sm:text-base">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-pink-700 sm:px-7 sm:py-3 sm:text-base">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;