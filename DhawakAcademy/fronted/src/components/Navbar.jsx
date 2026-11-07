
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full ">
      <nav className="flex justify-between px-5 bg-white text-black  ">
        <div>logo</div>
        <div className="flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-blue-400 underline" : "text-black"}
         `
            }
          >
            HOME
          </NavLink>

        

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "gray",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Contact
          </NavLink>
        </div>
        <div>end</div>
      </nav>
    </div>
  );
};

export default Navbar;
