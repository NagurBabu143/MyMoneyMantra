import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
  Box,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Search } from "@mui/icons-material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Navbar.css";

const creditCardsData = {
  "HDFC Bank Credit Card": [
    "Swiggy Credit Card",
    "Tata Neu Credit Card",
    "HDFC Millennia Credit Card",
    "HDFC Freedom Credit Card",
    "HDFC IndianOil Credit Card",
    "HDFC MoneyBack Credit Card",
    "HDFC UPI RuPay Credit Card",
    "HDFC MoneyBack+ Credit Card",
  ],
  "SBI Credit Card": [
    "SBI Prime Credit Card",
    "SimplyCLICK SBI Card",
    "SBI Elite Credit Card",
    "SimplySave SBI Card",
    "SBI PULSE Credit Card",
    "BPCL SBI Credit Card",
    "IRCTC RuPay Credit Card",
  ],
  "Popular Credit Card": [
    "Pop Club Credit Card",
    "Anq Phi Credit Card",
    "Jupiter Credit Card",
    "OneCard Credit Card",
    "ZET Magnet FD Credit Card",
    "Rupicard Credit Card",
    "Kiwi Credit Card",
  ],
  "IDFC Bank Credit Card": [
    "IDFC Wealth Credit Card",
    "IDFC Millennia Credit Card",
    "IDFC Classic Credit Card",
    "IDFC WOW Credit Card",
    "IDFC Select Credit Card",
  ],
  "Axis Bank Credit Card": [
    "Airtel Axis Bank Credit Card",
    "Axis Bank LIC Signature Credit Card",
    "Axis Bank SELECT Credit Card",
    "Axis Bank Rewards Credit Card",
    "Axis Bank Neo Credit Card",
    "Axis Bank MY ZONE Credit Card",
    "Axis Bank Magnus Credit Card",
    "LIC Axis Platinum Credit Card",
    "Axis Bank ACE Credit Card",
    "IndianOil Axis Bank Credit Card",
  ],
  "HSBC Bank Credit card": [
    "HSBC Visa Platinum Credit Card",
    "HSBC Live+ Credit Card",
    "HSBC Premier Credit Card",
    "HSBC Bank Smart Value Credit Card",
  ],
  "AU Bank Credit Card": [
    "AU Bank LIT Credit Card",
    "AU Bank Zenith Credit Card",
    "AU Bank Vetta Credit Card",
    "AU Bank Altura Credit Cards",
    "AU Bank Altura Plus Credit Card",
  ],
  "American Express Credit Card": [
    "American Express Gold Credit Card",
    "American Express SmartEarn Credit Card",
    "American Express Payback Credit Card",
  ],
  "ICICI Bank Credit Card": [
    "ICICI Bank Rubyx Credit Card",
    "ICICI Bank Coral Credit Card",
    "ICICI Bank Platinum Chip Credit Card",
    "ICICI Bank Expressions Credit Card",
    "ICICI Bank Coral Rupay Credit Card",
    "Amazon Pay ICICI Credit Card",
    "ICICI Bank HPCL Super Saver Credit Card",
    "ICICI Bank Sapphiro Credit Card",
    "ICICI Bank Emeralde Credit Card",
    "ICICI Bank Emeralde Private Metal Credit Card",
  ],
  "IndusInd Bank Credit Cards": [
    "EazyDiner IndusInd Bank Platinum Credit Card",
    "IndusInd Bank Samman RuPay Credit Card",
    "IndusInd Bank Platinum RuPay Credit Card",
    "IndusInd Bank Nexxt Credit Card",
    "IndusInd Bank Platinum Visa Credit Card",
    "IndusInd Bank Aura Edge Credit Card",
    "IndusInd Bank Legend Credit Card",
  ],
};

