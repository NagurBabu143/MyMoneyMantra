import React from 'react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div 
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 1000,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onClick={scrollToTop}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      aria-label="Scroll to top"
      role="button"
    >
      <img 
        src="https://cdn2.mymoneymantra.com/scroll_img_102d898c98.webp?format=avif&quality=80" 
        width="50" 
        height="50" 
        alt="Scroll to top"
        loading="lazy"
        decoding="async"
        className="h-[50px] w-[50px] lg:!h-[60px] lg:!w-[60px]"
        style={{
          display: 'block',
        }}
      />
    </div>
  );
};

export default ScrollToTopButton;