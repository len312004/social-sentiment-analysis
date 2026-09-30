import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 55 },
  { name: 'May', value: 70 },
  { name: 'Jun', value: 65 },
];

export default function SmallChart(){
  return (
    <div style={{ width: '100%', height: 140 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#ffffff" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
