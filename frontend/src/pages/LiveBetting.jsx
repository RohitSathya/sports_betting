import React, { useState, useEffect } from 'react';
import axios from 'axios';
import g1 from '../images/football.jpg';
import g2 from '../images/basketball.jpg';
import g3 from '../images/baseball.jpg';
import g4 from '../images/tennis.jpg';
const liveGames = [
  { id: 1, name: 'Football', image: g1, odds: 1.5 },
  { id: 2, name: 'Basketball', image: g2, odds: 2.0 },
  { id: 3, name: 'Baseball', image: g3, odds: 1.8 },
  { id: 4, name: 'Tennis', image: g4, odds: 2.2 },
];

const LiveBetting = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    // Simulating real-time data fetching
    const fetchLiveGames = () => {
      // In a real application, replace with an API call to fetch live game data
      setGames(liveGames);
    };

    fetchLiveGames();
    const interval = setInterval(fetchLiveGames, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleBet = (game) => {
    setSelectedGame(game);
    // Add bet placement logic here
    console.log(`Placed bet on ${game.name} with odds ${game.odds}`);
  };

  return (
    <section className="container mx-auto text-center py-10">
      <h2 className="text-4xl font-bold mb-6">Live Betting</h2>
      <p className="mb-4">Place your bets in real-time on live games and events!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {games.map((game) => (
          <div key={game.id} className="relative bg-cover bg-center rounded-lg shadow-lg h-64" style={{ backgroundImage: `url(${game.image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
              <h2 className="text-2xl font-bold text-white mb-2">{game.name}</h2>
              <p className="text-lg text-white mb-4">Odds: {game.odds}</p>
              <button
                onClick={() => handleBet(game)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
              >
                Place Bet
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Bet Confirmation</h3>
          <p className="mb-2">You placed a bet on <strong>{selectedGame.name}</strong> with odds of <strong>{selectedGame.odds}</strong>.</p>
          <button
            onClick={() => setSelectedGame(null)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          >
            Cancel Bet
          </button>
        </div>
      )}
    </section>
  );
};

export default LiveBetting;
