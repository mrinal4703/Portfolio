import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {NavBar, Portfolio} from './Components';
import Home from './Components/Home';
// import AboutMe from './Components/AboutMe';
import Companies from './Components/Companies';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import {FiArrowUp} from 'react-icons/fi';
import {wavecontact1, wavehome} from "./assets";

function App() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="App overflow-x-hidden">
            <Router>
                <NavBar/>
                <img src={wavehome} className="lg:w-screen m-0 md:w-screen xls:h-[-50px] xls:w-screen absolute z-[-1]"
                     alt=''/>
                <div className="route-transition">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        {/* <Route exact path="/aboutme" element={<AboutMe />} /> */}
                        <Route exact path="/skills" element={<Skills/>}/>
                        <Route exact path="/companies" element={<Companies/>}/>
                        <Route exact path="/contact" element={<ContactUs/>}/>
                        <Route exact path="/portfolio" element={<Portfolio/>}/>

                    </Routes>
                </div>
                <div className=''>
                    <img src={wavecontact1} className="w-screen my-0 z-[-1]" alt=''/>
                </div>
                <Footer/>

                {showScrollButton && (
                    <button className="scrollToTopButton bg-gradient-to-br from-purple-900 to-purple-600"
                            onClick={handleScrollToTop}>
                        <FiArrowUp className="hover:animate-bounce"/>
                    </button>
                )}
            </Router>
        </div>
    );
}

export default App;
