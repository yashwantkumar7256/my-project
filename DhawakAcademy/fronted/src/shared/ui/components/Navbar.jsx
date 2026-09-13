import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PROFILE", path: "/profile" },
    { name: "TRAINING-COURSES", path: "/tranning" },
  ];

  return (
    <nav className="fixed top-5 left-0 w-full px-5 z-50">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold">
          LOGO
        </div>

        {/* Navigation */}
        <div className=" md:flex gap-5 nav-font">
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
    </nav>
  );
};

export default Navbar;