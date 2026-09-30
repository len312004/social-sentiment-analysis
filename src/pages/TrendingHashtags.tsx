import React, { useState, useMemo } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/* -----------------------------------------------------------------------
   HASHTAG DATA
------------------------------------------------------------------------ */
interface HashtagData {
  id: number;
  hashtag: string;
  mentions: number;
  change: number;
  sentiment: "positive" | "negative" | "neutral";
  platforms: string[];
  engagement: number;
}

const hashtagData: HashtagData[] = [
  { id: 1, hashtag: "#PhilippinesTech", mentions: 93900, change: 15.2, sentiment: "positive", platforms: ["Facebook", "Instagram", "X"], engagement: 8.4 },
  { id: 2, hashtag: "#Manila2024", mentions: 67800, change: 8.7, sentiment: "positive", platforms: ["Instagram", "X"], engagement: 6.2 },
  { id: 3, hashtag: "#DigitalPH", mentions: 45600, change: -2.1, sentiment: "neutral", platforms: ["Facebook", "X"], engagement: 4.8 },
  { id: 4, hashtag: "#Innovation", mentions: 38200, change: 12.4, sentiment: "positive", platforms: ["Facebook", "Instagram", "X"], engagement: 7.1 },
  { id: 5, hashtag: "#SocialMedia", mentions: 32100, change: 5.8, sentiment: "positive", platforms: ["Instagram", "X"], engagement: 5.9 },
  { id: 6, hashtag: "#TrendingNow", mentions: 28900, change: -1.2, sentiment: "neutral", platforms: ["X"], engagement: 3.4 },
  { id: 7, hashtag: "#Filipino", mentions: 25700, change: 18.6, sentiment: "positive", platforms: ["Facebook", "Instagram"], engagement: 9.2 },
  { id: 8, hashtag: "#Culture", mentions: 23200, change: 7.3, sentiment: "positive", platforms: ["Instagram", "X"], engagement: 6.7 },
  { id: 9, hashtag: "#Business", mentions: 19800, change: -3.4, sentiment: "neutral", platforms: ["Facebook", "X"], engagement: 4.1 },
  { id: 10, hashtag: "#Community", mentions: 15200, change: 22.1, sentiment: "positive", platforms: ["Facebook", "Instagram"], engagement: 8.8 },
];

/* -----------------------------------------------------------------------
   HELPER FUNCTIONS
------------------------------------------------------------------------ */
const sentimentColor = (s: string) => {
  if (s === "positive") return "bg-green-100 text-green-700";
  if (s === "neutral") return "bg-yellow-100 text-yellow-700";
  return "bg-red-100 text-red-700";
};

