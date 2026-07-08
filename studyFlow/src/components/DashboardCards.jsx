import React from "react";

const DashboardCards = (props) => {
  return (
    <div className="flex gap-5 shadow-lg border-none rounded-lg p-7 items-center">
      <div className="bg-pink-50 border-none rounded-xl p-4 items-center h-fit w-fit">
        {props.emoji}
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="font-bold">{props.title}</h4>
        <h2 className="text-[#FF4081] font-bold text-3xl">{props.value}</h2>
        <p>{props.msg}</p>
      </div>
    </div>
  );
};

export default DashboardCards;
