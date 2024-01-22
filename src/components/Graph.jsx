import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
const Graph = ({ pieData }) => {
  return (
    <div className="sm:w-[680px] w-48 h-auto bg-white rounded-md">
      <Line data={pieData} className="shadow-lg p-3 rounded-md " />
    </div>
  );
};

export default Graph;
