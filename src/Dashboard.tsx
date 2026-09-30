// src/components/Dashboard.tsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid, Legend } from "recharts";

const sentimentData = [
  { month: "Jan", sentiment: 65 },
  { month: "Feb", sentiment: 70 },
  { month: "Mar", sentiment: 75 },
  { month: "Apr", sentiment: 78 },
  { month: "May", sentiment: 82 },
  { month: "Jun", sentiment: 80 },
];

const hashtagData = [
  { hashtag: "#Philippines", mentions: 23000 },
  { hashtag: "#Trending", mentions: 17500 },
  { hashtag: "#SocialPulse", mentions: 12500 },
  { hashtag: "#Analytics", mentions: 9800 },
];

const Dashboard = () => {
  return (
    <div className="bg-[#1E40AF] min-h-screen text-white px-6 md:px-16 py-12 font-sans">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
        SocialPulse Dashboard
      </h1>
      <p className="text-center text-gray-300 mb-12">
        Real-time social sentiment analytics and insights for the Philippines
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        <div className="bg-[#2D4DB0] rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold">72%</h2>
          <p className="text-gray-300">Positive Sentiment</p>
        </div>

        <div className="bg-[#2D4DB0] rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold">37K+</h2>
          <p className="text-gray-300">Daily Mentions</p>
        </div>

        <div className="bg-[#2D4DB0] rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold">95%</h2>
          <p className="text-gray-300">Prediction Accuracy</p>
        </div>
      </div>

      {/* Sentiment Trend Chart */}
      <div className="bg-[#2D4DB0] rounded-2xl p-8 mb-16 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sentiment Trend (Jan - Jun)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3b5ccc" />
            <XAxis dataKey="month" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip contentStyle={{ backgroundColor: "#1E3A8A", border: "none" }} />
            <Line type="monotone" dataKey="sentiment" stroke="#22c55e" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Hashtag Mentions Chart */}
      <div className="bg-[#2D4DB0] rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Top Hashtag Mentions</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={hashtagData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3b5ccc" />
            <XAxis dataKey="hashtag" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip contentStyle={{ backgroundColor: "#1E3A8A", border: "none" }} />
            <Legend />
            <Bar dataKey="mentions" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
