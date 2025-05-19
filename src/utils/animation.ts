// Parallax effect
export const initParallaxEffect = (container: HTMLElement) => {
  const parallaxElements = container.querySelectorAll('[data-parallax-speed]');
  
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    
    parallaxElements.forEach((el) => {
      const element = el as HTMLElement;
      const speed = parseFloat(element.dataset.parallaxSpeed || '0');
      const yPos = scrollTop * speed;
      
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Call once to set initial position
  handleScroll();
  
  return () => window.removeEventListener('scroll', handleScroll);
};

// Fade-in effect for elements
export const initScrollFadeIn = () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const checkFadeElements = () => {
    const triggerBottom = window.innerHeight * 0.8;
    
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerBottom) {
        element.classList.add('is-visible');
      }
    });
  };
  
  window.addEventListener('scroll', checkFadeElements);
  window.addEventListener('resize', checkFadeElements);
  
  // Call once to check initial viewable elements
  checkFadeElements();
  
  return () => {
    window.removeEventListener('scroll', checkFadeElements);
    window.removeEventListener('resize', checkFadeElements);
  };
};

// Initialize both animation types
export const initAnimations = () => {
  const cleanupParallax = initScrollFadeIn();
  const cleanupFadeIn = initScrollFadeIn();
  
  return () => {
    cleanupParallax();
    cleanupFadeIn();
  };
};