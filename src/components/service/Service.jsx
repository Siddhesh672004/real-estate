import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import service1 from "../../assets/images/service-1.png";
import service2 from "../../assets/images/service-2.png";
import service3 from "../../assets/images/service-3.png";

const Service = () => {
  const services = [
    {
      title: "Buy a Home",
      description:
        "Over 1 million+ homes for sale available on our platform. We match you with a house you will want to call home.",
      imageUrl: service1,
      linkText: "Find a Home",
      color: "#ff6b4a",
    },
    {
      title: "Rent a Home",
      description:
        "Discover rental properties that fit your lifestyle and budget. From apartments to luxury villas, we have it all.",
      imageUrl: service2,
      linkText: "Browse Rentals",
      color: "#4a9fff",
    },
    {
      title: "Sell a Home",
      description:
        "List your property with us and reach thousands of potential buyers. We make selling your home effortless.",
      imageUrl: service3,
      linkText: "List Property",
      color: "#9b4aff",
    },
  ];

  return (
    <section className="service" id="service">
      <div className="container">
        <p className="section-subtitle">Our Services</p>
        <h2 className="h2 section-title">What We Offer</h2>

        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index}>
              <div className="service-card">
                <div className="card-icon">
                  <img src={service.imageUrl} alt={service.title} loading="lazy" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#property">{service.title}</a>
                </h3>

                <p className="card-text">{service.description}</p>

                <a href="#property" className="card-link">
                  <span>{service.linkText}</span>
                  <IonIcon icon={arrowForwardOutline} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
