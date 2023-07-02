import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Rectangle,
  Cell,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import "./TwoWeekBarChart.css";

const data = [
  {
    name: "3 Jun",
    pv: 240,
    amt: 240,
  },
  {
    name: "4 Jun",

    pv: 338,
    amt: 220,
  },
  {
    name: "5 Jun",

    pv: 580,
    amt: 220,
  },
  {
    name: "6 Jun",

    pv: 390,
    amt: 200,
  },
  {
    name: "7 Jun",

    pv: 480,
    amt: 211,
  },
  {
    name: "8 Jun",
    pv: 200,
    amt: 200,
  },
  {
    name: "9 Jun",
    pv: 380,
    amt: 250,
  },
  {
    name: "10 Jun",
    pv: 300,
    amt: 250,
  },
  {
    name: "11 Jun",
    pv: 390,
    amt: 250,
  },
  {
    name: "12 Jun",
    pv: 370,
    amt: 200,
  },
  {
    name: "13 Jun",
    pv: 320,
    amt: 250,
  },
  {
    name: "14 Jun",
    pv: 350,
    amt: 250,
  },
];

const TwoWeekBarChart = () => {
  return (
    <div className="weekBarChart">
      <div className="heading">
        <p className="graph-title">Last 14 days Active Workers in Training</p>
        <p style={{ fontWeight: 400 }} className="graph-title">
          Last 14 Days
        </p>
      </div>
      <ResponsiveContainer width="100%" height={313}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: -10,
          }}
          barSize={18}
        >
          <XAxis
            dataKey="name"
            fontSize={"12px"}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <YAxis axisLine={false} tickLine={false} />
          <Bar
            dataKey="pv"
            shape={<Rectangle radius={[50, 50, 50, 50]} />}
            background={{ fill: "#E7EFFF", radius: [50, 50, 50, 50] }}
          >
            {data.map(() => (
              <Cell fill={"#1B59F8"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TwoWeekBarChart;
