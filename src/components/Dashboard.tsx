import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Hash } from "lucide-react";

// Register ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("trends");

  // 📊 Line Chart Data
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Positive",
        data: [65, 70, 75, 78, 80, 79],
        borderColor: "#22c55e",
        tension: 0.4,
      },
      {
        label: "Neutral",
        data: [15, 14, 13, 12, 10, 11],
        borderColor: "#6b7280",
        tension: 0.4,
      },
      {
        label: "Negative",
        data: [20, 16, 12, 10, 10, 10],
        borderColor: "#ef4444",
        tension: 0.4,
      },
    ],
  };

  const trendsTab = (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Sentiment Trends Over Time
      </h3>
      <Line data={lineData} />
    </div>
  );

  const hashtags = [
    "#Elections2025",
    "#TrafficPH",
    "#BagongPilipinas",
    "#ShowbizUpdate",
    "#UAAPSeason",
    "#WeatherAlert",
  ];

  const hashtagsTab = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hashtags.map((tag, index) => (
        <button
          key={index}
          className="bg-[#1E3A8A] text-white p-5 rounded-2xl shadow hover:bg-[#2D4DB0] flex items-center gap-3 transition"
          onClick={() => alert(`Clicked: ${tag}`)}
        >
          <Hash size={24} />
          <span className="font-semibold">{tag}</span>
        </button>
      ))}
    </div>
  );

  return (
    <section className="bg-[#F3F7FF] text-gray-900 py-16 px-6 md:px-16">
      {/* Navigation Tabs */}
      <div className="flex items-center gap-6 mb-10 border-b pb-4">
        <button
          className={`pb-2 ${
            activeTab === "trends"
              ? "border-b-4 border-blue-600 font-bold text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("trends")}
        >
          Sentiment Trends
        </button>
        <button
          className={`pb-2 ${
            activeTab === "hashtags"
              ? "border-b-4 border-blue-600 font-bold text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("hashtags")}
        >
          Trending Hashtags
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "trends" ? trendsTab : hashtagsTab}
    </section>
  );
};

export default Dashboard;
