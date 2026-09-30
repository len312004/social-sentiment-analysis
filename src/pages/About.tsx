function About() {
  return (
    <div className="px-10 md:px-24 py-16 text-center">
      <h1 className="text-5xl font-bold mb-6">About SocialPulse</h1>
      <p className="max-w-2xl mx-auto text-gray-200 text-lg">
        SocialPulse is an AI-powered platform designed to analyze and visualize
        social media sentiment across the Philippines. Our goal is to empower
        businesses, organizations, and individuals with real-time insights for
        smarter decision-making.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-white/10">
          <h3 className="font-semibold mb-2">Mission</h3>
          <p className="text-gray-300 text-sm">To provide actionable social sentiment analytics with accuracy and transparency.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/10">
          <h3 className="font-semibold mb-2">Vision</h3>
          <p className="text-gray-300 text-sm">To become the leading platform for social media trend analysis in the Philippines.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/10">
          <h3 className="font-semibold mb-2">Values</h3>
          <p className="text-gray-300 text-sm">Innovation, collaboration, and integrity in every insight we deliver.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
