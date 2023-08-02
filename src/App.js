import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBar, Home, Portfolio } from './Components';
import AboutMe from './Components/AboutMe';
import Companies from './Components/Companies';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import { FiArrowUp } from "react-icons/fi";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    // Show/hide the scroll-to-top button based on the user's scroll position
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Add an event listener to handle scrolling
  // This will show/hide the scroll-to-top button as needed
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* NavBar */}
      <NavBar />
      {/* Home */}
      <Home />
      {/* About Me */}
      <AboutMe />
      {/* Skills */}
      <Skills />
      {/* Portfolio */}
      <Portfolio />
      {/* Companies */}
      <Companies/>
      {/* Contact Us */}
      <ContactUs />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button className="scrollToTopButton bg-gradient-to-br from-purple-900 to-purple-600" onClick={handleScrollToTop}>
          <FiArrowUp className="hover:animate-bounce"/>
        </button>
      )}
    </div>
  );
}

export default App;
