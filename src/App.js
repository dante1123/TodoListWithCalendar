import React, { useState } from "react";
import "./App.css";
import Template from "./todoComponentes/Template";
import TodoList from "./todoComponentes/TodoList";
import { MdAddCircle } from "react-icons/md";

function App() {
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
  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
      <div className="add-todo-button">
        <MdAddCircle />
      </div>
    </Template>
  );
}

export default App;
