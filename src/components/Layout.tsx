import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      TopBar
      <Outlet />
    </div>
  );
};

export default Layout;
