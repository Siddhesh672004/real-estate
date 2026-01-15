import React, { useEffect, useRef } from "react";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  leafOutline,
  wineOutline,
  shieldCheckmarkOutline,
  arrowForwardOutline,
} from "ionicons/icons";
import banner1 from "../../assets/images/about-banner-1.png";
import banner2 from "../../assets/images/about-banner-2.jpg";
import gsap from "gsap";

const About = () => {
  const aboutRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate items when section comes into view
            gsap.fromTo(
              itemsRef.current,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
              }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: homeOutline, text: "Smart Home Design" },
    { icon: leafOutline, text: "Beautiful Scenery" },
    { icon: wineOutline, text: "Exceptional Lifestyle" },
    { icon: shieldCheckmarkOutline, text: "24/7 Security" },
  ];

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="container">
        <figure className="about-banner">
          <img src={banner1} alt="Modern house interior" loading="lazy" />
          <img
            src={banner2}
            alt="Luxury living room"
            className="abs-img"
            loading="lazy"
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">About Us</p>

          <h2 className="h2 section-title">
            The Leading Real Estate Rental Marketplace
          </h2>

          <p className="about-text">
            Over 39,000 professionals work with us across more than 70 countries
            worldwide. This global coverage, combined with our specialist services,
            ensures you find your perfect property anywhere.
          </p>

          <ul className="about-list">
            {features.map((feature, index) => (
              <li
                key={index}
                className="about-item"
                ref={(el) => (itemsRef.current[index] = el)}
              >
                <div className="about-item-icon">
                  <IonIcon icon={feature.icon} />
                </div>
                <p className="about-item-text">{feature.text}</p>
              </li>
            ))}
          </ul>

          <blockquote className="callout">
            "We believe everyone deserves to find their perfect home. Our mission
            is to make that dream a reality with transparency and excellence."
          </blockquote>

          <a href="#service" className="btn btn-primary">
            <span>Our Services</span>
            <IonIcon icon={arrowForwardOutline} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
