import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-700 text-white">
      <Navbar />
      <main className="flex-1 w-full max-w-8xl mx-auto ">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
