import React from 'react'
import StudentCard from '../components/StudentCard'

const SecondPage = () => {
  const Card=[
    {
     img:"",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },

  ]

  
  return (
    <> 
        <div className='flex justify-center text-2xl font-bold text-black items-center'>
      <div>SECLETED STUDENT</div>
      </div>
    <div className='h-screen  rounded-xl'>
      <div className='flex h-[90%] gap-2 justify-around flex-wrap overflow-x-scroll scrollbar-hide'>
      {/* {Card.map((item)=>{
        return <StudentCard/> 
             })} */}
             <StudentCard/>
      </div>
     
    </div>
    </>
  )
}

export default SecondPage
