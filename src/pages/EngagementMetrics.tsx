// src/pages/EngagementMetrics.tsx
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/**
 * EngagementMetrics Page (matches Figma screenshot)
 * - self-contained: uses native <select> and plain table markup (no custom ui imports)
 * - requires: recharts, tailwindcss
 */

interface EngagementData {
  ageGroup: string;
  engagements: number;
  comments: number;
  shares: number;
  likes: number;
  platform: string;
  language: string;
}

const engagementData: EngagementData[] = [
  { ageGroup: "18-24", engagements: 1000, comments: 500, shares: 150, likes: 350, platform: "Instagram", language: "Filipino" },
  { ageGroup: "25-34", engagements: 3000, comments: 300, shares: 800, likes: 1900, platform: "Facebook", language: "English" },
  { ageGroup: "35-44", engagements: 4000, comments: 100, shares: 1200, likes: 2700, platform: "Facebook", language: "Filipino" },
  { ageGroup: "45-54", engagements: 2000, comments: 400, shares: 600, likes: 1000, platform: "X", language: "English" },
  { ageGroup: "55-65", engagements: 1000, comments: 300, shares: 200, likes: 500, platform: "Facebook", language: "Filipino" },
  { ageGroup: "65-70", engagements: 3000, comments: 150, shares: 900, likes: 1950, platform: "Instagram", language: "English" },
  { ageGroup: "70+", engagements: 1200, comments: 50, shares: 360, likes: 790, platform: "Facebook", language: "Filipino" },
];

const platformData = [
  { name: "Facebook", value: 45, color: "#1877f2" },
  { name: "Instagram", value: 32, color: "#e4405f" },
  { name: "X (Twitter)", value: 23, color: "#1da1f2" },
];

