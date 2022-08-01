import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoApp from "./todoComponentes/TodoApp";
import TodoCalendar from "./todoComponentes/TodoCalendar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/todoList" element={<TodoCalendar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
