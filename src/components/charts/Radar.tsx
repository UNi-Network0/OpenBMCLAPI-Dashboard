'use client'
import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

export default function RadarCharts() {
  return (
    <RadarChart outerRadius={90} width={730} height={250} data={newdata}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        name="UA"
        dataKey="point"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
}
