import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

const Piechart = ({ pieData }) => {
  return (
    <div className="w-48 sm:w-[340px] h-auto bg-white rounded-md">
      <Pie data={pieData} className="shadow-lg p-3  " />
    </div>
  );
};

export default Piechart;
