import React from "react";

const Analytics = () => {
  return (
    <section className="bg-[#0B3BAA] text-white py-24 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Comprehensive Social Analytics
        </h2>
        <p className="text-lg mb-12 opacity-90">
          Get deep insights into social media sentiment with our advanced analytics platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "📊",
              title: "Real-time Tracking",
              desc: "Monitor sentiment changes as they happen across social platforms.",
            },
            {
              icon: "📈",
              title: "Trend Prediction",
              desc: "Visualize trends and future sentiment patterns with AI predictions.",
            },
            {
              icon: "🔍",
              title: "Hashtag Analysis",
              desc: "Analyze trending hashtags with engagement and mentions data.",
            },
            {
              icon: "🌍",
              title: "Demographic Insights",
              desc: "Understand audience sentiment by age, region, and platform.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#2147B3] rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
