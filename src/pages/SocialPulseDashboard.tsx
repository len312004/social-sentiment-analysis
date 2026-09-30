import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import TrendingHashtags from "./TrendingHashtags";
import WordCloud from "./WordCloud";
import EngagementMetrics from "./EngagementMetrics";
import FeedbackAnalysis from "./FeedbackAnalysis";

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
  Legend,
} from "recharts";

/** -------------------------
 *  Datasets for each range
 *  (Realistic / deterministic example values)
 *  ------------------------- */

const DATASETS = {
  "24 Hours": {
    stats: {
      overallSentimentPct: 72,
      totalMentions: 4800,
      engagementRatePct: 6.1,
      trendingScore: 82.1,
    },
    platforms: {
      facebook: { mentions: 1500, positivePct: 74, percentText: "+1.3%", performance: "Excellent" },
      instagram: { mentions: 1200, positivePct: 78, percentText: "+0.9%", performance: "Excellent" },
      x: { mentions: 2100, positivePct: 64, percentText: "-0.7%", performance: "Good" },
    },
    sentimentData: [
      { name: "00:00", Positive: 70, Negative: 18, Neutral: 12 },
      { name: "04:00", Positive: 71, Negative: 17, Neutral: 12 },
      { name: "08:00", Positive: 73, Negative: 16, Neutral: 11 },
      { name: "12:00", Positive: 74, Negative: 15, Neutral: 11 },
      { name: "16:00", Positive: 73, Negative: 16, Neutral: 11 },
      { name: "20:00", Positive: 72, Negative: 17, Neutral: 11 },
    ],
    volumeData: [
      { name: "00:00", mentions: 600 },
      { name: "04:00", mentions: 700 },
      { name: "08:00", mentions: 900 },
      { name: "12:00", mentions: 1100 },
      { name: "16:00", mentions: 900 },
      { name: "20:00", mentions: 600 },
    ],
  },

  "7 Days": {
    stats: {
      overallSentimentPct: 68,
      totalMentions: 37050,
      engagementRatePct: 8.2,
      trendingScore: 94.3,
    },
    platforms: {
      facebook: { mentions: 12450, positivePct: 72, percentText: "+5.2%", performance: "Excellent" },
      instagram: { mentions: 8930, positivePct: 78, percentText: "+3.1%", performance: "Excellent" },
      x: { mentions: 15670, positivePct: 64, percentText: "-1.8%", performance: "Good" },
    },
    sentimentData: [
      { name: "Mon", Positive: 65, Negative: 20, Neutral: 15 },
      { name: "Tue", Positive: 68, Negative: 18, Neutral: 14 },
      { name: "Wed", Positive: 71, Negative: 16, Neutral: 13 },
      { name: "Thu", Positive: 69, Negative: 19, Neutral: 12 },
      { name: "Fri", Positive: 73, Negative: 15, Neutral: 12 },
      { name: "Sat", Positive: 74, Negative: 14, Neutral: 12 },
      { name: "Sun", Positive: 76, Negative: 12, Neutral: 12 },
    ],
    volumeData: [
      { name: "Mon", mentions: 2200 },
      { name: "Tue", mentions: 2800 },
      { name: "Wed", mentions: 3400 },
      { name: "Thu", mentions: 3800 },
      { name: "Fri", mentions: 4200 },
      { name: "Sat", mentions: 4600 },
      { name: "Sun", mentions: 5000 },
    ],
  },

  "30 Days": {
    stats: {
      overallSentimentPct: 66,
      totalMentions: 165000,
      engagementRatePct: 7.9,
      trendingScore: 88.5,
    },
    platforms: {
      facebook: { mentions: 54000, positivePct: 70, percentText: "+2.0%", performance: "Good" },
      instagram: { mentions: 48000, positivePct: 76, percentText: "+1.5%", performance: "Excellent" },
      x: { mentions: 63000, positivePct: 62, percentText: "-0.5%", performance: "Good" },
    },
    sentimentData: [
      { name: "Week 1", Positive: 63, Negative: 22, Neutral: 15 },
      { name: "Week 2", Positive: 65, Negative: 21, Neutral: 14 },
      { name: "Week 3", Positive: 67, Negative: 19, Neutral: 14 },
      { name: "Week 4", Positive: 68, Negative: 18, Neutral: 14 },
    ],
    volumeData: [
      { name: "Week 1", mentions: 32000 },
      { name: "Week 2", mentions: 40000 },
      { name: "Week 3", mentions: 42000 },
      { name: "Week 4", mentions: 50800 },
    ],
  },

  "90 Days": {
    stats: {
      overallSentimentPct: 64,
      totalMentions: 470000,
      engagementRatePct: 7.1,
      trendingScore: 79.2,
    },
    platforms: {
      facebook: { mentions: 150000, positivePct: 68, percentText: "+0.5%", performance: "Good" },
      instagram: { mentions: 140000, positivePct: 72, percentText: "+0.2%", performance: "Good" },
      x: { mentions: 180000, positivePct: 60, percentText: "-1.0%", performance: "Average" },
    },
    sentimentData: [
      { name: "Jan", Positive: 62, Negative: 24, Neutral: 14 },
      { name: "Feb", Positive: 63, Negative: 23, Neutral: 14 },
      { name: "Mar", Positive: 65, Negative: 21, Neutral: 14 },
    ],
    volumeData: [
      { name: "Jan", mentions: 140000 },
      { name: "Feb", mentions: 150000 },
      { name: "Mar", mentions: 180000 },
    ],
  },
} as const;

