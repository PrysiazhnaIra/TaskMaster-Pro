import "./App.css";
import "modern-normalize";
import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import TaskCounter from "./components/TasksCounter/TasksCounter";
import StatusFilter from "./components/StatusFilter/StatusFilter";

function App() {
  const [currentColor, setCurrentColor] = useState(() => {
    return window.localStorage.getItem("backgroundColor") || "#90EE90";
  });

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
