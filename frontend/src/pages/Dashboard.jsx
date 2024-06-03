import React from 'react';

function Dashboard() {
  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-4xl font-bold mb-6">Dashboard</h2>
      <p className="mb-4">Overview of your betting activity.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Dashboard Card */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Total Bets</h3>
          <p className="text-4xl font-bold">15</p>
        </div>
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Total Wins</h3>
          <p className="text-4xl font-bold">8</p>
        </div>
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Total Payout</h3>
          <p className="text-4xl font-bold">$500</p>
        </div>
        {/* Repeat similar blocks for more dashboard statistics */}
      </div>
    </div>
  );
}

export default Dashboard;
