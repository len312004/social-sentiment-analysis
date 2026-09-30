import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Jan 1", positive: 70, negative: 18, neutral: 12, volume: 2000 },
  { date: "Jan 8", positive: 73, negative: 17, neutral: 10, volume: 2500 },
  { date: "Jan 15", positive: 75, negative: 15, neutral: 10, volume: 3000 },
  { date: "Jan 22", positive: 74, negative: 18, neutral: 8, volume: 3500 },
  { date: "Jan 29", positive: 77, negative: 14, neutral: 9, volume: 4000 },
  { date: "Feb 5", positive: 78, negative: 13, neutral: 9, volume: 4500 },
  { date: "Feb 12", positive: 80, negative: 12, neutral: 8, volume: 5000 },
  { date: "Feb 19", positive: 79, negative: 13, neutral: 8, volume: 5500 },
  { date: "Feb 26", positive: 82, negative: 11, neutral: 7, volume: 6000 },
  { date: "Mar 5", positive: 83, negative: 10, neutral: 7, volume: 6500 },
  { date: "Mar 12", positive: 81, negative: 11, neutral: 8, volume: 7000 },
  { date: "Mar 19", positive: 79, negative: 13, neutral: 8, volume: 7500 },
];

const SentimentTrendsChart: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-md font-semibold text-gray-800 mb-2">
          Sentiment Trends Over Time
        </h3>
        <p className="text-gray-500 text-sm mb-4">
          Track positive, negative, and neutral sentiment across all platforms
        </p>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="date" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Line type="monotone" dataKey="negative" stroke="#EF4444" />
            <Line type="monotone" dataKey="neutral" stroke="#6B7280" />
            <Line type="monotone" dataKey="positive" stroke="#10B981" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-md font-semibold text-gray-800 mb-2">
          Mention Volume
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="date" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="volume"
              stroke="#3B82F6"
              fill="#BFDBFE"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="flex justify-around mt-6 text-center">
          <div>
            <p className="text-green-600 font-semibold text-lg">+12%</p>
            <p className="text-sm text-gray-500">Positive sentiment increase</p>
          </div>
          <div>
            <p className="text-blue-600 font-semibold text-lg">6.8K</p>
            <p className="text-sm text-gray-500">Average daily mentions</p>
          </div>
          <div>
            <p className="text-purple-600 font-semibold text-lg">85%</p>
            <p className="text-sm text-gray-500">Sentiment accuracy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentTrendsChart;
