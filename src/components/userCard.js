import React, {useState} from "react";
import "./userCard.css";
import Avatar from '@mui/material/Avatar';
import ImageModal from "./imageModal";

const UserCard = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(user?.UserInfo?.profilePic);

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="user-card">
      <div className="user-info">
        <img className="profile-pic" src={user.UserInfo.profilePic} alt="User" onClick={() => handleImageClick(user.UserInfo.profilePic)} />
        <ImageModal imageUrl={selectedImageUrl} isOpen={modalOpen} onClose={handleCloseModal}/>
        <div className="user-details">
        <h3 className="user-name">{user.UserInfo.name}</h3>
          <p className="user-company">{user.UserInfo.companyName}</p>
          <p className="user-designation">{user.UserInfo.designation}</p>
          <p className="user-intro">{user.UserInfo.intro}</p>
          {/* <p className="user-profilePic">{user.UserInfo.profilePic}</p> */}
          {/* <Avatar alt="{user.UserInfo.name}" src="{user.UserInfo.profilePic}" /> */}
          {/* <p className="user-expertise">Expertise: {user.expertise.join(', ')}</p> */}
        </div>
        <button className="view-profile-button">View Profile</button>
      </div>
    </div>
  );
};

export default UserCard;
