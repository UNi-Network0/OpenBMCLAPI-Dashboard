"use client";
import React from "react";
import ReactECharts from "echarts-for-react";

import { formatNumber } from "@/utils/format";
import { UaProps } from "../../types/charts"

export default function UaCharts(accesses: UaProps) {
  let newdata: { name: string; hits: number }[] = [];
  Object.entries(accesses).forEach(([name, hits]) => {
    newdata.push({ name, hits });
  });
  newdata = newdata.sort((a, b) => b.hits - a.hits).slice(0, 7).reverse();
  console.log(newdata);
  const options = {
    grid: { top: 8, right: 30, bottom: 24, left: 140},
    xAxis: {
      data: newdata.map((item) => item.hits),
      type: "value",
      splitNumber: 3,
      axisLabel: {
        formatter: (value: number) => formatNumber(value),
      },
    },
    yAxis: {
      data: newdata.map((item) => item.name),
      type: "category",
    },
    series: [
      {
        data: newdata.map((item) => item.hits),
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
    },
  };

  return <ReactECharts option={options} style={{ width: '400px', height: '160px' }}/>;
};

