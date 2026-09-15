import React from "react";

const ThirdPage = () => {
  return (
    <>
   <div className="flex justify-center items-center">
     <div className="uppercase font-bold text-2xl">information </div>
   </div>
      <div className="h-screen flex text-white flex-col justify-between bg-gray-900">
       
        <div className="bg-black h-full flex justify-between items-center px-5 ">
       
          <div>
            <div className="uppercase">
              the tranner is mr yashwnat krmar who has 3 yr of exprince
            </div>
            <button className="px-5 mt-5 p-2 border border-amber-200 rounded-md hover:bg-blue-500">
              know more
            </button>
          </div>
          <div>
            <img
              className="object-cover rounded-2xl max-h-90 md:p-7 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbC5-GGpnKqYa3bzAma3M3vZdbWSjxGXaGwWfiigLNF5z5Lf18FzFc-GPZ&s=10"
              alt=""
            />
          </div>
        </div>

        <div className="bg-green-400  flex justify-between px-5 gap-3 items-center text-white h-full">
          <div className="">
            <img
              className="max-h-80 object-cover rounded-xl"
              src="https://as1.ftcdn.net/v2/jpg/04/44/64/16/1000_F_444641607_q139RvNptsykIpncCET0aXsQLek6dRsJ.jpg"
              alt=""
            />
          </div>
          <div className="uppercase text-black font-bold ">there is the student who is gatting tranning</div>
        </div>
        <div className="h-full pl-3 flex  justify-between items-center ">
          <div className="uppercase font-bold">it is the ground , where you will get tranning </div>
          <div >
            <img
              className="object-cover max-h-80 rounded-2xl"
              src="https://as1.ftcdn.net/v2/jpg/04/44/64/16/1000_F_444641607_q139RvNptsykIpncCET0aXsQLek6dRsJ.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
