import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "72%", label: "Average Positive Sentiment" },
    { value: "37K+", label: "Daily Mentions Tracked" },
    { value: "95%", label: "Prediction Accuracy" },
  ];

  return (
    <section className="py-24 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white/10 p-8 rounded-2xl shadow-lg hover:bg-white/20 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold mb-2">{s.value}</h3>
            <p className="text-blue-100">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
