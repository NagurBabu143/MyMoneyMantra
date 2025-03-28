import React from 'react';
import './ProductsSection.css';

const ProductCard = ({ id, href, imageSrc, altText, title }) => {
  return (
    <a
      id={`our-products-${id}`}
      href={href}
      className="product-card"
    >
      <div className="product-content">
        <picture className="product-image-container">
          <img
            src={`${imageSrc}?format=avif&quality=80`}
            alt={altText}
            className="product-image"
            loading="eager"
            decoding="async"
          />
        </picture>
        <h3 className="product-title">
          {title}
        </h3>
      </div>
    </a>
  );
};

const ProductsSection = () => {
  const products = [
    {
      id: "personal-loans",
      href: "/personal-loans",
      imageSrc: "https://cdn2.mymoneymantra.com/business_loan_99304060b9.svg",
      altText: "Personal Loan",
      title: "Personal Loan"
    },
    {
      id: "credit-cards",
      href: "/credit-cards/journey",
      imageSrc: "https://cdn2.mymoneymantra.com/Credit_Card_c729194945.webp",
      altText: "Credit Card",
      title: "Credit Card"
    },
    {
      id: "loan-against-mutual-fund",
      href: "/loan-against-mutual-fund",
      imageSrc: "https://cdn2.mymoneymantra.com/04_7ea6db151d.png",
      altText: "Loan Against Mutual Fund",
      title: "Loan Against Mutual Fund"
    },
    {
      id: "business-loans",
      href: "/business-loans",
      imageSrc: "https://cdn2.mymoneymantra.com/Business_Loan_cd14cecb36.webp",
      altText: "Business Loan",
      title: "Business Loan"
    },
    {
      id: "home-loans",
      href: "/home-loans",
      imageSrc: "https://cdn2.mymoneymantra.com/Home_Loan_80525c3d86.webp",
      altText: "Home Loan",
      title: "Home Loan"
    },
    {
      id: "short-term-personal-loans",
      href: "/short-term-personal-loans",
      imageSrc: "https://cdn2.mymoneymantra.com/STPL_9cb60080c5.svg",
      altText: "Short Term Personal Loan",
      title: "Short Term Personal Loan"
    },
    {
      id: "gold-loans",
      href: "/gold-loans",
      imageSrc: "https://cdn2.mymoneymantra.com/Gold_Loan_194772f1e8.webp",
      altText: "Gold Loan",
      title: "Gold Loan"
    },
    {
      id: "loan-against-property",
      href: "/loan-against-property",
      imageSrc: "https://cdn2.mymoneymantra.com/Loan_Against_p_007a9d193b.svg",
      altText: "Loan Against Property",
      title: "Loan Against Property"
    },
    {
      id: "home-loan-balance-transfer",
      href: "/home-loan-balance-transfer",
      imageSrc: "https://cdn2.mymoneymantra.com/Home_loan_BL_3149d36906.svg",
      altText: "Home Loan Balance Transfer",
      title: "Home Loan Balance Transfer"
    },
    {
      id: "health-insurance",
      href: "/health-insurance",
      imageSrc: "https://cdn2.mymoneymantra.com/Health_Insurance_22d7a5b405.webp",
      altText: "Health Insurance",
      title: "Health Insurance"
    }
  ];

  return (
    <section className="products-section">
      <div className="products-container">
        <div className="section-heading">
          <h2 className="heading-text">
            Bringing you the <span className="highlight-text">Best Products</span>
            <br className="desktop-only" />
            from Top Banks &amp; Financial <span className="institutions-text">Institutions</span>
          </h2>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              href={product.href}
              imageSrc={product.imageSrc}
              altText={product.altText}
              title={product.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;