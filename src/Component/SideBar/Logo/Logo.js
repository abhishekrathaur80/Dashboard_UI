import { ReactComponent as LogoText } from "../../../assets/svg/Logo_Text.svg";

import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <LogoText />
    </div>
  );
};

export default Logo;
