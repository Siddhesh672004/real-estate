import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  locationOutline,
  cameraOutline,
  filmOutline,
  bedOutline,
  waterOutline,
  expandOutline,
  resizeOutline,
  heartOutline,
  heart,
  addCircleOutline,
} from "ionicons/icons";
import property1 from "../../assets/images/property-1.jpg";
import property2 from "../../assets/images/property-2.jpg";
import property3 from "../../assets/images/property-3.jpg";
import property4 from "../../assets/images/property-4.png";
import author from "../../assets/images/author.png";

const Property = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const properties = [
    {
      id: 1,
      image: property1,
      title: "Modern Luxury Villa",
      price: "₹85,00,000",
      priceType: "",
      description:
        "Stunning 4-bedroom villa with panoramic views, infinity pool, and smart home features.",
      location: "Koregaon Park, Pune",
      badge: "For Sale",
      type: "sale",
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 4500,
      author: "Rahul Sharma",
      authorTitle: "Senior Agent",
      authorImage: author,
      photos: 12,
      videos: 3,
    },
    {
      id: 2,
      image: property2,
      title: "Premium Apartment",
      price: "₹45,000",
      priceType: "/month",
      description:
        "Fully furnished 2BHK apartment in a gated community with modern amenities.",
      location: "Hinjewadi, Pune",
      badge: "For Rent",
      type: "rent",
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1200,
      author: "Priya Patel",
      authorTitle: "Property Expert",
      authorImage: author,
      photos: 8,
      videos: 1,
    },
    {
      id: 3,
      image: property3,
      title: "Penthouse Suite",
      price: "₹1,25,00,000",
      priceType: "",
      description:
        "Exclusive penthouse with private terrace, city skyline views, and luxury finishes.",
      location: "Baner, Pune",
      badge: "For Sale",
      type: "sale",
      bedrooms: 3,
      bathrooms: 3,
      squareFeet: 3200,
      author: "Amit Kumar",
      authorTitle: "Luxury Specialist",
      authorImage: author,
      photos: 15,
      videos: 2,
    },
    {
      id: 4,
      image: property4,
      title: "Garden Townhouse",
      price: "₹35,000",
      priceType: "/month",
      description:
        "Beautiful townhouse with private garden, perfect for families seeking space and comfort.",
      location: "Wakad, Pune",
      badge: "For Rent",
      type: "rent",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 2100,
      author: "Sneha Joshi",
      authorTitle: "Rental Expert",
      authorImage: author,
      photos: 10,
      videos: 1,
    },
  ];

  const filteredProperties = activeFilter === "all" 
    ? properties 
    : properties.filter(p => p.type === activeFilter);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id) 
        : [...prev, id]
    );
  };

  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section-subtitle">Properties</p>
        <h2 className="h2 section-title">Featured Listings</h2>

        <div className="property-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Properties
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'sale' ? 'active' : ''}`}
            onClick={() => setActiveFilter('sale')}
          >
            For Sale
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'rent' ? 'active' : ''}`}
            onClick={() => setActiveFilter('rent')}
          >
            For Rent
          </button>
        </div>

        <ul className="property-list">
          {filteredProperties.map((property) => (
            <li key={property.id}>
              <div className="property-card">
                <figure className="card-banner">
                  <a href="#property">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-100"
                      loading="lazy"
                    />
                  </a>
                  <div
                    className={`card-badge ${
                      property.badge === "For Rent" ? "green" : "orange"
                    }`}
                  >
                    {property.badge}
                  </div>
                  <div className="banner-actions">
                    <button className="banner-actions-btn">
                      <IonIcon icon={locationOutline} />
                      <address>{property.location}</address>
                    </button>
                    <button className="banner-actions-btn">
                      <IonIcon icon={cameraOutline} />
                      <span>{property.photos}</span>
                    </button>
                    <button className="banner-actions-btn">
                      <IonIcon icon={filmOutline} />
                      <span>{property.videos}</span>
                    </button>
                  </div>
                </figure>

                <div className="card-content">
                  <div className="card-price">
                    <strong>{property.price}</strong>
                    {property.priceType && <span>{property.priceType}</span>}
                  </div>
                  <h3 className="h3 card-title">
                    <a href="#property">{property.title}</a>
                  </h3>
                  <p className="card-text">{property.description}</p>
                  <ul className="card-list">
                    <li className="card-item">
                      <IonIcon icon={bedOutline} />
                      <strong>{property.bedrooms}</strong>
                      <span>Beds</span>
                    </li>
                    <li className="card-item">
                      <IonIcon icon={waterOutline} />
                      <strong>{property.bathrooms}</strong>
                      <span>Baths</span>
                    </li>
                    <li className="card-item">
                      <IonIcon icon={expandOutline} />
                      <strong>{property.squareFeet.toLocaleString()}</strong>
                      <span>sqft</span>
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src={property.authorImage}
                        alt={property.author}
                        className="w-100"
                        loading="lazy"
                      />
                    </figure>
                    <div>
                      <p className="author-name">
                        <a href="#property">{property.author}</a>
                      </p>
                      <p className="author-title">{property.authorTitle}</p>
                    </div>
                  </div>
                  <div className="card-footer-actions">
                    <button 
                      className="card-footer-actions-btn"
                      aria-label="Expand"
                    >
                      <IonIcon icon={resizeOutline} />
                    </button>
                    <button 
                      className="card-footer-actions-btn"
                      onClick={() => toggleFavorite(property.id)}
                      aria-label="Add to favorites"
                    >
                      <IonIcon icon={favorites.includes(property.id) ? heart : heartOutline} />
                    </button>
                    <button 
                      className="card-footer-actions-btn"
                      aria-label="More options"
                    >
                      <IonIcon icon={addCircleOutline} />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Property;
