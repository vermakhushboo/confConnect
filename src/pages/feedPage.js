import React from "react";
import "./feedPage.css";
import UserCard from "../components/userCard";

const FeedPage = () => {
  return (
    <div className="feed-page">
      <div className="feed-header">
        <span className="material-icons logo1">groups</span>
        <h1 className="app-name-1">ConfConnect</h1>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div className="user-list">
        {/* UserCard components will be rendered here */}
        <UserCard />
        <UserCard />
        <UserCard />
        {/* Add more UserCard components as needed */}
      </div>
    </div>
  );
};

export default FeedPage;
