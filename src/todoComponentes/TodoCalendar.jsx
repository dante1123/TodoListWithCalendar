import React, { useState } from "react";
import Calendar from "react-calendar";
import "./TodoCalendar.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "./TodoApp";

function TodoCalendar() {
  const [dateValue, setDateValue] = useState(new Date());
  const [detailDateToggle, setDetailDateToggle] = useState(false);

  const onDetailDateToggle = () => {
    if (dateValue != null) {
      setDetailDateToggle(true);
    }
  };
  return (
    <>
      <div>
        {!detailDateToggle && (
          <Calendar onChange={onDetailDateToggle} value={dateValue} />
        )}
        {detailDateToggle && <TodoApp dateValue={dateValue} />}
      </div>
    </>
  );
}

export default TodoCalendar;
