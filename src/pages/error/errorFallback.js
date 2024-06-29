// src/components/ErrorFallback.js
import React from 'react';
import { Link } from 'react-router-dom';
import './errorFallback.css';

const ErrorFallback = () => {
  return (
    <div className="error-fallback">
      <div className="error-content">
        <h1>Oops!</h1>
        <p>Something went wrong. Please try again later.</p>
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorFallback;
