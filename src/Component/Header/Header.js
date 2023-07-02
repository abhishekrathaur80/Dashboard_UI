import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.detail}>
        <h1>Hello, Puneet Dhiman</h1>
        <p>Following Is Your Organization’s Performance Summary</p>
      </div>
    </div>
  );
};

export default Header;
