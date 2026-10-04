import React from 'react';
import { Zap, Droplets, Trash2, Bike } from 'lucide-react';

export default function Profile() {
  return (
    <div className="space-y-6 animate-fade-in">
      <header className="text-center mb-6">
        <div className="w-20 h-20 bg-emerald-200 rounded-full mx-auto mb-3 border-4 border-white shadow-sm"></div>
        <h1 className="text-2xl font-bold text-emerald-950">Your Impact</h1>
        <p className="text-sm text-emerald-600 font-medium">Joined June 2024</p>
      </header>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-50 text-center">
        <h3 className="text-sm font-bold text-emerald-900 mb-6">SAVED THIS MONTH</h3>
        <div className="w-40 h-40 mx-auto rounded-full border-[12px] border-emerald-100 border-t-emerald-500 flex flex-col items-center justify-center mb-6">
          <span className="text-3xl font-black text-emerald-950">342<span className="text-lg">kg</span></span>
          <span className="text-xs font-semibold text-emerald-600">CO₂e AVOIDED</span>
        </div>
        <div className="flex justify-between text-xs font-bold text-emerald-900">
          <span>Target: 400 kg/mo</span>
          <span>85% Achieved</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Category Breakdown</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-teal-50 p-4 rounded-2xl">
            <Bike size={20} className="text-teal-600 mb-2" />
            <div className="text-sm font-bold">Mobility</div>
            <div className="text-xs text-teal-700">180 km biked</div>
          </div>
          <div className="bg-emerald-50 p-4 rounded-2xl">
            <Zap size={20} className="text-emerald-600 mb-2" />
            <div className="text-sm font-bold">Energy</div>
            <div className="text-xs text-emerald-700">100% green tariff</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-2xl">
            <Droplets size={20} className="text-blue-600 mb-2" />
            <div className="text-sm font-bold">Water</div>
            <div className="text-xs text-blue-700">300L conserved</div>
          </div>
          <div className="bg-amber-50 p-4 rounded-2xl">
            <Trash2 size={20} className="text-amber-600 mb-2" />
            <div className="text-sm font-bold">Waste</div>
            <div className="text-xs text-amber-700">12 kg diverted</div>
          </div>
        </div>
      </div>
    </div>
  );
}
