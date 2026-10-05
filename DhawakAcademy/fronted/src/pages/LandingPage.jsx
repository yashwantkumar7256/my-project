import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";


const LandingPage = () => {
  const [displayText, setDisplayText] = useState("");

const text = "IT IS ONE OF THE BEST TRAINING ACADEMIES";

useEffect(() => {
  const delay = setTimeout(() => {
    let i = 0;

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(typing);
      }
    }, 80);

    return () => clearInterval(typing);
  }, 500);

  return () => clearTimeout(delay);
}, []);
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white pt-10 pb-16 px-4 md:px-8 xl:px-16 flex justify-center items-center">
      {/* Dynamic Grid Layout container changing per responsive breakpoint */}
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 items-stretch">
        
        {/* Left Column Area*/}
        <div className="flex flex-col justify-between gap-6 p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 shadow-xl xl:col-span-1 2xl:p-8">
          
          {/* Top Notice Badge */}
          <div className="inline-flex font-black text-orange-500 text-xs tracking-widest uppercase bg-orange-500/10 px-4 py-1.5 rounded-full w-fit self-center md:self-start">
            Training Starts Today
          </div>

          {/* Clean  Title */}
       <div className="font-jim tracking-wide text-center md:text-left my-4">
  <h1 className="text-4xl sm:text-5xl md:text-4xl xl:text-5xl font-extrabold leading-tight">

    {displayText.split(" ").map((word, index) => (
      <span
        key={index}
        className={
          word === "BEST" || word === "TRAINING"
            ? "text-amber-500"
            : "text-zinc-100"
        }
      >
        {word}{" "}
      </span>
    ))}

    <span className="animate-pulse text-amber-500">|</span>

  </h1>
</div>

          {/*  Start Button */}
          <div className="group flex bg-gradient-to-r from-red-100 to-orange-600 hover:from-red-900 hover:to-orange-700 transition-all duration-300 px-6 py-3.5 rounded-2xl justify-center items-center gap-3 cursor-pointer shadow-lg shadow-red-500/10 w-full sm:w-2/3 md:w-full self-center">
            <button className="text-base font-bold uppercase tracking-wider">
              Start Now
            </button>
            <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-4" />
          </div>

          {/* Student Badges Counter */}
          <div className="mt-4 flex flex-col sm:flex-row md:flex-col md:gap-8 xl:flex-row items-center gap-3 border-t border-zinc-800/80 pt-4">
            <div className="flex -space-x-2.5">
              {[1, 2, 3, 4].map((item, idx) => (
                <img
                  key={idx}
                  className="rounded-full h-9 w-9 object-cover border-2 border-zinc-900 shadow-md"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvabEE_TNgRzOllhDknCb3Pcq6OwHbpwJPucBr8t__w&s=10"
                  alt="Sucessful Student Profile Avatar"
                />
              ))}
            </div>
            <div className="text-sm font-semibold text-amber-500 text-center sm:text-left md:text-center xl:text-left">
              30+ students selected from this academy
            </div>
          </div>
        </div>

        {/*  Featured Main Display  */}
        <div className="rounded-3xl overflow-hidden shadow-2xl relative border border-zinc-800 bg-zinc-900 min-h-[35vh] md:min-h-full xl:col-span-1 2xl:min-h-[650px]">
          <img
            className="absolute inset-0 h-full w-full object-cover object-top filter brightness-90 hover:scale-105 transition-transform duration-700"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepBnKdL5V3EAxhcFnT9JSEjcmr2SuoKCguQJ0K5pb_g&s=10"
            alt="Lead Coach and Instructor Portrait"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
        </div>

        {/* Right Column Area*/}
        <div className="flex flex-col gap-6 2xl:gap-8 xl:col-span-1">
          
          {/*  Box */}
          <div className="rounded-3xl p-6 bg-zinc-900/50 border border-zinc-800 flex flex-col justify-center gap-1 shadow-xl 2xl:p-8">
            <div className="text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-black text-zinc-100 tracking-tight">
              EXPERIENCE 7 YEARS<span className="text-orange-500">+</span>
            </div>
            <div className="text-sm font-medium text-orange-400">
              Successfully trained over 200+ dedicated students
            </div>
          </div>

          {/* Banner */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-zinc-900 to-zinc-900/30 border border-zinc-800/80 flex flex-col justify-center gap-2 shadow-xl 2xl:p-8">
            <div className="text-lg font-black tracking-wider text-amber-500 uppercase">
              Build Your Body. Build Your Mind.
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Train hard. Stay resilient. Consistency is the true key to unlocking peak human performance.
            </p>
          </div>

          {/* Footer  Image  */}
          <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl flex-grow min-h-[25vh] md:min-h-[20vh] relative 2xl:min-h-[300px]">
            <img
              className="absolute inset-0 h-full w-full object-cover filter contrast-110 saturate-75 hover:scale-105 transition-transform duration-700"
              src="https://www.gat.ac.in/img/9c7acbe14763350c32ade283fd05c4b399163605.jpg"
              alt="Academy Athletics Tracking Field Facility"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default LandingPage;