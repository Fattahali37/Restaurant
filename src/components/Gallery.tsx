import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { initScrollFadeIn } from '../utils/animation';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'dishes' | 'interior' | 'events';
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'dishes' | 'interior' | 'events'>('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Exquisite plated dish with garnish",
      category: "dishes"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Elegant restaurant interior with ambient lighting",
      category: "interior"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Beautifully presented dessert with artistic elements",
      category: "dishes"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Private dining area set for a special event",
      category: "events"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Fine dining table setting with crystal glasses",
      category: "interior"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Chef preparing food in the kitchen",
      category: "events"
    },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
  
  const openLightbox = (index: number) => {
    setActiveIndex(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setActiveIndex(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (activeIndex === null) return;
    
    if (direction === 'prev') {
      setActiveIndex(activeIndex === 0 ? filteredImages.length - 1 : activeIndex - 1);
    } else {
      setActiveIndex(activeIndex === filteredImages.length - 1 ? 0 : activeIndex + 1);
    }
  };

  useEffect(() => {
    if (sectionRef.current) {
      initScrollFadeIn();
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCategory, activeIndex]);

  return (
    <section id="gallery" ref={sectionRef} className="section py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3 inline-block gold-accent">
            Our <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-cream opacity-80 max-w-xl mx-auto">
            A visual journey through our culinary creations, elegant spaces, and memorable moments
          </p>
        </div>
        
        {/* Gallery Categories */}
        <div className="flex justify-center mb-12 fade-in">
          <div className="flex space-x-2 md:space-x-8">
            {['all', 'dishes', 'interior', 'events'].map((category) => (
              <button
                key={category}
                className={`py-2 px-4 text-sm md:text-base uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category 
                    ? 'text-gold border-b border-gold' 
                    : 'text-cream opacity-70 hover:opacity-100 hover:text-gold'
                }`}
                onClick={() => setActiveCategory(category as 'all' | 'dishes' | 'interior' | 'events')}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg fade-in cursor-pointer transform transition-transform duration-500 hover:scale-[1.02] group"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-playfair">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {activeIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-6 right-6 text-white hover:text-gold"
              onClick={closeLightbox}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <button 
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gold"
              onClick={() => navigateLightbox('prev')}
            >
              <ArrowLeft size={32} />
            </button>
            
            <div className="max-w-4xl max-h-[80vh]">
              <img 
                src={filteredImages[activeIndex].src} 
                alt={filteredImages[activeIndex].alt} 
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            
            <button 
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gold"
              onClick={() => navigateLightbox('next')}
            >
              <ArrowRight size={32} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;