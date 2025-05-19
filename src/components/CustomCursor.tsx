import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (hidden) setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Add link hover detection
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    // Add custom cursor class to body
    document.body.classList.add('custom-cursor-active');

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
      
      document.body.classList.remove('custom-cursor-active');
    };
  }, [hidden]);

  const cursorClasses = `
    fixed pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2
    mix-blend-difference transition-all duration-150 ease-out
    ${hidden ? 'opacity-0' : 'opacity-100'}
    ${clicked ? 'scale-90' : 'scale-100'}
  `;

  return (
    <>
      {/* Main cursor */}
      <div 
        className={`${cursorClasses} ${linkHovered ? 'w-8 h-8' : 'w-6 h-6'} rounded-full bg-white`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      
      {/* Trailing cursor */}
      <div 
        className={`${cursorClasses} ${linkHovered ? 'w-16 h-16' : 'w-12 h-12'} rounded-full border border-white bg-transparent opacity-50`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transition: 'transform 0.1s ease-out, width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
        }}
      ></div>
    </>
  );
};

export default CustomCursor;