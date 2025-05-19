import React, { useEffect, useRef } from 'react';
import { initScrollFadeIn } from '../utils/animation';

const ChefStory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      initScrollFadeIn();
    }
  }, []);

  return (
    <section id="chef" ref={sectionRef} className="section py-24 bg-charcoal relative">
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-burgundy opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
          {/* Chef Image */}
          <div className="lg:w-2/5 relative fade-in">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Chef Antoine Laurent" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute left-4 top-4 -z-0 w-full h-full border-2 border-gold rounded-lg"></div>
          </div>
          
          {/* Chef Story */}
          <div className="lg:w-3/5 fade-in">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 gold-accent">
              Meet Chef <span className="text-gold">Antoine Laurent</span>
            </h2>
            
            <div className="space-y-4 text-cream opacity-90">
              <p className="leading-relaxed">
                With over 25 years of culinary expertise, Chef Antoine Laurent brings a unique vision to Lumineux. Born in Lyon, France, Antoine's journey began in his grandmother's kitchen, where he discovered the transformative power of food.
              </p>
              
              <p className="leading-relaxed">
                His career has taken him from the kitchens of Paris to Tokyo, New York, and finally to our doors. Along the way, he has earned three Michelin stars and numerous international accolades for his innovative approach to classic French cuisine.
              </p>
              
              <p className="leading-relaxed">
                "My philosophy is simple," says Chef Antoine. "Respect the ingredient, master the technique, and present with passion. Every dish should tell a story and create a memory."
              </p>
              
              <blockquote className="border-l-4 border-gold pl-4 italic my-6 text-gold font-playfair">
                "Cooking is not just about nourishment—it's about creating moments of joy that linger long after the last bite."
              </blockquote>
            </div>
            
            <div className="mt-8 flex items-center">
              <img 
                src="https://images.pexels.com/photos/7545270/pexels-photo-7545270.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Chef Antoine's signature" 
                className="h-16 mr-6"
              />
              
              <div>
                <h4 className="font-playfair text-xl">Antoine Laurent</h4>
                <p className="text-cream opacity-70 text-sm">Executive Chef & Founder</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black bg-opacity-40 p-6 rounded-lg fade-in">
            <div className="text-gold text-4xl font-playfair mb-3">25+</div>
            <h3 className="text-xl font-playfair mb-2">Years of Excellence</h3>
            <p className="text-cream opacity-70 text-sm">A lifetime dedicated to the pursuit of culinary perfection</p>
          </div>
          
          <div className="bg-black bg-opacity-40 p-6 rounded-lg fade-in">
            <div className="text-gold text-4xl font-playfair mb-3">3</div>
            <h3 className="text-xl font-playfair mb-2">Michelin Stars</h3>
            <p className="text-cream opacity-70 text-sm">Recognized for exceptional cuisine worth a special journey</p>
          </div>
          
          <div className="bg-black bg-opacity-40 p-6 rounded-lg fade-in">
            <div className="text-gold text-4xl font-playfair mb-3">12</div>
            <h3 className="text-xl font-playfair mb-2">International Awards</h3>
            <p className="text-cream opacity-70 text-sm">Celebrated globally for innovation and excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefStory;