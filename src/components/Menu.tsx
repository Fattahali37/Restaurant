import React, { useState, useEffect, useRef } from 'react';
import { initScrollFadeIn } from '../utils/animation';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'mains' | 'desserts';
  featured?: boolean;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'starters' | 'mains' | 'desserts'>('starters');
  const sectionRef = useRef<HTMLElement>(null);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Truffle & Wild Mushroom Tartare",
      description: "Wild mushrooms, black truffle, quail egg, toasted brioche",
      price: "$28",
      category: "starters",
      featured: true
    },
    {
      id: 2,
      name: "Hand-Dived Scallops",
      description: "Pan-seared scallops, cauliflower purée, golden raisins, pine nuts, brown butter",
      price: "$32",
      category: "starters"
    },
    {
      id: 3,
      name: "Foie Gras Parfait",
      description: "Smooth foie gras parfait, Sauternes jelly, toasted sourdough",
      price: "$30",
      category: "starters"
    },
    {
      id: 4,
      name: "Dry-Aged Filet Mignon",
      description: "45-day aged beef, pomme purée, wild mushrooms, red wine jus",
      price: "$68",
      category: "mains",
      featured: true
    },
    {
      id: 5,
      name: "Dover Sole Meunière",
      description: "Whole Dover sole, brown butter, lemon, capers, parsley, new potatoes",
      price: "$72",
      category: "mains"
    },
    {
      id: 6,
      name: "Rack of Lamb",
      description: "Herb-crusted lamb rack, eggplant caviar, grilled artichokes, rosemary jus",
      price: "$64",
      category: "mains"
    },
    {
      id: 7,
      name: "Valrhona Chocolate Soufflé",
      description: "Warm chocolate soufflé, vanilla bean ice cream, chocolate tuile",
      price: "$22",
      category: "desserts",
      featured: true
    },
    {
      id: 8,
      name: "Crème Brûlée",
      description: "Classic vanilla bean crème brûlée, seasonal berries, shortbread biscuit",
      price: "$18",
      category: "desserts"
    },
    {
      id: 9,
      name: "Tarte Tatin",
      description: "Caramelized apple tart, vanilla bean ice cream, salted caramel sauce",
      price: "$20",
      category: "desserts"
    },
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    if (sectionRef.current) {
      initScrollFadeIn();
    }
  }, [activeCategory]);

  return (
    <section id="menu" ref={sectionRef} className="section bg-black py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-charcoal to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3 inline-block gold-accent">
            Our <span className="text-gold">Menu</span>
          </h2>
          <p className="text-cream opacity-80 max-w-xl mx-auto">
            A curated selection of exquisite dishes that showcase the finest seasonal ingredients and our chef's creativity
          </p>
        </div>
        
        {/* Menu Categories */}
        <div className="flex justify-center mb-12 fade-in">
          <div className="flex space-x-2 md:space-x-8 border-b border-burgundy">
            {['starters', 'mains', 'desserts'].map((category) => (
              <button
                key={category}
                className={`py-3 px-4 text-sm md:text-base uppercase tracking-wider transition-all duration-300 relative ${
                  activeCategory === category 
                    ? 'text-gold font-medium' 
                    : 'text-cream opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveCategory(category as 'starters' | 'mains' | 'desserts')}
              >
                {category}
                {activeCategory === category && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"></span>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`menu-item p-6 border border-gray-800 rounded-lg bg-charcoal bg-opacity-60 fade-in ${
                item.featured ? 'border-gold border-opacity-30' : 'border-opacity-10'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-playfair">
                  {item.name}
                  {item.featured && (
                    <span className="ml-2 text-xs py-1 px-2 bg-burgundy text-cream rounded-full uppercase tracking-wider">
                      Chef's selection
                    </span>
                  )}
                </h3>
                <span className="text-gold font-playfair text-xl">{item.price}</span>
              </div>
              <p className="text-cream opacity-70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center fade-in">
          <p className="text-cream opacity-80 mb-6">
            Our menu changes seasonally to showcase the finest ingredients
          </p>
          <a 
            href="#reservations" 
            className="btn bg-burgundy hover:bg-opacity-90 text-cream py-3 px-8 uppercase tracking-widest text-sm transition-all duration-300"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;