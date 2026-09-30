import React from "react";

const Tabs: React.FC = () => {
  const tabs = [
    "Sentiment Trends",
    "Trending Hashtags",
    "Word Cloud",
    "Engagement Metrics",
    "Feedback Analysis",
  ];

  return (
    <div className="flex bg-white p-2 rounded-xl shadow text-sm font-medium overflow-x-auto">
      {tabs.map((tab, i) => (
        <button
          key={i}
          className={`px-4 py-2 rounded-md ${
            i === 0 ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
