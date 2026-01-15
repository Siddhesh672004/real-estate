import React from "react";
import { IonIcon } from "@ionic/react";
import {
  locationOutline,
  callOutline,
  mailOutline,
  logoFacebook,
  logoTwitter,
  logoLinkedin,
  logoYoutube,
  logoInstagram,
  arrowUpOutline,
} from "ionicons/icons";
import logolight from "../../assets/images/logo-light.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src={logolight} alt="Homeverse logo" />
            </a>
            <p className="section-text">
              Your trusted partner in finding the perfect property. We connect 
              dreams with reality through exceptional real estate services.
            </p>
            <ul className="contact-list">
              <li>
                <a href="https://maps.google.com" className="contact-link">
                  <IonIcon icon={locationOutline} />
                  <address>Pune, Maharashtra, India</address>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="contact-link">
                  <IonIcon icon={callOutline} />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@homeverse.com" className="contact-link">
                  <IonIcon icon={mailOutline} />
                  <span>contact@homeverse.com</span>
                </a>
              </li>
            </ul>
            <ul className="social-list">
              <li>
                <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                  <IonIcon icon={logoTwitter} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                  <IonIcon icon={logoLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                  <IonIcon icon={logoInstagram} />
                </a>
              </li>
              <li>
                <a href="https://youtube.com" className="social-link" aria-label="YouTube">
                  <IonIcon icon={logoYoutube} />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Company</p>
              </li>
              <li>
                <a href="#about" className="footer-link">About Us</a>
              </li>
              <li>
                <a href="#blog" className="footer-link">Blog</a>
              </li>
              <li>
                <a href="#property" className="footer-link">All Properties</a>
              </li>
              <li>
                <a href="#features" className="footer-link">Locations</a>
              </li>
              <li>
                <a href="#footer" className="footer-link">FAQ</a>
              </li>
              <li>
                <a href="#footer" className="footer-link">Contact Us</a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Services</p>
              </li>
              <li>
                <a href="#service" className="footer-link">Buy Property</a>
              </li>
              <li>
                <a href="#service" className="footer-link">Rent Property</a>
              </li>
              <li>
                <a href="#service" className="footer-link">Sell Property</a>
              </li>
              <li>
                <a href="#service" className="footer-link">Property Valuation</a>
              </li>
              <li>
                <a href="#service" className="footer-link">Home Loans</a>
              </li>
              <li>
                <a href="#service" className="footer-link">Legal Support</a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Quick Links</p>
              </li>
              <li>
                <a href="#footer" className="footer-link">Privacy Policy</a>
              </li>
              <li>
                <a href="#footer" className="footer-link">Terms of Service</a>
              </li>
              <li>
                <a href="#footer" className="footer-link">Disclaimer</a>
              </li>
              <li>
                <a href="#footer" className="footer-link">Careers</a>
              </li>
              <li>
                <a href="#footer" className="footer-link">Sitemap</a>
              </li>
              <li>
                <a href="#footer" className="footer-link">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © 2024 <a href="/">Homeverse</a>. All Rights Reserved. 
            Crafted with ❤️ by <a href="/">Siddhesh Chaudhari</a>
          </p>
        </div>
      </div>

      <button 
        className="btn btn-primary" 
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          padding: 0,
          borderRadius: '50%',
          zIndex: 99
        }}
      >
        <IonIcon icon={arrowUpOutline} style={{ fontSize: '20px' }} />
      </button>
    </footer>
  );
};

export default Footer;
