import React from "react";
import style from "./ToggleSwitch.module.css";
const ToggleSwitch = ({ handleToggle }) => {
  return (
    <label className={style.switch}>
      <input
        type="checkbox"
        onChange={(e) => {
          handleToggle(e.target.checked);
        }}
      />
      <span className={`${style.slider} ${style.round}`}></span>
    </label>
  );
};

export default ToggleSwitch;
