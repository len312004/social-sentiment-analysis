import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface SentimentChartProps {
  history: {
    sentiment: string;
  }[];
}

export default function SentimentChart({ history }: SentimentChartProps) {
  // Count how many Positive, Negative, Neutral results we have
  const data = [
    {
      name: "Positive",
      value: history.filter((h) => h.sentiment === "Positive").length,
    },
    {
      name: "Negative",
      value: history.filter((h) => h.sentiment === "Negative").length,
    },
    {
      name: "Neutral",
      value: history.filter((h) => h.sentiment === "Neutral").length,
    },
  ];

  // Colors for each slice
  const COLORS = ["#22c55e", "#ef4444", "#94a3b8"];

  // If there’s no data yet, show a placeholder message
  if (history.length === 0) {
    return <p className="text-center text-gray-500">No data available yet.</p>;
  }

  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
