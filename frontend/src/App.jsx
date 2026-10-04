import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import EcoActions from './pages/EcoActions';
import Challenges from './pages/Challenges';
import Community from './pages/Community';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f0fdf4] text-emerald-950 font-sans pb-20 md:pb-0">
        <Navbar />
        <main className="container mx-auto px-4 py-6 max-w-md md:max-w-4xl">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/actions" element={<EcoActions />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;