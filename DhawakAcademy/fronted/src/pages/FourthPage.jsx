import React from 'react';
import CoursesCard from '../components/CoursesCard';

const FourthPage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-blue h-[100vh] text-white grid grid-cols-1 gap-5
  [grid-template-rows:30vh_30vh_30vh]
  [grid-template-areas:'header'_'mid'_'footer']">

        <div className=" [grid-area:header]  bg-black  flex justify-between items-center gap-3 sm:px-10 px-2">
          <div className='bg-green-300 h-3/4 w-4/5'>text</div>
          <div className='bg-zinc-800 h-9/10 w-1/2 sm:w-2/6 overflow-hidden '>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStqwZgb05jTKkBmkC4UPAEZeljxI1iZ8TpE3q7-K9CA&s=10" alt="" />
          </div>
        </div>
        <div className=" [grid-area:mid]  bg-black  flex justify-between items-center gap-3 sm:px-10 px-2">
           <div className='bg-zinc-800 h-9/10 w-1/2 sm:w-2/6 overflow-hidden '>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStqwZgb05jTKkBmkC4UPAEZeljxI1iZ8TpE3q7-K9CA&s=10" alt="" />
          </div>
          <div className='bg-green-300 h-3/4 w-4/5'>text</div>
         
        </div>
        <div className=" [grid-area:footer]  bg-black  flex justify-between items-center gap-3 sm:px-10 px-2">
          <div className='bg-green-300 h-3/4 w-4/5'>text</div>
          <div className='bg-zinc-800 h-9/10 w-1/2 sm:w-2/6 overflow-hidden '>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStqwZgb05jTKkBmkC4UPAEZeljxI1iZ8TpE3q7-K9CA&s=10" alt="" />
          </div>
        </div>

        {/* <div className=" [grid-area:mid] bg-amber-500 flex justify-between items-center">
          <div>text</div>
          <div>img</div>
        </div> */}

        {/* <div className=" [grid-area:footer] bg-amber-50 text-black flex justify-between items-center">
          <div>text</div>
          <div>img</div>
        </div> */}
      </div>
    </div>
  );
};

export default FourthPage;