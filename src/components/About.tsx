import React, { useEffect, useRef } from 'react';
import { initScrollFadeIn } from '../utils/animation';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      initScrollFadeIn();
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section bg-charcoal py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -right-20 top-20 w-80 h-80 rounded-full bg-burgundy opacity-10"></div>
      <div className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full bg-burgundy opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 fade-in">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 gold-accent">
              The Essence of <span className="text-gold">Lumineux</span>
            </h2>
            
            <p className="text-cream opacity-90 mb-4 leading-relaxed">
              Founded in 2010, Lumineux embodies the perfect marriage between traditional culinary techniques and modern gastronomic innovation. Our philosophy is simple: extraordinary ingredients, prepared with mastery and presented with artistic flair.
            </p>
            
            <p className="text-cream opacity-90 mb-8 leading-relaxed">
              Each dish at Lumineux tells a story—a narrative of heritage, seasonality, and the pursuit of perfection. We source only the finest ingredients from local artisans and distant shores alike, creating a dining experience that transcends the ordinary.
            </p>
            
            <div className="flex gap-4 items-center">
              <div className="h-px w-12 bg-gold"></div>
              <p className="text-gold italic font-playfair">Est. 2010</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative fade-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Interior of Lumineux restaurant" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -right-8 -bottom-8 w-3/4 h-3/4 border-2 border-gold rounded-lg z-0"></div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="text-center fade-in">
            <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Award-winning cuisine" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-xl font-playfair mb-3">Award-Winning Cuisine</h3>
            <p className="text-cream opacity-80 text-sm">Our chef has earned three Michelin stars for exceptional culinary artistry.</p>
          </div>
          
          <div className="text-center fade-in">
            <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Seasonal ingredients" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-xl font-playfair mb-3">Sustainable Sourcing</h3>
            <p className="text-cream opacity-80 text-sm">We partner with local farms and sustainable providers for the freshest ingredients.</p>
          </div>
          
          <div className="text-center fade-in">
            <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Intimate atmosphere" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-xl font-playfair mb-3">Intimate Atmosphere</h3>
            <p className="text-cream opacity-80 text-sm">Our carefully designed space offers the perfect setting for memorable dining experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;