import React, { useEffect } from "react";
import "./Template.css";
import { MdArrowBack } from "react-icons/md";

const Template = ({ children, dateTime, todoLength }) => {
  const dateInfo = `${dateTime.split("-")[0]}년 ${dateTime.split("-")[1]}월 ${
    dateTime.split("-")[2]
  }일`;

  return (
    <div className="Template">
      <div className="title">
        {dateInfo} (할 일 {todoLength}개)
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
