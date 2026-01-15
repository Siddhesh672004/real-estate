import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { person, pricetags, calendar, arrowForward, searchOutline } from "ionicons/icons";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ThreeBackground from "../components/three/ThreeBackground";
import ScrollProgress from "../components/ui/ScrollProgress";
import CustomCursor from "../components/ui/CustomCursor";
import blog1 from "../assets/images/blog-1.png";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      imgSrc: blog1,
      title: "The Most Inspiring Interior Design Trends of 2024",
      excerpt: "Discover the latest trends that are reshaping modern home interiors...",
      date: "Jan 13, 2024",
      category: "Interior",
      author: "Sarah Johnson",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      imgSrc: blog2,
      title: "Recent Commercial Real Estate Transactions",
      excerpt: "Analysis of the biggest commercial property deals in the market...",
      date: "Feb 22, 2024",
      category: "Market",
      author: "Michael Chen",
      readTime: "7 min read",
      featured: true,
    },
    {
      id: 3,
      imgSrc: blog3,
      title: "Renovating a Living Room? Experts Share Their Secrets",
      excerpt: "Pro tips for transforming your living space on any budget...",
      date: "Mar 15, 2024",
      category: "Renovation",
      author: "Emma Williams",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      imgSrc: blog1,
      title: "Smart Home Technology: A Complete Guide",
      excerpt: "Everything you need to know about automating your home...",
      date: "Mar 20, 2024",
      category: "Technology",
      author: "Alex Kumar",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 5,
      imgSrc: blog2,
      title: "How to Increase Your Property Value",
      excerpt: "Strategic improvements that boost your home's market worth...",
      date: "Apr 5, 2024",
      category: "Investment",
      author: "Sarah Johnson",
      readTime: "5 min read",
      featured: false,
    },
    {
      id: 6,
      imgSrc: blog3,
      title: "First-Time Home Buyer's Checklist",
      excerpt: "Essential steps for navigating your first property purchase...",
      date: "Apr 12, 2024",
      category: "Guide",
      author: "Michael Chen",
      readTime: "10 min read",
      featured: true,
    },
  ];

  const categories = ["all", "Interior", "Market", "Renovation", "Technology", "Investment", "Guide"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

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
              <p className="section-subtitle">Our Blog</p>
              <h1 className="h1 page-title">
                News & <span className="highlight">Insights</span>
              </h1>
              <p className="page-text">
                Stay updated with the latest real estate trends and tips
              </p>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="featured-posts">
            <div className="container">
              <h2 className="h2 section-title">Featured Articles</h2>
              <div className="featured-grid">
                {featuredPosts.map((post, index) => (
                  <article key={post.id} className={`featured-card ${index === 0 ? 'large' : ''}`}>
                    <figure className="card-banner">
                      <img src={post.imgSrc} alt={post.title} loading="lazy" />
                    </figure>
                    <div className="card-content">
                      <span className="category">{post.category}</span>
                      <h3 className="h3 card-title">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="card-excerpt">{post.excerpt}</p>
                      <div className="card-meta">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* All Posts */}
          <section className="all-posts">
            <div className="container">
              <div className="posts-header">
                <h2 className="h2 section-title">All Articles</h2>
                <div className="posts-controls">
                  <div className="search-box">
                    <IonIcon icon={searchOutline} />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="category-filters">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat === 'all' ? 'All' : cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="posts-grid">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <figure className="card-banner">
                      <Link to={`/blog/${post.id}`}>
                        <img src={post.imgSrc} alt={post.title} loading="lazy" />
                      </Link>
                    </figure>
                    <div className="blog-content">
                      <div className="blog-content-top">
                        <ul className="card-meta-list">
                          <li>
                            <span className="card-meta-link">
                              <IonIcon icon={person} />
                              <span>{post.author}</span>
                            </span>
                          </li>
                          <li>
                            <span className="card-meta-link">
                              <IonIcon icon={pricetags} />
                              <span>{post.category}</span>
                            </span>
                          </li>
                        </ul>
                        <h3 className="h3 blog-title">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="blog-excerpt">{post.excerpt}</p>
                      </div>
                      <div className="blog-content-bottom">
                        <div className="publish-date">
                          <IonIcon icon={calendar} />
                          <time>{post.date}</time>
                        </div>
                        <Link to={`/blog/${post.id}`} className="read-more-btn">
                          Read More
                          <IonIcon icon={arrowForward} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="no-results">
                  <p>No articles found matching your criteria</p>
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

export default BlogPage;
