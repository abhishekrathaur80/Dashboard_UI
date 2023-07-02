import React from "react";
import "./NavOption.css";

const NavOption = (props) => {
  return (
    <div className={`flex-align  NavOption ${props.active && "active"} `}>
      {props.icon} {"      "}
      <span>{props.text}</span>
    </div>
  );
};

export default NavOption;
