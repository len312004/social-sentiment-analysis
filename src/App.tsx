import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

/* Pages */
import SocialPulseDashboard from "./pages/SocialPulseDashboard";
import TrendingHashtags from "./pages/TrendingHashtags";
import WordCloud from "./pages/WordCloud.tsx";
import EngagementMetrics from "./pages/EngagementMetrics";
import FeedbackAnalysis from "./pages/FeedbackAnalysis";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const LandingPage = () => {
  const navigate = useNavigate();

  const platforms = [
    { icon: <FaFacebookF size={35} />, title: "Facebook", desc: "Social Monitoring", bg: "bg-[#1C77F0]" },
    { icon: <FaInstagram size={35} />, title: "Instagram", desc: "Visual Analytics", bg: "bg-gradient-to-br from-pink-500 to-purple-600" },
    { icon: <FaTwitter size={35} />, title: "X (Twitter)", desc: "Trend Analysis", bg: "bg-black" },
  ];

  const analyticsCards = [
    { color: "#20C67A", title: "Real-time Tracking", desc: "Monitor sentiment changes as they happen" },
    { color: "#5DA9FF", title: "Trend Prediction", desc: "Predict future sentiment peaks" },
    { color: "#C14BFA", title: "Hashtag Analysis", desc: "Trending topics & mention counts" },
    { color: "#FF8B37", title: "Demographic Insights", desc: "Targeted audience insights" },
  ];

  const stats = [
    { value: "72%", label: "Average Positive Sentiment" },
    { value: "37K+", label: "Daily Mentions Tracked" },
    { value: "95%", label: "Prediction Accuracy" },
  ];

  return (
    <div className="min-h-screen w-full font-sans text-white bg-gradient-to-b from-[#1A4AC8] to-[#1E57D2] overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-28 py-10">
        <h1 className="text-3xl font-bold tracking-tight">SocialPulse</h1>
        <nav>
          <a className="text-lg font-medium hover:opacity-80 transition cursor-pointer">About</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="px-28 pt-12 pb-32">
        <motion.div
          className="flex justify-between items-center gap-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="max-w-3xl">
            <h2 className="text-6xl font-extrabold leading-tight mb-8">
              Track Social Media Sentiment<br />in the Philippines
            </h2>
            <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-xl">
              Real-time sentiment analysis across Facebook, Instagram, and X (Twitter) with advanced analytics and predictive insights.
            </p>

            <button
              onClick={() => navigate("/dashboard")}
              className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-lg text-lg shadow-lg hover:opacity-90 transition"
            >
              Explore Dashboard
            </button>
          </div>

          <motion.div className="flex gap-8" variants={fadeUp} initial="hidden" whileInView="show">
            {platforms.map((item, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="w-52 h-64 rounded-2xl bg-[#2A59D9]/40 backdrop-blur-md shadow-xl flex flex-col items-center justify-center text-center">
                <div className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm opacity-90 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Analytics Section */}
      <motion.section className="text-center px-28" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-5xl font-extrabold mb-4">Comprehensive Social Analytics</h2>
        <p className="text-lg opacity-90 max-w-3xl mx-auto mb-16">
          Get deep insights into social media sentiment with our advanced analytics platform.
        </p>

        <div className="flex justify-between gap-6">
          {analyticsCards.map((card, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="w-60 p-8 rounded-2xl bg-[#2A59D9]/40 backdrop-blur-md shadow-xl">
              <div className="w-10 h-10 mx-auto mb-4 rounded-md" style={{ backgroundColor: card.color }}></div>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats Bar */}
      <motion.section className="flex justify-center px-28 mt-24" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="w-full max-w-5xl py-14 rounded-3xl bg-[#2A59D9]/25 backdrop-blur-md shadow-xl flex justify-around">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-5xl font-extrabold">{stat.value}</h3>
              <p className="opacity-90 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="mt-28 px-28 pb-10 pt-20 bg-[#0E2E84]/25 backdrop-blur-md">
        <div className="grid grid-cols-3 gap-10">
          <div>
            <h4 className="font-semibold text-lg mb-4">Platform</h4>
            <ul className="opacity-90 space-y-2"><li>Measure</li><li>Analyse</li><li>Engagement</li></ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Why</h4>
            <ul className="opacity-90 space-y-2"><li>Use cases</li><li>Privacy</li><li>Security</li></ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="opacity-90 space-y-2"><li>Terms of Service</li><li>Privacy Policy</li><li>Contact us</li></ul>
          </div>
        </div>

        <div className="border-t border-white/30 mt-10"></div>

        <p className="text-sm text-center opacity-80 mt-6">
          © 2025 SocialPulse. All rights reserved. SocialPulse is a trademark of appsemble
        </p>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<SocialPulseDashboard />} />

        {/* Dashboard Sections */}
        <Route path="/dashboard/trending-hashtags" element={<TrendingHashtags />} />
        <Route path="/dashboard/word-cloud" element={<WordCloud />} />
        <Route path="/dashboard/engagement-metrics" element={<EngagementMetrics />} />
        <Route path="/dashboard/feedback-analysis" element={<FeedbackAnalysis />} />
      </Routes>
    </Router>
  );
}


