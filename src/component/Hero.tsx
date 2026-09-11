import React from 'react';
import heroImage from "../assets/banner-stack.png";

const Hero = () => {
    return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-125 max-w-335 items-center justify-between px-6 py-16">

        {/* Left Content */}
        <div className="w-full max-w-162.5">

          <h1 className="text-5xl font-bold leading-tight text-slate-900">
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-7 max-w-155 text-lg leading-8 text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-4">

            <button className="rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-5 py-3 font-semibold text-white transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-200 bg-white px-8 py-3 font-medium text-gray-600 transition hover:border-pink-400 hover:text-pink-500">
              Learn More
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="hidden w-[45%] justify-center md:flex">
          <img
            src={heroImage}
            alt="Development Stack"
            className="w-107.5 object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;