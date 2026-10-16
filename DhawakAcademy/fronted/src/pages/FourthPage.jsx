import React from 'react'
import CoursesCard from '../components/CoursesCard'

const FourthPage = () => {
  return (
    <>
       <div className='min-h-screen'>
          <div className='flex text-2xl underline  font-bold text-red-300 justify-center'>
            <div>our courses</div>
           

          </div>
          <div>
            <CoursesCard/>
          </div>
       </div>

       
    </>
  )
}

export default FourthPage
