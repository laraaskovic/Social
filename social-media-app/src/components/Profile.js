import React from 'react';
import './styles.css';

const Profile = ({ user }) => {
  // Check if user object is defined
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Welcome, {user.name}!</h2>
        <img src={user.avatar} alt="Profile Avatar" />
      </div>
      <div className="profile-info">
        <p>Email: {user.email}</p>
        <p>Location: {user.location}</p>
        <p>About Me: {user.bio}</p>
      </div>
      <button className="edit-profile-btn">Edit Profile</button>
    </div>
  );
};

export default Profile;
