import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <div className="logo">
        <div className="logo-shape">YI</div>
        <span style={{ fontWeight: 600, color: 'var(--sage-dark)' }}>Your Name</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}