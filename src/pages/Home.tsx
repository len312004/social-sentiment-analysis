import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-y-auto">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-blue-800 bg-opacity-40 backdrop-blur-md sticky top-0 z-50 shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">SocialPulse</h1>
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/dashboard" className="hover:text-yellow-300 transition">Dashboard</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[85vh] text-center px-6">
        <h2 className="text-5xl font-extrabold mb-6 animate-pulse">Welcome to SocialPulse</h2>
        <p className="max-w-2xl text-lg mb-8 text-gray-200">
          Analyze social media sentiment, explore engagement metrics, and track trends with AI-powered insights.
        </p>
        <Link
          to="/dashboard"
          className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition shadow-lg"
        >
          Go to Dashboard
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-blue-800 py-20 text-center">
        <h3 className="text-3xl font-bold mb-10">Why Choose SocialPulse?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          <div className="bg-blue-700 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-3">Real-Time Analytics</h4>
            <p className="text-gray-200">
              Get live insights on sentiment trends across social networks.
            </p>
          </div>
          <div className="bg-blue-700 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-3">AI-Powered Insights</h4>
            <p className="text-gray-200">
              Use advanced models to extract and understand emotions in data.
            </p>
          </div>
          <div className="bg-blue-700 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-3">Custom Dashboards</h4>
            <p className="text-gray-200">
              Design and personalize your analytics dashboard easily.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-blue-900 border-t border-blue-600">
        <p className="text-sm text-gray-300">
          © 2025 SocialPulse. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
