import React from "react";

export default function FeatureCard({ title, text, color = "bg-indigo-500" }) {
  return (
    <div className="card p-8 text-center">
      <div className={`w-10 h-10 mx-auto rounded-md ${color} mb-5 flex items-center justify-center`}></div>
      <h4 className="font-semibold mb-3">{title}</h4>
      <p className="text-sm text-slate-200 leading-relaxed">{text}</p>
    </div>
  );
}
