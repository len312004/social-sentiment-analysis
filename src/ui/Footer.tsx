import React from "react";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-800/30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-slate-200">
          <div>
            <h5 className="font-semibold mb-4">Platform</h5>
            <ul className="space-y-2 text-sm">
              <li>Measure</li>
              <li>Analyse</li>
              <li>Engagement</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Why</h5>
            <ul className="space-y-2 text-sm">
              <li>Use cases</li>
              <li>Privacy</li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">SocialPulse</h5>
            <p className="text-sm max-w-xs">Advanced social media sentiment analysis for the Philippines market.</p>
          </div>
        </div>

        <div className="mt-8 text-center text-slate-400 text-sm">
          © 2025 SocialPulse. All rights reserved. SocialPulse is a trademark of appsemble.
        </div>
      </div>
    </footer>
  );
}
