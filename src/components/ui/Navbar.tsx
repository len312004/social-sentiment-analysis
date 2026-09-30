import React from "react";

export default function Navbar() {
  return (
    <header className="bg-blue-950">
      <div className="container flex items-center justify-between py-5">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">SocialPulse</h1>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-white text-sm">
            <li className="hover:text-blue-200 cursor-pointer">Home</li>
            <li className="hover:text-blue-200 cursor-pointer">About</li>
            <li className="hover:text-blue-200 cursor-pointer">Calendar</li>
            <li className="hover:text-blue-200 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
