import { Link } from "react-router-dom";
import { useRef } from "react";

export default function LandingPage() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 bg-white/70 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl font-bold text-blue-700">SocialPulse</h1>
        <nav className="flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>

          {/* UPDATED ABOUT LINK */}
          <button 
            onClick={scrollToFooter} 
            className="hover:text-blue-600"
          >
            About
          </button>

          <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <Link to="/settings" className="hover:text-blue-600">Settings</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-8 pt-40 pb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">
          Track Social Media Sentiment in the Philippines
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Real-time sentiment analysis across Facebook, Instagram, and X (Twitter) — powered by advanced analytics and predictive insights.
        </p>
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Explore Dashboard
        </Link>
      </section>

      {/* Analytics Overview */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          { title: "Real-time Tracking", desc: "Monitor sentiment changes as they happen across all platforms." },
          { title: "Trend Prediction", desc: "See how sentiment evolves monthly and identify emerging topics." },
          { title: "Hashtag Analysis", desc: "Find top-trending hashtags and engagement metrics." },
          { title: "Demographic Insights", desc: "Discover sentiment by location, age, and gender." },
          { title: "Positive Sentiment", desc: "72% average positive sentiment across posts analyzed." },
          { title: "Daily Mentions", desc: "Over 37K+ posts processed per day for accurate tracking." },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <h3 className="font-semibold text-xl text-blue-700 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer 
        ref={footerRef} 
        className="text-center py-6 bg-white/60 border-t border-gray-200"
      >
        <p className="text-gray-500 text-sm">
          © 2025 SocialPulse. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
  