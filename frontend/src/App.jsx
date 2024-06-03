import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import Betting from './pages/Betting';
import Results from './pages/Results';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Referral from './pages/Referral';
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import LiveBetting from './pages/LiveBetting';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex flex-col">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/referral" element={<Referral/>} />
            <Route path="/betting" element={<Betting />} />
            <Route path="/results" element={<Results />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/live-betting" element={<LiveBetting/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
