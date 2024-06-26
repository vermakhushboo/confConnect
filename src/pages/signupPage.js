import React from "react";
import "./signupPage.css";

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="title-logo-container">
          <span className="material-icons logo">groups</span>
          <h1 className="title">Sign Up</h1>
        </div>
        <p className="description">
          Join us by filling out the information below
        </p>
        <form className="signup-form">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Designation"
            className="input-field"
          />
          <input
            type="text"
            placeholder="One-liner Intro"
            className="input-field"
          />
          <input
            type="url"
            placeholder="LinkedIn URL"
            className="input-field"
          />
          <input type="url" placeholder="Twitter URL" className="input-field" />
          <input type="url" placeholder="GitHub URL" className="input-field" />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="login-prompt">
          Already have an account? <a href="/">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
