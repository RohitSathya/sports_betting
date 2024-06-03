import React from 'react';
import referralImage from '../images/referral.webp'; // Add an appropriate image to the project

const Referral = () => {
  return (
    <section className="container mx-auto text-center py-10">
      <h2 className="text-4xl font-bold mb-6">Refer a Friend</h2>
      <p className="mb-4">Invite your friends to join and earn rewards for each referral!</p>
      <img src={referralImage} alt="Refer a Friend" className="mx-auto mb-6 rounded-lg shadow-lg" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold mb-2">Easy to Share</h4>
          <p>Share your referral link with friends through social media, email, or text message.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold mb-2">Track Your Referrals</h4>
          <p>Monitor the status of your referrals and see who has joined and earned you rewards.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold mb-2">Earn Rewards</h4>
          <p>Get rewarded with bonuses, free bets, and more for every successful referral.</p>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-10">
        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
        <ol className="list-decimal list-inside text-left">
          <li className="mb-2">Sign up and get your unique referral link.</li>
          <li className="mb-2">Share your link with friends and family.</li>
          <li className="mb-2">Your friends sign up using your link.</li>
          <li className="mb-2">You both receive rewards when they make their first deposit.</li>
        </ol>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg">
        Get Your Referral Link
      </button>
    </section>
  );
}

export default Referral;
