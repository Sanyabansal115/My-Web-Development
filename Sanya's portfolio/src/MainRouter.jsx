/**
 * MainRouter.jsx - Single Page Application Layout
 * 
 * This component creates a single-page portfolio layout with smooth scrolling
 * navigation between sections. All components are rendered on one page with
 * proper section IDs for navigation.
 * 
 * @author Sanya Bansal
 * @version 2.0.0
 * @since 2025-09-30
 */

// Import React
import React from 'react';

// Import all page components
import Navigation from './components/Navigation';  // Navigation bar component
import Home from './components/Home';              // Landing page / Hero section
import About from './components/About';            // Personal introduction
import Projects from './components/Projects';      // Project showcase
import Education from './components/Education';    // Academic background
import Services from './components/Services';      // Professional services
import Contact from './components/Contact';        // Contact information and form

/**
 * Main Router Component
 * 
 * Creates a single-page application layout where all sections are rendered
 * on one page with smooth scrolling navigation between them.
 * Creates a single-page application layout where all sections are rendered
 * on one page with smooth scrolling navigation between them.
 * 
 * @returns {JSX.Element} Single page layout with all sections
 */
export default function MainRouter() {
  return (
    <>
      {/* Persistent navigation bar for smooth scrolling */}
      <Navigation />
      
      {/* Main content area with all sections on one page */}
      <main className="main-content">
        <Home />
        <About />
        <Projects />
        <Education />
        <Services />
        <Contact />
      </main>
    </>
  );
}