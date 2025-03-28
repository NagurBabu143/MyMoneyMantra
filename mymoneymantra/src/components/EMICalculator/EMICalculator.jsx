import React, { useState } from 'react';
import './EMICalculator.css';

const EMICalculator = () => {
  const [activeTab, setActiveTab] = useState('personal-loan');
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(10.75);
  const [tenure, setTenure] = useState(36);

  // Calculate EMI
  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                (Math.pow(1 + monthlyRate, tenure) - 1);
    return Math.round(emi);
  };

  // Calculate total interest
  const calculateTotalInterest = () => {
    const emi = calculateEMI();
    return Math.round(emi * tenure - loanAmount);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN').format(amount);
  };

  const emi = calculateEMI();
  const totalInterest = calculateTotalInterest();
  const totalPayment = loanAmount + totalInterest;

  // Calculate conic gradient degrees
  const principalDegrees = (loanAmount / totalPayment) * 360;

  return (
    <div className="emi-calculator-container">
      <div className="container">
        <div className="heading-section">
          <h2>EMI <span className="highlight">Calculator</span></h2>
        </div>

        <div className="calculator-grid">
          <div className="input-section">
            <div className="tab-buttons">
              <button
                className={`tab-button ${activeTab === 'personal-loan' ? 'active' : ''}`}
                onClick={() => setActiveTab('personal-loan')}
              >
                Personal Loan
              </button>
              <button
                className={`tab-button ${activeTab === 'home-loan' ? 'active' : ''}`}
                onClick={() => setActiveTab('home-loan')}
              >
                Home Loan
              </button>
              <button
                className={`tab-button ${activeTab === 'business-loan' ? 'active' : ''}`}
                onClick={() => setActiveTab('business-loan')}
              >
                Business Loan
              </button>
            </div>

            <div className="input-group">
              <label>Loan Amount (₹)</label>
              <div className="amount-input">
                <span className="currency-symbol">₹</span>
                <input
                  type="text"
                  value={formatCurrency(loanAmount)}
                  onChange={(e) => {
                    const value = e.target.value.replace(/,/g, '');
                    if (!isNaN(value)) setLoanAmount(Number(value));
                  }}
                />
              </div>
              <input
                type="range"
                min="5000"
                max="10000000"
                step="5000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="slider"
                style={{
                  background: `linear-gradient(to right, #4FACCA 0%, #4FACCA ${(loanAmount / 10000000) * 100}%, transparent ${(loanAmount / 10000000) * 100}%, transparent 100%)`
                }}
              />
            </div>

            <div className="input-group">
              <label>Interest Rate %</label>
              <div className="rate-input">
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => {
                    const value = Math.min(Math.max(parseFloat(e.target.value || 0), 10), 30);
                    setInterestRate(value);
                  }}
                  step="0.05"
                  min="10"
                  max="30"
                  className="rate-input-field"
                />
                <span className="percent-symbol">%</span>
              </div>
              <input
                type="range"
                min="10"
                max="30"
                step="0.05"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="slider"
                style={{
                  background: `linear-gradient(to right, #4FACCA 0%, #4FACCA ${((interestRate - 10) / 20) * 100}%, transparent ${((interestRate - 10) / 20) * 100}%, transparent 100%)`
                }}
              />
            </div>

            <div className="input-group">
              <label>Tenure (Months)</label>
              <div className="tenure-input">
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => {
                    const value = Math.min(Math.max(parseInt(e.target.value || 0), 1), 84);
                    setTenure(value);
                  }}
                  min="1"
                  max="84"
                />
              </div>
              <input
                type="range"
                min="1"
                max="84"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="slider"
                style={{
                  background: `linear-gradient(to right, #4FACCA 0%, #4FACCA ${(tenure / 84) * 100}%, transparent ${(tenure / 84) * 100}%, transparent 100%)`
                }}
              />
            </div>

            <button className="apply-button desktop-only">
              Apply Now
            </button>
          </div>

          <div className="result-section">
            <div 
              className="emi-circle"
              style={{
                background: `conic-gradient(#297289 0deg, #297289 ${principalDegrees}deg, #76BFD6 ${principalDegrees}deg, #76BFD6 360deg)`
              }}
            >
              <div className="emi-circle-inner">
                <span>Your EMI is</span>
                <span className="emi-amount">₹ {formatCurrency(emi)}</span>
                <span>Per Month</span>
              </div>
            </div>

            <div className="result-row">
              <span>Principal Amount</span>
              <span className="result-value">₹ {formatCurrency(loanAmount)}</span>
            </div>

            <div className="result-row">
              <span>Interest Payable</span>
              <span className="result-value">₹ {formatCurrency(totalInterest)}</span>
            </div>

            <div className="result-row">
              <span>Total Payment</span>
              <span className="result-value">₹ {formatCurrency(totalPayment)}</span>
            </div>
            <div className="divider-line"></div>
            <div className="result-row total-emi">
              <span>Your EMI Amount</span>
              <span className="result-value">₹ {formatCurrency(emi)}</span>
            </div>

            <button className="apply-button mobile-only">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;