import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Pomodoro from "./pages/Pomodoro";

import Tasks from "./pages/Tasks";
import Mainlayout from "./layout/Mainlayout.jsx";
import "./app.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<Mainlayout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/pomodoro" element={<Pomodoro />}></Route>

          <Route path="/tasks" element={<Tasks />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
