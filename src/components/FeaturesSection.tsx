import React from "react";
import { FaChartLine, FaHashtag, FaUsers, FaClock } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    { icon: <FaClock className="text-green-500" size={30} />, title: "Real-time Tracking", desc: "Monitor sentiment changes as they happen across all platforms." },
    { icon: <FaChartLine className="text-blue-400" size={30} />, title: "Trend Prediction", desc: "Sentiment rises steadily from February, peaks in May, and slightly declines in June." },
    { icon: <FaHashtag className="text-pink-400" size={30} />, title: "Hashtag Analysis", desc: "List of trending hashtags with mention counts. Hashtag 1 → mentions: 23.2K." },
    { icon: <FaUsers className="text-orange-400" size={30} />, title: "Demographic Insights", desc: "Age group and location-based sentiment analysis for targeted insights." },
  ];

  return (
    <section className="bg-[#123A9C] text-white px-16 py-24 text-center">
      <h2 className="text-4xl font-extrabold mb-4">Comprehensive Social Analytics</h2>
      <p className="text-lg text-gray-300 mb-16">
        Get deep insights into social media sentiment with our advanced analytics platform
      </p>

      <div className="grid grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-[#1842B7] p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-300 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
