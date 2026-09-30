import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom"; // 👈 added for navigation

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Sentiment Trends");
  const navigate = useNavigate(); // 👈 navigation hook

  const tabs = [
    "Sentiment Trends",
    "Trending Hashtags",
    "Word Cloud",
    "Engagement Metrics",
    "Feedback Analysis",
  ];

  const sentimentData = [
    { name: "Jan 1", positive: 70, neutral: 15, negative: 15 },
    { name: "Jan 8", positive: 73, neutral: 13, negative: 14 },
    { name: "Jan 15", positive: 75, neutral: 12, negative: 13 },
    { name: "Jan 22", positive: 74, neutral: 13, negative: 13 },
    { name: "Jan 29", positive: 76, neutral: 12, negative: 12 },
    { name: "Feb 5", positive: 77, neutral: 11, negative: 12 },
    { name: "Feb 12", positive: 78, neutral: 11, negative: 11 },
    { name: "Feb 19", positive: 77, neutral: 11, negative: 12 },
    { name: "Feb 26", positive: 79, neutral: 10, negative: 11 },
    { name: "Mar 5", positive: 80, neutral: 9, negative: 11 },
    { name: "Mar 12", positive: 78, neutral: 10, negative: 12 },
    { name: "Mar 19", positive: 76, neutral: 11, negative: 13 },
  ];

  const mentionData = [
    { name: "Jan 1", mentions: 2000 },
    { name: "Jan 8", mentions: 2500 },
    { name: "Jan 15", mentions: 3000 },
    { name: "Jan 22", mentions: 3500 },
    { name: "Jan 29", mentions: 4000 },
    { name: "Feb 5", mentions: 4500 },
    { name: "Feb 12", mentions: 5000 },
    { name: "Feb 19", mentions: 5500 },
    { name: "Feb 26", mentions: 6000 },
    { name: "Mar 5", mentions: 6500 },
    { name: "Mar 12", mentions: 7000 },
    { name: "Mar 19", mentions: 7500 },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Sentiment Trends":
        return (
          <div className="bg-white p-6 rounded-2xl shadow-sm mt-4">
            <h2 className="text-lg font-semibold mb-2">
              Sentiment Trends Over Time
            </h2>
            <p className="text-gray-500 mb-4">
              Track positive, negative, and neutral sentiment across all
              platforms
            </p>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={sentimentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="positive"
                  stroke="#00C49F"
                  name="Positive"
                />
                <Line
                  type="monotone"
                  dataKey="neutral"
                  stroke="#8884d8"
                  name="Neutral"
                />
                <Line
                  type="monotone"
                  dataKey="negative"
                  stroke="#FF4C4C"
                  name="Negative"
                />
              </LineChart>
            </ResponsiveContainer>

            <h2 className="text-lg font-semibold mt-10 mb-2">Mention Volume</h2>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={mentionData}>
                <defs>
                  <linearGradient id="colorMentions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="mentions"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorMentions)"
                />
              </AreaChart>
            </ResponsiveContainer>

            <div className="flex justify-around mt-6 text-center">
              <div>
                <p className="text-green-500 font-semibold text-lg">+12%</p>
                <p className="text-gray-500 text-sm">
                  Positive sentiment increase
                </p>
              </div>
              <div>
                <p className="text-blue-600 font-semibold text-lg">6.8K</p>
                <p className="text-gray-500 text-sm">Average daily mentions</p>
              </div>
              <div>
                <p className="text-purple-600 font-semibold text-lg">85%</p>
                <p className="text-gray-500 text-sm">Sentiment accuracy</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white p-6 rounded-2xl shadow-sm mt-4 text-gray-500 text-center">
            Content for {activeTab} coming soon...
          </div>
        );
    }
  };

  return (
    <div className="p-6 bg-[#f4f7ff] min-h-screen">
      {/* 🔹 Back Button + Header */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => navigate("/")}
          className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold">SocialPulse Dashboard</h1>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          {
            title: "Overall Sentiment",
            value: "68%",
            desc: "Positive sentiment",
            color: "text-green-500",
          },
          {
            title: "Total Mentions",
            value: "37.05K",
            desc: "+12.5% from last period",
          },
          {
            title: "Engagement Rate",
            value: "8.2%",
            desc: "+2.1% from last week",
          },
          {
            title: "Trending Score",
            value: "94.3",
            desc: "Excellent performance",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="font-medium text-gray-700">{card.title}</h3>
            <p
              className={`text-2xl font-bold mt-2 ${
                card.color ? card.color : "text-black"
              }`}
            >
              {card.value}
            </p>
            <p className="text-gray-400 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Platform Performance */}
      <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
        <h2 className="font-semibold text-lg mb-2">Platform Performance</h2>
        <p className="text-gray-500 mb-4">
          Sentiment analysis across social media platforms
        </p>

        <div className="grid grid-cols-3 gap-4">
          {[
            {
              name: "Facebook",
              mentions: "12,450",
              sentiment: "72%",
              performance: "Excellent",
              color: "text-green-500",
            },
            {
              name: "Instagram",
              mentions: "8,930",
              sentiment: "78%",
              performance: "Excellent",
              color: "text-green-500",
            },
            {
              name: "X (Twitter)",
              mentions: "15,670",
              sentiment: "64%",
              performance: "Good",
              color: "text-yellow-500",
            },
          ].map((platform) => (
            <div
              key={platform.name}
              className="p-4 border border-gray-100 rounded-2xl shadow-sm"
            >
              <h3 className="font-semibold">{platform.name}</h3>
              <p className="text-gray-500 text-sm mb-2">
                Social Media Platform
              </p>
              <p className="text-gray-700 text-sm">
                Total Mentions:{" "}
                <span className="font-medium">{platform.mentions}</span>
              </p>
              <p className="text-gray-700 text-sm">
                Positive Sentiment:{" "}
                <span className={`font-medium ${platform.color}`}>
                  {platform.sentiment}
                </span>
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Performance:{" "}
                <span
                  className={`font-medium px-2 py-1 rounded-full bg-gray-100 ${platform.color}`}
                >
                  {platform.performance}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-full p-1 w-full max-w-4xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-full font-medium text-sm transition ${
              activeTab === tab
                ? "bg-white shadow text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderTabContent()}
    </div>
  );
};

export default Dashboard;
