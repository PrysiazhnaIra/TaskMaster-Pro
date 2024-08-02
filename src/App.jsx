import "./App.css";
import "modern-normalize";
// import initialTasks from "./data/tasks.json";
import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import TaskCounter from "./components/TasksCounter/TasksCounter";
import StatusFilter from "./components/StatusFilter/StatusFilter";

function App() {
  // // Ініціалізація tasks
  // const [tasks, setTasks] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem("tasks")) || initialTasks;
  // });

  // // Ініціалізація currentColor
  const [currentColor, setCurrentColor] = useState(() => {
    return window.localStorage.getItem("backgroundColor") || "#90EE90";
  });

  // const [filter, setFilter] = useState("");

  // // Збереження tasks в localStorage при їх зміні
  // useEffect(() => {
  //   window.localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  // // Збереження currentColor в localStorage при його зміні
  useEffect(() => {
    window.localStorage.setItem("backgroundColor", currentColor);
  }, [currentColor]);

  const handleChangeColor = (color) => {
    setCurrentColor(color);
  };

  return (
    <div>
      <Background
        currentColor={currentColor}
        onChangeColor={handleChangeColor}
      />
      <h1 className="title">Task Master</h1>
      <TaskCounter />

      <Form />

      <StatusFilter />

      <Filter />
      <TaskList />
      <p className="footer">Vite + React + Redux project - Ira Prysiazhna</p>
    </div>
  );
}

export default App;
