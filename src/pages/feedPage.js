import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './feedPage.css';
import UserCard from '../components/userCard';

const FeedPage = () => {
  const { eventId } = useParams();
  console.log(eventId);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/events/${eventId}/users`);
        setUsers(response.data); // Assuming response.data is an array of user objects
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle error (e.g., show error message to user)
      }
    };
    fetchUsers();
  }, [eventId]);

  return (
    <div className="feed-page">
      <div className="feed-header">
        <span className="material-icons logo1">groups</span>
        <h1 className="app-name">ConfConnect</h1>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div className="user-list">
        {users.map(user => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
}

export default FeedPage;