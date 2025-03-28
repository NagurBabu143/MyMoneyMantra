import React, { useState, useEffect } from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Fast Disbursal",
      description: "Our team helps customers make informed loan decisions.",
      image: "https://cdn2.mymoneymantra.com/fast_new_984afb322c.svg",
      dividerColor: "#4FACCA"
    },
    {
      title: "Safe & Secure",
      description: "Applying for loans and credit cards through MyMoneyMantra is 100% safe and secure.",
      image: "https://cdn2.mymoneymantra.com/safe_new_b895b2c0ef.svg",
      dividerColor: "#64B59F"
    },
    {
      title: "Personalised",
      description: "We curate the best available offers from banks, NBFCs & financial institutions",
      image: "https://cdn2.mymoneymantra.com/personalized_new_b4da1b75ad.svg",
      dividerColor: "#4FACCA"
    }
  ];

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.feature-card').forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>
            Why <span className="highlight">Choose Us</span>
          </h2>
        </div>

        <div className="features-container">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${index % 2 === 0 ? '' : 'reverse'} ${
                visibleItems.includes(index.toString()) ? 'visible' : ''
              }`}
              data-index={index}
            >
              <div className="content-section">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              
              <div className="divider">
                <div 
                  className="divider-line" 
                  style={{ backgroundColor: feature.dividerColor }}
                />
              </div>
              
              <div className="image-section">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-choose-us {
          width: 100%;
          padding: 80px 20px;
          background: white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
        }
        
        .highlight {
          color: #3b82f6;
          text-decoration: underline;
          text-underline-offset: 6px;
          text-decoration-thickness: 2px;
        }
        
        .features-container {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }
        
        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .feature-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .feature-card:nth-child(1).visible {
          transition-delay: 0.1s;
        }
        
        .feature-card:nth-child(2).visible {
          transition-delay: 0.2s;
        }
        
        .feature-card:nth-child(3).visible {
          transition-delay: 0.3s;
        }
        
        .content-section {
          width: 100%;
          max-width: 500px;
          padding: 20px;
        }
        
        .content-section h3 {
          font-size: 1.8rem;
          font-weight: 600;
          color: #222;
          margin-bottom: 15px;
        }
        
        .content-section p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
        }
        
        .divider {
          display: flex;
          justify-content: center;
          padding: 20px 0;
          width: 100%;
        }
        
        .divider-line {
          width: 2px;
          height: 80px;
        }
        
        .image-section {
          width: 100%;
          max-width: 500px;
          padding: 20px;
        }
        
        .feature-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.1));
          transition: transform 0.3s ease;
        }
        
        .feature-image:hover {
          transform: scale(1.05);
        }
        
        @media (min-width: 992px) {
          .feature-card {
            flex-direction: row;
            justify-content: space-between;
          }
          
          .reverse {
            flex-direction: row-reverse;
          }
          
          .content-section,
          .image-section {
            flex: 0 0 45%;
          }
          
          .divider {
            padding: 0 20px;
            height: 200px;
            align-items: center;
          }
          
          .divider-line {
            height: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;