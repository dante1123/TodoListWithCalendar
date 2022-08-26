import React, { useEffect } from "react";
import "./Template.css";
import { MdArrowBack } from "react-icons/md";

const Template = ({ children, todoLength, onDetailDateToggle, dateValue }) => {
  let year = dateValue.getFullYear();
  let month = ("0" + (dateValue.getMonth() + 1)).slice(-2);
  let day = ("0" + dateValue.getDate()).slice(-2);
  const now = year + "년 " + month + "월 " + day + "일";
  const goBack = () => {
    onDetailDateToggle();
  };

  return (
    <div className="Template">
      <div className="title">
        <MdArrowBack className="arrow" onClick={goBack} />
        {now} (할 일 {todoLength}개)
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
