import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface PlatformCardProps {
  name: string;
  icon: string;
  mentions: string;
  sentiment: string;
  change: string;
  performance: string;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  name,
  mentions,
  sentiment,
  change,
  performance,
}) => {
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <div className="flex items-center gap-1 text-sm font-medium">
          {isPositive ? (
            <ArrowUpRight className="text-green-500 w-4 h-4" />
          ) : (
            <ArrowDownRight className="text-red-500 w-4 h-4" />
          )}
          <span className={isPositive ? "text-green-500" : "text-red-500"}>
            {change}
          </span>
        </div>
      </div>

      <p className="text-gray-500 text-sm mb-1">Total Mentions</p>
      <p className="font-semibold text-gray-800">{mentions}</p>

      <div className="h-2 bg-gray-200 rounded-full mt-2 mb-3">
        <div
          className="h-2 bg-blue-500 rounded-full"
          style={{ width: sentiment }}
        ></div>
      </div>

      <p className="text-gray-500 text-sm mb-1">Positive Sentiment</p>
      <div className="h-2 bg-gray-200 rounded-full mb-3">
        <div
          className="h-2 bg-green-500 rounded-full"
          style={{ width: sentiment }}
        ></div>
      </div>

      <div className="flex justify-between items-center text-sm mt-3">
        <span className="text-gray-500">Performance</span>
        <span
          className={`px-2 py-0.5 rounded-full ${
            performance === "Excellent"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {performance}
        </span>
      </div>
    </div>
  );
};

export default PlatformCard;
