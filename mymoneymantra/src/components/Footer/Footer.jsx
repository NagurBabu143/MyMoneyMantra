import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const Footer = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [showTrendingCards, setShowTrendingCards] = useState(false);

  const trendingCards = [
    "HDFC Freedom Credit Card",
    "HDFC Indian Oil Credit Card",
    "SBI Prime Credit Card",
    "SBI Elite Credit Card",
    "Axis Bank Neo Credit Card",
    "Axis Bank My Zone Credit Card",
    "HSBC Visa Platinum Credit Card",
    "HSBC Cashback Credit Card",
    "IDFC Millennia Credit Card",
    "AU Zenith Credit Card"
  ];

  const loanTypes = [
    {
      name: "Credit Card",
      related: [
        "Best Credit Cards",
        "Rewards Cards",
        "Travel Cards",
        "Cashback Cards",
        "Student Credit Cards",
        "Business Credit Cards",
        "Airline Credit Cards",
        "Fuel Credit Cards",
        "Premium Credit Cards",
        "Shopping Credit Cards"
      ]
    },
    {
      name: "Personal Loan",
      related: [
        "CashBean Personal Loan",
        "Best Loan Apps",
        "Best Student Loan Apps",
        "Loan Without CIBIL Score",
        "Loan Apps Without Salary Slip",
        "PAN Card Personal Loan",
        "Aadhaar Card Personal Loan",
        "10,000 Personal Loan",
        "15,000 Personal Loan",
        "20,000 Personal Loan",
        "30,000 Personal Loan",
        "50,000 Personal Loan",
        "SBI Personal Loan EMI Calculator",
        "Loan Prepayment Calculator",
        "Personal Loan Interest Rates",
        "Paytm Personal Loan Interest Rates",
        "SBI Personal Loan Statement",
        "L&T Finance Personal Loan Statement"
      ]
    },
    {
      name: "Home Loan",
      related: [
        "Yes Bank Home Loan",
        "UCO Bank Home Loan",
        "Shriram Housing Finance Home Loan",
        "SBI Home Loan",
        "Repco Home Finance Home Loan",
        "Reliance Home Finance Home Loan",
        "RBL Home Loan",
        "PNB Home Loan",
        "Manappuram Home Finance",
        "LIC Housing Finance",
        "ICICI Bank Home Loan",
        "HDFC Home Loan",
        "Axis Bank Home Loan",
        "Bank of Baroda Home Loan"
      ]
    },
    {
      name: "Business Loan",
      related: [
        "Aditya Birla Business Loan",
        "Axis Bank Business Loan",
        "Bajaj Finserv Business Loan",
        "BOB Business Loan",
        "Bank of India Business Loan",
        "Deutsche Bank Business Loan",
        "Federal Bank Business Loan",
        "HDFC Bank Business Loan",
        "ICICI Bank Business Loan",
        "IDFC Bank Business Loan",
        "Indian Bank Business Loan",
        "Kotak Bank Business Loan",
        "RBL Bank Business Loan",
        "Tata Capital Business Loan",
        "Yes Bank Business Loan",
        "Ziploan Business Loan"
      ]
    },
    {
      name: "Credit Score",
      related: [
        "Check Free Credit Score",
        "Free CIBIL Score Check",
        "CIBIL Score Calculator",
        "Pan Card CIBIL Score",
        "SBI CIBIL Score",
        "CIBIL Score for Personal Loan",
        "CIBIL Score for Home Loan",
        "CIBIL Score for Credit Card",
        "TransUnion CIBIL Score",
        "Experian Credit Score",
        "Equifax Credit Score",
        "CIBIL Dispute",
        "CIBIL Score Range",
        "How To Improve CIBIL Score",
        "CIBIL Full Form"
      ]
    },
    {
      name: "Gold Loan",
      related: [
        "Axis Bank Gold Loan",
        "Bajaj Gold Loan",
        "Bank of Baroda Gold Loan",
        "Bank of India Gold Loan",
        "Canara Bank Gold Loan",
        "Federal Bank Gold Loan",
        "ICICI Bank Gold Loan",
        "IDBI Gold Loan",
        "IIFL Gold Loan",
        "Indian Bank Gold Loan",
        "Kotak Bank Gold Loan",
        "Manappuram Gold Loan",
        "PNB Bank Gold Loan",
        "SBI Gold Loan",
        "UCO Bank Gold Loan",
        "Union Bank of India Gold Loan"
      ]
    },
  ];

  const toggleItem = (itemName) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const toggleTrendingCards = () => {
    setShowTrendingCards(!showTrendingCards);
  };

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(45deg, #3593B0 0%, #4A9B85 100%)",
        padding: { xs: "26px", md: "54px" },
        fontFamily: "'Roboto', sans-serif",
        color: "white",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 0, md: 2 } }}>
  
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mb: 5,
              cursor: "pointer",
            }}
            onClick={toggleTrendingCards}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Trending on MMM
            </Typography>
            <IconButton
              size="small"
              sx={{ 
                color: "white", 
                p: 0,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleTrendingCards();
              }}
            >
              {showTrendingCards ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </Box>
         
      
          {showTrendingCards && (
            <Box sx={{ 
              mb: 4,
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
              p: 3
            }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Popular Credit Cards
              </Typography>
              <Grid container spacing={2}>
                {trendingCards.map((card, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        backgroundColor: "rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.2)",
                        }
                      }}
                    >
                      <Typography variant="body1">{card}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
             <Divider sx={{ 
            borderColor: 'rgba(255,255,255,0.3)', 
            mb: 4,
            width: '100%' 
          }} />
   
          <Grid container spacing={2}>
            {loanTypes.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.name}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      color:"white",
                      padding:"8px",
                      margin:"0px",
                      width:"200px",
                    }}
                    onClick={() => toggleItem(item.name)}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {item.name}
                    </Typography>
                    <IconButton
                      size="small"
                      sx={{ 
                        color: "white", 
                        p: 0,
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.2)",
                        }
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleItem(item.name);
                      }}
                    >
                      {expandedItems[item.name] ? (
                        <RemoveIcon fontSize="small" />
                      ) : (
                        <AddIcon fontSize="small" />
                      )}
                    </IconButton>
                  </Box>

                  {expandedItems[item.name] && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                        Related Products:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 2,
                        }}
                      >
                        {item.related.map((related) => (
                          <Paper
                            key={related}
                            elevation={0}
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              backgroundColor: "rgba(255,255,255,0.2)",
                              borderRadius: "4px",
                              fontSize: "0.85rem",
                              cursor: "pointer",
                              "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.3)",
                              },
                            }}
                          >
                            {related}
                          </Paper>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

    
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          my: 4,
          px: 2,
          py: 1,
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '8px'
        }}>
          {[
            { text: "About us", link: "/about-us" },
            { text: "Meet the team", link: "/team" },
            { text: "Careers", link: "/careers" },
            { text: "Our Partners", link: "/partners" },
            { text: "Press", link: "/press-room" },
            { text: "Privacy Policy", link: "/privacy-policy" },
            { text: "Fraud Detection", link: "/fraud-detection" },
            { text: "Sitemap", link: "/sitemap" },
            { text: "Contact Us", link: "/contact-us" },
            { text: "Experian T & C", link: "/experian-terms" },
          ].map((item) => (
            <Link
              key={item.text}
              href={item.link}
              color="inherit"
              underline="none"
              sx={{
                fontWeight: 500,
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                '&:hover': {
                  textDecoration: 'underline',
                }
              }}
            >
              {item.text}
            </Link>
          ))}
        </Box>

     
        <Box
          sx={{
            py: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.5)",
          }}
        >
        
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 700,
                mb: 1,
                display: { xs: "block", md: "none" },
              }}
            >
              GET OUR APP
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                justifyContent: { xs: "space-evenly", md: "flex-start" },
              }}
            >
              <Link
                href="https://play.google.com/store/apps/details?id=com.mymoneymantra.customer.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src="https://cdn2.mymoneymantra.com/get_it_on_google_play_680dc3b673.png?format=avif&quality=80"
                  alt="Get it on Google Play"
                  sx={{
                    height: { xs: 50, md: 57 },
                    width: { xs: 150, md: 190 },
                  }}
                  loading="lazy"
                />
              </Link>
              <Link
                href="https://apps.apple.com/in/app/mymoneymantra-loans-credits/id1568452714"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src="https://cdn2.mymoneymantra.com/Apple_Store_f8a6da40b8.png?format=avif&quality=80"
                  alt="Download on the App Store"
                  sx={{
                    height: { xs: 50, md: 57 },
                    width: { xs: 150, md: 190 },
                  }}
                  loading="lazy"
                />
              </Link>
            </Box>
          </Box>

          
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 700,
                mb: 1,
                display: { xs: "block", md: "none" },
              }}
            >
              GET IN TOUCH
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: { xs: "block", md: "none" },
                textAlign: "center",
              }}
            >
              contactus@mymoneymantra.com
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "8px",
            }}
          >
            {[
              {
                icon: "fb_icon_742efd9805.svg",
                alt: "Facebook",
                link: "https://www.facebook.com/mymoneymantraofficial/",
              },
              {
                icon: "linkedin_icon_94dd05f65f.svg",
                alt: "LinkedIn",
                link: "https://www.linkedin.com/company/mymoneymantra",
              },
              {
                icon: "twitter_3e140afa7c.webp",
                alt: "Twitter",
                link: "https://x.com/mymoneymantra",
              },
              {
                icon: "youtube_icon_926f48ca68.svg",
                alt: "YouTube",
                link: "https://www.youtube.com/channel/UC-3NOXYH_akWm7h6TBqXbyQ",
              },
            ].map((social) => (
              <IconButton
                key={social.alt}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={`https://cdn2.mymoneymantra.com/${social.icon}?format=avif&quality=80`}
                  alt={social.alt}
                  width={24}
                  height={24}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    opacity: 0.8,
                    "&:hover": {
                      opacity: 1,
                    },
                    transition: "all 0.2s",
                  }}
                />
              </IconButton>
            ))}
          </Box>
        </Box>

      
        <Box
          sx={{
            py: 1,
            textAlign: "center",
            mt: 3,
          }}
        >
          <Typography variant="body2">
            © 2025 MyMoneyMantra. All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;