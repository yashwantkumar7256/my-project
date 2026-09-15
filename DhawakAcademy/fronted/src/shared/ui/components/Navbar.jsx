import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PROFILE", path: "/profile" },
    { name: "COURSES", path: "/tranning" },
  ];

  return (
    <nav className="fixed top-5 left-0 w-full px-2 z-50">
      <div className="flex items-center   justify-between">

        {/* Logo */}
        <div className="text-xl font-bold">
          LOGO
        </div>

        {/* Navigation */}
        <div className=" md:flex flex gap-3 md:gap-7 bg-amber-200 nav-font">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "text-black"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Login */}
        <div className="bg-green-800 px-2 font-bold rounded">
        <NavLink 
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-amber-500 font-semibold"
              : "text-black"
          }
        >
          Login
        </NavLink>
         </div>

      </div>
    </nav>
  );
};

export default Navbar;