import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from "recharts";
import { ArrowUpRight, ArrowDownRight, Hash } from "lucide-react";

const sentimentData = [
  { name: "Jan 1", Positive: 68, Negative: 20, Neutral: 12 },
  { name: "Jan 8", Positive: 72, Negative: 18, Neutral: 10 },
  { name: "Jan 15", Positive: 74, Negative: 16, Neutral: 10 },
  { name: "Jan 22", Positive: 71, Negative: 18, Neutral: 11 },
  { name: "Jan 29", Positive: 75, Negative: 15, Neutral: 10 },
  { name: "Feb 5", Positive: 77, Negative: 14, Neutral: 9 },
  { name: "Feb 12", Positive: 79, Negative: 13, Neutral: 8 },
  { name: "Feb 19", Positive: 78, Negative: 13, Neutral: 9 },
  { name: "Feb 26", Positive: 80, Negative: 12, Neutral: 8 },
  { name: "Mar 5", Positive: 81, Negative: 11, Neutral: 8 },
  { name: "Mar 12", Positive: 78, Negative: 12, Neutral: 10 },
  { name: "Mar 19", Positive: 76, Negative: 14, Neutral: 10 },
];

const volumeData = [
  { name: "Jan 1", mentions: 2000 },
  { name: "Jan 8", mentions: 2600 },
  { name: "Jan 15", mentions: 3000 },
  { name: "Jan 22", mentions: 3200 },
  { name: "Jan 29", mentions: 3500 },
  { name: "Feb 5", mentions: 3700 },
  { name: "Feb 12", mentions: 4200 },
  { name: "Feb 19", mentions: 4600 },
  { name: "Feb 26", mentions: 5200 },
  { name: "Mar 5", mentions: 5800 },
  { name: "Mar 12", mentions: 6200 },
  { name: "Mar 19", mentions: 6800 },
];

const ExploreDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F4F6FF] text-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 font-medium hover:underline mb-4"
        >
          ← Back
        </button>

        <h1 className="text-2xl font-bold mb-6">SocialPulse Dashboard</h1>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow">
            <p className="text-sm text-gray-600">Overall Sentiment</p>
            <p className="text-3xl font-bold text-green-600">68%</p>
            <p className="text-gray-500 text-sm">Positive sentiment</p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow">
            <p className="text-sm text-gray-600">Total Mentions</p>
            <p className="text-3xl font-bold">37.05K</p>
            <p className="text-green-500 text-sm flex items-center gap-1">
              <ArrowUpRight size={16} /> +12.5% from last period
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow">
            <p className="text-sm text-gray-600">Engagement Rate</p>
            <p className="text-3xl font-bold">8.2%</p>
            <p className="text-green-500 text-sm flex items-center gap-1">
              <ArrowUpRight size={16} /> +2.1% from last week
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow">
            <p className="text-sm text-gray-600 flex items-center gap-1">
              Trending Score <Hash size={16} />
            </p>
            <p className="text-3xl font-bold">94.3</p>
            <p className="text-gray-500 text-sm">Excellent performance</p>
          </div>
        </div>

        {/* Platform Performance */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="font-semibold mb-4">Platform Performance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Facebook */}
            <div className="p-4 border rounded-xl">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">Facebook</p>
                  <p className="text-sm text-gray-500">Social Media Platform</p>
                </div>
                <p className="text-green-600 flex items-center gap-1 text-sm">
                  +5.2% <ArrowUpRight size={14} />
                </p>
              </div>
              <p className="mt-2 text-gray-600 text-sm">Total Mentions: 12,450</p>
              <p className="mt-1 text-gray-500 text-xs">33.6% of total mentions</p>
              <p className="mt-2 text-gray-700 text-sm">Positive Sentiment: 72%</p>
              <p className="text-green-600 text-sm mt-2">Performance: Excellent</p>
            </div>

            {/* Instagram */}
            <div className="p-4 border rounded-xl">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-sm text-gray-500">Social Media Platform</p>
                </div>
                <p className="text-green-600 flex items-center gap-1 text-sm">
                  +3.1% <ArrowUpRight size={14} />
                </p>
              </div>
              <p className="mt-2 text-gray-600 text-sm">Total Mentions: 8,930</p>
              <p className="mt-1 text-gray-500 text-xs">24.1% of total mentions</p>
              <p className="mt-2 text-gray-700 text-sm">Positive Sentiment: 78%</p>
              <p className="text-green-600 text-sm mt-2">Performance: Excellent</p>
            </div>

            {/* X (Twitter) */}
            <div className="p-4 border rounded-xl">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">X (Twitter)</p>
                  <p className="text-sm text-gray-500">Social Media Platform</p>
                </div>
                <p className="text-red-600 flex items-center gap-1 text-sm">
                  -1.8% <ArrowDownRight size={14} />
                </p>
              </div>
              <p className="mt-2 text-gray-600 text-sm">Total Mentions: 15,670</p>
              <p className="mt-1 text-gray-500 text-xs">42.3% of total mentions</p>
              <p className="mt-2 text-gray-700 text-sm">Positive Sentiment: 64%</p>
              <p className="text-yellow-600 text-sm mt-2">Performance: Good</p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold mb-4">Sentiment Trends Over Time</h2>
          <LineChart width={800} height={300} data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Positive" stroke="#22C55E" strokeWidth={3} />
            <Line type="monotone" dataKey="Neutral" stroke="#6B7280" strokeWidth={2} />
            <Line type="monotone" dataKey="Negative" stroke="#EF4444" strokeWidth={2} />
          </LineChart>

          <div className="mt-10">
            <h3 className="font-semibold mb-4">Mention Volume</h3>
            <AreaChart width={800} height={200} data={volumeData}>
              <defs>
                <linearGradient id="colorMentions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="mentions" stroke="#3B82F6" fillOpacity={1} fill="url(#colorMentions)" />
            </AreaChart>
            <div className="flex justify-around mt-4">
              <div className="text-green-600 font-medium">+12% Positive sentiment increase</div>
              <div className="text-blue-600 font-medium">6.8K Average daily mentions</div>
              <div className="text-purple-600 font-medium">85% Sentiment accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDashboard;
