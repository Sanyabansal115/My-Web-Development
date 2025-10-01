import React, { useState } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
        <div className="logo-icon">SB</div>
        <span className="logo-text">Sanya Bansal</span>
      </a>
      <ul className="nav-links">
        <li>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#education" 
            className={activeSection === 'education' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
          >
            Education
          </a>
        </li>
        <li>
          <a 
            href="#services" 
            className={activeSection === 'services' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
          >
            Services
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}