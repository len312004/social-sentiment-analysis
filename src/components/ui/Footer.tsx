import React from "react";

export default function Footer() {
  return (
    <footer className="footer-bg pt-12 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          <div>
            <h4 className="font-semibold mb-3">Platform</h4>
            <ul className="space-y-2 text-muted">
              <li>Measure</li>
              <li>Analyse</li>
              <li>Engagement</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Why</h4>
            <ul className="space-y-2 text-muted">
              <li>Use cases</li>
              <li>Privacy</li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-muted">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">SocialPulse</h4>
            <p className="text-muted">Advanced social media sentiment analysis for the Philippines market.</p>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center text-sm text-muted">
          © 2025 SocialPulse. All rights reserved. SocialPulse is a trademark of appsemble
        </div>
      </div>
    </footer>
  );
}
