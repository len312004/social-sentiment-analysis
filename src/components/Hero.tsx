import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-12 py-24 scroll-smooth">
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl font-extrabold leading-tight mb-6">
          Track Social Media Sentiment <br /> in the Philippines
        </h1>
        <p className="text-lg text-blue-100 mb-8">
          Real-time sentiment analysis across Facebook, Instagram, and X (Twitter)
          with advanced analytics and predictive insights.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#1840A4] px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          Explore Dashboard
        </motion.button>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card icon={<FaFacebookF />} title="Facebook" subtitle="Social Monitoring" />
        <Card icon={<FaInstagram />} title="Instagram" subtitle="Visual Analytics" />
        <Card icon={<FaTwitter />} title="X (Twitter)" subtitle="Trend Analysis" />
      </motion.div>
    </section>
  );
}

function Card({ icon, title, subtitle }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center shadow-lg hover:bg-white/20 transition"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-blue-100">{subtitle}</p>
    </motion.div>
  );
}
