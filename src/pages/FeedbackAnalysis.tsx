import React, { useState, useMemo } from "react";

const mentionsData = [
  {
    platform: "X",
    platformColor: "bg-gray-200 text-gray-700",
    mention: "Nice product, easy to use! Highly recommend this to everyone.",
    sentiment: "positive",
    sentimentColor: "bg-green-100 text-green-600",
    author: "@tech_enthusiast_ph",
    time: "2024-09-10",
    engagement: { likes: 45, comments: 12, shares: 8 },
    reach: 2340,
    confidence: "94%",
  },
  {
    platform: "Instagram",
    platformColor: "bg-pink-100 text-pink-600",
    mention: "Best quality product I've ever used!!! The design is amazing and durable.",
    sentiment: "positive",
    sentimentColor: "bg-green-100 text-green-600",
    author: "@manila_lifestyle",
    time: "2024-09-10",
    engagement: { likes: 156, comments: 28, shares: 15 },
    reach: 5670,
    confidence: "98%",
  },
  {
    platform: "X",
    platformColor: "bg-gray-200 text-gray-700",
    mention: "My product malfunctioned within 10 mins of use, I want to exchange this.",
    sentiment: "negative",
    sentimentColor: "bg-red-100 text-red-600",
    author: "@frustrated_user",
    time: "2024-09-10",
    engagement: { likes: 23, comments: 45, shares: 12 },
    reach: 1890,
    confidence: "91%",
  },
  {
    platform: "Facebook",
    platformColor: "bg-blue-100 text-blue-600",
    mention: "Okay product, nothing special but does the job. Price is reasonable.",
    sentiment: "neutral",
    sentimentColor: "bg-gray-100 text-gray-600",
    author: "Juan Dela Cruz",
    time: "2024-09-10",
    engagement: { likes: 12, comments: 6, shares: 2 },
    reach: 890,
    confidence: "87%",
  },
  {
    platform: "Instagram",
    platformColor: "bg-pink-100 text-pink-600",
    mention: "Love this! Perfect for my daily needs. The customer support team is amazing!",
    sentiment: "positive",
    sentimentColor: "bg-green-100 text-green-600",
    author: "@cebu_blogger",
    time: "2024-09-10",
    engagement: { likes: 89, comments: 15, shares: 7 },
    reach: 3450,
    confidence: "96%",
  },
  {
    platform: "X",
    platformColor: "bg-gray-200 text-gray-700",
    mention:
      "Not sure if I like this or not. Some features are good, others need improvement.",
    sentiment: "neutral",
    sentimentColor: "bg-gray-100 text-gray-600",
    author: "@uncertain_buyer",
    time: "2024-09-10",
    engagement: { likes: 8, comments: 18, shares: 3 },
    reach: 670,
    confidence: "82%",
  },
  {
    platform: "Facebook",
    platformColor: "bg-blue-100 text-blue-600",
    mention:
      "Excellent service and product quality! Been using for 3 months now.",
    sentiment: "positive",
    sentimentColor: "bg-green-100 text-green-600",
    author: "Maria Santos",
    time: "2024-09-10",
    engagement: { likes: 67, comments: 22, shares: 11 },
    reach: 2780,
    confidence: "93%",
  },
  {
    platform: "Instagram",
    platformColor: "bg-pink-100 text-pink-600",
    mention: "Poor experience overall. Product didn't match the description at all.",
    sentiment: "negative",
    sentimentColor: "bg-red-100 text-red-600",
    author: "@davao_shopper",
    time: "2024-09-10",
    engagement: { likes: 34, comments: 56, shares: 18 },
    reach: 4230,
    confidence: "89%",
  },
];

