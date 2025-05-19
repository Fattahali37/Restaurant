import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { initParallaxEffect } from '../utils/animation';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (parallaxRef.current) {
      initParallaxEffect(parallaxRef.current);
    }
    
    // Text animation
    if (titleRef.current) {
      const title = titleRef.current;
      title.style.opacity = '0';
      title.style.transform = 'translateY(40px)';
      
      setTimeout(() => {
        title.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 500);
    }
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', 
            filter: 'brightness(0.3)',
            transform: 'scale(1.1)',
          }}
          data-parallax-speed="-0.2"
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 text-white"
        >
          <span className="inline-block">A Culinary</span> <br />
          <span className="inline-block text-gold">Masterpiece</span>
        </h1>
        
        <p className="text-lg md:text-xl text-cream max-w-lg mx-auto mb-8 opacity-90 font-light">
          Where artistry meets flavor in an atmosphere of timeless elegance
        </p>
        
        <a 
          href="#reservations" 
          className="btn bg-burgundy hover:bg-opacity-90 text-cream py-3 px-8 uppercase tracking-widest text-sm font-light transition-all duration-300"
        >
          Reserve a Table
        </a>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white hover:text-gold transition-colors duration-300">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;