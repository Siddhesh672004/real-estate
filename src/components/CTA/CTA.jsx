import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline, sparkles } from "ionicons/icons";

const CtaSection = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card">
          <div className="card-content">
            <h2 className="h2 card-title">
              <IonIcon icon={sparkles} style={{ marginRight: '12px' }} />
              Looking for Your Dream Home?
            </h2>
            <p className="card-text">
              We can help you realize your dream of finding the perfect property. 
              Our expert team is ready to guide you every step of the way.
            </p>
          </div>

          <button className="cta-btn" aria-label="Explore properties">
            <span>Explore Properties</span>
            <IonIcon icon={arrowForwardOutline} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
