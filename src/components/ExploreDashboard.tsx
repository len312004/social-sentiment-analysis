import React from "react";
import { Header, SummaryCards, PlatformPerformance, SentimentTrends, Tabs } from "./Explore";

const ExploreDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F8FF] text-gray-900 font-sans overflow-y-auto">
      <Header />
      <main className="px-8 py-6 space-y-8">
        <SummaryCards />
        <PlatformPerformance />
        <Tabs />
        <SentimentTrends />
      </main>
    </div>
  );
};

export default ExploreDashboard;
