import React from "react";
import "./AreaGraphCard.css";
import { TrendUpIcon } from "../../../assets/Icon";
import AreaGraph from "../../compound/AreaGraph";
const AreaGraphCard = (props) => {
  const { totalCount, number, percentage, heading, graphColor, background } =
    props;
  return (
    <div className="areaGraphCard">
      <p className="graph-title">{heading}</p>
      <div className="stats">
        <div>
          <h1>{totalCount}</h1>
          <p className="flex-align gap-10">
            <span
              style={{ background: background }}
              className="flex-align percentage-pill"
            >
              <TrendUpIcon color={graphColor} />{" "}
              <span style={{ color: graphColor }}>{percentage}</span>
            </span>
            <span className="number">{number}</span>
          </p>
        </div>
        <AreaGraph graphColor={graphColor} />
      </div>
    </div>
  );
};

export default AreaGraphCard;
