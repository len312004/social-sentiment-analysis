import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const sentimentData = [
  { month: "Jan", positive: 68, negative: 32 },
  { month: "Feb", positive: 71, negative: 29 },
  { month: "Mar", positive: 75, negative: 25 },
  { month: "Apr", positive: 78, negative: 22 },
  { month: "May", positive: 82, negative: 18 },
  { month: "Jun", positive: 76, negative: 24 },
];

const platformData = [
  { name: "Facebook", value: 45 },
  { name: "Instagram", value: 30 },
  { name: "Twitter (X)", value: 25 },
];

const COLORS = ["#3B82F6", "#EC4899", "#22C55E"];

const hashtagData = [
  { hashtag: "#Philippines", mentions: 22000 },
  { hashtag: "#SocialPulse", mentions: 18500 },
  { hashtag: "#TrendingNow", mentions: 15200 },
  { hashtag: "#Sentiment", mentions: 13800 },
];

const ExploreDashboard: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0F172A] text-white overflow-y-auto font-sans">
      {/* HEADER */}
      <header className="sticky top-0 bg-[#1E3A8A] py-5 px-10 shadow-md z-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SocialPulse Dashboard</h1>
        <nav className="flex gap-6 text-gray-200 text-lg">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-10 space-y-12">
        {/* SECTION: Sentiment Overview */}
        <section className="bg-[#1E293B] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Sentiment Trend (Jan - Jun)</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={sentimentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#CBD5E1" />
              <YAxis stroke="#CBD5E1" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1E293B",
                  border: "none",
                  borderRadius: "10px",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="positive"
                stroke="#22C55E"
                strokeWidth={3}
                name="Positive"
              />
              <Line
                type="monotone"
                dataKey="negative"
                stroke="#EF4444"
                strokeWidth={3}
                name="Negative"
              />
            </LineChart>
          </ResponsiveContainer>
        </section>

        {/* SECTION: Platform Share */}
        <section className="bg-[#1E293B] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Platform Sentiment Distribution</h2>
          <div className="flex justify-center">
            <ResponsiveContainer width="60%" height={300}>
              <PieChart>
                <Pie
                  data={platformData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1E293B",
                    border: "none",
                    borderRadius: "10px",
                  }}
                  labelStyle={{ color: "#fff" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* SECTION: Top Hashtags */}
        <section className="bg-[#1E293B] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Top Trending Hashtags</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={hashtagData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="hashtag" stroke="#CBD5E1" />
              <YAxis stroke="#CBD5E1" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1E293B",
                  border: "none",
                  borderRadius: "10px",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar dataKey="mentions" fill="#3B82F6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* SECTION: Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Positive Sentiment", value: "72%", color: "#22C55E" },
            { label: "Mentions Tracked", value: "37K+", color: "#3B82F6" },
            { label: "Prediction Accuracy", value: "95%", color: "#FACC15" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1E3A8A] p-8 rounded-2xl shadow-md text-center"
            >
              <h3
                className="text-5xl font-extrabold mb-2"
                style={{ color: item.color }}
              >
                {item.value}
              </h3>
              <p className="text-gray-200 text-lg">{item.label}</p>
            </div>
          ))}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#1E3A8A] py-8 text-center mt-10">
        <p className="text-gray-300 text-sm">
          © 2025 SocialPulse — Advanced social media sentiment analytics for the
          Philippines.
        </p>
      </footer>
    </div>
  );
};

export default ExploreDashboard;
