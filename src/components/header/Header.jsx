import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
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

            <Link to="/properties" className="header-top-btn">
              <span>Add Listing</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="Homeverse logo" />
          </Link>

          <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
            <div className="navbar-top">
              <Link to="/" className="logo">
                <img src={logo} alt="Homeverse logo" />
              </Link>

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
                  <Link 
                    to="/" 
                    className={`navbar-link ${isActive('/') ? 'active' : ''}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className={`navbar-link ${isActive('/services') ? 'active' : ''}`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/properties" 
                    className={`navbar-link ${isActive('/properties') || isActive('/property') ? 'active' : ''}`}
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className={`navbar-link ${isActive('/blog') ? 'active' : ''}`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
                  >
                    Contact
                  </Link>
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
