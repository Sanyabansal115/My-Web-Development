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
 * across all routes.
 * 
 * Route Structure:
 * - / : Home page with hero section
 * - /about : Personal introduction and background
 * - /projects : Showcase of completed projects
 * - /education : Academic qualifications and certifications
 * - /services : Professional services offered
 * - /contact : Contact form and information
 * 
 * @returns {JSX.Element} The routing configuration with navigation
 */
export default function MainRouter() {
  return (
    <>
      {/* Persistent navigation bar across all pages */}
      <Navigation />
      
      {/* Main content area where page components are rendered */}
      <main className="main-content">
        <Routes>
          {/* Home route - Landing page with hero section */}
          <Route path="/" element={<Home />} />
          
          {/* About route - Personal introduction and background */}
          <Route path="/about" element={<About />} />
          
          {/* Projects route - Portfolio of completed work */}
          <Route path="/projects" element={<Projects />} />
          
          {/* Education route - Academic credentials and certifications */}
          <Route path="/education" element={<Education />} />
          
          {/* Services route - Professional services and capabilities */}
          <Route path="/services" element={<Services />} />
          
          {/* Contact route - Contact form and information */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}