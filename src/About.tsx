function About() {
  const cards = [
    { title: 'Real-time Tracking', desc: 'Monitor sentiment changes as they happen across all platforms.', color: 'bg-green-500' },
    { title: 'Trend Prediction', desc: 'Sentiment rises steadily from February, peaks in May, and slightly declines in June.', color: 'bg-blue-500' },
    { title: 'Hashtag Analysis', desc: 'List of trending hashtags with mention counts. Hashtag 1 → mentions: 23.2K', color: 'bg-pink-500' },
    { title: 'Demographic Insights', desc: 'Age group and location-based sentiment analysis for targeted insights.', color: 'bg-orange-500' },
  ]

  return (
    <section className="px-16 py-24 text-center">
      <h2 className="text-5xl font-extrabold mb-4">Comprehensive Social Analytics</h2>
      <p className="text-gray-200 mb-16 text-lg">Get deep insights into social media sentiment with our advanced analytics platform</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {cards.map((card, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white/10 hover:scale-105 transition-transform">
            <div className={`w-10 h-10 mx-auto mb-4 rounded-full ${card.color}`}></div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-300 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
