import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-[#FFCEE3] flex flex-col justify-between shadow-xl">
      {/* Logo */}
      <div>
        <div className="flex items-center justify-center gap-2 py-6">
          <img src={icon} className="h-16 w-16" alt="logo" />

          <h1 className="text-2xl ">
            <span className="text-[#FF4081] font-bold">STUDY</span>
            <span className="text-[#F13E93]">FLOW</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="px-4 mt-8 flex flex-col gap-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-5 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-white text-pink-600 font-semibold shadow-md"
                  : "text-gray-700 hover:bg-pink-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `px-5 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-white text-pink-600 font-semibold shadow-md"
                  : "text-gray-700 hover:bg-pink-100"
              }`
            }
          >
            Tasks
          </NavLink>

          <NavLink
            to="/notes"
            className={({ isActive }) =>
              `px-5 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-white text-pink-600 font-semibold shadow-md"
                  : "text-gray-700 hover:bg-pink-100"
              }`
            }
          >
            Notes
          </NavLink>

          <NavLink
            to="/pomodoro"
            className={({ isActive }) =>
              `px-5 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-white text-pink-600 font-semibold shadow-md"
                  : "text-gray-700 hover:bg-pink-100"
              }`
            }
          >
            Pomodoro
          </NavLink>
        </div>
      </div>

      {/* User Card */}
      <div className="p-5">
        <div className="bg-pink-100 rounded-2xl shadow-md p-5 text-center">
          <p className="text-gray-500 text-sm">Good Luck,</p>
          <h3 className="text-xl font-bold text-pink-600">Champ 🌸</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
