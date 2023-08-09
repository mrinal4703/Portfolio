import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBar, Portfolio } from './Components';
import Homee from './Components/Home/Homee';
import AboutMe from './Components/AboutMe';
import Companies from './Components/Companies';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Skills from './Components/Skills/Skill';
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
      <div>
        {/* NavBar */}
        <NavBar />
      </div>
      <div>
        {/* Home */}
        <Homee />
      </div>
      <div>
        {/* About Me */}
        <AboutMe />
      </div>
      <div>
        {/* Skills */}
        <Skills />
      </div>
      <div>
        {/* Portfolio */}
        <Portfolio />   
      </div>
      <div>
        {/* Companies */}
        <Companies/>
      </div>
      <div>
        {/* Contact Us */}
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>

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
