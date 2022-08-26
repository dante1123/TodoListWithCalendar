import React, { useState } from "react";
import Calendar from "react-calendar";
import "./TodoCalendar.css";
import TodoApp from "./TodoApp";

function TodoCalendar() {
  const [dateValue, setDateValue] = useState(new Date());
  const [detailDateToggle, setDetailDateToggle] = useState(false);

  const onDetailDateToggle = () => {
    setDetailDateToggle((prev) => !prev);
  };

  return (
    <>
      <div>
        {!detailDateToggle && (
          <Calendar onChange={onDetailDateToggle} value={dateValue} />
        )}
        {detailDateToggle && (
          <TodoApp
            dateValue={dateValue}
            onDetailDateToggle={onDetailDateToggle}
          />
        )}
      </div>
    </>
  );
}

export default TodoCalendar;
