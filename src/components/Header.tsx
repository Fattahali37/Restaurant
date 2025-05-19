import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Menu', href: '#menu' },
    { title: 'Chef', href: '#chef' },
    { title: 'Gallery', href: '#gallery' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Reservations', href: '#reservations' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-gold font-playfair text-2xl md:text-3xl font-bold italic">
            Lumineux
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-cream hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider font-light"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-cream hover:text-gold"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col justify-center items-center`}
      >
        <nav className="w-full">
          <ul className="flex flex-col items-center justify-center space-y-8">
            {navItems.map((item, index) => (
              <li key={index} className="w-full text-center">
                <a 
                  href={item.href}
                  className="text-cream hover:text-gold transition-colors duration-300 text-xl uppercase tracking-wider font-light block py-2"
                  onClick={() => {
                    toggleMobileMenu();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;