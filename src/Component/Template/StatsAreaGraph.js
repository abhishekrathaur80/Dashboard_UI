import React from "react";
import AreaGraphCard from "../structure/AreaGraph/AreaGraphCard";
import "./StatsAreaGraph.css";

const StatsAreaGraph = () => {
  return (
    <div className=" StatsAreaGraph">
      <AreaGraphCard
        totalCount={"3,354"}
        number={"234"}
        percentage={"20%"}
        heading="In Training Workers"
        graphColor={"#018E42"}
        background={"rgba(1, 142, 66, 0.1)"}
      />
      <AreaGraphCard
        totalCount={"2,433"}
        number={"435"}
        percentage={"20%"}
        heading="Video Watch-Time (Hrs)"
        graphColor={"#ED1C24"}
        background={"rgba(237, 28, 36, 0.10)"}
      />

      <AreaGraphCard
        totalCount={"95%"}
        number={"24%"}
        percentage={"20%"}
        heading="% workers Passing Quiz"
        graphColor={"#018E42"}
        background={"rgba(1, 142, 66, 0.1)"}
      />

      <AreaGraphCard
        totalCount={"6%"}
        number={"234"}
        percentage={"20%"}
        heading="Avg. Days Taken"
        graphColor={"#018E42"}
        background={"rgba(1, 142, 66, 0.1)"}
      />
    </div>
  );
};

export default StatsAreaGraph;