/** Stat Card component */
const StatCard = ({ title, value, meta }: any) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-white/40">
    <div className="text-sm text-gray-600 mb-2">{title}</div>
    <div className="text-2xl font-extrabold text-gray-900">{value}</div>
    {meta && <div className="text-xs text-gray-400 mt-2">{meta}</div>}
  </div>
);

/** Progress Bar */
const ProgressBar = ({ pct, height = 8 }: { pct: number; height?: number }) => (
  <div className="w-full bg-gray-200 rounded-full" style={{ height }}>
    <div className="bg-black rounded-full" style={{ width: `${pct}%`, height }} />
  </div>
);

/** Platform Card */
const PlatformCard = ({
  name,
  subtitle,
  mentions,
  percentText,
  positivePct,
  performance = "Excellent",
  trendUp = true,
}: any) => {
  const perfColor =
    performance === "Excellent"
      ? "bg-emerald-100 text-emerald-700"
      : performance === "Good"
      ? "bg-amber-100 text-amber-700"
      : "bg-slate-100 text-slate-700";

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-white/30">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-800">{name}</div>
            <div className="text-sm text-gray-400">{subtitle}</div>
          </div>
        </div>

        <div
          className={`text-sm ${trendUp ? "text-emerald-600" : "text-rose-600"} flex items-center gap-2`}
        >
          {trendUp ? "▲" : "▼"} {percentText}
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-600 flex justify-between">
        <div>Total Mentions</div>
        <div className="font-semibold text-gray-800">{mentions.toLocaleString()}</div>
      </div>

      <div className="mt-3">
        <ProgressBar pct={Math.min(100, Number(positivePct))} height={10} />
        <div className="text-xs text-gray-400 mt-2">Positive share</div>
      </div>

      <div className="mt-5 text-sm text-gray-600">Positive Sentiment</div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex-1 mr-4">
          <ProgressBar pct={positivePct} height={12} />
        </div>
        <div className="w-16 text-right font-semibold text-gray-800">{positivePct}%</div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className={`px-3 py-1 rounded-full text-xs ${perfColor}`}>{performance}</div>
      </div>
    </div>
  );
};

