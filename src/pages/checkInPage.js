import React from 'react';
import './checkinPage.css';

const CheckInPage = () => {
  return (
    <div className="checkin-page">
      <div className="checkin-header">
        <div className="title-logo-container">
          <span className="material-icons logo">groups</span>
          <h1 className="app-name">ConfConnect</h1>
        </div>
      </div>
      <div className="checkin-content">
        <h2 className="welcome-message">Welcome to DevCon!</h2>
        <h3 className="checkin-message">Check-in as:</h3>
        <div className="checkin-buttons">
          <button className="checkin-button">
            <span className="material-icons button-icon">person</span>
            Attendee
          </button>
          <button className="checkin-button">
            <span className="material-icons button-icon">mic</span>
            Speaker
          </button>
          <button className="checkin-button">
            <span className="material-icons button-icon">attach_money</span>
            Sponsor
          </button>
          <button className="checkin-button">
            <span className="material-icons button-icon">manage_accounts</span>
            Organiser
          </button>
          <button className="checkin-button">
            <span className="material-icons button-icon">volunteer_activism</span>
            Volunteer
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckInPage;
