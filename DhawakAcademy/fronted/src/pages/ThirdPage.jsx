import React from 'react'
import CoursesCard from '../components/CoursesCard'

const ThirdPage = () => {
    const img=[
    {
      img:"https://assets.khanglobalstudies.com/x/kgs/kgs/courses/large/598331bb-a7af-4d2c-af6d-005498343899.jpg?w=1080&d=kgs-v2.akamaized.net&q=100"
    },
      {
      img:"https://assets.khanglobalstudies.com/x/kgs/kgs/courses/large/598331bb-a7af-4d2c-af6d-005498343899.jpg?w=1080&d=kgs-v2.akamaized.net&q=100"
    },
      {
      img:"https://assets.khanglobalstudies.com/x/kgs/kgs/courses/large/598331bb-a7af-4d2c-af6d-005498343899.jpg?w=1080&d=kgs-v2.akamaized.net&q=100"
    },
      {
      img:"https://assets.khanglobalstudies.com/x/kgs/kgs/courses/large/598331bb-a7af-4d2c-af6d-005498343899.jpg?w=1080&d=kgs-v2.akamaized.net&q=100"
    },
      {
      img:"https://assets.khanglobalstudies.com/x/kgs/kgs/courses/large/598331bb-a7af-4d2c-af6d-005498343899.jpg?w=1080&d=kgs-v2.akamaized.net&q=100"
    },
      {
      img:"https://assets.khanglobalstudies.com/x/kgs/kgs/courses/large/598331bb-a7af-4d2c-af6d-005498343899.jpg?w=1080&d=kgs-v2.akamaized.net&q=100"
    },
      {
      img:"https://assets.khanglobalstudies.com/x/kgs/kgs/courses/large/598331bb-a7af-4d2c-af6d-005498343899.jpg?w=1080&d=kgs-v2.akamaized.net&q=100"
    },
      {
      img:"https://assets.khanglobalstudies.com/x/kgs/kgs/courses/large/598331bb-a7af-4d2c-af6d-005498343899.jpg?w=1080&d=kgs-v2.akamaized.net&q=100"
    },

  ]
  return (

    <div>
      
  <div className='py-10'>
          <div className='flex text-2xl underline  font-bold text-red-300 justify-center'>
            <div>our courses</div>
           

          </div>
          <div className='h-[50vh] py-5  scroll-bar-none overflow-y-scroll flex flex-wrap gap-5 justify-around'>
            {
              img.map((item)=>{
             return <CoursesCard img={item.img}/>
              })
            }
            
          </div>
       </div>





    </div>
  )
}

export default ThirdPage
