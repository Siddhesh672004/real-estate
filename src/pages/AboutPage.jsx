import React, { useEffect } from "react";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  leafOutline,
  wineOutline,
  shieldCheckmarkOutline,
  peopleOutline,
  globeOutline,
  trophyOutline,
  businessOutline,
  arrowForwardOutline,
} from "ionicons/icons";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ThreeBackground from "../components/three/ThreeBackground";
import ScrollProgress from "../components/ui/ScrollProgress";
import CustomCursor from "../components/ui/CustomCursor";
import banner1 from "../assets/images/about-banner-1.png";
import banner2 from "../assets/images/about-banner-2.jpg";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: peopleOutline, value: "39,000+", label: "Happy Customers" },
    { icon: globeOutline, value: "70+", label: "Countries Served" },
    { icon: trophyOutline, value: "15+", label: "Awards Won" },
    { icon: businessOutline, value: "500+", label: "Properties Listed" },
  ];

  const team = [
    { name: "Rahul Sharma", role: "CEO & Founder", image: banner1 },
    { name: "Priya Patel", role: "Head of Sales", image: banner2 },
    { name: "Amit Kumar", role: "Lead Agent", image: banner1 },
    { name: "Sneha Joshi", role: "Marketing Head", image: banner2 },
  ];

  const values = [
    { icon: homeOutline, title: "Excellence", description: "We strive for excellence in every property we list and every client we serve." },
    { icon: leafOutline, title: "Sustainability", description: "Committed to eco-friendly properties and sustainable living solutions." },
    { icon: wineOutline, title: "Luxury", description: "Curating exceptional properties that define luxury living." },
    { icon: shieldCheckmarkOutline, title: "Trust", description: "Building lasting relationships through transparency and integrity." },
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
              <p className="section-subtitle">About Us</p>
              <h1 className="h1 page-title">
                Building Dreams, <span className="highlight">Creating Homes</span>
              </h1>
              <p className="page-text">
                With over 15 years of experience in real estate, we've helped thousands 
                of families find their perfect home.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <div className="container">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon">
                      <IonIcon icon={stat.icon} />
                    </div>
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="about-story">
            <div className="container">
              <div className="story-grid">
                <div className="story-images">
                  <img src={banner1} alt="Our office" className="story-img-1" />
                  <img src={banner2} alt="Team meeting" className="story-img-2" />
                </div>
                <div className="story-content">
                  <p className="section-subtitle">Our Story</p>
                  <h2 className="h2 section-title">From Vision to Reality</h2>
                  <p className="story-text">
                    Founded in 2009, Homeverse began with a simple mission: to make 
                    finding the perfect property as easy and enjoyable as possible. 
                    What started as a small team of passionate real estate enthusiasts 
                    has grown into one of India's most trusted property platforms.
                  </p>
                  <p className="story-text">
                    Today, we connect millions of buyers, sellers, and renters with 
                    their ideal properties across 70+ countries. Our commitment to 
                    innovation, transparency, and customer satisfaction remains at 
                    the heart of everything we do.
                  </p>
                  <a href="/properties" className="btn btn-primary">
                    <span>Explore Properties</span>
                    <IonIcon icon={arrowForwardOutline} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="values-section">
            <div className="container">
              <p className="section-subtitle">Our Values</p>
              <h2 className="h2 section-title">What We Stand For</h2>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-icon">
                      <IonIcon icon={value.icon} />
                    </div>
                    <h3 className="h3 value-title">{value.title}</h3>
                    <p className="value-text">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="team-section">
            <div className="container">
              <p className="section-subtitle">Our Team</p>
              <h2 className="h2 section-title">Meet The Experts</h2>
              <div className="team-grid">
                {team.map((member, index) => (
                  <div key={index} className="team-card">
                    <figure className="team-avatar">
                      <img src={member.image} alt={member.name} />
                    </figure>
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
