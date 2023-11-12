import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
 

const LoginForm = () => {
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to your Express.js login route
    // You may want to use the fetch or axios library for this.
    // Handle login success or failure in your app.
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <input
        type="text"
        name="name"
        placeholder="Username"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button type="submit">Login</button>
      <Link to="/SignupForm">
          <button className="signup-button">Sign Up</button>
      </Link>
    </form>
  );
}

export default LoginForm;
