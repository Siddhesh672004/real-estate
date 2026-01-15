import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import {
  mailOutline,
  locationOutline,
  logoFacebook,
  logoTwitter,
  logoInstagram,
  logoPinterest,
  closeOutline,
  searchOutline,
  personOutline,
  heartOutline,
  menuOutline,
} from "ionicons/icons";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} data-header>
      <div className={`overlay ${isNavOpen ? 'active' : ''}`} onClick={closeNav}></div>

      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a href="mailto:info@homeverse.com" className="header-top-link">
                <IonIcon icon={mailOutline} />
                <span>info@homeverse.com</span>
              </a>
            </li>

            <li>
              <a href="/" className="header-top-link">
                <IonIcon icon={locationOutline} />
                <address>Pune, Maharashtra, India</address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="https://facebook.com" className="header-top-social-link" aria-label="Facebook">
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>

              <li>
                <a href="https://twitter.com" className="header-top-social-link" aria-label="Twitter">
                  <IonIcon icon={logoTwitter} />
                </a>
              </li>

              <li>
                <a href="https://instagram.com" className="header-top-social-link" aria-label="Instagram">
                  <IonIcon icon={logoInstagram} />
                </a>
              </li>

              <li>
                <a href="https://pinterest.com" className="header-top-social-link" aria-label="Pinterest">
                  <IonIcon icon={logoPinterest} />
                </a>
              </li>
            </ul>

            <button className="header-top-btn">
              <span>Add Listing</span>
            </button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <a href="/" className="logo">
            <img src={logo} alt="Homeverse logo" />
          </a>

          <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
            <div className="navbar-top">
              <a href="/" className="logo">
                <img src={logo} alt="Homeverse logo" />
              </a>

              <button
                className="nav-close-btn"
                onClick={closeNav}
                aria-label="Close Menu"
              >
                <IonIcon icon={closeOutline} />
              </button>
            </div>

            <div className="navbar-bottom">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link active" onClick={closeNav}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" onClick={closeNav}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#service" className="navbar-link" onClick={closeNav}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#property" className="navbar-link" onClick={closeNav}>
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link" onClick={closeNav}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#footer" className="navbar-link" onClick={closeNav}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="header-bottom-actions">
            <button className="header-bottom-actions-btn" aria-label="Search">
              <IonIcon icon={searchOutline} />
            </button>

            <button className="header-bottom-actions-btn" aria-label="Favorites">
              <IonIcon icon={heartOutline} />
            </button>

            <button className="header-bottom-actions-btn" aria-label="Profile">
              <IonIcon icon={personOutline} />
            </button>

            <button
              className="header-bottom-actions-btn"
              onClick={toggleNav}
              aria-label="Open Menu"
            >
              <IonIcon icon={menuOutline} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
