import React from "react";
import "./userCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <img src="user.profileImage || https://via.placeholder.com/50" alt="User" />
        <div className="user-details">
        <h3 className="user-name">{user.UserInfo.name}</h3>
          {/* below line to be removed  */}
          <p className="user-email">{user.UserInfo.email}</p> 
          {/* <p className="user-company">{user.companyName || 'Company Name'}</p>
          <p className="user-designation">{user.designation}</p>
          <p className="user-expertise">Expertise: {user.expertise.join(', ')}</p> */}
        </div>
        <button className="view-profile-button">View Profile</button>
      </div>
    </div>
  );
};

export default UserCard;
