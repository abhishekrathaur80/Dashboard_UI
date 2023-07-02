import React from "react";
import "./StatusChart.css";
import PiChart from "../PiChart";
const StatusChart = () => {
  return (
    <div className="statusChart">
      <p className="graph-title">Chapter Wise Status</p>
      <PiChart />
      <div className="statusChart-detail">
        <div className="flex-align gap-5">
        
          <div
            style={{ background: "#0D62FF" }}
            className="round-pill"
          ></div>{" "}
          <p>Finishedn training</p>
        </div>
        <div className="flex-align gap-5">
          {" "}
          <div
            style={{ background: "rgba(51, 51, 51, 0.30)" }}
            className="round-pill"
          ></div>{" "}
          <p>Chapter A</p>
        </div>
        <div className="flex-align gap-5">
          {" "}
          <div
            style={{ background: "#8400D5" }}
            className="round-pill"
          ></div>{" "}
          <p>Chapter B</p>
        </div>
        <div className="flex-align gap-5">
          {" "}
          <div
            style={{ background: "#425F57" }}
            className="round-pill"
          ></div>{" "}
          <p>Chapter C</p>
        </div>
        <div className="flex-align gap-5">
          {" "}
          <div
            style={{ background: "#ED1C24" }}
            className="round-pill"
          ></div>{" "}
          <p>Haven't started yet</p>
        </div>
      </div>
    </div>
  );
};

export default StatusChart;
