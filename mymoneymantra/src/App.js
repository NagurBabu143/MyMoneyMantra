import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProductsSection from './components/ProductsSection/ProductsSection';
import EMICalculator from './components/EMICalculator/EMICalculator';
import Partners from './components/Partners/Partners';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Header />
        <ProductsSection /> {/* Static section after Header */}
        <EMICalculator/>
        <Partners/>
        <WhyChooseUs/>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;