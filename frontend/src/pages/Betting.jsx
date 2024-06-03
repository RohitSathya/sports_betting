import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const Betting = () => {
  const [bet, setBet] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);
  const [odds, setOdds] = useState({});
  const [message, setMessage] = useState('');
  const games = [
    { value: 'Football', label: 'Football' },
    { value: 'Basketball', label: 'Basketball' },
    { value: 'Tennis', label: 'Tennis' },
    { value: 'Baseball', label: 'Baseball' }
  ];

  useEffect(() => {
    const fetchOdds = async () => {
      const newOdds = {};
      for (const game of games) {
        // Simulate fetching odds from an API
        const response = await axios.get(`https://api.example.com/odds?game=${game.value}`);
        newOdds[game.value] = response.data.odds;
      }
      setOdds(newOdds);
    };
    fetchOdds();
  }, []);

  const handleBet = (e) => {
    e.preventDefault();
    if (!selectedGame || !bet) {
      setMessage('Please select a game and enter a bet amount.');
      return;
    }
    console.log('Bet submitted:', { game: selectedGame.value, bet });
    setMessage(`Bet of $${bet} placed on ${selectedGame.label}.`);
    setBet('');
    setSelectedGame(null);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#2d3748',
      color: '#ffffff',
      borderColor: '#4a5568',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#ffffff',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#2d3748',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#4a5568' : '#2d3748',
      color: '#ffffff',
    }),
  };

  return (
    <section className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Place Your Bets</h2>
      <form onSubmit={handleBet} className="text-left">
        <div className="mb-4">
          <label className="block mb-2">Select a game:</label>
          <Select
            styles={customStyles}
            className="mb-4 w-full"
            value={selectedGame}
            onChange={setSelectedGame}
            options={games}
            placeholder="Select a game"
          />
          {selectedGame && odds[selectedGame.value] && (
            <div className="mb-4">
              <p className="text-gray-400">Current odds for {selectedGame.label}: {odds[selectedGame.value]}</p>
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Bet Amount:</label>
          <input
            type="number"
            className="input w-full"
            placeholder="Enter your bet amount"
            value={bet}
            onChange={(e) => setBet(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">Submit Bet</button>
      </form>
      {message && <p className="text-green-500 mt-4">{message}</p>}
    </section>
  );
}

export default Betting;
