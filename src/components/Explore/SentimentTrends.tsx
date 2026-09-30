import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan 1", Positive: 70, Neutral: 15, Negative: 15 },
  { name: "Jan 8", Positive: 72, Neutral: 14, Negative: 14 },
  { name: "Jan 15", Positive: 74, Neutral: 13, Negative: 13 },
  { name: "Jan 22", Positive: 73, Neutral: 14, Negative: 13 },
  { name: "Jan 29", Positive: 75, Neutral: 12, Negative: 13 },
  { name: "Feb 5", Positive: 76, Neutral: 11, Negative: 13 },
  { name: "Feb 12", Positive: 77, Neutral: 11, Negative: 12 },
  { name: "Mar 5", Positive: 78, Neutral: 10, Negative: 12 },
];

const SentimentTrends: React.FC = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow space-y-8">
      <h2 className="text-lg font-semibold">Sentiment Trends Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="Positive" stroke="#22c55e" strokeWidth={2} />
          <Line type="monotone" dataKey="Neutral" stroke="#6b7280" strokeWidth={2} />
          <Line type="monotone" dataKey="Negative" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default SentimentTrends;
