import React from 'react'
import Home from '../ui/pages/Home'
import SecondPage from '../ui/pages/SecondPage'
import ThirdPage from '../ui/pages/ThirdPage'

const HomePage = () => {
  return (
    <div>
      <div className="mt-10 mx-5 ">
        <Home/>
        <SecondPage/>
        <ThirdPage/>
      </div>
    </div>
  )
}

export default HomePage
