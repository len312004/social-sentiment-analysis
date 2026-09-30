import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-800 text-white min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row justify-between items-center px-10 py-20">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight">
            Track Social Media Sentiment in the Philippines
          </h1>
          <p className="mt-6 text-lg">
            Real-time sentiment analysis across Facebook, Instagram, and X (Twitter)
            with advanced analytics and predictive insights.
          </p>
          <button
            onClick={() => navigate("/dashboard")} // ✅ Navigates to the dedicated dashboard route
            className="mt-8 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            Explore Dashboard
          </button>
        </div>

        <div className="flex gap-6 mt-10 md:mt-0">
          {[
            { name: "Facebook", desc: "Social Monitoring", color: "bg-blue-600", icon: "📘" },
            { name: "Instagram", desc: "Visual Analytics", color: "bg-pink-600", icon: "📸" },
            { name: "X (Twitter)", desc: "Trend Analysis", color: "bg-black", icon: "🐦" },
          ].map((platform) => (
            <div
              key={platform.name}
              className={`w-52 h-48 ${platform.color} rounded-2xl flex flex-col justify-center items-center shadow-lg`}
            >
              <span className="text-3xl">{platform.icon}</span>
              <h3 className="font-bold mt-3">{platform.name}</h3>
              <p className="text-sm">{platform.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANALYTICS SECTION */}
      <section className="bg-blue-700 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Comprehensive Social Analytics</h2>
        <p className="text-lg mb-10">
          Get deep insights into social media sentiment with our advanced analytics platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10">
          {[
            { title: "Real-time Tracking", desc: "Monitor sentiment changes as they happen across all platforms.", dot: "bg-green-500" },
            { title: "Trend Prediction", desc: "Sentiment rises steadily from February, peaks in May, and slightly declines in June.", dot: "bg-blue-500" },
            { title: "Hashtag Analysis", desc: "List of trending hashtags with mention counts. Hashtag 1 → mentions: 23.2K.", dot: "bg-pink-500" },
            { title: "Demographic Insights", desc: "Age group and location-based sentiment analysis for targeted insights.", dot: "bg-orange-500" },
          ].map((item) => (
            <div key={item.title} className="bg-blue-600 rounded-2xl p-6 shadow-lg">
              <div className={`w-5 h-5 rounded-full ${item.dot} mx-auto mb-4`}></div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-blue-800 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-5xl font-bold">72%</h3>
          <p className="mt-2 text-gray-200">Average Positive Sentiment</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">37K+</h3>
          <p className="mt-2 text-gray-200">Daily Mentions Tracked</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold">95%</h3>
          <p className="mt-2 text-gray-200">Prediction Accuracy</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
