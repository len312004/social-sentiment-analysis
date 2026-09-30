import { motion } from "framer-motion";
import { FaChartLine, FaHashtag, FaUserFriends, FaClock } from "react-icons/fa";

export default function Features() {
  const features = [
    { icon: <FaClock className="text-green-400" />, title: "Real-time Tracking", desc: "Monitor sentiment changes as they happen across all platforms" },
    { icon: <FaChartLine className="text-blue-400" />, title: "Trend Prediction", desc: "Sentiment rises steadily from February, peaks in May, and declines slightly in June" },
    { icon: <FaHashtag className="text-pink-400" />, title: "Hashtag Analysis", desc: "Trending hashtags with mention counts like #Trend1 → mentions: 23.2K" },
    { icon: <FaUserFriends className="text-orange-400" />, title: "Demographic Insights", desc: "Age and location-based sentiment insights for targeted analysis" },
  ];

  return (
    <section className="text-center py-24 px-8">
      <motion.h2
        className="text-4xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Comprehensive Social Analytics
      </motion.h2>
      <motion.p
        className="text-blue-100 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Get deep insights into social media sentiment with our advanced analytics platform
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:bg-white/20 transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl mb-4 flex justify-center">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-blue-100">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
