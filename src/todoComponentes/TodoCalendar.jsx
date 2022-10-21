import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./TodoCalendar.css";
import TodoApp from "./TodoApp";

function TodoCalendar() {
  const [dateValue, setDateValue] = useState(new Date());

  return (
    <>
      <div>
        <Calendar onChange={setDateValue} value={dateValue} />
      </div>
      <div>
        <TodoApp dateValue={dateValue} />
      </div>
    </>
  );
}

export default TodoCalendar;
