import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Hero from "../components/home/Home";
import About from "../components/about/About";
import Service from "../components/service/Service";
import Property from "../components/property/Property";
import Features from "../components/features/Features";
import BlogSection from "../components/blog/Blog";
import CtaSection from "../components/CTA/CTA";
import Footer from "../components/footer/Footer";
import ThreeBackground from "../components/three/ThreeBackground";
import Preloader from "../components/ui/Preloader";
import ScrollProgress from "../components/ui/ScrollProgress";
import CustomCursor from "../components/ui/CustomCursor";

const Home1 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <CustomCursor />
      <ScrollProgress />
      <ThreeBackground />
      
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease'
      }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Service />
          <Property />
          <Features />
          <BlogSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home1;
