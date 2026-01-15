import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  locationOutline,
  bedOutline,
  waterOutline,
  expandOutline,
  heartOutline,
  heart,
  shareOutline,
  callOutline,
  mailOutline,
  arrowBackOutline,
  carSportOutline,
  wifiOutline,
  tvOutline,
  snowOutline,
  flameOutline,
  fitnessOutline,
  shieldCheckmarkOutline,
  sunnyOutline,
  restaurantOutline,
  checkmarkCircleOutline,
  chevronForwardOutline,
  chevronBackOutline,
  closeOutline,
  starOutline,
  star,
} from "ionicons/icons";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ThreeBackground from "../components/three/ThreeBackground";
import ScrollProgress from "../components/ui/ScrollProgress";
import CustomCursor from "../components/ui/CustomCursor";
import property1 from "../assets/images/property-1.jpg";
import property2 from "../assets/images/property-2.jpg";
import property3 from "../assets/images/property-3.jpg";
import property4 from "../assets/images/property-4.png";
import author from "../assets/images/author.png";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Mock property data (in real app, fetch by ID)
  const property = {
    id: parseInt(id),
    title: "Modern Luxury Villa with Pool",
    price: "₹85,00,000",
    priceType: "",
    description: `This stunning 4-bedroom villa offers the perfect blend of modern luxury and comfortable living. 
    Situated in the prestigious Koregaon Park area, this property features panoramic views, an infinity pool, 
    and state-of-the-art smart home technology.
    
    The open-concept living area seamlessly connects to a gourmet kitchen with premium appliances. 
    Floor-to-ceiling windows flood the space with natural light and offer breathtaking views of the surrounding landscape.
    
    Each bedroom is designed as a private retreat, with the master suite featuring a spa-like bathroom, 
    walk-in closet, and private balcony. The property includes a home office, entertainment room, and guest quarters.`,
    location: "Koregaon Park, Pune, Maharashtra",
    address: "123 Luxury Lane, Koregaon Park, Pune - 411001",
    badge: "For Sale",
    type: "sale",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 4500,
    yearBuilt: 2022,
    propertyType: "Villa",
    parking: 2,
    images: [property1, property2, property3, property4, property1],
    agent: {
      name: "Rahul Sharma",
      title: "Senior Property Agent",
      phone: "+91 98765 43210",
      email: "rahul@homeverse.com",
      image: author,
      rating: 4.8,
      reviews: 127,
    },
    amenities: [
      { icon: carSportOutline, name: "Private Parking", available: true },
      { icon: wifiOutline, name: "High-Speed WiFi", available: true },
      { icon: tvOutline, name: "Smart TV", available: true },
      { icon: snowOutline, name: "Air Conditioning", available: true },
      { icon: flameOutline, name: "Central Heating", available: true },
      { icon: fitnessOutline, name: "Home Gym", available: true },
      { icon: shieldCheckmarkOutline, name: "Security System", available: true },
      { icon: sunnyOutline, name: "Swimming Pool", available: true },
      { icon: restaurantOutline, name: "Modular Kitchen", available: true },
    ],
    rooms: [
      { name: "Master Bedroom", size: "400 sqft", description: "King bed, en-suite bathroom, walk-in closet, balcony" },
      { name: "Bedroom 2", size: "280 sqft", description: "Queen bed, attached bathroom, city view" },
      { name: "Bedroom 3", size: "250 sqft", description: "Twin beds, shared bathroom, garden view" },
      { name: "Bedroom 4 / Office", size: "220 sqft", description: "Convertible space, can be used as home office" },
      { name: "Living Room", size: "600 sqft", description: "Open concept, floor-to-ceiling windows, fireplace" },
      { name: "Kitchen", size: "350 sqft", description: "Modular kitchen, island counter, premium appliances" },
      { name: "Dining Area", size: "200 sqft", description: "8-seater dining, connected to kitchen" },
      { name: "Home Theater", size: "300 sqft", description: "Acoustic panels, 120-inch screen, surround sound" },
    ],
    features: [
      "Smart home automation",
      "Solar panels installed",
      "Rain water harvesting",
      "24/7 security with CCTV",
      "Landscaped garden",
      "Infinity pool with jacuzzi",
      "Covered outdoor BBQ area",
      "Electric car charging station",
      "Imported marble flooring",
      "Italian bathroom fixtures",
    ],
    nearbyPlaces: [
      { name: "Phoenix Mall", distance: "2 km" },
      { name: "International School", distance: "1.5 km" },
      { name: "City Hospital", distance: "3 km" },
      { name: "Metro Station", distance: "1 km" },
      { name: "Airport", distance: "15 km" },
    ],
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <ThreeBackground />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        
        <main className="property-detail-page">
          {/* Breadcrumb */}
          <section className="breadcrumb-section">
            <div className="container">
              <Link to="/properties" className="back-link">
                <IonIcon icon={arrowBackOutline} />
                <span>Back to Properties</span>
              </Link>
              <nav className="breadcrumb">
                <Link to="/">Home</Link>
                <IonIcon icon={chevronForwardOutline} />
                <Link to="/properties">Properties</Link>
                <IonIcon icon={chevronForwardOutline} />
                <span>{property.title}</span>
              </nav>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="gallery-section">
            <div className="container">
              <div className="gallery-grid">
                <div className="main-image" onClick={() => setShowGallery(true)}>
                  <img src={property.images[0]} alt={property.title} />
                  <div className="image-overlay">
                    <span>View All Photos ({property.images.length})</span>
                  </div>
                </div>
                <div className="side-images">
                  {property.images.slice(1, 5).map((img, index) => (
                    <div key={index} className="side-image" onClick={() => { setActiveImage(index + 1); setShowGallery(true); }}>
                      <img src={img} alt={`View ${index + 2}`} />
                      {index === 3 && property.images.length > 5 && (
                        <div className="more-overlay">+{property.images.length - 5}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Property Info */}
          <section className="property-info-section">
            <div className="container">
              <div className="property-content">
                {/* Left Content */}
                <div className="main-content">
                  <div className="property-header">
                    <div className="header-top">
                      <span className={`badge ${property.type === 'rent' ? 'green' : 'orange'}`}>
                        {property.badge}
                      </span>
                      <span className="property-type">{property.propertyType}</span>
                    </div>
                    <h1 className="property-title">{property.title}</h1>
                    <p className="property-location">
                      <IonIcon icon={locationOutline} />
                      {property.address}
                    </p>
                    <div className="property-price">
                      <span className="price">{property.price}</span>
                      {property.priceType && <span className="period">{property.priceType}</span>}
                    </div>
                  </div>

                  <div className="property-stats">
                    <div className="stat">
                      <IonIcon icon={bedOutline} />
                      <span><strong>{property.bedrooms}</strong> Bedrooms</span>
                    </div>
                    <div className="stat">
                      <IonIcon icon={waterOutline} />
                      <span><strong>{property.bathrooms}</strong> Bathrooms</span>
                    </div>
                    <div className="stat">
                      <IonIcon icon={expandOutline} />
                      <span><strong>{property.squareFeet.toLocaleString()}</strong> sqft</span>
                    </div>
                    <div className="stat">
                      <IonIcon icon={carSportOutline} />
                      <span><strong>{property.parking}</strong> Parking</span>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="property-tabs">
                    <button 
                      className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                      onClick={() => setActiveTab('overview')}
                    >
                      Overview
                    </button>
                    <button 
                      className={`tab-btn ${activeTab === 'rooms' ? 'active' : ''}`}
                      onClick={() => setActiveTab('rooms')}
                    >
                      Rooms
                    </button>
                    <button 
                      className={`tab-btn ${activeTab === 'amenities' ? 'active' : ''}`}
                      onClick={() => setActiveTab('amenities')}
                    >
                      Amenities
                    </button>
                    <button 
                      className={`tab-btn ${activeTab === 'location' ? 'active' : ''}`}
                      onClick={() => setActiveTab('location')}
                    >
                      Location
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="tab-content">
                    {activeTab === 'overview' && (
                      <div className="overview-content">
                        <h3>About This Property</h3>
                        <div className="description">
                          {property.description.split('\n').map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>

                        <h3>Property Features</h3>
                        <ul className="features-grid">
                          {property.features.map((feature, index) => (
                            <li key={index}>
                              <IonIcon icon={checkmarkCircleOutline} />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <h3>Property Details</h3>
                        <div className="details-grid">
                          <div className="detail-item">
                            <span className="label">Property Type</span>
                            <span className="value">{property.propertyType}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">Year Built</span>
                            <span className="value">{property.yearBuilt}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">Lot Size</span>
                            <span className="value">{property.squareFeet.toLocaleString()} sqft</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">Parking</span>
                            <span className="value">{property.parking} Spaces</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'rooms' && (
                      <div className="rooms-content">
                        <h3>Room Details</h3>
                        <div className="rooms-grid">
                          {property.rooms.map((room, index) => (
                            <div key={index} className="room-card">
                              <div className="room-header">
                                <h4>{room.name}</h4>
                                <span className="room-size">{room.size}</span>
                              </div>
                              <p>{room.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'amenities' && (
                      <div className="amenities-content">
                        <h3>Property Amenities</h3>
                        <div className="amenities-grid">
                          {property.amenities.map((amenity, index) => (
                            <div key={index} className={`amenity-item ${amenity.available ? 'available' : 'unavailable'}`}>
                              <IonIcon icon={amenity.icon} />
                              <span>{amenity.name}</span>
                              {amenity.available ? (
                                <IonIcon icon={checkmarkCircleOutline} className="status-icon available" />
                              ) : (
                                <IonIcon icon={closeOutline} className="status-icon unavailable" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'location' && (
                      <div className="location-content">
                        <h3>Location & Nearby</h3>
                        <div className="map-placeholder">
                          <IonIcon icon={locationOutline} />
                          <p>Map integration coming soon</p>
                          <span>{property.address}</span>
                        </div>

                        <h4>Nearby Places</h4>
                        <ul className="nearby-list">
                          {property.nearbyPlaces.map((place, index) => (
                            <li key={index}>
                              <span className="place-name">{place.name}</span>
                              <span className="place-distance">{place.distance}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="property-sidebar">
                  <div className="action-buttons">
                    <button 
                      className={`action-btn ${isFavorite ? 'active' : ''}`}
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <IonIcon icon={isFavorite ? heart : heartOutline} />
                      <span>{isFavorite ? 'Saved' : 'Save'}</span>
                    </button>
                    <button className="action-btn">
                      <IonIcon icon={shareOutline} />
                      <span>Share</span>
                    </button>
                  </div>

                  <div className="agent-card">
                    <h3>Contact Agent</h3>
                    <div className="agent-info">
                      <figure className="agent-avatar">
                        <img src={property.agent.image} alt={property.agent.name} />
                      </figure>
                      <div className="agent-details">
                        <h4>{property.agent.name}</h4>
                        <p>{property.agent.title}</p>
                        <div className="agent-rating">
                          <IonIcon icon={star} />
                          <span>{property.agent.rating}</span>
                          <span className="reviews">({property.agent.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="contact-buttons">
                      <a href={`tel:${property.agent.phone}`} className="btn btn-primary">
                        <IonIcon icon={callOutline} />
                        <span>Call Now</span>
                      </a>
                      <a href={`mailto:${property.agent.email}`} className="btn btn-outline">
                        <IonIcon icon={mailOutline} />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>

                  <div className="inquiry-form">
                    <h3>Request Information</h3>
                    <form>
                      <input type="text" placeholder="Your Name" required />
                      <input type="email" placeholder="Your Email" required />
                      <input type="tel" placeholder="Your Phone" />
                      <textarea placeholder="I'm interested in this property..." rows="4"></textarea>
                      <button type="submit" className="btn btn-primary w-100">
                        Send Message
                      </button>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Fullscreen Gallery Modal */}
      {showGallery && (
        <div className="gallery-modal">
          <button className="close-btn" onClick={() => setShowGallery(false)}>
            <IonIcon icon={closeOutline} />
          </button>
          <button className="nav-btn prev" onClick={prevImage}>
            <IonIcon icon={chevronBackOutline} />
          </button>
          <div className="modal-image">
            <img src={property.images[activeImage]} alt={`View ${activeImage + 1}`} />
          </div>
          <button className="nav-btn next" onClick={nextImage}>
            <IonIcon icon={chevronForwardOutline} />
          </button>
          <div className="gallery-thumbnails">
            {property.images.map((img, index) => (
              <div 
                key={index} 
                className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="image-counter">
            {activeImage + 1} / {property.images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyDetailPage;
