import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// Preloader component with elegant animation
const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Animate out preloader
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      tl.to(progressRef.current, {
        width: '100%',
        duration: 0.3,
        ease: 'power2.out'
      })
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3
      })
      .to(preloaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut'
      });
    }
  }, [progress, onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader-content">
        <div className="preloader-logo">
          <span className="logo-text">HOMEVERSE</span>
          <span className="logo-dot"></span>
        </div>
        <div ref={textRef} className="preloader-text">
          <span>Crafting your dream home experience</span>
        </div>
        <div className="preloader-progress-container">
          <div
            ref={progressRef}
            className="preloader-progress"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <div className="preloader-percentage">{Math.min(Math.floor(progress), 100)}%</div>
      </div>
    </div>
  );
};

export default Preloader;
