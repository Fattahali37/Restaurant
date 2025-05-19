import React, { useEffect, useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { initScrollFadeIn } from '../utils/animation';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Johnson",
      title: "Food Critic, Gourmet Magazine",
      quote: "Lumineux redefines fine dining with a seamless blend of traditional techniques and modern innovation. Each dish is a masterpiece that exceeds expectations in flavor, presentation, and creativity.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      title: "Culinary Institute Director",
      quote: "Chef Antoine's approach to gastronomy is nothing short of revolutionary. The tasting menu at Lumineux takes diners on a journey that challenges and delights the senses in equal measure.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      rating: 5
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      title: "International Food Blogger",
      quote: "From the moment you enter, Lumineux captivates with its ambiance. The service is impeccable, the wine pairings are inspired, and the cuisine showcases a mastery that few establishments can match.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      rating: 5
    },
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (sectionRef.current) {
      initScrollFadeIn();
    }
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="section py-24 bg-charcoal relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute left-0 top-40 w-64 h-64 rounded-full bg-burgundy opacity-10"></div>
      <div className="absolute right-0 bottom-40 w-80 h-80 rounded-full bg-burgundy opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3 inline-block gold-accent">
            What Our <span className="text-gold">Guests Say</span>
          </h2>
          <p className="text-cream opacity-80 max-w-xl mx-auto">
            Experiences shared by critics, chefs, and patrons who have enjoyed our culinary journey
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative fade-in">
          <div className="relative bg-black bg-opacity-40 p-8 md:p-12 rounded-lg overflow-hidden">
            {/* Quote marks decoration */}
            <div className="absolute top-4 left-4 text-gold opacity-20 text-6xl font-serif">"</div>
            <div className="absolute bottom-4 right-4 text-gold opacity-20 text-6xl font-serif rotate-180">"</div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gold mb-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-playfair text-center">{testimonials[activeIndex].name}</h3>
                <p className="text-cream opacity-70 text-sm text-center">{testimonials[activeIndex].title}</p>
                
                <div className="flex items-center mt-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="text-lg md:text-xl italic font-playfair text-cream mb-6">
                  {testimonials[activeIndex].quote}
                </blockquote>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-burgundy bg-opacity-30 flex items-center justify-center text-cream hover:bg-opacity-50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-gold w-4' : 'bg-cream opacity-50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-burgundy bg-opacity-30 flex items-center justify-center text-cream hover:bg-opacity-50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;