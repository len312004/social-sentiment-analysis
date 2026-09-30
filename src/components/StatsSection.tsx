import React from "react";

const Stats = () => {
  const stats = [
    { number: "72%", label: "Average Positive Sentiment" },
    { number: "37K+", label: "Daily Mentions Tracked" },
    { number: "95%", label: "Prediction Accuracy" },
  ];

  return (
    <section className="py-16 px-12 text-center">
      <div className="bg-[#2b50d8] rounded-2xl py-10 flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
        {stats.map((s, index) => (
          <div key={index}>
            <h3 className="text-5xl font-extrabold">{s.number}</h3>
            <p className="text-gray-200 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
