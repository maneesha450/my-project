import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Hamburger from './Hamburger';
import './p.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [username, setUsername] = useState("User");

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`} style={{ marginLeft: '5%' }}>
          <ul>
            <li><NavLink to="/studenthome">Home</NavLink></li>
            <li><NavLink to="/alumnidetails">Alumni Details</NavLink></li>
            <li><NavLink to="/events">Event</NavLink></li>
            <li><NavLink to="/jobs">Job Opportunities</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>{username ? (
              <li><span className="username">Welcome, {username}</span></li>
            ) : (
              <li><NavLink to="/auth">Login / Signup</NavLink></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
