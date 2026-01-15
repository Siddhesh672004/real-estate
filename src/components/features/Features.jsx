import React from "react";
import { IonIcon } from "@ionic/react";
import {
  carSportOutline,
  waterOutline,
  shieldCheckmarkOutline,
  fitnessOutline,
  libraryOutline,
  bedOutline,
  homeOutline,
  footballOutline,
  arrowForwardOutline,
} from "ionicons/icons";

const Features = () => {
  const amenities = [
    { icon: carSportOutline, title: "Parking Space", description: "Spacious indoor parking" },
    { icon: waterOutline, title: "Swimming Pool", description: "Olympic-size pool" },
    { icon: shieldCheckmarkOutline, title: "Private Security", description: "24/7 surveillance" },
    { icon: fitnessOutline, title: "Fitness Center", description: "Modern gym equipment" },
    { icon: libraryOutline, title: "Library Area", description: "Quiet study spaces" },
    { icon: bedOutline, title: "King Size Beds", description: "Premium furnishing" },
    { icon: homeOutline, title: "Smart Homes", description: "IoT integration" },
    { icon: footballOutline, title: "Kid's Playland", description: "Safe play areas" },
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <p className="section-subtitle">Our Amenities</p>
        <h2 className="h2 section-title">Premium Building Features</h2>
        <ul className="features-list">
          {amenities.map((amenity, index) => (
            <li key={index}>
              <a href="#features" className="features-card">
                <div className="card-icon">
                  <IonIcon icon={amenity.icon} />
                </div>
                <h3 className="card-title">{amenity.title}</h3>
                <div className="card-btn">
                  <IonIcon icon={arrowForwardOutline} />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
