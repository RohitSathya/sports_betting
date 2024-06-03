import React from 'react';
import { Link } from 'react-router-dom';
import g1 from '../images/football.jpg';
import g2 from '../images/basketball.jpg';
import g3 from '../images/baseball.jpg';
import g4 from '../images/tennis.jpg';

const featuredGames = [
  { name: 'Football', image: g1 },
  { name: 'Basketball', image: g2 },
  { name: 'Baseball', image: g3 },
  { name: 'Tennis', image: g4 },
];

const Home = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-4xl font-bold mb-6">Welcome to Sports Betting</h2>
      <p className="mb-4">Bet on your favorite sports and win big!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mb-8">
        Get Started
      </button>

      <section className="mb-10">
        <h3 className="text-3xl font-bold mb-4">Featured Games</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredGames.map((game, index) => (
            <div key={index} className="relative bg-cover bg-center rounded-lg shadow-lg h-64" style={{ backgroundImage: `url(${game.image})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">{game.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-3xl font-bold mb-4">Current Promotions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-2">50% Welcome Bonus</h4>
            <p>Sign up today and get a 50% bonus on your first deposit!</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-2">Free Bet Fridays</h4>
            <p>Place a bet on Friday and get a free bet of the same value!</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-2">Refer a Friend</h4>
            <p>Invite your friends to join and earn rewards for each referral!</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-4">User Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <p className="italic mb-2">"This is the best sports betting site I've ever used! Great odds and easy to use!"</p>
            <p className="font-bold">- John Doe</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <p className="italic mb-2">"I love the promotions and the variety of sports available for betting. Highly recommend!"</p>
            <p className="font-bold">- Jane Smith</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <p className="italic mb-2">"Fantastic customer service and fast payouts. I couldn't be happier!"</p>
            <p className="font-bold">- Mike Johnson</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
