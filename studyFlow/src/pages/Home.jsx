import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col gap-10 items-center min-h-screen justify-center bg-[#FDF2F8]">
      <img src={logo} className="h-60 w-60"></img>
      <h4 className="text-pink-800 font-medium">
        Stay organized. Study smarter. Achieve more.
      </h4>
      <h2 className="text-lg font-bold">Tasks • Notes • Pomodoro • Progress</h2>
      <Link
        to="/dashboard"
        className="w-fit p-5 border-none rounded-full bg-[#EC4899] text-white font-bold hover:bg-[#DB2777]"
      >
        GET STARTED
      </Link>
    </div>
  );
};

export default Home;
