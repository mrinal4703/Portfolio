import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {mylogo1, resume} from './../assets';
import './NavBar.css';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleMenuItemClick = () => {
    setToggle(false);
  };

  return (
    <div className="w-full z-10 bg-black p-[10px] flex justify-between items-center">
      <Link to="/" onClick={handleMenuItemClick}><img src={mylogo1} className="h-[60px] mb-0" alt='LOGO'/></Link>
      <div>
        <ul className="hidden text-white md:flex">
          <li className="menuItem hover:scale-110">
            <Link to="/" onClick={handleMenuItemClick}>Home</Link>
          </li>
          <li className="menuItem hover:scale-110">
            <Link to="/skills" onClick={handleMenuItemClick}>Skills and Courses</Link>
          </li>
          <li className="menuItem hover:scale-110">
            <Link to="/portfolio" onClick={handleMenuItemClick}>Portfolio</Link>
          </li>
          <li className="menuItem hover:scale-110">
            <Link to="/companies" onClick={handleMenuItemClick}>Internships</Link>
          </li>
          <li className="menuItem hover:scale-110">
            <Link to="/contact" onClick={handleMenuItemClick}>Contact Me</Link>
          </li>
          <li className="menuItem hover:scale-110">
            <a href={resume} target={'_blank'} onClick={handleMenuItemClick}>Resume</a>
          </li>
        </ul>
        <div className="flex flex-col items-end">
          {!toggle ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={handleToggle} viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="w-6 h-6 cursor-pointer md:hidden">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          ) : (
            <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cursor-pointer md:hidden h-6" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}

          {toggle ? (
            <ul className="md:hidden absolute flex mt-8 flex-col bg-gray-200 p-2 rounded-sm">
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <Link to="/">Home</Link>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <Link to="/aboutme">About Me</Link>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <Link to="/skills">Skills and Courses</Link>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <Link to="/companies">Internships</Link>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <Link to="/contact">Contact Me</Link>
              </li>
              <li className="menuItem p-3 hover:scale-110" onClick={handleMenuItemClick}>
                <a href={resume} target={'_blank'}>Resume</a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
