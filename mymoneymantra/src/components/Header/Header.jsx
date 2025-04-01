import React, { useState, useEffect } from "react";
import "./Header.css";

const banners = [
  {
    title: "Unlock Your Dreams with",
    highlight: "Personal Loan",
    description: "Flexible terms and competitive rates to help you fund your next big purchase or dream vacation.",
    image: "/images/3.png",
    link: "/personal-loans",
    buttonText: "Compare & Apply",
    
  },
  {
    title: "Instant Loan up to ₹5 lakhs in 5 minutes from",
    highlight: "Poonawalla Fincorp",
    description: "",
    image: "/images/1.png",
    link: "https://instant-pocket-loan.poonawallafincorp.com",
    buttonText: "Apply Now",
    
  },
  {
    title: "Your New",
    highlight: "Home Journey Begins Here",
    description: "You simply find Dream Home, we will work towards making it reality. Get assistance even after disbursement.",
    image: "/images/4.png",
    link: "/home-loans",
    buttonText: "Compare & Apply",
    
  },
  {
    title: "Credit Card with Endless Possibilities",
    highlight: "",
    description: "Compare the top cards in categories like shopping, travel, luxury and Apply for the best suitable Credit Card.",
    image: "/images/2.png",
    link: "/credit-cards",
    buttonText: "Explore Cards",
    
  },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-container">
      <div className="banner-wrapper">
        <div className="banners-container">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`banner ${index === currentIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div 
                className="banner-overlay" 
                style={{ backgroundColor: banner.overlayColor }}
              ></div>
              <div className="banner-content">
                <div className="banner-text-container">
                <h1 className="banner-title">
  {banner.title} <span style={{ color: "#3593B0" }} className="highlight">{banner.highlight}</span>
</h1>

                  {banner.description && <p className="banner-description">{banner.description}</p>}
                  <a href={banner.link} className="banner-button">
                    {banner.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          className="arrow left"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? banners.length - 1 : prevIndex - 1
            )
          }
        >
          &#9664;
        </button>
        
        <button
          className="arrow right"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
          }
        >
          &#9654;
        </button>
        
        <div className="dots-container">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;