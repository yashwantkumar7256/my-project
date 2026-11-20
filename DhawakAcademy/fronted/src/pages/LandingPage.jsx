import React from "react";
import { ArrowRight, Play } from "lucide-react";

const LandingPage = () => {
  return (
    <section className="w-full min-h-[50vh]  mt-7 px-4 sm:px-8 lg:px-16 py-10 lg:py-16 bg-[#101827] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">

        {/* TEXT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-5">

          <span className="text-orange-400 uppercase tracking-[3px] text-sm font-semibold">
            Transform Your Life
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            MAKE A POSITIVE
            <span className="block text-orange-500">
              CHANGE IN YOUR
            </span>
            LIFE TODAY
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-8 max-w-xl">
            Every great journey begins with a single step. Challenge yourself,
            build confidence, develop new skills and take control of your
            future. Your success story starts today!
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-3">

            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Get Started
              <ArrowRight size={20} />
            </button>

            <button className="flex items-center gap-2 border border-gray-400 hover:border-orange-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              <Play size={18} />
              Learn More
            </button>

          </div>

          {/* STATS */}
          <div className="flex gap-8 sm:gap-12 mt-8 border-t border-gray-700 pt-6 w-full">

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">
                100+
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Opportunities
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">
                95%
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Dedication
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">
                24/7
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">

          {/* Background decoration */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-orange-500/20 rounded-full blur-3xl">
          </div>

          <div className="relative w-full max-w-lg">

            <img
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIt52qUljGdJXFymRUK_ZPTSKAyeB1SJzA3N1ORpIwg&s=10"
              alt="Fitness and personal development"
            />

            {/* Image overlay card */}
            <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md rounded-xl p-4">
              <h3 className="text-xl font-bold">
                Your Journey Starts Here
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Stay focused. Stay motivated. Keep growing.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LandingPage;