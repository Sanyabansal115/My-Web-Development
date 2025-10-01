/**
 * Contact.jsx - Contact Information and Form Component
 * 
 * This component provides visitors with multiple ways to contact Sanya Bansal.
 * It includes a contact form for direct messaging and displays contact information
 * including email, phone, location, and social media links.
 * 
 * Features:
 * - Interactive contact form with validation
 * - Form state management with React hooks
 * - Contact information display with clickable links
 * - Form submission handling with user feedback
 * - Responsive design for all device sizes
 * - Smooth scroll to home section after form submission
 * 
 * @author Sanya Bansal
 * @version 2.0.0
 * @since 2025-09-30
 */

// Import React hooks
import React, { useState } from 'react';

/**
 * Contact Component
 * 
 * Renders a contact section with form and contact information.
 * Manages form state and handles form submission with smooth scrolling.
 * 
 * @returns {JSX.Element} Complete contact section with form and info
 */
export default function Contact() {
  
  /**
   * Form Data State Management
   * 
   * Uses React useState hook to manage form input values.
   * Initial state contains empty strings for all form fields.
   * 
   * @type {Object} formData - Current form input values
   * @property {string} firstName - User's first name
   * @property {string} lastName - User's last name  
   * @property {string} email - User's email address
   * @property {string} phone - User's phone number (optional)
   * @property {string} message - User's message content
   */
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Success message state for visual feedback
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * Form Input Change Handler
   * 
   * Updates the form state when user types in any input field.
   * Uses the spread operator to maintain other field values while
   * updating the specific field that changed.
   * 
   * @param {Event} e - The input change event
   * @param {string} e.target.name - The name attribute of the input field
   * @param {string} e.target.value - The current value of the input field
   */
  const handleChange = (inputChangeEvent) => {
    setFormData({ 
      ...formData, 
      [inputChangeEvent.target.name]: inputChangeEvent.target.value 
    });
  };

  /**
   * Form Submission Handler
   * 
   * Processes form submission by preventing default browser behavior,
   * displaying a confirmation message with the submitted data, clearing
   * the form, and redirecting to the home page.
   * 
   * Note: In a production environment, this would send data to a backend
   * service or email API instead of just showing an alert.
   * 
   * @param {Event} e - The form submission event
   */
  const handleSubmit = (formSubmissionEvent) => {
    // Prevent default form submission behavior
    formSubmissionEvent.preventDefault();
    
    // Show success message
    setShowSuccess(true);
    
    // Create a more user-friendly confirmation message
    const confirmationMessage = `Thank you, ${formData.firstName}!\n\nYour message has been received:\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nMessage: ${formData.message}\n\nI'll get back to you soon!`;
    
    // Show confirmation using both alert and console for debugging
    alert(confirmationMessage);
    console.log('Form submitted:', formData);
    
    // Reset form to initial empty state
    setFormData({ 
      firstName: '', 
      lastName: '', 
      email: '', 
      phone: '', 
      message: '' 
    });
    
    // Hide success message and scroll to home section after delay
    setTimeout(() => {
      setShowSuccess(false);
      const homeElement = document.getElementById('home');
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        I'd love to hear from you! Let's discuss your project or just connect.
      </p>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <strong>Email</strong>
              <p>sanya.bansal.115@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <div>
              <strong>Phone</strong>
              <p>+1 (437) 733-1773</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Location</strong>
              <p>Toronto, Ontario, Canada</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <div>
              <strong>Connect</strong>
              <p>
                <a href="https://www.linkedin.com/in/sanya-bansal-824830302/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                <a href="https://github.com/Sanyabansal115" target="_blank" rel="noopener noreferrer"> GitHub</a>
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Me a Message</h3>
          {showSuccess && (
            <div className="success-message" style={{
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              color: '#155724',
              padding: '1rem',
              borderRadius: '5px',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              ✅ Thank you! Your message has been sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (123) 456-7890" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Your message..." rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}