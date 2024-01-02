import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.css';
import { useNavigate } from 'react-router-dom'; 


const Register = () => {
    const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    country: '',
    city: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const { username, email, password, country, city, phone } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear validation error on change
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      errors.password = 'Password should be at least 8 characters';
      isValid = false;
    }

    if (!country.trim()) {
      errors.country = 'Country is required';
      isValid = false;
    }

    if (!city.trim()) {
      errors.city = 'City is required';
      isValid = false;
    }

    if (!phone.trim()) {
      errors.phone = 'only 10 digit Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Enter a valid 10-digit phone number';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8800/api/auth/register', formData);
        console.log('Registration successful:', response.data);

        toast.success('Registration successful ..!!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
          });

           setTimeout(() => {
          navigate('/'); // Replace '/' with your desired home page URL
        }, 2000);
        setFormData({
          username: '',
          email: '',
          password: '',
          country: '',
          city: '',
          phone: '',
        });
        setErrors({});
      } catch (error) {
        
        console.error('Registration failed:', error.response.data);

        toast.error('Failed to registration .....!!!!!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
          });
         
        // Handle error scenarios, if any
      }
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form method='post' onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={country}
            onChange={handleChange}
          />
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={city} onChange={handleChange} />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;