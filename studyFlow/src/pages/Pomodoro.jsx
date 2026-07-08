import React, { useEffect, useState } from "react";

const Pomodoro = () => {
  const [timeleft, setTimeleft] = useState(30 * 60);
  const [isStart, setIsStart] = useState(false);
  const [sessions, setSessions] = useState(0);
  const seconds = timeleft % 60;
  const minutes = Math.floor(timeleft / 60);
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  useEffect(() => {
    if (isStart) {
      const interval = setInterval(() => {
        setTimeleft((prev) => {
          if (prev <= 1) {
            setIsStart(false);
            setSessions((prev) => prev + 1);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isStart]);

  return (
    <div className="flex flex-col gap-10 m-5 items-center">
      <h1 className="text-xl font-bold text-[#EC4899]">Pomodoro Timer</h1>
      <h1 className="text-6xl p-10 mb-10 shadow-lg rounded-lg">
        {formattedMinutes}:{formattedSeconds}
      </h1>
      <div className="flex flex-row gap-10">
        <button
          className="w-20 h-20  border-none rounded-full text-white bg-[#EC4899]"
          onClick={() => setIsStart(true)}
        >
          Start
        </button>
        <button
          className="w-20 h-20  border-none rounded-full text-white bg-[#EC4899]"
          onClick={() => setIsStart(false)}
        >
          Pause
        </button>
      </div>
      <button
        className="w-fit h-fit p-3 border-none rounded-xl bg-[#EC4899]"
        onClick={() => {
          setIsStart(false);
          setTimeleft(30 * 60);
        }}
      >
        Reset
      </button>
      <h1>
        Today's Sessions : <span className="text-[#EC4899]">{sessions}</span>
      </h1>
      <h1>
        Focus Time :{" "}
        <span className="text-[#EC4899]"> {1800 - timeleft} sec </span>
      </h1>
    </div>
  );
};

export default Pomodoro;
