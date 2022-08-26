import React, { useState } from "react";
import "./TodoApp.css";
import Template from "./Template";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";
import { MdAddCircle } from "react-icons/md";

function TodoApp({ dateValue, onDetailDateToggle }) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([]);
  let nextId = "";
  if (todos.length === 0) {
    //todo가 존재하지 않을 경우 nextId = 1로 지정
    nextId = 1;
  } else {
    //이미 todo가 존재할 경우 id중 nextId = 가장 높은 값 + 1
    let arr = [];
    todos.map((v) => arr.push(v.id));
    nextId = Math.max.apply(null, arr) + 1;
  }
  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      nextId++;

      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
    }
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <Template
      todoLength={todos.length}
      onDetailDateToggle={onDetailDateToggle}
      dateValue={dateValue}
    >
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        setSelectedTodo={setSelectedTodo}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
    </Template>
  );
}

export default TodoApp;
