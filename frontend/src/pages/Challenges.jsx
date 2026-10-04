import React, { useState } from 'react';
import { Target, Clock, X, Users, ArrowUpRight } from 'lucide-react';

const challenges = [
  { id: 'plastic-free', type: 'MONTHLY SPRINT', days: 9, title: '30-Day Plastic-Free', description: 'Skip single-use packaging and help divert 10,000 items from landfill.', members: 1420, progress: 72, reward: '250 pts + Plastic-Free badge', steps: ['Carry a reusable bag, cup, or container.', 'Log a plastic-free choice each day.', 'Invite a friend to join the community goal.'] },
  { id: 'walk-roll', type: 'WEEKLY CHALLENGE', days: 4, title: 'Walk, Roll, or Ride', description: 'Replace three short car trips with walking, cycling, or public transit.', members: 864, progress: 48, reward: '120 pts + Green Commuter badge', steps: ['Choose an alternative for three trips.', 'Log each low-carbon journey.', 'Share your favorite route with the community.'] },
  { id: 'water-wise', type: '7-DAY CHALLENGE', days: 6, title: 'Water-Wise Week', description: 'Build simple water-saving habits at home and outdoors.', members: 638, progress: 61, reward: '100 pts + Water Saver badge', steps: ['Try a five-minute shower.', 'Turn off the tap while brushing.', 'Reuse water for plants when practical.'] },
  { id: 'plant-powered', type: 'COMMUNITY GOAL', days: 18, title: 'Plant-Powered Plates', description: 'Share five plant-forward meals and help the community reach 5,000 meals.', members: 1106, progress: 83, reward: '200 pts + Plant Powered badge', steps: ['Enjoy and log five plant-forward meals.', 'Try a seasonal ingredient.', 'Share a recipe with the community.'] },
  { id: 'energy-reset', type: 'WEEKLY CHALLENGE', days: 3, title: 'Home Energy Reset', description: 'Find small ways to cut wasted electricity throughout your home.', members: 492, progress: 35, reward: '90 pts + Energy Saver badge', steps: ['Switch off unused lights.', 'Unplug idle chargers and devices.', 'Wash one load with cold water.'] },
];

export default function Challenges() {
  const [detailsId, setDetailsId] = useState(null);
  const [joined, setJoined] = useState(() => JSON.parse(localStorage.getItem('ecoaction-joined-challenges') || '[]'));
  const selected = challenges.find((challenge) => challenge.id === detailsId);

  const toggleJoin = (id) => {
    const next = joined.includes(id) ? joined.filter((joinedId) => joinedId !== id) : [...joined, id];
    localStorage.setItem('ecoaction-joined-challenges', JSON.stringify(next));
    setJoined(next);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <header className="flex items-end justify-between gap-3"><div><h1 className="text-2xl font-bold text-emerald-950 mb-1">Community Challenges</h1><p className="text-sm text-emerald-700/70">Build greener habits together and earn rewards.</p></div><span className="shrink-0 rounded-full bg-emerald-100 px-3 py-2 text-xs font-bold text-emerald-800">{joined.length} joined</span></header>
      <div className="grid gap-4 sm:grid-cols-2">
        {challenges.map((challenge) => {
          const isJoined = joined.includes(challenge.id);
          return <article key={challenge.id} className="rounded-3xl border border-emerald-50 border-t-4 border-t-emerald-400 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-2"><span className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800"><Target size={12} /> {challenge.type}</span><span className="flex items-center gap-1 text-xs font-semibold text-rose-500"><Clock size={12} /> {challenge.days} days left</span></div>
            <h2 className="mb-2 text-xl font-bold">{challenge.title}</h2><p className="mb-5 text-sm text-emerald-700/70">{challenge.description}</p>
            <div className="mb-2 flex justify-between text-xs font-bold text-emerald-900"><span className="flex items-center gap-1"><Users size={13} /> {challenge.members.toLocaleString()} participating</span><span>{challenge.progress}%</span></div>
            <div className="mb-4 h-2.5 w-full rounded-full bg-emerald-50"><div className="h-2.5 rounded-full bg-emerald-500" style={{ width: `${challenge.progress}%` }} /></div>
            <div className="mb-4 rounded-xl bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800">🏆 Reward: {challenge.reward}</div>
            <button onClick={() => setDetailsId(challenge.id)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-50 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100">{isJoined ? 'Joined · View details' : 'Explore challenge'} <ArrowUpRight size={16} /></button>
          </article>;
        })}
      </div>
      {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/50 p-4" onClick={() => setDetailsId(null)}><section role="dialog" aria-modal="true" aria-labelledby="challenge-details-title" className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl" onClick={(event) => event.stopPropagation()}>
        <div className="mb-4 flex items-start justify-between gap-4"><div><span className="text-xs font-bold uppercase tracking-wide text-emerald-600">{selected.type}</span><h2 id="challenge-details-title" className="mt-1 text-xl font-bold">{selected.title}</h2></div><button onClick={() => setDetailsId(null)} aria-label="Close challenge details" className="rounded-full p-1 hover:bg-emerald-50"><X size={20} /></button></div>
        <p className="mb-4 text-sm text-emerald-700/80">{selected.description}</p><p className="mb-2 text-sm font-bold">Your challenge checklist</p><ul className="mb-5 list-disc space-y-2 pl-5 text-sm text-emerald-900">{selected.steps.map((step) => <li key={step}>{step}</li>)}</ul><div className="mb-5 rounded-xl bg-amber-50 px-3 py-3 text-sm font-bold text-amber-800">🏆 {selected.reward}</div>
        <button onClick={() => toggleJoin(selected.id)} aria-pressed={joined.includes(selected.id)} className="w-full rounded-xl bg-emerald-900 py-3 text-sm font-bold text-white transition hover:bg-emerald-800">{joined.includes(selected.id) ? 'Joined · Leave Challenge' : 'Join Challenge'}</button>
      </section></div>}
    </div>
  );
}
