import React, { useState } from "react";
import "./loginPage.css";
import { LoginUser } from "../api/user";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(); 
  const [loginCred, setLoginCreds] = useState({
    username: '',
    password: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await LoginUser(loginCred.username, loginCred.password);
    navigate('/checkin')
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="title-logo-container">
          <span className="material-icons logo">groups</span>
          <h1 className="title">ConfConnect</h1>
        </div>
        <p className="description">Conference networking starts here!</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" className="input-field" onChange={handleChange} required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="signup-prompt">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;