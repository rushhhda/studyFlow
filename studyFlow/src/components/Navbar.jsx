import React from "react";
import { Link } from "react-router-dom";

import { FiSearch, FiBell } from "react-icons/fi";

const Navbar = ({ title }) => {
  return (
    <nav className="h-20 w-full bg-white border-b border-pink-100 flex items-center justify-between px-8 shadow-sm">
      <h1 className="text-3xl font-bold text-pink-600">{title}</h1>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 pl-12 pr-4 py-3 rounded-full border border-pink-200 outline-none
            focus:ring-2 focus:ring-pink-400 transition"
          />
        </div>

        {/* Notification */}
        <button
          className="w-11 h-11 rounded-full bg-pink-50 flex justify-center items-center
          hover:bg-pink-100 transition"
        >
          <FiBell className="text-xl text-pink-600" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