/** MAIN DASHBOARD */
export default function SocialPulseDashboard() {
  const [activeTab, setActiveTab] = useState<string>("Sentiment Trends");
  const [range, setRange] = useState<keyof typeof DATASETS>("7 Days");

  // derive current dataset using useMemo for performance
  const current = useMemo(() => DATASETS[range], [range]);

  // convenience destructuring
  const { stats, platforms, sentimentData, volumeData } = current;

  const tabs = [
    "Sentiment Trends",
    "Trending Hashtags",
    "Word Cloud",
    "Engagement Metrics",
    "Feedback Analysis",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef6ff] to-[#f2f7ff] text-slate-800">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-slate-600 hover:underline">
              ← Back
            </Link>
            <h1 className="text-2xl font-semibold">SocialPulse Dashboard</h1>
          </div>

          {/* Range selector */}
          <div>
            <select
              value={range}
              onChange={(e) => setRange(e.target.value as keyof typeof DATASETS)}
              className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 text-sm"
            >
              <option>24 Hours</option>
              <option>7 Days</option>
              <option>30 Days</option>
              <option>90 Days</option>
            </select>
          </div>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Overall Sentiment"
            value={<span className="text-3xl text-emerald-600 font-extrabold">{stats.overallSentimentPct}%</span>}
            meta="Positive sentiment"
          />
          <StatCard
            title="Total Mentions"
            value={<span className="text-3xl font-extrabold">{stats.totalMentions.toLocaleString()}</span>}
            meta={range === "24 Hours" ? "Last 24 hours" : `Last ${range}`}
          />
          <StatCard
            title="Engagement Rate"
            value={<span className="text-3xl font-extrabold">{stats.engagementRatePct}%</span>}
            meta="+ vs previous period"
          />
          <StatCard
            title="Trending Score"
            value={<span className="text-3xl font-extrabold">{stats.trendingScore}</span>}
            meta={stats.trendingScore > 90 ? "Excellent performance" : "Trending"}
          />
        </div>

        {/* Platform Performance */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-white/30 mb-8">
          <h2 className="text-lg font-semibold mb-1">Platform Performance</h2>
          <p className="text-sm text-slate-500 mb-6">Sentiment analysis across platforms ({range})</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PlatformCard
              name="Facebook"
              subtitle="Social Media Platform"
              mentions={platforms.facebook.mentions}
              percentText={platforms.facebook.percentText}
              positivePct={platforms.facebook.positivePct}
              performance={platforms.facebook.performance}
              trendUp={true}
            />
            <PlatformCard
              name="Instagram"
              subtitle="Social Media Platform"
              mentions={platforms.instagram.mentions}
              percentText={platforms.instagram.percentText}
              positivePct={platforms.instagram.positivePct}
              performance={platforms.instagram.performance}
              trendUp={true}
            />
            <PlatformCard
              name="X (Twitter)"
              subtitle="Social Media Platform"
              mentions={platforms.x.mentions}
              percentText={platforms.x.percentText}
              positivePct={platforms.x.positivePct}
              performance={platforms.x.performance}
              trendUp={platforms.x.positivePct >= 50}
            />
          </div>
        </div>

        {/* Tab Navigation (aligned over white container) */}
        <div className="flex items-center justify-center gap-4 mb-0 -mt-3 relative z-10">
          {tabs.map((name) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`px-6 py-2 rounded-xl font-medium transition-all ${
                activeTab === name ? "bg-white shadow-sm text-black" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Tab Content Container */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-white/40 w-full mb-12">
          {activeTab === "Sentiment Trends" && (
            <div>
              <h3 className="font-semibold mb-2">Sentiment Trends Over Time ({range})</h3>
              <p className="text-sm text-slate-500 mb-6">Track positive, negative, and neutral sentiment across all platforms.</p>

              {/* Sentiment Line Chart */}
              <div className="w-full h-[340px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sentimentData}>
                    <CartesianGrid strokeDasharray="4 4" stroke="#e6e6e6" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="Negative" stroke="#ef4444" strokeWidth={2} />
                    <Line dataKey="Neutral" stroke="#6b7280" strokeWidth={2} />
                    <Line dataKey="Positive" stroke="#10b981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Mention Volume Area Chart */}
              <div className="mt-8 w-full">
                <h4 className="font-semibold mb-3">Mention Volume ({range})</h4>
                <div className="w-full h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={volumeData}>
                      <defs>
                        <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="4 4" stroke="#e6e6e6" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area dataKey="mentions" stroke="#3b82f6" fill="url(#volGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Trending Hashtags" && (
            <div className="w-full">
              {/* pass range so the child can request different data if implemented */}
              <TrendingHashtags range={range} />
            </div>
          )}

          {activeTab === "Word Cloud" && (
            <div className="w-full">
              <WordCloud range={range} />
            </div>
          )}

          {activeTab === "Engagement Metrics" && (
            <div className="w-full">
              <EngagementMetrics range={range} />
            </div>
          )}

          {activeTab === "Feedback Analysis" && (
            <div className="w-full">
              <h3 className="font-semibold mb-2">Feedback Analysis Overview</h3>
              <p className="text-sm text-slate-500 mb-4">Summaries of audience comments and topic insights.</p>
              <FeedbackAnalysis range={range} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
