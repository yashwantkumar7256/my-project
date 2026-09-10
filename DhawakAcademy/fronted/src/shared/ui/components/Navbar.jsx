import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between px-5">
     
        <div>
          <div>logo</div>
        </div>
 <div className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink>about</NavLink>
        <NavLink>Traning-couses</NavLink>
        
      </div>
      <NavLink>Login</NavLink>
    </div>
 </> );
};

export default Navbar;
