import React from "react";
import Navbar from "../../shared/ui/components/Navbar";
import { Outlet } from "react-router";

const MainProtected = () => {
  return (
    <div>
      <Outlet />
      main p
    </div>
  );
};

export default MainProtected;
