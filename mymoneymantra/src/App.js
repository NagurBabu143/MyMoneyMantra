import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProductsSection from './components/ProductsSection/ProductsSection';
import EMICalculator from './components/EMICalculator/EMICalculator';
import Partners from './components/Partners/Partners';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import AppDownloadSection from './components/AppDownloadSection/AppDownloadSection';
import BlogsSection from './components/BlogsSection/BlogsSection';
import ScrollToTopButton from './components/MyComponent';
import Footer from './components/Footer/Footer';
import ChevronButton from './components/ChevronButton';


const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Header />
        <ProductsSection />
        <EMICalculator/>
        <Partners/>
        <WhyChooseUs/>
        <AppDownloadSection/>
        <BlogsSection/>
        <ScrollToTopButton/>
         <div>
              
               <ChevronButton onClick={() => console.log("Clicked!")} />
         
           
               <ChevronButton
                 top={100}
                 right={8}
                 disabled={true}
                 ariaLabel="Back button"
               />
             </div>
        <Footer/>
        <Routes>
       
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;