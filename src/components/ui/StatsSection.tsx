import React from "react";

export default function StatsSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-800 to-blue-700">
      <div className="container">
        <div className="rounded-xl bg-blue-700 bg-opacity-60 p-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold">72%</h3>
              <p className="text-muted">Average Positive Sentiment</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold">37K+</h3>
              <p className="text-muted">Daily Mentions Tracked</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold">95%</h3>
              <p className="text-muted">Prediction Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
