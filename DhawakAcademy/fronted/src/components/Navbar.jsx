import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <nav className="flex justify-between px-5 ">
        <div>logo</div>
        <div className="flex gap-3">
            <div>home </div>
            <div>about</div>
            <div>alizbale</div>
        </div>
        <div>end</div>
      </nav>
    </div>
  )
}

export default Navbar