const languageData = [
  { name: "Filipino", value: 58, color: "#10b981" },
  { name: "English", value: 42, color: "#3b82f6" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg text-sm">
        <div className="font-medium text-gray-900 mb-1">Age Group: {label}</div>
        {payload.map((entry: any, i: number) => (
          <div key={i} style={{ color: entry.color }}>
            {entry.dataKey}: <span className="font-semibold">{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function EngagementMetricsPage() {
  const [ageFilter, setAgeFilter] = useState<string>("all");
  const [languageFilter, setLanguageFilter] = useState<string>("all");
  const [platformFilter, setPlatformFilter] = useState<string>("all");

  const filtered = engagementData.filter((d) => {
    const ageOk = ageFilter === "all" || d.ageGroup === ageFilter;
    const langOk = languageFilter === "all" || d.language === languageFilter;
    const platOk = platformFilter === "all" || d.platform === platformFilter;
    return ageOk && langOk && platOk;
  });

  const chartData = filtered.map((d) => ({
    ageGroup: d.ageGroup,
    Comments: d.comments,
    Likes: d.likes,
    Shares: d.shares,
    "Total Engagements": d.engagements,
  }));

  // Summary numbers for right column legend boxes (mimic figma)
  const totalMentions = filtered.reduce((s, x) => s + x.engagements, 0);
  const risingCount = filtered.filter((x) => x.engagements > 1000).length;
  const avgEngagement = filtered.length
    ? (filtered.reduce((s, x) => s + (x.comments + x.shares + x.likes) / (x.engagements || 1), 0) / filtered.length) * 100
    : 0;

  return (
    <div className="w-full min-h-screen bg-[#F6F8FF] p-6">
      <div className="max-w-[1200px] mx-auto space-y-6">
        {/* Header + controls */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Engagement by Demographics</h1>
              <p className="text-sm text-gray-500 mt-1">Breakdown of engagement metrics by age group, language, and platform</p>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
                className="px-4 py-2 rounded-xl border bg-white text-sm"
              >
                <option value="all">All Ages</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55-65">55-65</option>
                <option value="65-70">65-70</option>
                <option value="70+">70+</option>
              </select>

              <select
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
                className="px-4 py-2 rounded-xl border bg-white text-sm"
              >
                <option value="all">All Language</option>
                <option value="Filipino">Filipino</option>
                <option value="English">English</option>
              </select>

              <select
                value={platformFilter}
                onChange={(e) => setPlatformFilter(e.target.value)}
                className="px-4 py-2 rounded-xl border bg-white text-sm"
              >
                <option value="all">All Platforms</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="X">X</option>
              </select>
            </div>
          </div>
        </div>

        {/* Charts area */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main bar chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg border">
              <h3 className="font-semibold text-gray-900 mb-4">Engagement by Age Group</h3>
              <div style={{ width: "100%", height: 360 }}>
                <ResponsiveContainer>
                  <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
                    <XAxis dataKey="ageGroup" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="bottom" height={36} />
                    <Bar dataKey="Comments" stackId="a" fill="#10b981" />
                    <Bar dataKey="Likes" stackId="a" fill="#ef4444" />
                    <Bar dataKey="Shares" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="Total Engagements" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <span className="inline-flex items-center mr-4"><span className="w-3 h-3 mr-2 rounded-full bg-green-500" />Comments</span>
                <span className="inline-flex items-center mr-4"><span className="w-3 h-3 mr-2 rounded-full bg-red-500" />Likes</span>
                <span className="inline-flex items-center mr-4"><span className="w-3 h-3 mr-2 rounded-full bg-yellow-500" />Shares</span>
                <span className="inline-flex items-center"><span className="w-3 h-3 mr-2 rounded-full bg-blue-500" />Total Engagements</span>
              </div>
            </div>

            {/* Right column donut charts */}
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-gray-900 mb-4">Platform Distribution</h4>
                <div style={{ width: "100%", height: 160 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={platformData} cx="50%" cy="50%" innerRadius={36} outerRadius={64} paddingAngle={4} dataKey="value">
                        {platformData.map((entry, idx) => <Cell key={idx} fill={entry.color} />)}
                      </Pie>
                      <Tooltip formatter={(value: any) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  {platformData.map((p) => (
                    <div key={p.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                        <div className="text-sm text-gray-700">{p.name}</div>
                      </div>
                      <div className="font-medium text-gray-900">{p.value}%</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-gray-900 mb-4">Language Distribution</h4>
                <div style={{ width: "100%", height: 160 }}>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={languageData} cx="50%" cy="50%" innerRadius={36} outerRadius={64} paddingAngle={4} dataKey="value">
                        {languageData.map((entry, idx) => <Cell key={idx} fill={entry.color} />)}
                      </Pie>
                      <Tooltip formatter={(value: any) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  {languageData.map((l) => (
                    <div key={l.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: l.color }} />
                        <div className="text-sm text-gray-700">{l.name}</div>
                      </div>
                      <div className="font-medium text-gray-900">{l.value}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown Table */}
          <div className="mt-8 bg-white rounded-lg border p-6">
            <h4 className="font-medium text-gray-900 mb-4">Detailed Breakdown</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="text-left text-sm text-gray-600">
                    <th className="py-3 px-4">Age Group</th>
                    <th className="py-3 px-4">Platform</th>
                    <th className="py-3 px-4">Language</th>
                    <th className="py-3 px-4 text-right">Engagements</th>
                    <th className="py-3 px-4 text-right">Comments</th>
                    <th className="py-3 px-4 text-right">Shares</th>
                    <th className="py-3 px-4 text-right">Likes</th>
                    <th className="py-3 px-4 text-right">Engagement Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((row, i) => {
                    const engagementRate = row.engagements ? ((row.comments + row.shares + row.likes) / row.engagements) * 100 : 0;
                    return (
                      <tr key={i} className="text-sm text-gray-700">
                        <td className="py-4 px-4">{row.ageGroup}</td>
                        <td className="py-4 px-4">
                          <span className="inline-block px-3 py-1 rounded-full border text-xs bg-white">{row.platform}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-block px-3 py-1 rounded-full border text-xs bg-white">{row.language}</span>
                        </td>
                        <td className="py-4 px-4 text-right">{row.engagements.toLocaleString()}</td>
                        <td className="py-4 px-4 text-right">{row.comments.toLocaleString()}</td>
                        <td className="py-4 px-4 text-right">{row.shares.toLocaleString()}</td>
                        <td className="py-4 px-4 text-right">{row.likes.toLocaleString()}</td>
                        <td className="py-4 px-4 text-right">{engagementRate.toFixed(1)}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