const loanData = {
  "Personal Loan": [
    "KreditBee Personal Loan",
    "Fibe Personal Loan",
    "HDFC Jumbo Loan",
    "Prefr Personal Loan",
    "Poonawalla Personal Loan",
    "Incred Personal Loan",
    "L&T Finance Personal Loan",
    "HSBC Personal Loan",
    "Freo loan",
  ],
  "Business Loan": [
    "KreditBee Business Loan",
    "Moneyview Business Loan",
    "Prefr Business Loan",
    "LendingKart Business Loan",
    "IIFL Business Loan",
    "Protium Business Loan",
    "NeoGrowth Business Loan",
    "Faircent Business Loan",
    "SMFG India Business Loan",
    "SBI Business Loan",
  ],
  "Home Loan": [
    "PNB Home Loan",
    "Kotak Bank Home Loan",
    "IDFC First Home Loan",
    "Home First Home Loan",
    "HDFC Bank Home Loan",
    "Federal Bank Home Loan",
    "Bajaj Finserv Home Loan",
    "L&T Home Loan",
  ],
  "Gold Loan": [
    "SahiBandhu Gold Loan",
    "InidaGold Loan",
    "Muthoot Fincorp Gold Loan",
    "Oro Gold Loan",
    "Rupeek Gold Loan",
    "DBS Bank Gold Loan",
  ],
  "Home Loan Balance Transfer": [
    "HDFC Bank Home Loan Balance Transfer",
    "Kotak Home Loan Balance Transfer",
    "Bajaj Finserv Home Loan Balance Transfer",
    "IDFC First Home Loan Balance Transfer",
    "Home First Home Loan Balance Transfer",
    "Aditya Birla Home Loan Balance Transfer",
    "PNB Housing Home Loan Balance Transfer",
  ],
  "Loan Against Property": [
    "HDFC Bank Loan Against Property",
    "Federal Bank Loan Against Property",
    "Kotak Mahindra Loan Against Property",
    "IDFC First Loan Against Property",
    "Home First Loan Against Property",
    "Aditya Birla Housing Loan Against Property",
    "Muthoot Fincorp Loan Against Property",
    "Tata Capital Housing Loan Against Property",
  ],
  "Overdraft Facility": [
    "ICICI Bank Insta OD",
    "Bajaj Overdraft Loan",
    "SBI Overdraft Facility",
    "HDFC Overdraft Facility",
    "Kotak Overdraft Loan",
  ],
  "Loan On Credit Card": [
    "HDFC Bank Credit Card Loan",
    "ICICI Bank Credit Card Loan",
    "Axis Bank Credit Card Loan",
    "SBI Credit Card Loan",
    "Bajaj Insta EMI Card",
  ],
  "Personal Loan By Amount": [
    "1 Lakh Personal Loan",
    "2 Lakh Personal Loan",
    "3 Lakh Personal Loan",
    "4 Lakh Personal Loan",
    "5 Lakh Personal Loan",
    "10 Lakh Personal Loan",
    "15 Lakh Personal Loan",
    "20 Lakh Personal Loan",
    "25 Lakh Personal Loan",
    "30 Lakh Personal Loan",
  ],
  "Personal Loan Interest Rates": [
    "Axis Bank Personal Loan Interest Rates",
    "Bajaj Finance Personal Loan Interest Rates",
    "HDFC Personal Loan Interest Rates",
    "ICICI Personal Loan Interest Rates",
    "IDFC FIRST Bank Personal Loan Interest Rates",
    "Kotak Bank Personal Loan Interest Rates",
    "Paytm Personal Loan Interest Rates",
  ],
};

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [appStoreOpen, setAppStoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const [submenu, setSubmenu] = useState(null);
  const [submenuPosition, setSubmenuPosition] = useState(0);
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const handleMobileNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    setMobileNumber(value.slice(0, 10)); // Limit to 10 digits
    setError(''); // Clear error when typing
  };

  const handleSubmit = () => {
    if (!mobileNumber) {
      setError('Mobile number is required');
      return;
    }
    if (mobileNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    // If validation passes
    console.log('Mobile number submitted:', mobileNumber);
    // Here you would typically call an API to send the download link
    alert(`Download link will be sent to ${mobileNumber}`);
    setAppStoreOpen(false);
    setMobileNumber('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  const handleSubmenuOpen = (event, item) => {
    setSubmenu(item);
    setSubmenuPosition(event.target.offsetTop);
  };

  const [signInOpen, setSignInOpen] = useState(false);
  const handleMenuOpen = (event, menu) => {
    setMenuOpen(menu);
    setSubmenu(null);
  };

  const handleMenuClose = () => {
    setMenuOpen(null);
    setSubmenu(null);
  };
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    consent: false,
  });

  const validateForm = () => {
    return (
      formData.fullName &&
      /^[a-zA-Z ]+$/.test(formData.fullName) &&
      formData.mobile &&
      /^[0-9]{10}$/.test(formData.mobile) &&
      formData.email &&
      /^\S+@\S+\.\S+$/.test(formData.email) &&
      formData.consent
    );
  };

  const handleSubmenuClose = () => {
    setSubmenu(null);
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        bgcolor: "white",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side - Logo and Menu Items */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ height: 40, marginRight: 20 }}
          />

          {/* Credit Cards Dropdown */}
          <Box
            onMouseEnter={(e) => handleMenuOpen(e, "creditCards")}
            onMouseLeave={handleMenuClose}
            position="relative"
            sx={{ mr: 2 }}
          >
            <Button
              endIcon={<KeyboardArrowDownSharpIcon />}
              className={menuOpen === "creditCards" ? "active-menu" : ""}
              sx={[
                {
                  fontWeight: "700",
                  fontFamily: "Manrope, sans-serif",
                  color: "#3593B0",
                  "&:hover": {
                    color: "#3593B0",
                  },
                },
                menuOpen === "creditCards" && {
                  color: "#3593B0",
                },
              ]}
            >
              Credit Cards
            </Button>
            {menuOpen === "creditCards" && (
              <Box
                position="absolute"
                bgcolor="white"
                boxShadow={3}
                p={2}
                onMouseEnter={() => setMenuOpen("creditCards")}
                onMouseLeave={handleMenuClose}
                sx={{
                  borderRadius: "8px",
                  zIndex: 1200,
                  minWidth: "300px",
                  "& .MuiMenuItem-root": {
                    color: "#3593B0",
                    "&:hover": {
                      bgcolor: "#3593B0",
                      color: "white",
                    },
                  },
                }}
              >
                {Object.keys(creditCardsData).map((item, index) => (
                  <MenuItem
                    key={item}
                    onMouseEnter={(e) => handleSubmenuOpen(e, item)}
                    onMouseLeave={handleSubmenuClose}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      fontWeight: "700",
                      fontFamily: "Manrope, sans-serif",
                      borderRadius: "4px",
                    }}
                    data-index={index}
                  >
                    {item} <ArrowForwardIosIcon fontSize="small" />
                  </MenuItem>
                ))}

                {submenu && (
                  <Box
                    position="absolute"
                    left="100%"
                    top={submenuPosition}
                    bgcolor="white"
                    boxShadow={3}
                    p={2}
                    onMouseEnter={() => setSubmenu(submenu)}
                    onMouseLeave={handleSubmenuClose}
                    sx={{
                      borderRadius: "8px",
                      zIndex: 1201,
                      minWidth: "300px",
                      "& .MuiMenuItem-root": {
                        color: "#3593B0",
                        "&:hover": {
                          bgcolor: "#3593B0",
                          color: "white",
                        },
                      },
                    }}
                  >
                    {creditCardsData[submenu].map((subItem) => (
                      <MenuItem
                        key={subItem}
                        sx={{
                          fontWeight: "600",
                          fontFamily: "Manrope, sans-serif",
                          borderRadius: "4px",
                        }}
                      >
                        {subItem}
                      </MenuItem>
                    ))}
                  </Box>
                )}
              </Box>
            )}
          </Box>

          {/* Loans Dropdown */}
          <Box
            onMouseEnter={(e) => handleMenuOpen(e, "loans")}
            onMouseLeave={handleMenuClose}
            position="relative"
            sx={{ mr: 2 }}
          >
            <Button
              endIcon={<KeyboardArrowDownSharpIcon />}
              className={menuOpen === "loans" ? "active-menu" : ""}
              sx={[
                {
                  fontWeight: "700",
                  fontFamily: "Manrope, sans-serif",
                  color: "#3593B0",
                  "&:hover": {
                    color: "#3593B0",
                  },
                },
                menuOpen === "loans" && {
                  color: "#3593B0",
                },
              ]}
            >
              Loans
            </Button>
            {menuOpen === "loans" && (
              <Box
                position="absolute"
                bgcolor="white"
                boxShadow={3}
                p={2}
                onMouseEnter={() => setMenuOpen("loans")}
                onMouseLeave={handleMenuClose}
                sx={{
                  borderRadius: "8px",
                  zIndex: 1200,
                  minWidth: "250px",
                  "& .MuiMenuItem-root": {
                    color: "#3593B0",
                    "&:hover": {
                      bgcolor: "#3593B0",
                      color: "white",
                    },
                  },
                }}
              >
                {Object.keys(loanData).map((item) => (
                  <MenuItem
                    key={item}
                    onMouseEnter={(e) => handleSubmenuOpen(e, item)}
                    onMouseLeave={handleSubmenuClose}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      fontWeight: "700",
                      fontFamily: "Manrope, sans-serif",
                      borderRadius: "4px",
                    }}
                  >
                    {item} <ArrowForwardIosIcon fontSize="small" />
                  </MenuItem>
                ))}

                {submenu && loanData[submenu] && (
                  <Box
                    position="absolute"
                    left="100%"
                    top={submenuPosition}
                    bgcolor="white"
                    boxShadow={3}
                    p={2}
                    onMouseEnter={() => setSubmenu(submenu)}
                    onMouseLeave={handleSubmenuClose}
                    sx={{
                      borderRadius: "8px",
                      zIndex: 1201,
                      minWidth: "250px",
                      "& .MuiMenuItem-root": {
                        color: "#3593B0",
                        "&:hover": {
                          bgcolor: "#3593B0",
                          color: "white",
                        },
                      },
                    }}
                  >
                    {loanData[submenu].map((subItem) => (
                      <MenuItem
                        key={subItem}
                        sx={{
                          fontWeight: "600",
                          fontFamily: "Manrope, sans-serif",
                          borderRadius: "4px",
                        }}
                      >
                        {subItem}
                      </MenuItem>
                    ))}
                  </Box>
                )}
              </Box>
            )}
          </Box>

          {/* Insurance Dropdown */}
          <Box
            onMouseEnter={(e) => handleMenuOpen(e, "insurance")}
            onMouseLeave={handleMenuClose}
            position="relative"
            sx={{ mr: 2 }}
          >
            <Button
              endIcon={<KeyboardArrowDownSharpIcon />}
              className={menuOpen === "insurance" ? "active-menu" : ""}
              sx={[
                {
                  fontWeight: "700",
                  fontFamily: "Manrope, sans-serif",
                  color: "#3593B0",
                  "&:hover": {
                    color: "#3593B0",
                  },
                },
                menuOpen === "insurance" && {
                  color: "#3593B0",
                },
              ]}
            >
              Insurance
            </Button>
            {menuOpen === "insurance" && (
              <Box
                position="absolute"
                bgcolor="white"
                boxShadow={3}
                p={2}
                onMouseEnter={() => setMenuOpen("insurance")}
                onMouseLeave={handleMenuClose}
                sx={{
                  borderRadius: "8px",
                  zIndex: 1200,
                  minWidth: "200px",
                  "& .MuiMenuItem-root": {
                    color: "#3593B0",
                    "&:hover": {
                      bgcolor: "#3593B0",
                      color: "white",
                    },
                  },
                }}
              >
                {["Health Insurance", "Life Insurance"].map((item) => (
                  <MenuItem
                    key={item}
                    sx={{
                      fontWeight: "600",
                      fontFamily: "Manrope, sans-serif",
                      borderRadius: "4px",
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Box>
            )}
          </Box>

          {/* EMI Calculator Dropdown */}
          <Box
            onMouseEnter={(e) => handleMenuOpen(e, "emiCalculator")}
            onMouseLeave={handleMenuClose}
            position="relative"
            sx={{ mr: 2 }}
          >
            <Button
              endIcon={<KeyboardArrowDownSharpIcon />}
              className={menuOpen === "emiCalculator" ? "active-menu" : ""}
              sx={[
                {
                  fontWeight: "700",
                  fontFamily: "Manrope, sans-serif",
                  color: "#3593B0",
                  "&:hover": {
                    color: "#3593B0",
                  },
                },
                menuOpen === "emiCalculator" && {
                  color: "#3593B0",
                },
              ]}
            >
              EMI Calculator
            </Button>
            {menuOpen === "emiCalculator" && (
              <Box
                position="absolute"
                bgcolor="white"
                boxShadow={3}
                p={2}
                onMouseEnter={() => setMenuOpen("emiCalculator")}
                onMouseLeave={handleMenuClose}
                sx={{
                  borderRadius: "8px",
                  zIndex: 1200,
                  minWidth: "250px",
                  "& .MuiMenuItem-root": {
                    color: "#3593B0",
                    "&:hover": {
                      bgcolor: "#3593B0",
                      color: "white",
                    },
                  },
                }}
              >
                {[
                  "Home Loan EMI Calculator",
                  "Personal Loan EMI Calculator",
                  "Business Loan EMI Calculator",
                  "Compound Interest Calculator",
                  "Loan Prepayment Calculator",
                  "RD Calculator",
                  "FD Calculator",
                ].map((item) => (
                  <MenuItem
                    key={item}
                    sx={{
                      fontWeight: "600",
                      fontFamily: "Manrope, sans-serif",
                      borderRadius: "4px",
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Box>
            )}
          </Box>

          {/* Credit Score Dropdown */}
          <Box
            onMouseEnter={(e) => handleMenuOpen(e, "creditScore")}
            onMouseLeave={handleMenuClose}
            position="relative"
            sx={{ mr: 2 }}
          >
            <Button
              endIcon={<KeyboardArrowDownSharpIcon />}
              className={menuOpen === "creditScore" ? "active-menu" : ""}
              sx={[
                {
                  fontWeight: "700",
                  fontFamily: "Manrope, sans-serif",
                  color: "#3593B0",
                  "&:hover": {
                    color: "#3593B0",
                  },
                },
                menuOpen === "creditScore" && {
                  color: "#3593B0",
                },
              ]}
            >
              Credit Score
            </Button>
            {menuOpen === "creditScore" && (
              <Box
                position="absolute"
                bgcolor="white"
                boxShadow={3}
                p={2}
                onMouseEnter={() => setMenuOpen("creditScore")}
                onMouseLeave={handleMenuClose}
                sx={{
                  borderRadius: "8px",
                  zIndex: 1200,
                  minWidth: "300px",
                  "& .MuiMenuItem-root": {
                    color: "#3593B0",
                    "&:hover": {
                      bgcolor: "#3593B0",
                      color: "white",
                    },
                  },
                }}
              >
                {[
                  "Check CIBIL Score by Pan Card",
                  "CIBIL Score for Banks",
                  "Check Free CIBIL Score",
                  "Instant Loan Without CIBIL",
                  "CIBIL Score Range",
                  "CIBIL Score Calculation",
                  "How to Improve CIBIL Score",
                ].map((item) => (
                  <MenuItem
                    key={item}
                    onMouseEnter={
                      item === "CIBIL Score for Banks"
                        ? (e) => handleSubmenuOpen(e, "cibilBanks")
                        : null
                    }
                    onMouseLeave={handleSubmenuClose}
                    sx={{
                      fontWeight: "600",
                      fontFamily: "Manrope, sans-serif",
                      borderRadius: "4px",
                    }}
                  >
                    {item}
                    {item === "CIBIL Score for Banks" && (
                      <ArrowForwardIosIcon fontSize="small" sx={{ ml: 1 }} />
                    )}
                  </MenuItem>
                ))}

                {submenu === "cibilBanks" && (
                  <Box
                    position="absolute"
                    left="100%"
                    top={0}
                    bgcolor="white"
                    boxShadow={3}
                    p={2}
                    onMouseEnter={() => setSubmenu("cibilBanks")}
                    onMouseLeave={handleSubmenuClose}
                    sx={{
                      borderRadius: "8px",
                      zIndex: 1201,
                      minWidth: "200px",
                      "& .MuiMenuItem-root": {
                        color: "#3593B0",
                        "&:hover": {
                          bgcolor: "#3593B0",
                          color: "white",
                        },
                      },
                    }}
                  >
                    {[
                      "SBI CIBIL Score",
                      "HDFC CIBIL Score",
                      "Bajaj CIBIL Score",
                      "ICICI CIBIL Score",
                      "IIFL CIBIL Score",
                    ].map((subItem) => (
                      <MenuItem
                        key={subItem}
                        sx={{
                          fontWeight: "600",
                          fontFamily: "Manrope, sans-serif",
                          borderRadius: "4px",
                        }}
                      >
                        {subItem}
                      </MenuItem>
                    ))}
                  </Box>
                )}
              </Box>
            )}
          </Box>

          {/* Blogs */}
          <Button
            sx={{
              fontWeight: "700",
              fontFamily: "Manrope, sans-serif",
              color: "#3593B0",
              "&:hover": {
                color: "#3593B0",
              },
            }}
          >
            Blogs
          </Button>
        </Box>

        {/* Right side - Search, App Icon, Sign In */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Search Icon */}

          {searchOpen && (
            <InputBase
              placeholder="Search..."
              autoFocus
              style={{
                width: "150px",
                height: "35px",
                backgroundColor: "#d3eef7",
                borderRadius: "40px",
                padding: "5px 15px",
                fontSize: "1rem",
                transition: "width 0.3s ease-in-out",
              }}
            />
          )}

          <IconButton
            onClick={() => setSearchOpen(!searchOpen)}
            sx={{
              background: "linear-gradient(45deg, #3593B0 0%, #4A9B85 100%)",
              borderRadius: "50%",
              padding: "8px",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                background: "linear-gradient(45deg, #2A7A91 0%, #3E8E6F 100%)",
              },
            }}
          >
            <Search sx={{ color: "#fff", fontSize: "1.2rem" }} />
          </IconButton>

          {/* App Store Icon */}
          <Box position="relative" sx={{ mr: 2 }}>
      <Button 
        onClick={() => setAppStoreOpen(!appStoreOpen)}
        sx={{
          minWidth: 0,
          p: 1,
          borderRadius: '50%',
          '&:hover': { backgroundColor: 'rgba(53, 147, 176, 0.08)' }
        }}
      >
        <img
          src="/images/icon.png"
          alt="app icon"
          style={{ width: "32px", height: "32px" }}
        />
      </Button>
      
      {appStoreOpen && (
        <Box
          position="absolute"
          top={55}
          right={0}
          bgcolor="background.paper"
          p={3}
          boxShadow={4}
          sx={{
            borderRadius: "12px",
            zIndex: 1300,
            width: "320px",
            border: "1px solid #e0e0e0",
            '&:before': {
              content: '""',
              position: 'absolute',
              top: '-8px',
              right: '16px',
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderBottom: '8px solid',
              borderBottomColor: 'background.paper',
              filter: 'drop-shadow(0px -1px 1px rgba(0,0,0,0.1))'
            }
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
            Mobile Number
          </Typography>
          
          <InputBase
            placeholder="Enter your Mobile Number"
            fullWidth
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            onKeyPress={handleKeyPress}
            sx={{
              border: `1px solid ${error ? 'error.main' : 'grey.300'}`,
              borderRadius: "6px",
              px: 2,
              py: 1.5,
              mb: 0.5,
              fontSize: '0.875rem',
              backgroundColor: 'grey.50',
              '&:focus': {
                borderColor: error ? 'error.main' : 'primary.main',
                backgroundColor: 'common.white',
                boxShadow: error ? 'none' : '0 0 0 2px rgba(53, 147, 176, 0.2)'
              }
            }}
            inputProps={{
              maxLength: 10,
              inputMode: 'numeric'
            }}
          />
          
          {error && (
            <Typography variant="caption" sx={{ 
              color: "error.main", 
              mb: 1, 
              display: "block",
              fontSize: '0.75rem'
            }}>
              {error}
            </Typography>
          )}
          
          <Typography variant="caption" sx={{ 
            color: "text.secondary", 
            mb: 2, 
            display: "block",
            fontSize: '0.75rem'
          }}>
            *By clicking on proceed you agree to MMM consent
          </Typography>
          
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{
              backgroundImage: "linear-gradient(45deg, #3593B0 0%, #4A9B85 100%)",
              color: "white",
              fontWeight: 600,
              py: 1.5,
              borderRadius: "6px",
              textTransform: 'none',
              fontSize: '0.9375rem',
              '&:hover': {
                backgroundImage: "linear-gradient(45deg, #4A9B85 0%, #3593B0 100%)",
                boxShadow: '0 2px 8px rgba(53, 147, 176, 0.4)'
              },
            }}
          >
            Get Link
          </Button>
        </Box>
      )}
    </Box>

          {/* Sign In Button */}
          <Box position="relative" sx={{ ml: 1 }}>
  <Button
    variant="contained"
    onClick={() => setSignInOpen(!signInOpen)}
    sx={{
      backgroundImage: "linear-gradient(45deg, #3593B0 0%, #4A9B85 100%)",
      color: "white",
      border: "none",
      fontFamily: "Manrope, sans-serif",
      padding: "8px 25px",
      borderRadius: "8px",
      textTransform: "none",
      fontWeight: "bold",
      fontSize: "18px",
      "&:hover": {
        backgroundImage: "linear-gradient(45deg, #4A9B85 0%, #3593B0 100%)",
      },
    }}
  >
    Sign In
  </Button>

  {signInOpen && (
    <Box
      position="absolute"
      top={60}
      right={0}
      bgcolor="white"
      p={3}
      boxShadow={3}
      sx={{
        borderRadius: "12px",
        zIndex: 1300,
        width: "320px",
        border: "1px solid #e0e0e0",
        "&:before": {
          content: '""',
          position: "absolute",
          top: "-10px",
          right: "20px",
          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderBottom: "10px solid white",
          filter: "drop-shadow(0 -2px 2px rgba(0,0,0,0.1))"
        }
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#3593B0" }}>
           Login
        </Typography>
        <IconButton 
          size="small" 
          onClick={() => setSignInOpen(false)}
          sx={{ color: "#757575" }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <form id="login-form" autoComplete="off" noValidate>
        {/* Full Name Field */}
        <Box sx={{ mb: 2 }}>
          <InputBase
            placeholder="Full Name"
            fullWidth
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "6px",
              padding: "10px 12px",
              fontSize: "0.9rem",
              bgcolor: "#fafafa",
              transition: "all 0.3s",
              "&:focus-within": {
                bgcolor: "white",
                borderColor: "#3593B0",
                boxShadow: "0 0 0 2px rgba(53, 147, 176, 0.2)"
              },
              "&.Mui-error": {
                borderColor: "#f44336",
              },
            }}
            inputProps={{
              minLength: 3,
              maxLength: 30,
              pattern: "^[a-zA-Z ]+$",
            }}
            error={!formData.fullName || !/^[a-zA-Z ]+$/.test(formData.fullName)}
            value={formData.fullName || ""}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
          {(!formData.fullName || !/^[a-zA-Z ]+$/.test(formData.fullName)) && (
            <Typography variant="caption" sx={{ color: "#f44336", fontSize: "0.75rem", mt: 0.5, display: "block" }}>
              Please enter a valid full name
            </Typography>
          )}
        </Box>

        {/* Mobile Number Field */}
        <Box sx={{ mb: 2 }}>
          <InputBase
            placeholder="Mobile Number"
            fullWidth
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "6px",
              padding: "10px 12px",
              fontSize: "0.9rem",
              bgcolor: "#fafafa",
              transition: "all 0.3s",
              "&:focus-within": {
                bgcolor: "white",
                borderColor: "#3593B0",
                boxShadow: "0 0 0 2px rgba(53, 147, 176, 0.2)"
              },
              "&.Mui-error": {
                borderColor: "#f44336",
              },
            }}
            inputProps={{
              maxLength: 10,
              inputMode: "numeric",
              pattern: "^[0-9]{10}$",
            }}
            error={!formData.mobile || !/^[0-9]{10}$/.test(formData.mobile)}
            value={formData.mobile || ""}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 10);
              setFormData({ ...formData, mobile: value });
            }}
          />
          {(!formData.mobile || !/^[0-9]{10}$/.test(formData.mobile)) && (
            <Typography variant="caption" sx={{ color: "#f44336", fontSize: "0.75rem", mt: 0.5, display: "block" }}>
              Please enter a valid 10-digit number
            </Typography>
          )}
        </Box>

        {/* Email Field */}
        <Box sx={{ mb: 2 }}>
          <InputBase
            placeholder="Email Address"
            fullWidth
            type="email"
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "6px",
              padding: "10px 12px",
              fontSize: "0.9rem",
              bgcolor: "#fafafa",
              transition: "all 0.3s",
              "&:focus-within": {
                bgcolor: "white",
                borderColor: "#3593B0",
                boxShadow: "0 0 0 2px rgba(53, 147, 176, 0.2)"
              },
              "&.Mui-error": {
                borderColor: "#f44336",
              },
            }}
            error={!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)}
            value={formData.email || ""}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {(!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) && (
            <Typography variant="caption" sx={{ color: "#f44336", fontSize: "0.75rem", mt: 0.5, display: "block" }}>
              Please enter a valid email
            </Typography>
          )}
        </Box>

        {/* Terms and Conditions */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Checkbox
            size="small"
            checked={formData.consent || false}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            sx={{
              color: "#3593B0",
              padding: 0,
              mr: 1,
              '&.Mui-checked': {
                color: "#3593B0",
              },
            }}
          />
          <Typography variant="body2" sx={{ color: "#616161", fontSize: "0.8rem" }}>
            I accept the{" "}
            <Box component="span" sx={{ color: "#3593B0", cursor: "pointer" }}>
              Terms & Conditions
            </Box>
          </Typography>
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          onClick={(e) => {
            e.preventDefault();
            if (validateForm()) {
              console.log("Form submitted:", formData);
            }
          }}
          sx={{
            backgroundImage: "linear-gradient(45deg, #3593B0 0%, #4A9B85 100%)",
            color: "white",
            fontWeight: 600,
            padding: "10px",
            fontSize: "1rem",
            textTransform: "none",
            borderRadius: "6px",
            boxShadow: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(45deg, #4A9B85 0%, #3593B0 100%)",
              boxShadow: "0 2px 8px rgba(53, 147, 176, 0.4)"
            },
          }}
        >
          Continue
        </Button>
      </form>
    </Box>
  )}
</Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
