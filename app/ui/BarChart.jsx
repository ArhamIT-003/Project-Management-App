"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Charts() {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["Todo", "In Progress", "Completed"],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [2, 5, 3],
        },
      ]}
      width={500}
      height={300}
    />
  );
}
