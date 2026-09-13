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
    <div className='h-screen bg-gray-500 rounded-xl'>
      <div className='flex h-[90%] gap-2 justify-between flex-wrap overflow-x-scroll scrollbar-hide'>
      {Card.map((item)=>{
        return <StudentCard/> 
             })}
      </div>
     
    </div>
    </>
  )
}

export default SecondPage
