import React, { useState } from "react";
import "./App.css";
import Template from "./todoComponentes/Template";
import TodoList from "./todoComponentes/TodoList";
import TodoInsert from "./todoComponentes/TodoInsert";
import { MdAddCircle } from "react-icons/md";

function App() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: true,
    },
    {
      id: 3,
      text: "할일 3",
      checked: false,
    },
  ]);

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };
  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} />}
    </Template>
  );
}

export default App;
