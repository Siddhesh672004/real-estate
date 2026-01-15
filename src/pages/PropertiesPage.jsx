import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  locationOutline,
  bedOutline,
  waterOutline,
  expandOutline,
  heartOutline,
  heart,
  searchOutline,
  gridOutline,
  listOutline,
  filterOutline,
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

const PropertiesPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProperties = [
    {
      id: 1,
      image: property1,
      title: "Modern Luxury Villa",
      price: 8500000,
      priceDisplay: "₹85,00,000",
      priceType: "",
      description: "Stunning 4-bedroom villa with panoramic views, infinity pool, and smart home features.",
      location: "Koregaon Park, Pune",
      badge: "For Sale",
      type: "sale",
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 4500,
      featured: true,
    },
    {
      id: 2,
      image: property2,
      title: "Premium Apartment",
      price: 45000,
      priceDisplay: "₹45,000",
      priceType: "/month",
      description: "Fully furnished 2BHK apartment in a gated community with modern amenities.",
      location: "Hinjewadi, Pune",
      badge: "For Rent",
      type: "rent",
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1200,
      featured: true,
    },
    {
      id: 3,
      image: property3,
      title: "Penthouse Suite",
      price: 12500000,
      priceDisplay: "₹1,25,00,000",
      priceType: "",
      description: "Exclusive penthouse with private terrace, city skyline views, and luxury finishes.",
      location: "Baner, Pune",
      badge: "For Sale",
      type: "sale",
      bedrooms: 3,
      bathrooms: 3,
      squareFeet: 3200,
      featured: false,
    },
    {
      id: 4,
      image: property4,
      title: "Garden Townhouse",
      price: 35000,
      priceDisplay: "₹35,000",
      priceType: "/month",
      description: "Beautiful townhouse with private garden, perfect for families.",
      location: "Wakad, Pune",
      badge: "For Rent",
      type: "rent",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 2100,
      featured: false,
    },
    {
      id: 5,
      image: property1,
      title: "Seaside Mansion",
      price: 25000000,
      priceDisplay: "₹2,50,00,000",
      priceType: "",
      description: "Magnificent mansion with ocean views, private beach access, and more.",
      location: "Lonavala",
      badge: "For Sale",
      type: "sale",
      bedrooms: 6,
      bathrooms: 5,
      squareFeet: 8000,
      featured: true,
    },
    {
      id: 6,
      image: property2,
      title: "Studio Apartment",
      price: 18000,
      priceDisplay: "₹18,000",
      priceType: "/month",
      description: "Cozy studio apartment ideal for working professionals.",
      location: "Kharadi, Pune",
      badge: "For Rent",
      type: "rent",
      bedrooms: 1,
      bathrooms: 1,
      squareFeet: 500,
      featured: false,
    },
  ];

  const filteredProperties = allProperties.filter(property => {
    const matchesType = activeFilter === "all" || property.type === activeFilter;
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesPrice = true;
    if (priceRange === "low") matchesPrice = property.price < 50000;
    else if (priceRange === "mid") matchesPrice = property.price >= 50000 && property.price < 5000000;
    else if (priceRange === "high") matchesPrice = property.price >= 5000000;
    
    return matchesType && matchesSearch && matchesPrice;
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

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
              <p className="section-subtitle">Properties</p>
              <h1 className="h1 page-title">
                Find Your <span className="highlight">Perfect Property</span>
              </h1>
              <p className="page-text">
                Browse through our extensive collection of premium properties
              </p>
            </div>
          </section>

          {/* Filters Section */}
          <section className="filters-section">
            <div className="container">
              <div className="filters-bar">
                <div className="search-box">
                  <IonIcon icon={searchOutline} />
                  <input
                    type="text"
                    placeholder="Search by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="filter-group">
                  <button 
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('all')}
                  >
                    All
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

                <div className="filter-group">
                  <select 
                    className="price-select"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                  >
                    <option value="all">All Prices</option>
                    <option value="low">Under ₹50K</option>
                    <option value="mid">₹50K - ₹50L</option>
                    <option value="high">Above ₹50L</option>
                  </select>
                </div>

                <div className="view-toggle">
                  <button 
                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <IonIcon icon={gridOutline} />
                  </button>
                  <button 
                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                  >
                    <IonIcon icon={listOutline} />
                  </button>
                </div>
              </div>

              <p className="results-count">
                Showing {filteredProperties.length} of {allProperties.length} properties
              </p>
            </div>
          </section>

          {/* Properties Grid */}
          <section className="properties-section">
            <div className="container">
              <div className={`properties-grid ${viewMode}`}>
                {filteredProperties.map((property) => (
                  <div key={property.id} className="property-card">
                    <figure className="card-banner">
                      <Link to={`/property/${property.id}`}>
                        <img src={property.image} alt={property.title} loading="lazy" />
                      </Link>
                      <div className={`card-badge ${property.type === 'rent' ? 'green' : 'orange'}`}>
                        {property.badge}
                      </div>
                      {property.featured && (
                        <div className="card-badge featured">Featured</div>
                      )}
                      <button 
                        className="favorite-btn"
                        onClick={() => toggleFavorite(property.id)}
                      >
                        <IonIcon icon={favorites.includes(property.id) ? heart : heartOutline} />
                      </button>
                    </figure>

                    <div className="card-content">
                      <div className="card-price">
                        <strong>{property.priceDisplay}</strong>
                        {property.priceType && <span>{property.priceType}</span>}
                      </div>
                      <h3 className="h3 card-title">
                        <Link to={`/property/${property.id}`}>{property.title}</Link>
                      </h3>
                      <p className="card-location">
                        <IonIcon icon={locationOutline} />
                        {property.location}
                      </p>
                      <p className="card-text">{property.description}</p>
                      <ul className="card-list">
                        <li className="card-item">
                          <IonIcon icon={bedOutline} />
                          <strong>{property.bedrooms}</strong> Beds
                        </li>
                        <li className="card-item">
                          <IonIcon icon={waterOutline} />
                          <strong>{property.bathrooms}</strong> Baths
                        </li>
                        <li className="card-item">
                          <IonIcon icon={expandOutline} />
                          <strong>{property.squareFeet.toLocaleString()}</strong> sqft
                        </li>
                      </ul>
                      <Link to={`/property/${property.id}`} className="btn btn-outline view-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <div className="no-results">
                  <IonIcon icon={filterOutline} />
                  <h3>No properties found</h3>
                  <p>Try adjusting your filters or search query</p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PropertiesPage;
