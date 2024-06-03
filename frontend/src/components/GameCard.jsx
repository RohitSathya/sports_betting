import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div className="relative bg-cover bg-center rounded-lg shadow-lg h-64" style={{ backgroundImage: `url(${game.image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-2xl font-bold">{game.name}</h2>
      </div>
    </div>
  );
}

export default GameCard;
