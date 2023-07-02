import React from "react";
import SideNav from "./Component/SideBar/SideNav/SideNav";
import classes from "./App.module.css";
import Header from "./Component/Header/Header";
import Dashboard from "./Component/Dashboard/Dashboard";

const App = () => {
  return (
    <div className={classes.app}>
      <SideNav />
      <div>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
