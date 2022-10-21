import React, { useState, useEffect } from "react";
import "./TodoApp.css";
import Template from "./Template";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";
import { MdAddCircle } from "react-icons/md";

function TodoApp({ dateValue, onDetailDateToggle }) {
  //-------------------------------------------변수선언-------------------------------------------
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([]);

  let nextId = "";
  //----------------------------------------날짜 데이터 가공---------------------------------------
  const dateTime = `${dateValue.getFullYear()}-${(
    "0" +
    (dateValue.getMonth() + 1)
  ).slice(-2)}-${("0" + dateValue.getDate()).slice(-2)}`;

  //----------------------------------------------------------------------------------------------
  useEffect(() => {
    const searchTodoList = async () => {
      const data = await fetch(`http://localhost:4000/getTodoList/${dateTime}`);
      const json = await data.json();
      let todoArr = [];
      for (let i = 0; i < json.data.length; i++) {
        const todoOne = {
          id: json.data[i].id,
          text: json.data[i].contents,
          checked: json.data[i].checked === 0 ? false : true,
        };
        todoArr.push(todoOne);
      }
      console.log(todoArr);
      setTodos(todoArr);
    };
    searchTodoList();
  }, [dateTime]);

  const addTodoItem = async (todo) => {
    const data = await fetch(`http://localhost:4000/addTodoList/${dateTime}`);
    const json = await data.json();
    
  };

  if (todos.length === 0) {
    //todo가 존재하지 않을 경우 nextId = 1로 지정
    nextId = 1;
  } else {
    console.log("enter");

    //이미 todo가 존재할 경우 id중 nextId = 가장 높은 값 + 1
    let arr = [];
    todos.map((v) => arr.push(v.id));
    nextId = Math.max.apply(null, arr) + 1;
    console.log(nextId);
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
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      addTodoItem(todo);
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
    <Template dateTime={dateTime} todoLength={todos.length}>
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
