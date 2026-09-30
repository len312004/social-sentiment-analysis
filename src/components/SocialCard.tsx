import React from "react";

export default function SocialCard({ title, icon, color }: { title: string; icon: string; color?: string }){
  return (
    <div className="card p-6 w-48 shadow-2xl">
      <div className="flex flex-col items-center">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white mb-4 ${color ?? 'bg-blue-500'}`}>
          <span className="font-bold text-xl">{icon}</span>
        </div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-slate-200/80 mt-2">Social Monitoring</div>
      </div>
    </div>
  );
}
