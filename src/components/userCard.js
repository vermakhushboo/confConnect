import React from 'react';
import './userCard.css';

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-info">
        <img src="https://via.placeholder.com/50" alt="User" />
        <div className="user-details">
          <h3 className="user-name">John Doe</h3>
          <p className="user-company">Company Name</p>
          <p className="user-designation">Designation</p>
          <p className="user-expertise">Expertise: abc, def..</p>
        </div>
        <button className="view-profile-button">View Profile</button>
      </div>
    </div>
  );
}

export default UserCard;
