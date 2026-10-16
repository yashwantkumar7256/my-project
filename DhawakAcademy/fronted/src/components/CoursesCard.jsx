import React from 'react'

const CoursesCard = () => {
  return (
    <>
     <div className='group relative m-7 min-h-[40vh] w-[30vh] flex flex-col bg-amber-300 rounded-2xl overflow-hidden'>
 
  <div className='overflow-hidden  w-full'>
    <img 
      className='h-2/3 w-full object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-150' 
      src="https://assets.khanglobalstudies.com/x/kgs/kgs/courses/large/b3c3a68d-daac-4260-9bbb-b91251a658f2.jpg?w=1080&d=kgs-v2.akamaized.net&q=100" 
      alt="UPSC Course" 
    />
  </div>

  {/* Baki ka card content (Text/Price) yahan niche aayega */}
  <div className='p-4 flex-1'>
    {/* Aapka content */}
  </div>
</div>


      
     
    </>
  )
}

export default CoursesCard
