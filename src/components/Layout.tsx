import React from "react";
import { Outlet } from "react-router";
import TopBar from "./TopBar";

const Layout = () => {
  return (
    <div>
      <TopBar />
      <Outlet />
    </div>
  );
};

export default Layout;
