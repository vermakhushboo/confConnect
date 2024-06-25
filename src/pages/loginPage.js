import React from 'react';
import './loginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="title-logo-container">
          <span className="material-icons logo">groups</span>
          <h1 className="title">ConfConnect</h1>
        </div>
        <p className="description">Conference networking starts here!</p>
        <form className="login-form">
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="signup-prompt">
            Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
