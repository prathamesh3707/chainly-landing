import React from "react";
import style from "./Title.module.css";

const Title = ({ titleName }) => {
  return (
    <div className={style.titleContainer}>
      <h1>{titleName}</h1>
    </div>
  );
};

export default Title;
