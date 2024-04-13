"use client";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export interface Data {
  name: string;
  value: number;
}

export default function LineChart({ data }: { data: Data[] }) {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: string) => `${value}GiB`}
        />
        <Bar
          dataKey="point"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
        {/* <Bar
          dataKey='hit'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
          className='fill-primary'
        /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}
