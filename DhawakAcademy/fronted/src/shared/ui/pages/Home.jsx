import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative min-h-dvh overflow-hidden rounded-2xl text-white">
     
     
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/videoMatting/videoMatting-change.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
       
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 nav-font min-h-dvh flex flex-col justify-center items-center text-center">
        
        <span className="text-4xl font-bold">
          Hello Student
          
        </span>

        <div className="mt-4 text-xl font-semibold">
          ENROLL NOW AND START TRAINING
        </div>

      </div>

    </div>
  );
};

export default Home;