import React from "react";
import { IonIcon } from "@ionic/react";
import { person, pricetags, calendar, arrowForward } from "ionicons/icons";
import blog1 from "../../assets/images/blog-1.png";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";

const BlogSection = () => {
  const blogPosts = [
    {
      imgSrc: blog1,
      altText: "Modern interior design trends",
      title: "The Most Inspiring Interior Design Trends of 2024",
      date: "Jan 13, 2024",
      category: "Interior",
      author: "Sarah Johnson",
      readTime: "5 min read",
    },
    {
      imgSrc: blog2,
      altText: "Commercial real estate insights",
      title: "Recent Commercial Real Estate Transactions",
      date: "Feb 22, 2024",
      category: "Market",
      author: "Michael Chen",
      readTime: "7 min read",
    },
    {
      imgSrc: blog3,
      altText: "Living room renovation tips",
      title: "Renovating a Living Room? Experts Share Their Secrets",
      date: "Mar 15, 2024",
      category: "Renovation",
      author: "Emma Williams",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="blog" id="blog">
      <div className="container">
        <p className="section-subtitle">News & Insights</p>
        <h2 className="h2 section-title">Latest From Our Blog</h2>
        <ul className="blog-list">
          {blogPosts.map((post, index) => (
            <li key={index}>
              <article className="blog-card">
                <figure className="card-banner">
                  <img 
                    src={post.imgSrc} 
                    alt={post.altText} 
                    className="w-100" 
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-content-top">
                    <ul className="card-meta-list">
                      <li>
                        <a href="#blog" className="card-meta-link">
                          <IonIcon icon={person} />
                          <span>{post.author}</span>
                        </a>
                      </li>
                      <li>
                        <a href="#blog" className="card-meta-link">
                          <IonIcon icon={pricetags} />
                          <span>{post.category}</span>
                        </a>
                      </li>
                    </ul>
                    <h3 className="h3 blog-title">
                      <a href="#blog">{post.title}</a>
                    </h3>
                  </div>

                  <div className="blog-content-bottom">
                    <div className="publish-date">
                      <IonIcon icon={calendar} />
                      <time dateTime="2024-01-13">{post.date}</time>
                    </div>
                    <a href="#blog" className="read-more-btn">
                      Read More
                      <IonIcon icon={arrowForward} />
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
