import React from "react";
import classes from "./Dashboard.module.css";
import StatsAreaGraph from "../Template/StatsAreaGraph";
import StatusChart from "../compound/StatusChart/StatusChart";
import TwoWeekBarChart from "../compound/TwoWeekBar/TwoWeekBarChart";

const Dashboard = () => {
  return (
   
      <div className={classes.container}>
        <StatsAreaGraph />

        <StatusChart />
        <TwoWeekBarChart />
      </div>
    
  );
};

export default Dashboard;
