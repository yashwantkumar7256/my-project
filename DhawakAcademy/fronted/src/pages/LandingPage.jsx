import React from "react";
import { ArrowRight } from "lucide-react";
const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen w-full pt-15 px-5 flex justify-center ">
        <div className="grid grid-cols-1 w-full  gap-2 grid-rows-[20px_25vh_25vh_12vh_12vh_12vh]">
          <div className="rounded-2xl px-5 flex font-bold  text-orange-700 justify-center">
            <div>TRANNING START TODAY</div>
          </div>
          <div className=" rounded-2xl  font-extrabold tracking-[-1px] [word-spacing:-1px] ">
            <div className="flex justify-center  text-white">
              <div className="text-4xl">
                <span className="[word-spacing:-4px]">IT IS ONE OF THE</span>{" "}
                <br /> <span className="text-3xl pl-9">BEST TRAINING</span>{" "}
                <br /> <span className="text-2xl px-19">ACADEMY </span>
                <div className="flex bg-red-400 mx-15 rounded-2xl justify-center items-center cursor-pointer">
                  <button className="text-lg">start now</button>
                  <ArrowRight />
                </div>
                <div>
                  <div className="flex -space-x-1">
                    <img
                      className="rounded-full  h-[4vh] "
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvabEE_TNgRzOllhDknCb3Pcq6OwHbpwJPucBr8t__w&s=10"
                      alt=""
                    />
                    <img
                      className="rounded-full h-[4vh]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvabEE_TNgRzOllhDknCb3Pcq6OwHbpwJPucBr8t__w&s=10"
                      alt=""
                    />{" "}
                    <img
                      className="rounded-full h-[4vh]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvabEE_TNgRzOllhDknCb3Pcq6OwHbpwJPucBr8t__w&s=10"
                      alt=""
                    />{" "}
                    <img
                      className="rounded-full h-[4vh]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvabEE_TNgRzOllhDknCb3Pcq6OwHbpwJPucBr8t__w&s=10"
                      alt=""
                    />
                  </div>
                  <div className="text-lg text-amber-600">
                    30+ students seclected to this academy
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="rounded-2xl overflow-hidden h-full">
            <div className="h-full w-full flex justify-center items-center overflow-hidden rounded-2xl">
              <img
                className="h-full w-2/3 object-cover object-top rounded-2xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepBnKdL5V3EAxhcFnT9JSEjcmr2SuoKCguQJ0K5pb_g&s=10"
                alt=""
              />
            </div>
          </div>
          <div className="rounded-2xl bg-amber-900  px-5">
            <div className="text-xl [word-spacing:-1px] tracking-tight font-bold">
              Exprience 7 YEARS <sup>+</sup> 
            </div>
            <div className="mx-15">He has train 200<sup>+</sup> students </div>
          </div>
          <div className="bg-green-100 rounded-2xl">6</div>
           <div className="bg-green-700 rounded-2xl">6</div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
