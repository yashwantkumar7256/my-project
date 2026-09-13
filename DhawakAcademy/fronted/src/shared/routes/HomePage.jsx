import React from 'react'
import Home from '../ui/pages/Home'
import SecondPage from '../ui/pages/SecondPage'
import ThirdPage from '../ui/pages/ThirdPage'
import Navbar from '../ui/components/Navbar'

const HomePage = () => {
  return (
    <div>
      
      <div className=" ">
        
        <Home/>
        <SecondPage/>
        <ThirdPage/>
      </div>
    </div>
  )
}

export default HomePage
