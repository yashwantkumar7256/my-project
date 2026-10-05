import React from 'react';

const StudentCart = ({ data }) => {
  return (
    <div className='bg-amber-700 w-[70vw] sm:w-[40vw] md:w-[25vw] lg:w-[18vw] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-amber-600/30 text-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-amber-500/10'>
      
      {/* Top Section: Photo Frame */}
      <div className='w-full h-44 sm:h-48 md:h-52 bg-amber-600 flex items-center justify-center overflow-hidden relative group'>
        <img 
          src={data.img} 
          alt={data.name} 
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
        /> 
        <div className='absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent' />
      </div>

      {/* Bottom Section: Details Pane */}
      <div className='p-5 flex flex-col gap-2 flex-grow justify-between bg-zinc-900'>
        <div>
          <div className='text-lg md:text-xl font-bold tracking-wide text-amber-400 capitalize truncate'>
            {data.name.trim()}
          </div>
          <div className='text-xs md:text-sm font-semibold text-zinc-400 uppercase tracking-wider mt-0.5'>
            {data.post}
          </div>
        </div>
        
        {/* Footnotes badge */}
        <div className='flex justify-between items-center mt-3 pt-3 border-t border-zinc-800 text-[10px] md:text-xs text-zinc-500 font-bold uppercase'>
          <span>Batch Year</span>
          <span className='px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20 shadow-sm'>
            {data.year}
          </span>
        </div>
      </div>

    </div>
  );
};

export default StudentCart;
