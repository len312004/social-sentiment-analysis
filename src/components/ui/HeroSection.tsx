import React from "react";
import { Button } from "./button";

export default function HeroSection() {
  return (
    <section className="hero-gradient" aria-label="hero">
      <div className="container section-pad">
        <div className="md:flex md:items-center md:justify-between">
          {/* left */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Track Social <br /> Media Sentiment <br /> in the Philippines
            </h2>

            <p className="text-lg text-muted max-w-2xl mb-8">
              Real-time sentiment analysis across Facebook, Instagram, and X (Twitter)
              with advanced analytics and predictive insights.
            </p>

            <div>
              <Button>Explore Dashboard</Button>
            </div>
          </div>

          {/* right - cards */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="flex flex-wrap justify-end gap-6">
              {/* Facebook card */}
              <div className="card w-56 text-center p-8">
                <div className="bg-blue-500 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-4">
                  <i className="fab fa-facebook-f text-white"></i>
                </div>
                <h3 className="font-semibold text-white">Facebook</h3>
                <p className="card-desc text-sm mt-2">Social Monitoring</p>
              </div>

              {/* Instagram card */}
              <div className="card w-56 text-center p-8">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-4">
                  <i className="fab fa-instagram text-white"></i>
                </div>
                <h3 className="font-semibold text-white">Instagram</h3>
                <p className="card-desc text-sm mt-2">Visual Analytics</p>
              </div>

              {/* X card */}
              <div className="card w-56 text-center p-8 self-end">
                <div className="bg-black rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-4">
                  <i className="fab fa-x-twitter text-white"></i>
                </div>
                <h3 className="font-semibold text-white">X (Twitter)</h3>
                <p className="card-desc text-sm mt-2">Trend Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
