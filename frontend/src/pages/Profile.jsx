import React from 'react';

const Profile = () => {
  return (
    <section className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="bg-gray-700 p-4 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-2">Account Information</h3>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Balance:</strong> $1,200</p>
      </div>
      
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Account Settings</h3>
        <p><strong>Change Password:</strong></p>
        <input type="password" className="input mb-4" placeholder="New Password" />
        <input type="password" className="input mb-4" placeholder="Confirm New Password" />
        <button className="btn btn-primary">Update Password</button>
      </div>
    </section>
  );
}

export default Profile;