export default function FeedbackAnalysis() {
  // Filters
  const [search, setSearch] = useState("");
  const [sentimentFilter, setSentimentFilter] = useState("All Sentiment");
  const [platformFilter, setPlatformFilter] = useState("All Platforms");
  const [sortOrder, setSortOrder] = useState("Most Recent");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Filter + Sorting Logic
  const filtered = useMemo(() => {
    return mentionsData
      .filter((m) => {
        // Search filter
        const s = search.toLowerCase();
        if (
          !m.mention.toLowerCase().includes(s) &&
          !m.author.toLowerCase().includes(s)
        ) {
          return false;
        }

        // Sentiment filter
        if (sentimentFilter !== "All Sentiment" && m.sentiment !== sentimentFilter.toLowerCase()) {
          return false;
        }

        // Platform filter
        if (platformFilter !== "All Platforms" && m.platform !== platformFilter) {
          return false;
        }

        // Date range filter
        if (startDate && m.time < startDate) return false;
        if (endDate && m.time > endDate) return false;

        return true;
      })
      .sort((a, b) => {
        return sortOrder === "Most Recent"
          ? new Date(b.time).getTime() - new Date(a.time).getTime()
          : new Date(a.time).getTime() - new Date(b.time).getTime();
      });
  }, [search, sentimentFilter, platformFilter, sortOrder, startDate, endDate]);

  // Auto-update stats
  const totalMentions = filtered.length;
  const positiveCount = filtered.filter((m) => m.sentiment === "positive").length;
  const negativeCount = filtered.filter((m) => m.sentiment === "negative").length;
  const totalReach = filtered.reduce((sum, m) => sum + m.reach, 0);

  return (
    <div className="w-full p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-1">Recent Feedback & Mentions</h2>
      <p className="text-gray-500 mb-6">Real-time social media mentions with sentiment analysis</p>

      {/* TOP FILTERS */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search mentions or authors…"
          className="px-4 py-2 border rounded-lg w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sentiment Dropdown */}
        <select
          className="px-4 py-2 border rounded-lg"
          value={sentimentFilter}
          onChange={(e) => setSentimentFilter(e.target.value)}
        >
          <option>All Sentiment</option>
          <option>positive</option>
          <option>neutral</option>
          <option>negative</option>
        </select>

        {/* Platform Dropdown */}
        <select
          className="px-4 py-2 border rounded-lg"
          value={platformFilter}
          onChange={(e) => setPlatformFilter(e.target.value)}
        >
          <option>All Platforms</option>
          <option>X</option>
          <option>Facebook</option>
          <option>Instagram</option>
        </select>

        {/* Sort */}
        <select
          className="px-4 py-2 border rounded-lg"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option>Most Recent</option>
          <option>Oldest</option>
        </select>

        {/* Date Range */}
        <div className="flex gap-2 items-center">
          <input
            type="date"
            className="px-3 py-2 border rounded-lg"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <span>to</span>
          <input
            type="date"
            className="px-3 py-2 border rounded-lg"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-6 text-center">
        <div>
          <p className="text-3xl font-bold">{totalMentions}</p>
          <p className="text-gray-500 text-sm">Total Mentions</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-600">{positiveCount}</p>
          <p className="text-gray-500 text-sm">Positive</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-red-600">{negativeCount}</p>
          <p className="text-gray-500 text-sm">Negative</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-purple-600">{totalReach.toLocaleString()}</p>
          <p className="text-gray-500 text-sm">Total Reach</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3 font-medium">Platform</th>
              <th className="p-3 font-medium">Mention</th>
              <th className="p-3 font-medium">Sentiment</th>
              <th className="p-3 font-medium">Author</th>
              <th className="p-3 font-medium">Time</th>
              <th className="p-3 font-medium">Engagement</th>
              <th className="p-3 font-medium">Reach</th>
              <th className="p-3 font-medium">Confidence</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((m, i) => (
              <tr key={i} className="border-t border-gray-100">
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${m.platformColor}`}
                  >
                    {m.platform}
                  </span>
                </td>

                <td className="p-3 max-w-xs">{m.mention}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${m.sentimentColor}`}
                  >
                    {m.sentiment}
                  </span>
                </td>

                <td className="p-3">{m.author}</td>

                <td className="p-3">
                  {new Date(m.time).toLocaleDateString()}
                </td>

                <td className="p-3 flex gap-3 text-gray-600">
                  ❤️ {m.engagement.likes}    💬 {m.engagement.comments}    🔁 {m.engagement.shares}
                </td>

                <td className="p-3 font-medium">{m.reach.toLocaleString()}</td>

                <td className="p-3 font-medium">{m.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


