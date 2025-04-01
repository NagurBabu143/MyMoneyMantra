import React, { useState } from "react";

const ChevronButton = ({
  onClick = () => {},
  ariaLabel = "Navigation button",
  className = "",
  top = 100,
  right = 8,
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: `${top}px`,
        right: `${right}px`,
        padding: "12px 16px",
        backgroundColor: "#EEF7F4",
        borderRadius: "20px 10px 10px 20px",
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: disabled ? 0.7 : 1,
        transition: "all 0.2s ease",
        transform: isClicked ? "scale(0.95)" : isHovered ? "scale(1.05)" : "none",
      }}
      className={`chevron-button ${className} ${
        isHovered && !disabled ? "hovered" : ""
      }`}
      onClick={handleClick}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={ariaLabel}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
      aria-disabled={disabled}
    >
      {imageError ? (
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>←</span>
      ) : (
        <img
          src="https://cdn2.mymoneymantra.com/chevron_left_3044b18be4.png"
          alt="Chevron icon"
          style={{ width: "16px", height: "16px" }}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
};

const ParentComponent = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div>
      <ChevronButton onClick={toggleContent} />
      
      {isContentVisible && (
        <div 
          style={{
            position: 'fixed',
            top: '100px',
            right: 'calc(8px + 60px)',
            zIndex: 1001,
            backgroundColor: 'white',
            width: '300px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            padding: '16px'
          }}
          className="dialog-box"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-base font-normal leading-5 text-center lg:text-lg lg:font-semibold">
              Let's find your <b>Credit Score</b> and <b>Credit Report !</b>
            </h3>
            <div className="flex text-center my-3">
              <img 
                width="160" 
                height="112" 
                draggable="false" 
                src="https://cdn2.mymoneymantra.com/credit_score_pie_cb543381f2.png?format=avif&amp;quality=80" 
                alt="credit_score_pie_cb543381f2" 
                loading="lazy" 
                decoding="async" 
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-base font-bold leading-5 mb-4 lg:text-lg">
              Get details and reports <span className="text-[#D93F7E] text-center">Free</span>
            </h4>
            <button 
              className="text-white text-base lg:text-lg font-bold rounded-lg text-center bg-gradient-to-r from-[#3593B0] to-[#4A9B85] py-2 px-8 border-1 w-full"
              onClick={toggleContent}
            >
              Check Score
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;