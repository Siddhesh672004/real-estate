import React, { useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ThreeBackground from "../components/three/ThreeBackground";
import ScrollProgress from "../components/ui/ScrollProgress";
import CustomCursor from "../components/ui/CustomCursor";
import service1 from "../assets/images/service-1.png";
import service2 from "../assets/images/service-2.png";
import service3 from "../assets/images/service-3.png";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: service1,
      title: "Buy Property",
      description: "Find your dream home from our extensive collection of properties across prime locations.",
      features: [
        "Access to 500+ verified listings",
        "Virtual property tours",
        "Legal documentation support",
        "Home loan assistance",
        "Property valuation",
      ],
    },
    {
      icon: service2,
      title: "Rent Property",
      description: "Discover rental properties that match your lifestyle and budget requirements.",
      features: [
        "Verified landlords & tenants",
        "Flexible lease terms",
        "Zero brokerage options",
        "Agreement drafting",
        "Maintenance support",
      ],
    },
    {
      icon: service3,
      title: "Sell Property",
      description: "List your property with us and reach thousands of potential buyers instantly.",
      features: [
        "Free property listing",
        "Professional photography",
        "Marketing campaigns",
        "Price negotiation support",
        "Quick sale guarantee",
      ],
    },
  ];

  const additionalServices = [
    { title: "Property Valuation", description: "Get accurate market value assessment for your property" },
    { title: "Legal Services", description: "Complete legal support for property transactions" },
    { title: "Home Loans", description: "Connect with top banks for best loan rates" },
    { title: "Interior Design", description: "Transform your space with expert designers" },
    { title: "Property Management", description: "Hassle-free management of your rental properties" },
    { title: "Vastu Consultation", description: "Ensure positive energy in your new home" },
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
              <p className="section-subtitle">Our Services</p>
              <h1 className="h1 page-title">
                Complete Real Estate <span className="highlight">Solutions</span>
              </h1>
              <p className="page-text">
                From buying to selling, we offer end-to-end property services
              </p>
            </div>
          </section>

          {/* Main Services */}
          <section className="services-main">
            <div className="container">
              <div className="services-grid">
                {services.map((service, index) => (
                  <div key={index} className="service-detail-card">
                    <div className="service-icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h2 className="h2 service-title">{service.title}</h2>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <a href="/properties" className="btn btn-primary">
                      <span>Get Started</span>
                      <IonIcon icon={arrowForwardOutline} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Services */}
          <section className="additional-services">
            <div className="container">
              <p className="section-subtitle">More Services</p>
              <h2 className="h2 section-title">Additional Support</h2>
              <div className="additional-grid">
                {additionalServices.map((service, index) => (
                  <div key={index} className="additional-card">
                    <h3 className="h3">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="services-cta">
            <div className="container">
              <div className="cta-card">
                <h2 className="h2">Ready to Get Started?</h2>
                <p>Contact us today for a free consultation</p>
                <a href="/contact" className="btn btn-primary">
                  <span>Contact Us</span>
                  <IonIcon icon={arrowForwardOutline} />
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

export default ServicesPage;
