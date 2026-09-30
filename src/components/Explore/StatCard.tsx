import React from "react";
import { ArrowUpRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <ArrowUpRight className="w-4 h-4 text-green-500" />
      </div>
      <p className="text-3xl font-bold text-gray-900 mt-3">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
};

export default StatCard;
