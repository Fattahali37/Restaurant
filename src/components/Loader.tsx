import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="text-gold font-playfair text-4xl md:text-6xl font-bold italic mb-8 animate-fade-in">
        Lumineux
      </div>
      <div className="w-64 md:w-96 h-px bg-burgundy bg-opacity-30 relative overflow-hidden">
        <div 
          className="h-full bg-gold transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-cream mt-4 text-sm tracking-widest uppercase font-light">
        {progress < 100 ? "Preparing your experience..." : "Welcome"}
      </div>
    </div>
  );
};

export default Loader;