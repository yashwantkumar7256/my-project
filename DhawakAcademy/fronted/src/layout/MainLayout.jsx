import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/ui/components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div >
        <Navbar />
      </div>

      <Outlet />
    </div>
  );
};

export default MainLayout;
