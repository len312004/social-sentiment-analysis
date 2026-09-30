import React from "react";

export default function StatStrip() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="card p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-5xl font-extrabold">72%</div>
              <div className="text-slate-200">Average Positive Sentiment</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold">37K+</div>
              <div className="text-slate-200">Daily Mentions Tracked</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold">95%</div>
              <div className="text-slate-200">Prediction Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
