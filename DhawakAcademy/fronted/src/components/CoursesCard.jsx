import React from 'react'

const CoursesCard = () => {
  return (
    <>
  
  <div className='bg-blue-300 overflow-hidden  rounded-2xl h-[30vh] w-[40vw]  '>
    <div className='bg-zinc-950 h-2/3 w-full rounded-t-2xl '>
    <img className='h-full w-full object-fit' src="https://assets.khanglobalstudies.com/x/kgs/kgs/courses/large/a17e7705-1849-4b0f-8250-b55000a67d7d.jpg?w=1080&d=kgs-v2.akamaized.net&q=100" alt="" />
    </div>
    <div className='flex justify-center '>
   <button className='bg-orange-400 px-3 rounded-md mt-5 sm:w-1/2 '>details</button>
    </div>
 
  </div>

      
     
    </>
  )
}

export default CoursesCard
