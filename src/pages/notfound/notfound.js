// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css'; // Import any styles for the 404 page

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
