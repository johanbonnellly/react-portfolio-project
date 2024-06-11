// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/skills">Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

