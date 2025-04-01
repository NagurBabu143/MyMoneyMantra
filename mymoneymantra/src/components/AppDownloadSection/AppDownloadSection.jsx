import React from 'react';
import './AppDownloadSection.css';

const FeatureItem = ({ text }) => (
  <li className="feature-item">
    <img 
      src="https://cdn2.mymoneymantra.com/tick_icon_a4f6a0bf7b.png" 
      alt="✓" 
      className="feature-icon"
    />
    <span className="feature-text">{text}</span>
  </li>
);

const AppStoreButton = () => (
  <a 
    href="https://apps.apple.com/in/app/mymoneymantra-loans-credits/id1568452714" 
    target="_blank" 
    rel="noopener noreferrer"
    className="store-button"
  >
    <img 
      src="https://cdn2.mymoneymantra.com/app_store_b8affa35ef.png" 
      alt="App Store" 
      className="store-image"
    />
  </a>
);

const PlayStoreButton = () => (
  <a 
    href="https://play.google.com/store/apps/details?id=com.mymoneymantra.customer.app" 
    target="_blank" 
    rel="noopener noreferrer"
    className="store-button"
  >
    <img 
      src="https://cdn2.mymoneymantra.com/google_play_982182b880.png" 
      alt="Google Play" 
      className="store-image"
    />
  </a>
);

const MobileImage = () => (
  <img
    src="https://cdn2.mymoneymantra.com/Mobile_c38dc8ab31.png"
    alt="MyMoneyMantra Mobile App"
    className="mobile-image"
  />
);

const AppDownloadSection = () => {
  return (
    <div className="app-download-section">
      <div className="container">
        <div className="content-wrapper">
          
          <div className="left-column">
            <div className="text-content">
              <h2 className="heading">
                Download the{' '}
                <span className="highlighted-text">
                  MyMoneyMantra
                </span>{' '}
                Mobile App
              </h2>
              
              <ul className="feature-list">
                <FeatureItem text="Enjoy a seamless experience" />
                <FeatureItem text="Get exclusive Loans and Credit Card offers" />
                <FeatureItem text="Track your credit score anytime anywhere" />
              </ul>
            </div>
            
            <div className="download-buttons">
              <AppStoreButton />
              <PlayStoreButton />
            </div>
          </div>

          <div className="right-column">
            <div className="mobile-image-container">
              <MobileImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;
