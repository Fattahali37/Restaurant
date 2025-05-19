import React, { useState, useEffect, useRef } from 'react';
import { initScrollFadeIn } from '../utils/animation';

interface ReservationFormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
}

const Reservations: React.FC = () => {
  const [formState, setFormState] = useState<ReservationFormState>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: 2,
          specialRequests: '',
        });
      }, 5000);
    }, 1500);
  };
  
  // Generate available times
  const timeOptions = [];
  for (let hour = 18; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      timeOptions.push(`${formattedHour}:${formattedMinute}`);
    }
  }
  
  useEffect(() => {
    if (sectionRef.current) {
      initScrollFadeIn();
    }
  }, []);

  return (
    <section id="reservations" ref={sectionRef} className="section py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Contact Information */}
          <div className="lg:w-1/2 fade-in">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 gold-accent">
              Make a <span className="text-gold">Reservation</span>
            </h2>
            
            <p className="text-cream opacity-90 mb-8 leading-relaxed">
              Experience the artistry of Lumineux with an unforgettable dining experience. Reservations are recommended to secure your table in our intimate setting.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-playfair mb-1">Phone</h3>
                  <p className="text-cream opacity-80">(555) 123-4567</p>
                  <p className="text-cream opacity-60 text-sm">Available 7 days a week, 12pm-10pm</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-playfair mb-1">Email</h3>
                  <p className="text-cream opacity-80">reservations@lumineux.com</p>
                  <p className="text-cream opacity-60 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-playfair mb-1">Location</h3>
                  <p className="text-cream opacity-80">123 Fifth Avenue</p>
                  <p className="text-cream opacity-80">New York, NY 10010</p>
                  <p className="text-cream opacity-60 text-sm">Located in the heart of the city</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-playfair mb-1">Hours</h3>
                  <p className="text-cream opacity-80">Monday - Saturday: 6pm - 11pm</p>
                  <p className="text-cream opacity-80">Sunday: Closed</p>
                  <p className="text-cream opacity-60 text-sm">Last seating at 9:30pm</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reservation Form */}
          <div className="lg:w-1/2 fade-in">
            <div className="bg-charcoal bg-opacity-70 rounded-lg p-6 md:p-8 border border-gray-800">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-playfair mb-4">Reservation Received!</h3>
                  <p className="text-cream opacity-80 mb-4">
                    Thank you for choosing Lumineux. We're looking forward to serving you.
                  </p>
                  <p className="text-cream opacity-80">
                    A confirmation email will be sent to {formState.email} shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-cream mb-2 text-sm" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-md py-2 px-4 text-cream focus:outline-none focus:border-gold transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-cream mb-2 text-sm" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-md py-2 px-4 text-cream focus:outline-none focus:border-gold transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-cream mb-2 text-sm" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-md py-2 px-4 text-cream focus:outline-none focus:border-gold transition-colors duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-cream mb-2 text-sm" htmlFor="guests">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formState.guests}
                        onChange={handleChange}
                        required
                        className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-md py-2 px-4 text-cream focus:outline-none focus:border-gold transition-colors duration-300"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                        <option value="9">Large Party (9+)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-cream mb-2 text-sm" htmlFor="date">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formState.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-md py-2 px-4 text-cream focus:outline-none focus:border-gold transition-colors duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-cream mb-2 text-sm" htmlFor="time">
                        Preferred Time
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formState.time}
                        onChange={handleChange}
                        required
                        className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-md py-2 px-4 text-cream focus:outline-none focus:border-gold transition-colors duration-300"
                      >
                        <option value="">Select a time</option>
                        {timeOptions.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-cream mb-2 text-sm" htmlFor="specialRequests">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formState.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-black bg-opacity-50 border border-gray-700 rounded-md py-2 px-4 text-cream focus:outline-none focus:border-gold transition-colors duration-300"
                      placeholder="Allergies, dietary restrictions, special occasions, etc."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn bg-burgundy hover:bg-opacity-90 text-cream py-3 px-6 uppercase tracking-widest text-sm transition-all duration-300 relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing
                      </span>
                    ) : 'Reserve a Table'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;