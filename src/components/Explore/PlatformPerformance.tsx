import React from "react";

const platforms = [
  {
    name: "Facebook",
    mentions: "12,450",
    sentiment: "72%",
    growth: "+5.2%",
    performance: "Excellent",
    positive: true,
  },
  {
    name: "Instagram",
    mentions: "8,930",
    sentiment: "78%",
    growth: "+3.1%",
    performance: "Excellent",
    positive: true,
  },
  {
    name: "X (Twitter)",
    mentions: "15,670",
    sentiment: "64%",
    growth: "-1.8%",
    performance: "Good",
    positive: false,
  },
];

const PlatformPerformance: React.FC = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Platform Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {platforms.map((p, i) => (
          <div key={i} className="border rounded-xl p-5 bg-white shadow-sm">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{p.name}</h3>
              <span
                className={`${
                  p.positive ? "text-green-500" : "text-red-500"
                } text-sm font-medium`}
              >
                {p.growth}
              </span>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-500">Total Mentions</p>
              <p className="text-xl font-semibold">{p.mentions}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Positive Sentiment</p>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                <div
                  className={`${
                    p.positive ? "bg-green-500" : "bg-red-400"
                  } h-2 rounded-full`}
                  style={{ width: p.sentiment }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{p.sentiment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformPerformance;
