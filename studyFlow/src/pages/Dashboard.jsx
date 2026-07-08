import React from "react";
import DashboardCards from "../components/DashboardCards";

const Dashboard = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const totalNotes = notes.length;

  return (
    <div className="flex flex-col flex-wrap gap-10  ">
      <div className="flex flex-col my-3 gap-3">
        <h1 className=" font-bold text-xl mx-7">Good Evening,</h1>
        <p className=" text-gray-400 mx-7 ">
          Stay focused, and keep pushing forward.
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-20 justify-center items-center m-10">
        <DashboardCards
          title="Today's Task"
          value={pendingTasks}
          msg="pending tasks"
          emoji="📜"
        />
        <DashboardCards
          title="Notes"
          value={totalNotes}
          msg="notes taken"
          emoji="📝"
        />
        <DashboardCards
          title="Pomodoro"
          value="30:00"
          msg="focus time"
          emoji="⌛"
        />
      </div>
    </div>
  );
};

export default Dashboard;
