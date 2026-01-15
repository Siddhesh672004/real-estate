import React, { useEffect, useRef } from "react";
import { IonIcon } from "@ionic/react";
import { home, arrowForwardOutline, chevronDownOutline } from "ionicons/icons";
import HeroScene from "../three/HeroScene";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    // Animate stats counters
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        const target = parseInt(stat.dataset.target);
        const counter = { value: 0 };
        
        gsap.to(counter, {
          value: target,
          duration: 2,
          delay: 1 + (index * 0.2),
          ease: "power2.out",
          onUpdate: () => {
            stat.textContent = Math.floor(counter.value).toLocaleString() + "+";
          }
        });
      }
    });
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">
            <IonIcon icon={home} />
            <span>Premium Real Estate Agency</span>
          </p>

          <h1 className="hero-title">
            Find Your <span className="highlight">Dream Home</span> With Us
          </h1>

          <p className="hero-text">
            Discover luxury properties, modern apartments, and exclusive homes 
            across prime locations. Your perfect living space awaits.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">
              <span>Explore Properties</span>
              <IonIcon icon={arrowForwardOutline} />
            </button>
            <button className="btn btn-outline">
              <span>Watch Video</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span 
                className="hero-stat-value" 
                ref={el => statsRef.current[0] = el}
                data-target="500"
              >
                0+
              </span>
              <span className="hero-stat-label">Properties Listed</span>
            </div>
            <div className="hero-stat">
              <span 
                className="hero-stat-value"
                ref={el => statsRef.current[1] = el}
                data-target="2000"
              >
                0+
              </span>
              <span className="hero-stat-label">Happy Customers</span>
            </div>
            <div className="hero-stat">
              <span 
                className="hero-stat-value"
                ref={el => statsRef.current[2] = el}
                data-target="50"
              >
                0+
              </span>
              <span className="hero-stat-label">Cities Covered</span>
            </div>
          </div>
        </div>

        <div className="hero-3d-scene">
          <HeroScene />
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-indicator-line"></div>
        <IonIcon icon={chevronDownOutline} />
      </div>
    </section>
  );
};

export default Hero;
