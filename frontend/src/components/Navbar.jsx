import React from 'react';
import { Leaf, User, Home, Zap, Target, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => 
    location.pathname === path 
      ? "text-emerald-700 bg-emerald-100 font-semibold" 
      : "text-emerald-600 hover:bg-emerald-50";

  return (
    <nav className="bg-white shadow-sm border-b border-emerald-100 sticky top-0 z-50 rounded-b-3xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-md md:max-w-4xl">
        <Link to="/" className="flex items-center gap-2 text-emerald-900 font-bold text-xl">
          <Leaf className="text-emerald-500 fill-emerald-500" size={24} /> 
          EcoAction
        </Link>
        
        <div className="hidden md:flex gap-2 font-medium text-sm">
          <Link to="/" className={`px-4 py-2 rounded-full transition ${isActive('/')}`}>Dashboard</Link>
          <Link to="/actions" className={`px-4 py-2 rounded-full transition ${isActive('/actions')}`}>Actions</Link>
          <Link to="/challenges" className={`px-4 py-2 rounded-full transition ${isActive('/challenges')}`}>Challenges</Link>
          <Link to="/community" className={`px-4 py-2 rounded-full transition ${isActive('/community')}`}>Community</Link>
        </div>
        
        <div className="hidden md:block">
          <Link to="/profile" className="bg-emerald-100 text-emerald-800 p-2 rounded-full flex items-center justify-center hover:bg-emerald-200 transition">
            <User size={20} />
          </Link>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-emerald-100 flex justify-around p-3 z-50 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link to="/" className={`p-2 rounded-xl flex flex-col items-center ${isActive('/')}`}><Home size={20} /></Link>
        <Link to="/actions" className={`p-2 rounded-xl flex flex-col items-center ${isActive('/actions')}`}><Zap size={20} /></Link>
        <Link to="/challenges" className={`p-2 rounded-xl flex flex-col items-center ${isActive('/challenges')}`}><Target size={20} /></Link>
        <Link to="/community" className={`p-2 rounded-xl flex flex-col items-center ${isActive('/community')}`}><Users size={20} /></Link>
        <Link to="/profile" className={`p-2 rounded-xl flex flex-col items-center ${isActive('/profile')}`}><User size={20} /></Link>
      </div>
    </nav>
  );
}