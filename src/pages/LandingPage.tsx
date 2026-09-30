import React from "react";
import { Link } from "react-router-dom"; // ✅ Added
import Navbar from "../components/Navbar";
import SocialCard from "../components/SocialCard";

const Hero = () => (
  <section className="pt-6 pb-16">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-8">
      <div className="w-full lg:w-1/2">
        <h1 className="text-6xl lg:text-8xl leading-tight font-extrabold text-white">
          Track Social Media Sentiment in the Philippines
        </h1>

        <p className="mt-6 text-lg max-w-xl text-blue-100">
          Real-time sentiment analysis across Facebook, Instagram, and X (Twitter) with advanced analytics
          and predictive insights.
        </p>

        {/* ✅ Clickable button to SocialPulse Dashboard */}
        <Link
          to="/socialpulse-dashboard"
          className="mt-8 inline-block bg-white text-blue-800 font-semibold rounded-lg px-6 py-3 shadow-md hover:translate-y-[-1px] transition"
        >
          Explore Dashboard
        </Link>
      </div>

      <div className="w-full lg:w-1/2 flex justify-end items-start gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-md lg:max-w-none">
          <SocialCard title="Facebook" subtitle="Social Monitoring" icon="facebook" />
          <SocialCard title="Instagram" subtitle="Visual Analytics" icon="instagram" />
          <SocialCard title="X (Twitter)" subtitle="Trend Analysis" icon="twitter" />
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="pt-12 pb-20">
    <div className="max-w-[1100px] mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold text-white mb-4">Comprehensive Social Analytics</h2>
      <p className="text-blue-100 max-w-2xl mx-auto mb-10">
        Get deep insights into social media sentiment with our advanced analytics platform.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Real-time Tracking",
            text: "Monitor sentiment changes as they happen across all platforms",
            color: "bg-green-400",
          },
          {
            title: "Trend Prediction",
            text: "Sentiment rises steadily from February, peaks in May, and slightly declines in June",
            color: "bg-sky-400",
          },
          {
            title: "Hashtag Analysis",
            text: "List of trending hashtags with mention counts. Hashtag 1 → mentions: 23.2K",
            color: "bg-fuchsia-400",
          },
          {
            title: "Demographic Insights",
            text: "Age group and location-based sentiment analysis for targeted insights",
            color: "bg-orange-400",
          },
        ].map((f) => (
          <div key={f.title} className="bg-white/6 rounded-2xl p-8 shadow-inner">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div className="w-6 h-6 rounded" style={{ background: f.color }} />
            </div>
            <h3 className="text-lg text-white font-semibold text-center mb-3">{f.title}</h3>
            <p className="text-blue-100 text-sm text-center">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-12">
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="bg-white/6 rounded-2xl p-12 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="text-5xl font-extrabold text-white">72%</div>
            <div className="text-blue-100 mt-2">Average Positive Sentiment</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-white">37K+</div>
            <div className="text-blue-100 mt-2">Daily Mentions Tracked</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-white">95%</div>
            <div className="text-blue-100 mt-2">Prediction Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="mt-12">
    <div className="bg-blue-900/40 py-12">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-blue-100">
        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li>Measure</li>
            <li>Analyse</li>
            <li>Engagement</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Why</h4>
          <ul className="space-y-2 text-sm">
            <li>Use cases</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">SocialPulse</h4>
          <p className="text-sm text-blue-100">
            Advanced social media sentiment analysis for the Philippines market.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 mt-8 border-t border-white/10 pt-6 text-center text-blue-100">
        © 2025 SocialPulse. All rights reserved. SocialPulse is a trademark of appssemble
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#183c99] via-[#1e52d3] to-[#162a83]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Footer />
      </main>
    </div>
  );
}
