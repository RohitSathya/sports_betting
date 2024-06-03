import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGamepad, FaMoneyBill, FaChartBar, FaCog, FaUser, FaUserFriends, FaEnvelope, FaPlayCircle, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Sports Betting</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className={`md:flex md:items-center md:space-x-4 w-full md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="block py-2 px-4 text-white hover:bg-blue-600"><FaHome className="inline mr-2" />Home</Link>
          <Link to="/live-betting" className="block py-2 px-4 text-white hover:bg-blue-600"><FaPlayCircle className="inline mr-2" />Live Betting</Link>
          <Link to="/games" className="block py-2 px-4 text-white hover:bg-blue-600"><FaGamepad className="inline mr-2" />Games</Link>
          <Link to="/betting" className="block py-2 px-4 text-white hover:bg-blue-600"><FaMoneyBill className="inline mr-2" />Betting</Link>
          <Link to="/results" className="block py-2 px-4 text-white hover:bg-blue-600"><FaChartBar className="inline mr-2" />Results</Link>
          <Link to="/settings" className="block py-2 px-4 text-white hover:bg-blue-600"><FaCog className="inline mr-2" />Settings</Link>
          <Link to="/dashboard" className="block py-2 px-4 text-white hover:bg-blue-600"><FaUser className="inline mr-2" />Dashboard</Link>
          <Link to="/referral" className="block py-2 px-4 text-white hover:bg-blue-600"><FaUserFriends className="inline mr-2" />Referral</Link>
          <Link to="/profile" className="block py-2 px-4 text-white hover:bg-blue-600"><FaUser className="inline mr-2" />Profile</Link>
          <Link to="/contact" className="block py-2 px-4 text-white hover:bg-blue-600"><FaEnvelope className="inline mr-2" />Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
