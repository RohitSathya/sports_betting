import React from 'react';

function Results() {
  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-4xl font-bold mb-6">Results</h2>
      <p className="mb-4">Check the latest results of your bets.</p>
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
        <div className="space-y-4">
          {/* Example Result */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold">Game 1</h3>
            <p className="mb-2">Your Bet: $50</p>
            <p className="mb-2">Result: Win</p>
            <p className="font-bold text-green-500">Payout: $100</p>
          </div>
          {/* Repeat similar blocks for more results */}
        </div>
      </div>
    </div>
  );
}

export default Results;
