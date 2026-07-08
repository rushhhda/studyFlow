import React from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { Outlet, useLocation } from "react-router-dom";
const Mainlayout = () => {
  const location = useLocation();

  const titles = {
    "/dashboard": "Dashboard",
    "/tasks": "Tasks",
    "/notes": "Notes",
    "/pomodoro": "Pomodoro",
  };
  return (
    <div className="flex flex-row gap-0">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar title={titles[location.pathname]} />
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;
