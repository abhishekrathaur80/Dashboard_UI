import React from "react";
import classes from "./SideNav.module.css";
import { NavOptions } from "../../../assets/data";
import Logo from "../Logo/Logo";
import NavOption from "../NavOption/NavOption";

const SideNav = () => {
  return (
    <div className={classes.sideNav}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.navOptions}>
        {NavOptions.map((option) => (
          <NavOption {...option} />
        ))}
      </div>
    </div>
  );
};

export default SideNav;
