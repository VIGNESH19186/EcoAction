import React, { useState } from 'react';
import { CheckCircle, Droplets, Leaf, Recycle, Bike, Zap, Plus } from 'lucide-react';

const actions = [
  { id: 'reusable-cup', title: 'Bring a reusable cup', description: 'Skip the disposable cup on your next coffee run.', category: 'Waste', points: 20, icon: Recycle, impact: 'Avoid 1 disposable cup' },
  { id: 'bike-commute', title: 'Choose a bike commute', description: 'Swap one car trip for a ride, walk, or public transit journey.', category: 'Transport', points: 40, icon: Bike, impact: 'Save about 2.4 kg CO₂' },
  { id: 'short-shower', title: 'Take a 5-minute shower', description: 'Set a timer and use less hot water today.', category: 'Water', points: 25, icon: Droplets, impact: 'Save up to 40 L of water' },
  { id: 'switch-off', title: 'Unplug idle electronics', description: 'Turn off standby devices and chargers before bed.', category: 'Energy', points: 15, icon: Zap, impact: 'Reduce standby energy use' },
  { id: 'meatless-meal', title: 'Enjoy a plant-based meal', description: 'Choose a meat-free meal made with seasonal ingredients.', category: 'Food', points: 30, icon: Leaf, impact: 'Lower your meal footprint' },
  { id: 'sort-recycling', title: 'Sort your recycling', description: 'Rinse and sort paper, glass, and containers correctly.', category: 'Waste', points: 20, icon: Recycle, impact: 'Keep useful materials in circulation' },
  { id: 'refill-bottle', title: 'Refill your water bottle', description: 'Carry a reusable bottle instead of buying bottled water.', category: 'Waste', points: 15, icon: Droplets, impact: 'Avoid a single-use bottle' },
  { id: 'plant-native', title: 'Plant something native', description: 'Add a native plant to a balcony, garden, or shared space.', category: 'Nature', points: 50, icon: Leaf, impact: 'Support local pollinators' },
];

export default function EcoActions() {
  const [logged, setLogged] = useState(() => JSON.parse(localStorage.getItem('ecoaction-logged-actions') || '[]'));
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(actions.map((action) => action.category))];
  const visibleActions = filter === 'All' ? actions : actions.filter((action) => action.category === filter);

  const logAction = (id) => {
    if (logged.includes(id)) return;
    const next = [...logged, id];
    localStorage.setItem('ecoaction-logged-actions', JSON.stringify(next));
    setLogged(next);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <header className="flex justify-between items-end gap-3">
        <div><h1 className="text-2xl font-bold text-emerald-950">Eco Actions</h1><p className="text-sm text-emerald-700/70 mt-1">Small daily choices add up. Log an action to earn points.</p></div>
        <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-2 text-xs font-bold text-emerald-800">{logged.length} completed</span>
      </header>
      <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Filter actions by category">
        {categories.map((category) => <button key={category} onClick={() => setFilter(category)} aria-pressed={filter === category} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${filter === category ? 'bg-emerald-900 text-white' : 'bg-white text-emerald-800 hover:bg-emerald-100'}`}>{category}</button>)}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {visibleActions.map(({ id, title, description, category, points, icon: Icon, impact }) => {
          const isLogged = logged.includes(id);
          return <article key={id} className="flex flex-col rounded-3xl border border-emerald-50 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800"><Icon size={21} /></div><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">+{points} pts</span></div>
            <span className="mb-1 text-xs font-bold uppercase tracking-wide text-emerald-600">{category}</span><h2 className="mb-2 text-lg font-bold">{title}</h2><p className="mb-4 flex-1 text-sm leading-relaxed text-emerald-700/75">{description}</p>
            <div className="mb-4 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800">🌱 {impact}</div>
            <button onClick={() => logAction(id)} disabled={isLogged} aria-pressed={isLogged} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-900 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 disabled:cursor-default disabled:bg-emerald-100 disabled:text-emerald-800">{isLogged ? <><CheckCircle size={17} /> Completed</> : <><Plus size={17} /> Log this action</>}</button>
          </article>;
        })}
      </div>
    </div>
  );
}
