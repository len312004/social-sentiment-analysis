import React from "react";
import { ArrowLeft } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h1 className="text-xl font-semibold ml-4">SocialPulse Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <select className="bg-gray-100 text-sm px-3 py-2 rounded-md">
          <option>7 Days</option>
          <option>30 Days</option>
          <option>90 Days</option>
        </select>
        <input
          type="text"
          placeholder="Search Topic..."
          className="bg-gray-100 px-3 py-2 rounded-md text-sm w-56"
        />
      </div>
    </header>
  );
};

export default Header;
