import React, { useEffect, useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task === "") return;

    const newTask = {
      id: Date.now(),
      task: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-gray-400 font-bold ml-4 mt-4">
        Organise everything you need to do.
      </h3>
      <div className="flex gap-3">
        <p className="font-bold text-[#FF4081] ml-4">
          completed:{completedTasks}
        </p>
        <p className="font-bold text-[#FF4081] ml-4">Pending:{pendingTasks}</p>
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder="Add Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-72 h-11 ml-5 pl-12 pr-4 py-3 rounded-lg border border-pink-200 outline-none text-gray-350 font-bold
                    focus:ring-2 focus:ring-[#FF4081] transition"
        />

        <button
          type="button"
          className="w-11 h-11 rounded-md  bg-[#FF4081] flex justify-center items-center text-white font-bold
                  hover:bg-[#ff91b6] transition"
          onClick={addTask}
        >
          +
        </button>
      </div>

      <div className="flex flex-col ml-5  gap-4">
        {tasks.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 shadow-sm p-7 bg-pink-50 w-fit rounded-lg p-3"
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
              className="w-5 h-5 accent-pink-500 cursor-pointer"
            />

            <h4
              className={`text-lg font-semibold  ${
                item.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {item.task}
            </h4>
            <button
              className="border-none rounded-lg bg-white p-3 w-fit h-fit"
              onClick={() => deleteTask(item.id)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
