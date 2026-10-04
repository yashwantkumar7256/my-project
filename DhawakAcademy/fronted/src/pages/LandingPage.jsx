import React from "react";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full pt-15 px-5 flex justify-center">
      <div className="grid grid-cols-1 w-full gap-2 grid-rows-[20px_28vh_30vh_8vh_10vh_25vh]">

        {/* Training */}
        <div className="rounded-2xl px-5 flex font-bold text-orange-700 justify-center">
          <div>TRAINING START TODAY</div>
        </div>

        {/* Hero Text */}
        <div className="rounded-2xl font-jim text-white ">
          <div className="flex justify-center">
            <div className="text-4xl">

              <span className="">
                IT IS ONE OF THE
              </span>

              <br />

              <span className="text-3xl pl-9">
                BEST TRAINING
              </span>

              <br />

              <span className="text-2xl px-19">
                ACADEMY
              </span>

              {/* Start Button */}
              <div className="flex bg-red-400 mx-15 rounded-2xl justify-center items-center cursor-pointer">
                <button className="text-lg">
                  START NOW
                </button>

                <ArrowRight size={20} />
              </div>

              {/* Students */}
              <div className="mt-3">
                <div className="flex -space-x-1">

                  <img
                    className="rounded-full h-[4vh] w-[4vh] object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvabEE_TNgRzOllhDknCb3Pcq6OwHbpwJPucBr8t__w&s=10"
                    alt="student"
                  />

                  <img
                    className="rounded-full h-[4vh] w-[4vh] object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvabEE_TNgRzOllhDknCb3Pcq6OwHbpwJPucBr8t__w&s=10"
                    alt="student"
                  />

                  <img
                    className="rounded-full h-[4vh] w-[4vh] object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvabEE_TNgRzOllhDknCb3Pcq6OwHbpwJPucBr8t__w&s=10"
                    alt="student"
                  />

                  <img
                    className="rounded-full h-[4vh] w-[4vh] object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvabEE_TNgRzOllhDknCb3Pcq6OwHbpwJPucBr8t__w&s=10"
                    alt="student"
                  />

                </div>

                <div className="text-lg text-amber-600">
                  30+ students selected from this academy
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden h-full">
          <div className="h-full w-full flex justify-center items-center overflow-hidden rounded-2xl">
            <img
              className="h-full w-2/3 object-cover object-top rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepBnKdL5V3EAxhcFnT9JSEjcmr2SuoKCguQJ0K5pb_g&s=10"
              alt="Training academy"
            />
          </div>
        </div>

        {/* Experience */}
        <div className="rounded-2xl px-5">
          <div className="text-xl tracking-tight font-bold">
            EXPERIENCE 7 YEARS<sup>+</sup>
          </div>

          <div className="mx-10 text-orange-500">
            He has trained 200<sup>+</sup> students
          </div>
        </div>

        {/* Motivation */}
        <div className="rounded-2xl">
          <div className="text-xl font-bold tracking-tight">
            BUILD YOUR BODY. BUILD YOUR MIND.
          </div>

          <div>
            Train Hard. Stay Consistent. Become Stronger.
          </div>
        </div>

        {/* Bottom Image */}
        <div className="bg-green-700 h-full w-full overflow-hidden rounded-2xl">
          <img
            className="h-full w-full object-cover"
            src="https://www.gat.ac.in/img/9c7acbe14763350c32ade283fd05c4b399163605.jpg"
            alt="Academy training"
          />
        </div>

      </div>
    </div>
  );
};

export default LandingPage;