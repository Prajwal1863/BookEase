import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Update with the correct path

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(); // Calls the logout function from the AuthContext
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">BookEase</span>
        </Link>
        {user ? (
          <div className="navItems">
            {/* Show username and logout button if user is logged in */}
            <span className="username">{user.username}</span>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            {/* Show register and login buttons if user is not logged in */}
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
