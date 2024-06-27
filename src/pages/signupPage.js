import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './signupPage.css';

const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    companyName: '',
    designation: '',
    intro: '',
    linkedin: '',
    twitter: '',
    github: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      companyName: formData.companyName,
      designation: formData.designation,
      intro: formData.intro,
      socials: {
        github: formData.github,
        linkedin: formData.linkedin,
        twitter: formData.twitter,
      }
    };

    try {
      const response = await axios.post('http://localhost:3000/users', user);
      console.log('User saved successfully:', response.data);
      navigate('/');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Signup failed:', error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error during signup:', error.message);
      }
      // Handle signup error (e.g., show error message to user)
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="title-logo-container">
          <span className="material-icons logo">groups</span>
          <h1 className="title">Sign Up</h1>
        </div>
        <p className="description">Join us by filling out the information below</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" className="input-field" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="input-field" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="input-field" onChange={handleChange} required />
          <input type="text" name="company" placeholder="Company" className="input-field" onChange={handleChange} />
          <input type="text" name="designation" placeholder="Designation" className="input-field" onChange={handleChange} required />
          <input type="text" name="intro" placeholder="One-liner Intro" className="input-field" onChange={handleChange} required />
          <input type="url" name="github" placeholder="GitHub URL" className="input-field" onChange={handleChange} />
          <input type="url" name="linkedin" placeholder="LinkedIn URL" className="input-field" onChange={handleChange} />
          <input type="url" name="twitter" placeholder="Twitter URL" className="input-field" onChange={handleChange} />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-prompt">
          Already have an account? <a href="/">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
