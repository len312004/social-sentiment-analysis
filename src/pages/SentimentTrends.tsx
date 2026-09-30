import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const sentimentData = [
  { name: "Jan 1", Positive: 65, Neutral: 18, Negative: 17 },
  { name: "Jan 8", Positive: 68, Neutral: 17, Negative: 15 },
  { name: "Jan 15", Positive: 70, Neutral: 16, Negative: 14 },
  { name: "Jan 22", Positive: 69, Neutral: 17, Negative: 14 },
  { name: "Jan 29", Positive: 73, Neutral: 15, Negative: 12 },
  { name: "Feb 5", Positive: 74, Neutral: 14, Negative: 12 },
  { name: "Feb 12", Positive: 78, Neutral: 13, Negative: 9 },
  { name: "Feb 19", Positive: 76, Neutral: 14, Negative: 10 },
  { name: "Feb 26", Positive: 80, Neutral: 12, Negative: 8 },
  { name: "Mar 5", Positive: 82, Neutral: 11, Negative: 7 },
  { name: "Mar 12", Positive: 79, Neutral: 12, Negative: 9 },
  { name: "Mar 19", Positive: 77, Neutral: 13, Negative: 10 },
];

const mentionVolume = [
  { name: "Jan 1", mentions: 2500 },
  { name: "Jan 8", mentions: 3000 },
  { name: "Jan 15", mentions: 3500 },
  { name: "Jan 22", mentions: 4000 },
  { name: "Jan 29", mentions: 4200 },
  { name: "Feb 5", mentions: 4500 },
  { name: "Feb 12", mentions: 5000 },
  { name: "Feb 19", mentions: 5400 },
  { name: "Feb 26", mentions: 5800 },
  { name: "Mar 5", mentions: 6200 },
  { name: "Mar 12", mentions: 6800 },
  { name: "Mar 19", mentions: 7200 },
];

export default function SentimentTrends() {
  return (
    <div className="w-full h-screen overflow-y-scroll bg-[#F6F8FF] p-6 space-y-6">
      {/* Top Tabs Navigation */}
      <div className="flex justify-start mb-4">
        <div className="bg-white rounded-full p-1 shadow-sm flex gap-2">
          <button className="px-5 py-2 bg-white text-gray-800 font-medium rounded-full shadow-sm">
            Sentiment Trends
          </button>

          <Link
            to="/trending-hashtags"
            className="px-5 py-2 text-gray-500 hover:text-gray-800 rounded-full transition"
          >
            Trending Hashtags
          </Link>

          <button className="px-5 py-2 text-gray-500 rounded-full">Word Cloud</button>
          <button className="px-5 py-2 text-gray-500 rounded-full">Engagement Metrics</button>
          <button className="px-5 py-2 text-gray-500 rounded-full">Feedback Analysis</button>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Sentiment Trends</h1>
        <div className="flex gap-3">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>7 Days</option>
            <option>30 Days</option>
            <option>90 Days</option>
          </select>
          <button className="px-4 py-2 border rounded-lg text-sm font-medium">Filters</button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h2 className="text-gray-500 text-sm">Overall Sentiment</h2>
          <p className="text-3xl font-semibold text-green-600">68%</p>
          <p className="text-xs text-gray-400 mt-1">Positive sentiment</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h2 className="text-gray-500 text-sm">Total Mentions</h2>
          <p className="text-3xl font-semibold">37.05K</p>
          <p className="text-xs text-gray-400 mt-1">+12.5% from last period</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h2 className="text-gray-500 text-sm">Engagement Rate</h2>
          <p className="text-3xl font-semibold">8.2%</p>
          <p className="text-xs text-gray-400 mt-1">+2.1% from last week</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h2 className="text-gray-500 text-sm">Trending Score</h2>
          <p className="text-3xl font-semibold">94.3</p>
          <p className="text-xs text-gray-400 mt-1">Excellent performance</p>
        </div>
      </div>

      {/* Sentiment Trends Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm space-y-6">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg text-gray-800">
            Sentiment Trends Over Time
          </h2>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Positive" stroke="#16a34a" strokeWidth={3} dot />
            <Line type="monotone" dataKey="Negative" stroke="#ef4444" strokeWidth={3} dot />
            <Line type="monotone" dataKey="Neutral" stroke="#6b7280" strokeWidth={3} dot />
          </LineChart>
        </ResponsiveContainer>

        {/* Mention Volume */}
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={mentionVolume}>
            <defs>
              <linearGradient id="volumeColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="mentions"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#volumeColor)"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Bottom stats */}
        <div className="flex flex-wrap justify-around text-center text-sm font-medium mt-4">
          <div className="text-green-600">+12% Positive sentiment increase</div>
          <div className="text-blue-600">6.8K Average daily mentions</div>
          <div className="text-purple-600">85% Sentiment accuracy</div>
        </div>
      </div>
    </div>
  );
}
