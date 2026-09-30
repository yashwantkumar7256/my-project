import React from 'react'
import StudentCard from '../components/StudentCard'

const SecondPage = () => {
  const Card=[
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISPxvJZ_mMbWjKb2t_Mgzk-cSfTOOLGL3N_cHbjUwsw&s=10",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI3fF6_ebdidZr1lnTEvKusZLVuw2ZKsrhm_Xtxn6ZdQlOo9PBRq1v2VW&s=10",
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
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0f-NXrt_e1GyeK2FvXIqjWpugRxsG_HQqmjoI4XZ4hg&s=10",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdRIoWmVlJz1VZp2gNHWevR6s1AGlwm_Hqfi8p1cwwbjUQethuaShFpmr&s=10",
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
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlJvHmZfOKGN1lxa_X52qsaVgr7lIuUmQGGM_R6m_Yg&s",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ScB3oUxmLcykg26DReWIXt3JkrStKM8UFMTxPqdOzpWaJXy3fWz59p8&s=10",
     name:"yashwant kumar",
     year:"2022",
     post:"polic"
    },
    {
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmx_dE4xhPZbCKDEQ8KRe9m10his4FU4dMjX5dDI2Ow&s=10",
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
