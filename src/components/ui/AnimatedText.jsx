import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Animated text with various effects
export const TypewriterText = ({ text, className = '', delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll('.char');
    gsap.fromTo(chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.03,
        delay: delay,
        ease: 'power2.out'
      }
    );
  }, [delay]);

  return (
    <span ref={textRef} className={`typewriter-text ${className}`}>
      {text.split('').map((char, i) => (
        <span key={i} className="char">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

// Reveal text animation (word by word)
export const RevealText = ({ text, className = '', delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll('.word');
    gsap.fromTo(words,
      { 
        opacity: 0, 
        y: 50,
        rotateX: -90
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: delay,
        ease: 'back.out(1.7)'
      }
    );
  }, [delay]);

  return (
    <span ref={textRef} className={`reveal-text ${className}`}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word-wrapper">
          <span className="word">{word}</span>
          {i < text.split(' ').length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
};

// Sliding text animation
export const SlideText = ({ text, className = '', direction = 'up', delay = 0 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const yFrom = direction === 'up' ? 100 : -100;
    gsap.fromTo(textRef.current,
      { 
        opacity: 0, 
        y: yFrom,
        clipPath: direction === 'up' 
          ? 'inset(100% 0 0 0)' 
          : 'inset(0 0 100% 0)'
      },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0 0% 0)',
        duration: 1,
        delay: delay,
        ease: 'power4.out'
      }
    );
  }, [direction, delay]);

  return (
    <span ref={textRef} className={`slide-text ${className}`}>
      {text}
    </span>
  );
};

// Counter animation for numbers
export const AnimatedCounter = ({ target, duration = 2, prefix = '', suffix = '', delay = 0 }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const counter = { value: 0 };
    gsap.to(counter, {
      value: target,
      duration: duration,
      delay: delay,
      ease: 'power2.out',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${prefix}${Math.floor(counter.value).toLocaleString()}${suffix}`;
        }
      }
    });
  }, [target, duration, prefix, suffix, delay]);

  return <span ref={counterRef} className="animated-counter">{prefix}0{suffix}</span>;
};

// Magnetic button text
export const MagneticText = ({ children, className = '' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <span ref={textRef} className={`magnetic-text ${className}`}>
      {children}
    </span>
  );
};
