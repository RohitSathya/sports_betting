import React from 'react';

function Settings() {
  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-4xl font-bold mb-6">Settings</h2>
      <p className="mb-4">Manage your account settings.</p>
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-bold">Username</label>
            <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter username" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" placeholder="Enter email" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold">Password</label>
            <input type="password" className="w-full p-2 border rounded-lg" placeholder="Enter password" />
          </div>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
