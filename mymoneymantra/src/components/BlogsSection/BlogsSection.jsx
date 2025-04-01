import React from "react";
import "./BlogsSection.css"; 

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Key Highlights - Union Budget 2025-26",
      excerpt: "Union Budget 2025 focuses on gareeb, youth, annadata & naari. No tax on income up to ₹12L, higher TDS limit for seniors & major reforms in credit & FDI.",
      imageUrl: "https://cdn2.mymoneymantra.com/Budget_2025_Blog_Image_01_1560f7b7bf.jpg",
      date: "Feb 1, 2025",
      readTime: "4 min read",
      category: "Finance"
    },
    {
      id: 2,
      title: "Axis Bank Credit Card Cash Withdrawal Charges & Limit",
      excerpt: "You can use your Axis Bank credit card for cash withdrawals just like a debit card from an ATM kiosk.",
      imageUrl: "https://cdn2.mymoneymantra.com/Axis_Bank_Credit_Card_Cash_Withdrawal_Charges_1f0948ec42.webp",
      date: "Jan 15, 2025",
      readTime: "3 min read",
      category: "Banking"
    },
    {
      id: 3,
      title: "How to Choose Personal Loan Tenure Wisely?",
      excerpt: "When you choose a personal loan offer, there are many factors you consider like loan amount, rate of interest, processing fee, etc.",
      imageUrl: "https://cdn2.mymoneymantra.com/How_to_Choose_Personal_Loan_Tenure_Wisely_71e23829b4.webp",
      date: "Dec 28, 2024",
      readTime: "5 min read",
      category: "Loans"
    }
  ];

  return (
    <section className="blogs-container">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-underline">Blogs</span>
        </h2>
        <p className="section-subtitle">Stay updated with our latest financial insights</p>
      </div>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            <div className="card-image-container">
              <img 
                src={blog.imageUrl} 
                alt={blog.title}
                className="card-image"
                loading="lazy"
              />
              <span className="card-category">{blog.category}</span>
            </div>
            
            <div className="card-content">
              <div className="card-meta">
                <span className="card-date">{blog.date}</span>
                <span className="card-read-time">{blog.readTime}</span>
              </div>
              
              <h3 className="card-title">{blog.title}</h3>
              <p className="card-excerpt">{blog.excerpt}</p>
              
              <button className="card-read-more">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="read-more-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;