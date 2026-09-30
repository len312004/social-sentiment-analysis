function Footer() {
  return (
    <footer className="bg-dark-blue py-16 px-16 mt-12 text-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">SocialPulse</h3>
          <p>Advanced social media sentiment analysis for the Philippines market.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Platform</h4>
          <ul className="space-y-1">
            <li>Measure</li>
            <li>Analyse</li>
            <li>Engagement</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Why</h4>
          <ul className="space-y-1">
            <li>Use cases</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Legal</h4>
          <ul className="space-y-1">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 SocialPulse. All rights reserved. SocialPulse is a trademark of appsemble.
      </div>
    </footer>
  )
}

export default Footer
