import React from "react";
import { TrendingUp, MessageCircle, Users, Hash } from "lucide-react";

const summary = [
  {
    title: "Overall Sentiment",
    value: "68%",
    sub: "Positive sentiment",
    icon: <TrendingUp className="text-green-500" />,
  },
  {
    title: "Total Mentions",
    value: "37.05K",
    sub: "+12.5% from last period",
    icon: <MessageCircle className="text-blue-500" />,
  },
  {
    title: "Engagement Rate",
    value: "8.2%",
    sub: "+2.1% from last week",
    icon: <Users className="text-purple-500" />,
  },
  {
    title: "Trending Score",
    value: "94.3",
    sub: "Excellent performance",
    icon: <Hash className="text-orange-500" />,
  },
];

const SummaryCards: React.FC = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {summary.map((card, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-xl shadow hover:shadow-md transition flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <h2 className="text-sm font-medium text-gray-600">{card.title}</h2>
            {card.icon}
          </div>
          <p className="text-3xl font-semibold mt-2">{card.value}</p>
          <p className="text-sm text-gray-500">{card.sub}</p>
        </div>
      ))}
    </section>
  );
};

export default SummaryCards;
