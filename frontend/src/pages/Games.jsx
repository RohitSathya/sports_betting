import React from 'react';
import g1 from '../images/football.jpg';
import g2 from '../images/basketball.jpg';
import g3 from '../images/baseball.jpg';
import g4 from '../images/tennis.jpg';

const games = [
  { name: 'Football', image: g1 },
  { name: 'Basketball', image: g2 },
  { name: 'Tennis', image: g3 },
  { name: 'Baseball', image: g4 },
];

const Games = () => {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {games.map((game, index) => (
        <div
          key={index}
          className="relative bg-cover bg-center rounded-lg shadow-lg h-64"
          style={{ backgroundImage: `url(${game.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">{game.name}</h2>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Games;
