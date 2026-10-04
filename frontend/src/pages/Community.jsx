import React from 'react';
import { TrendingUp, Medal } from 'lucide-react';

export default function Community() {
  const leaderboard = [
    { rank: 1, name: "Mission District Cyclists", saved: "4,820", tier: "Gold Laurel" },
    { rank: 2, name: "Presidio Green Guardians", saved: "3,950", tier: "Silver Laurel" },
    { rank: 3, name: "Sunset Eco-Warriors", saved: "3,410", tier: "Bronze Laurel" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <header className="flex gap-4 border-b border-emerald-100 pb-2">
        <button className="text-emerald-900 font-bold border-b-2 border-emerald-500 pb-2">Leaderboard</button>
        <button className="text-emerald-400 font-semibold pb-2">Community Feed</button>
      </header>

      <div className="space-y-3">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="text-lg font-bold">Bay Area Leaderboard</h2>
            <p className="text-xs text-emerald-600">Top carbon impact districts this month</p>
          </div>
          <button className="text-xs font-bold text-emerald-600">Full Roster →</button>
        </div>

        {leaderboard.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-50 flex items-center gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              i === 0 ? 'bg-amber-100 text-amber-700' : 
              i === 1 ? 'bg-slate-100 text-slate-700' : 
              'bg-orange-100 text-orange-800'
            }`}>
              {item.rank}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm text-emerald-950">{item.name}</h4>
              <p className="text-xs text-emerald-600 flex items-center gap-1">
                <TrendingUp size={12} /> {item.saved} kg CO₂ saved • {item.tier}
              </p>
            </div>
            <Medal size={20} className={
              i === 0 ? 'text-amber-500' : i === 1 ? 'text-slate-400' : 'text-orange-400'
            } />
          </div>
        ))}
      </div>
    </div>
  );
}