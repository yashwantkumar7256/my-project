import React from "react";

const TranningPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-center">
        <div className="text-2xl">Training time</div>
      </div>

      <div
        className="
          flex-1 grid text-black
          grid-cols-[20%_20%_20%_20%_20%]
          grid-rows-[33%_33%_33%]
          [grid-template-areas:'top-left_top-left_top-mid_top-right_top-right'_'mid-left_middle_middle_middle_mid-right'_'bottom-left_bottom-left_bottom2_bottom-right_bottom-right']
        "
      >
        <div className="bg-amber-50 [grid-area:top-left]">1</div>

        <div className="bg-amber-300 [grid-area:top-mid]">2</div>

        <div className="bg-blue-800 [grid-area:top-right]">3</div>

        <div className="bg-amber-500 [grid-area:mid-left]">4</div>

        <div className="bg-amber-900 [grid-area:middle]">5</div>

        <div className="bg-amber-300 [grid-area:mid-right]">6</div>

        <div className="bg-orange-500 [grid-area:bottom-left]">7</div>

        

        <div className="bg-amber-300 [grid-area:bottom2]">9</div>

        <div className="bg-green-900 [grid-area:bottom-right]">10</div>

       
      </div>
    </div>
  );
};

export default TranningPage;