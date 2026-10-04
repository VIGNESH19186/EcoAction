import React from 'react';
import { Cloud, CheckCircle, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-emerald-950">Good morning 🌱</h1>
        <p className="text-emerald-700/80 text-sm mt-1">Ready to lower your footprint today?</p>
        <div className="flex gap-4 mt-3 text-xs font-bold text-emerald-700">
          <span className="flex items-center gap-1"><Cloud size={14} className="text-emerald-500" /> AQI 28 • GOOD</span>
          <span>68°F Clear Skies</span>
        </div>
      </header>

      <div className="bg-[#115e3c] text-white p-5 rounded-3xl shadow-sm relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="text-xs font-bold text-emerald-100 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          Live Collective Impact • SAN FRANCISCO
        </div>
        <div className="mb-6">
          <div className="text-4xl font-black">14,280</div>
          <div className="text-xs text-emerald-200">KG CO₂ AVOIDED</div>
          <div className="text-xs text-emerald-400 font-bold mt-1">↑ +18.4% this week</div>
        </div>
        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
          <div>
            <div className="text-xs text-emerald-200">🌲 TREES PLANTED</div>
            <div className="text-xl font-bold">1,840</div>
          </div>
          <div>
            <div className="text-xs text-emerald-200">VOLUNTEERS ACTIVE</div>
            <div className="text-xl font-bold">520</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-3xl shadow-sm border border-emerald-50">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
            ✦ DAILY SPOTLIGHT +25 PTS
          </span>
          <span className="text-xs text-emerald-500 font-semibold">14h left</span>
        </div>
        <h3 className="text-lg font-bold mb-2">Meatless Monday & Bike Commute</h3>
        <p className="text-sm text-emerald-700/70 mb-4">
          Ditch petrol for pedals and choose plant-based meals today to cut -4.2kg carbon.
        </p>
        <button className="w-full bg-[#115e3c] text-white py-3 rounded-2xl font-bold text-sm flex justify-center items-center gap-2 hover:bg-[#0c4a2e] transition">
          <CheckCircle size={18} /> Log Action
        </button>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Upcoming Local Campaigns</h3>
          <button className="text-xs text-emerald-600 font-bold">See All →</button>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-emerald-50 flex gap-4 overflow-x-auto">
          <div className="min-w-[200px] h-24 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-3 flex flex-col justify-end">
            <span className="text-xs font-bold text-emerald-800">Saturday • 9:00 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
