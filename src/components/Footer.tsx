import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-gold font-playfair text-3xl font-bold italic mb-3 inline-block">
              Lumineux
            </a>
            <p className="text-cream opacity-70 max-w-md">
              A culinary experience that transcends the ordinary, where each dish tells a story of passion and creativity.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-burgundy bg-opacity-20 flex items-center justify-center text-cream hover:bg-opacity-40 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-burgundy bg-opacity-20 flex items-center justify-center text-cream hover:bg-opacity-40 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-burgundy bg-opacity-20 flex items-center justify-center text-cream hover:bg-opacity-40 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-lg font-playfair mb-4 gold-accent inline-block">Hours</h3>
            <ul className="space-y-2 text-cream opacity-80">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>6:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>6:00 PM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair mb-4 gold-accent inline-block">Contact</h3>
            <ul className="space-y-2 text-cream opacity-80">
              <li>(555) 123-4567</li>
              <li>info@lumineux.com</li>
              <li>123 Fifth Avenue</li>
              <li>New York, NY 10010</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair mb-4 gold-accent inline-block">Newsletter</h3>
            <p className="text-cream opacity-80 mb-4">Subscribe to our newsletter for special events and offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address"
                className="bg-charcoal border border-gray-800 rounded-l-md py-2 px-4 w-full text-cream focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button 
                type="submit"
                className="bg-burgundy hover:bg-opacity-90 text-cream py-2 px-4 rounded-r-md uppercase text-sm tracking-wide transition-all duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 text-center text-cream opacity-60 text-sm">
          <p>&copy; {new Date().getFullYear()} Lumineux. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;