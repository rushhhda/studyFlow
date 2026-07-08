import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addNote = () => {
    if (title === "" || desc === "") return;

    const note = {
      id: Date.now(),
      title,
      desc,
    };
    setNotes([...notes, note]);
    setTitle("");
    setDesc("");
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="flex flex-col gap-10 bg-pink-50 border-none rounded-lg w-80 m-5">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-5 focus:ring-pink-400"
        ></input>
        <textarea
          placeholder="write something..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="bg-pink-50 p-5"
        ></textarea>
        <button
          className="w-full  p-3 text-white bg-[#FF4081]"
          onClick={() => addNote()}
        >
          +
        </button>
      </div>
      <div className="flex flex-row gap-15 flex-wrap">
        {notes.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-10 bg-pink-50 border-none rounded-lg w-80 p-5 m-5"
          >
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p>{item.desc}</p>
            <div className="flex flex-row justify-between">
              <button
                className="border-none rounded-xl p-3 bg-[#FF4081]"
                onClick={() => deleteNote(item.id)}
              >
                DELETE
              </button>
              <button className="border-none rounded-xl p-3 bg-[#FF4081]">
                EDIT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
