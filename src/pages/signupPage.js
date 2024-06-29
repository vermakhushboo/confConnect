import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './signupPage.css';
import { hashPassword } from '../utils/hashUtils';
import { MakeApiCall } from '../api/apicall';

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
    profilePic: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'profilePic') {
      setFormData(prevState => ({
        ...prevState,
        profilePic: e.target.files[0], // Store the selected file
      }));
    } else {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const user = {
    //   name: formData.name,
    //   email: formData.email,
    //   password: hashedPassword,
    //   companyName: formData.companyName,
    //   designation: formData.designation,
    //   intro: formData.intro,
    //   profileImg: formData.profilePic,
    //   socials: {
    //     github: formData.github,
    //     linkedin: formData.linkedin,
    //     twitter: formData.twitter,
    //   }
    // };
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', await hashPassword(formData.password));
    formDataToSend.append('companyName', formData.companyName);
    formDataToSend.append('designation', formData.designation);
    formDataToSend.append('intro', formData.intro);
    formDataToSend.append('socials[github]', formData.github);
    formDataToSend.append('socials[linkedin]', formData.linkedin);
    formDataToSend.append('socials[twitter]', formData.twitter);
    formDataToSend.append('profileImg', formData.profilePic); 

    try {
      const response = await MakeApiCall({method: 'post', path:'/users',body: formDataToSend, headers: {'Content-Type': 'multipart/form-data'}})
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
          <input type="text" name="companyName" placeholder="Company" className="input-field" onChange={handleChange} />
          <input type="text" name="designation" placeholder="Designation" className="input-field" onChange={handleChange} />
          <input type="text" name="intro" placeholder="One-liner Intro" className="input-field" onChange={handleChange} required />
          <input type="url" name="github" placeholder="GitHub URL" className="input-field" onChange={handleChange} />
          <input type="url" name="linkedin" placeholder="LinkedIn URL" className="input-field" onChange={handleChange} />
          <input type="url" name="twitter" placeholder="Twitter URL" className="input-field" onChange={handleChange} />
          <input type="file" name="profileImg" placeholder="Profile Image" className='input-field' />
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
