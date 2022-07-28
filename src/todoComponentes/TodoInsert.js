import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.css";

const TodoInsert = ({ onInsertToggle }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form>
        <input
          placeholder="please type"
          value={value}
          onChange={onChange}
        ></input>
        <button type="submit">
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
