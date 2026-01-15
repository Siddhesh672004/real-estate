import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import {
  locationOutline,
  callOutline,
  mailOutline,
  timeOutline,
  sendOutline,
  logoFacebook,
  logoTwitter,
  logoLinkedin,
  logoInstagram,
} from "ionicons/icons";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ThreeBackground from "../components/three/ThreeBackground";
import ScrollProgress from "../components/ui/ScrollProgress";
import CustomCursor from "../components/ui/CustomCursor";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactInfo = [
    {
      icon: locationOutline,
      title: "Visit Us",
      details: ["123 Business Park", "Koregaon Park, Pune", "Maharashtra 411001"],
    },
    {
      icon: callOutline,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
    },
    {
      icon: mailOutline,
      title: "Email Us",
      details: ["info@homeverse.com", "support@homeverse.com"],
    },
    {
      icon: timeOutline,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
    },
  ];

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <ThreeBackground />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="page-hero">
            <div className="container">
              <p className="section-subtitle">Contact Us</p>
              <h1 className="h1 page-title">
                Get In <span className="highlight">Touch</span>
              </h1>
              <p className="page-text">
                Have questions? We'd love to hear from you. Send us a message 
                and we'll respond as soon as possible.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            <div className="container">
              <div className="contact-grid">
                {/* Contact Info */}
                <div className="contact-info">
                  <h2 className="h2">Let's Start a Conversation</h2>
                  <p className="info-text">
                    Whether you're looking to buy, sell, or rent a property, 
                    our team is here to help you every step of the way.
                  </p>

                  <div className="info-cards">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="info-card">
                        <div className="info-icon">
                          <IonIcon icon={info.icon} />
                        </div>
                        <div className="info-content">
                          <h3>{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="social-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                      <a href="https://facebook.com" className="social-link">
                        <IonIcon icon={logoFacebook} />
                      </a>
                      <a href="https://twitter.com" className="social-link">
                        <IonIcon icon={logoTwitter} />
                      </a>
                      <a href="https://linkedin.com" className="social-link">
                        <IonIcon icon={logoLinkedin} />
                      </a>
                      <a href="https://instagram.com" className="social-link">
                        <IonIcon icon={logoInstagram} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-container">
                  <h2 className="h2">Send Us a Message</h2>
                  
                  {submitStatus === "success" && (
                    <div className="success-message">
                      <p>Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Your Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Your Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject *</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="buy">Buying a Property</option>
                          <option value="sell">Selling a Property</option>
                          <option value="rent">Renting a Property</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Support</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <IonIcon icon={sendOutline} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="map-section">
            <div className="container">
              <div className="map-placeholder">
                <IonIcon icon={locationOutline} />
                <h3>Our Location</h3>
                <p>123 Business Park, Koregaon Park, Pune</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
