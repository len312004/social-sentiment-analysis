import React from "react";
import { Card } from "./card";

export default function FeaturesSection() {
  return (
    <section className="section-pad bg-blue-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Comprehensive Social Analytics</h2>
        <p className="text-muted max-w-2xl mx-auto mb-12">
          Get deep insights into social media sentiment with our advanced analytics platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card>
            <div className="w-12 h-12 rounded-full bg-green-400 mx-auto mb-4"></div>
            <h3 className="font-semibold mb-2">Real-time Tracking</h3>
            <p className="card-desc text-sm">Monitor sentiment changes as they happen across all platforms</p>
          </Card>

          <Card>
            <div className="w-12 h-12 rounded-full bg-blue-400 mx-auto mb-4"></div>
            <h3 className="font-semibold mb-2">Trend Prediction</h3>
            <p className="card-desc text-sm">Sentiment rises steadily from February, peaks in May, and slightly declines in June</p>
          </Card>

          <Card>
            <div className="w-12 h-12 rounded-full bg-pink-400 mx-auto mb-4"></div>
            <h3 className="font-semibold mb-2">Hashtag Analysis</h3>
            <p className="card-desc text-sm">List of trending hashtags with mention counts. Hashtag 1 → mentions: 23.2K</p>
          </Card>

          <Card>
            <div className="w-12 h-12 rounded-full bg-orange-400 mx-auto mb-4"></div>
            <h3 className="font-semibold mb-2">Demographic Insights</h3>
            <p className="card-desc text-sm">Age group and location-based sentiment analysis for targeted insights.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