/* -----------------------------------------------------------------------
   COMPONENT
------------------------------------------------------------------------ */
const TrendingHashtags: React.FC = () => {
  const [openTag, setOpenTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("mentions");
  const [filterPlatform, setFilterPlatform] = useState<string>("all");
  const [searchTopic, setSearchTopic] = useState<string>("");

  /* -----------------------------------------------------------------------
     FILTER + SORT LOGIC
  ------------------------------------------------------------------------ */
  const filteredData = useMemo(() => {
    return hashtagData
      .filter((item) => {
        const matchesPlatform = filterPlatform === "all" || item.platforms.includes(filterPlatform);
        const matchesSearch = item.hashtag.toLowerCase().includes(searchTopic.toLowerCase());
        return matchesPlatform && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "mentions") return b.mentions - a.mentions;
        if (sortBy === "growth") return b.change - a.change;
        if (sortBy === "engagement") return b.engagement - a.engagement;
        return 0;
      });
  }, [filterPlatform, sortBy, searchTopic]);

  /* -----------------------------------------------------------------------
     HANDLERS
  ------------------------------------------------------------------------ */
  const openDetail = (tag: string) => setOpenTag(tag);
  const closeDetail = () => setOpenTag(null);

  /* -----------------------------------------------------------------------
     RENDER
  ------------------------------------------------------------------------ */
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/30">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
        <div>
          <h3 className="text-lg font-semibold">Trending Hashtags</h3>
          <p className="text-sm text-gray-500">
            Top-performing hashtags based on volume, growth, and sentiment
          </p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-[#1A4AC8] text-white text-sm hover:bg-[#0F36A0] transition">
          Export Report
        </button>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Search hashtags..."
          value={searchTopic}
          onChange={(e) => setSearchTopic(e.target.value)}
          className="px-4 py-2 border rounded-lg text-sm bg-white flex-1 min-w-[200px]"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-lg text-sm bg-white"
        >
          <option value="mentions">Most Mentions</option>
          <option value="growth">Highest Growth</option>
          <option value="engagement">Highest Engagement</option>
        </select>
        <select
          value={filterPlatform}
          onChange={(e) => setFilterPlatform(e.target.value)}
          className="px-4 py-2 border rounded-lg text-sm bg-white"
        >
          <option value="all">All Platforms</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="X">X (Twitter)</option>
        </select>
      </div>

      {/* HASHTAG CARDS */}
      {filteredData.length === 0 ? (
        <p className="text-sm text-gray-400">No hashtags found for "{searchTopic}"</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((h) => (
            <div
              key={h.id}
              onClick={() => openDetail(h.hashtag)}
              className="bg-white border border-gray-100 rounded-2xl shadow-md p-5 hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold text-lg text-[#1A4AC8]">{h.hashtag}</div>
                <div className={`flex items-center text-sm font-semibold ${h.change > 0 ? "text-green-600" : "text-red-500"}`}>
                  {h.change > 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                  {h.change > 0 ? "+" : ""}
                  {h.change}%
                </div>
              </div>

              {/* Stats */}
              <div className="text-sm text-gray-600 mb-3">
                <div>
                  Mentions: <span className="font-semibold text-gray-900">{h.mentions.toLocaleString()}</span>
                </div>
                <div>
                  Engagement: <span className="font-semibold text-gray-900">{h.engagement}%</span>
                </div>
              </div>

              {/* Sentiment + Platforms */}
              <div className="flex items-center gap-2 mt-auto flex-wrap">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${sentimentColor(h.sentiment)}`}>
                  {h.sentiment}
                </span>

                {h.platforms.map((platform) => (
                  <span
                    key={platform}
                    className={`flex items-center justify-center w-6 h-6 rounded-full ${
                      platform === "Facebook"
                        ? "bg-[#1C77F0] text-white"
                        : platform === "Instagram"
                        ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white"
                        : "bg-black text-white"
                    }`}
                  >
                    {platform === "Facebook" && <FaFacebookF size={11} />}
                    {platform === "Instagram" && <FaInstagram size={11} />}
                    {platform === "X" && <FaXTwitter size={11} />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DETAIL PANEL */}
      {openTag && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center px-4 py-6 pointer-events-none">
          <div className="pointer-events-auto w-full max-w-3xl bg-white rounded-2xl shadow-xl border">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-semibold">{openTag}</h4>
                  <p className="text-sm text-gray-500 mt-1">Hashtag details (mock) — quick summary and recent top posts.</p>
                </div>
                <button onClick={closeDetail} className="text-sm text-gray-500 hover:text-gray-700">Close</button>
              </div>

              {/* Stats Mock */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-md">
                  <div className="text-xs text-gray-400">Mentions</div>
                  <div className="text-lg font-semibold">—</div>
                </div>
                <div className="p-4 border rounded-md">
                  <div className="text-xs text-gray-400">Avg Engagement</div>
                  <div className="text-lg font-semibold">—</div>
                </div>
                <div className="p-4 border rounded-md">
                  <div className="text-xs text-gray-400">Sentiment</div>
                  <div className="text-lg font-semibold">—</div>
                </div>
              </div>

              {/* Recent Posts Mock */}
              <div className="mt-6">
                <div className="text-sm text-gray-500">Top recent posts (mock)</div>
                <ul className="mt-2 space-y-2">
                  <li className="p-3 border rounded-md">Sample post 1 for {openTag}</li>
                  <li className="p-3 border rounded-md">Sample post 2 for {openTag}</li>
                  <li className="p-3 border rounded-md">Sample post 3 for {openTag}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingHashtags;
