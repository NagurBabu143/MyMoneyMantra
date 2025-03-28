import React, { useEffect, useRef, useCallback } from 'react';
import './Partners.css';
import decoratorTopLeft from '..//images/5.png'; // Adjust path as needed
import decoratorBottomRight from '..//images/6.png'; // Adjust path as needed

const Partners = () => {
  const partners = [
    { name: 'HDFC Bank', logo: 'https://cdn2.mymoneymantra.com/HDFC_Bank_a02790eed1.webp', link: '/credit-cards/hdfc' },
    { name: 'Axis Bank', logo: 'https://cdn2.mymoneymantra.com/axis_bank_c865a24f04.webp', link: '/credit-cards/axis-bank' },
    { name: 'HSBC', logo: 'https://cdn2.mymoneymantra.com/HSBC_352f103f24.webp', link: '/credit-cards/hsbc-bank' },
    { name: 'AU Small Finance Bank', logo: 'https://cdn2.mymoneymantra.com/AU_small_finance_bank_a16db67f86.webp', link: '/credit-cards/au-small-finance-bank' },
    { name: 'Yes Bank', logo: 'https://cdn2.mymoneymantra.com/yes_Bank_9f45592ee7.webp', link: '/credit-cards/yes-bank' },
    { name: 'SBI Card', logo: 'https://cdn2.mymoneymantra.com/SB_Icard_6e006b2663.webp', link: '/credit-cards/sbi-card' },
    { name: 'Kotak Bank', logo: 'https://cdn2.mymoneymantra.com/Kotak_Bank_1188c028d9.webp', link: '/credit-cards/kotak-mahindra-bank' },
    { name: 'IDFC', logo: 'https://cdn2.mymoneymantra.com/IDFC_31cd31225f.webp', link: '/credit-cards/idfc-first-bank' },
    { name: 'American Express', logo: 'https://cdn2.mymoneymantra.com/american_express_c690326cc3.webp', link: '/credit-cards/american-express' },
  ];

  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1;
  const positionRef = useRef(0);

  const animate = useCallback(() => {
    positionRef.current -= scrollSpeed;
    
    if (sliderRef.current) {
      if (positionRef.current < -sliderRef.current.scrollWidth / 2) {
        positionRef.current = 0;
      }
      
      sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    }
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <div className="relative px-4 py-6 lg:py-8 lg:mt-4 lg:px-0 overflow-hidden partners-container">
      {/* Top-left decorative image */}
      <img 
        src={decoratorTopLeft} 
        alt="Decoration" 
        className="absolute top-0 left-0 w-20 h-20 lg:w-32 lg:h-32 z-0"
      />
      
      <div className="container z-1 relative">
        <div className="bg-gradient-to-b from-[#ebf8f8] to-[#ffffff] bg-white rounded-[30px] pt-4 lg:py-10 lg:rounded-[50px] black-shadow">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 lg:mb-10">
              Our <span className="blue-underline">Partners</span>
            </h2>
          </div>
          <div className="w-[85%] lg:w-[90%] mx-auto overflow-x-hidden relative">
            <div 
              ref={sliderRef} 
              className="flex items-center whitespace-nowrap"
              style={{ transition: 'transform 0.3s', willChange: 'transform' }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <a 
                  key={index} 
                  href={partner.link} 
                  className="inline-flex items-center justify-center h-[70px] mx-2 lg:mx-4 lg:rounded-lg lg:shadow-md lg:h-[100px] lg:bg-white lg:p-2"
                >
                  <picture>
                    <source 
                      media="(min-width: 800px)" 
                      height="90" 
                      width="120" 
                      srcSet={`${partner.logo}?format=avif&quality=80&width=120&height=90`} 
                      loading="lazy" 
                    />
                    <source 
                      media="(max-width: 768px)" 
                      height="55" 
                      width="70" 
                      srcSet={`${partner.logo}?format=avif&quality=80&width=70&height=55`} 
                      loading="lazy" 
                    />
                    <img 
                      src={`${partner.logo}?format=avif&quality=80`} 
                      width="70" 
                      height="55" 
                      alt={partner.name} 
                      loading="lazy" 
                      decoding="async" 
                      className="aspect-[47/35] object-contain" 
                    />
                  </picture>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-right decorative image */}
      <img 
        src={decoratorBottomRight} 
        alt="Decoration" 
        className="absolute bottom-0 right-0 w-20 h-20 lg:w-32 lg:h-32 z-0"
      />
    </div>
  );
};

export default Partners;