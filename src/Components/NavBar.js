import React, { useState } from "react";
import { mylogo1 } from "./../assets";
import "./NavBar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenuItemClick = (event, sectionId) => {
    event.preventDefault();
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setToggle(false); // Close the mobile menu after clicking a link
    }
  };

  return (
    <div className="w-full bg-black p-[10px] flex justify-between items-center">
      <img src={mylogo1} className="h-[60px] mb-0" alt='LOGO'/>
      <div>
        <ul className="hidden text-white md:flex">
          <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
            <a href="/#home" onClick={(e) => handleMenuItemClick(e, "#home")}>
              Home
            </a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#aboutme" onClick={(e) => handleMenuItemClick(e, "#aboutme")}>
              About Me
            </a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#skills" onClick={(e) => handleMenuItemClick(e, "#skills")}>
              Skills and Courses
            </a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#portfolio" onClick={(e) => handleMenuItemClick(e, "#portfolio")}>
              Portfolio
            </a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#companies" onClick={(e) => handleMenuItemClick(e, "#companies")}>
              Internships
            </a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#contact" onClick={(e) => handleMenuItemClick(e, "#contact")}>
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex flex-col items-end">
          {/* Toggle button icon */}
          {!toggle ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={() => setToggle(!toggle)} viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="w-6 h-6 cursor-pointer md:hidden">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          ) : (
            <svg onClick={() => setToggle(!toggle)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cursor-pointer md:hidden h-6" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}

          {/* Mobile menu */}
          {toggle ? (
            <ul className="md:hidden absolute flex mt-8 flex-col bg-gray-200 p-2 rounded-sm">
              <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out" onClick={(e) => handleMenuItemClick(e, "#home")} >
                <a href="/#home">Home</a>
              </li>
              <li className="menuItem  p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out" onClick={(e) => handleMenuItemClick(e, "#aboutme")} >
                <a href="/#aboutme">About Me</a>
              </li>
              <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out" onClick={(e) => handleMenuItemClick(e, "#skills")} >
                <a href="#skills">Skills and Courses</a>
              </li>
              <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out" onClick={(e) => handleMenuItemClick(e, "#portfolio")} >
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out" onClick={(e) => handleMenuItemClick(e, "#companies")} >
                <a href="/#companies">Internships</a>
              </li>
              <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out" onClick={(e) => handleMenuItemClick(e, "#contact")} >
                <a href="/#contact">Contact Me</a>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// import React, { useState } from "react";
// import { mylogo1 } from "./../assets";
// import "./NavBar.css";

// const NavBar = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleMenuItemClick = (event, sectionId) => {
//     event.preventDefault();
//     const targetSection = document.getElementById(sectionId);
//     if (targetSection) {
//       targetSection.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       setToggle(false); // Close the mobile menu after clicking a link
//     }
//   };

//   return (
//     <div className="w-full bg-black p-[10px] flex justify-between items-center">
//       <img src={mylogo1} className="h-[60px] mb-0" alt="LOGO" />
//       <div>
//         <ul className="hidden text-white md:flex">
//           <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
//             <a href="/#home" onClick={(e) => handleMenuItemClick(e, "home")}>
//               Home
//             </a>
//           </li>
//           <li className="menuItem hover:scale-110">
//             <a href="/#aboutme" onClick={(e) => handleMenuItemClick(e, "aboutme")}>
//               About Me
//             </a>
//           </li>
//           <li className="menuItem hover:scale-110">
//             <a href="/#skills" onClick={(e) => handleMenuItemClick(e, "skills")}>
//               Skills and Courses
//             </a>
//           </li>
//           <li className="menuItem hover:scale-110">
//             <a href="/#portfolio" onClick={(e) => handleMenuItemClick(e, "portfolio")}>
//               Portfolio
//             </a>
//           </li>
//           <li className="menuItem hover:scale-110">
//             <a href="/#companies" onClick={(e) => handleMenuItemClick(e, "companies")}>
//               Internships
//             </a>
//           </li>
//           <li className="menuItem hover:scale-110">
//             <a href="/#contact" onClick={(e) => handleMenuItemClick(e, "contact")}>
//               Contact Me
//             </a>
//           </li>
//         </ul>
//         <div className="flex flex-col items-end">
//           {/* Toggle button icon */}
//           {!toggle ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               onClick={() => setToggle(!toggle)}
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="#FFFFFF"
//               className="w-6 h-6 cursor-pointer md:hidden"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
//             </svg>
//           ) : (
//             <svg
//               onClick={() => setToggle(!toggle)}
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 cursor-pointer md:hidden h-6"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           )}

//           {/* Mobile menu */}
//           {toggle ? (
//             <ul className="md:hidden absolute flex mt-8 flex-col bg-gray-200 p-2 rounded-sm">
//               <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out" onClick={(e) => handleMenuItemClick(e, "home")}>
//                 <a href="/#home">Home</a>
//               </li>
//               <li className="menuItem p-3 hover:scale-110" onClick={(e) => handleMenuItemClick(e, "aboutme")}>
//                 <a href="/#aboutme">About Me</a>
//               </li>
//               <li className="menuItem p-3 hover:scale-110" onClick={(e) => handleMenuItemClick(e, "skills")}>
//                 <a href="#skills">Skills and Courses</a>
//               </li>
//               <li className="menuItem p-3 hover:scale-110" onClick={(e) => handleMenuItemClick(e, "portfolio")}>
//                 <a href="/#portfolio">Portfolio</a>
//               </li>
//               <li className="menuItem p-3 hover:scale-110" onClick={(e) => handleMenuItemClick(e, "companies")}>
//                 <a href="/#companies">Internships</a>
//               </li>
//               <li className="menuItem p-3 hover:scale-110" onClick={(e) => handleMenuItemClick(e, "contact")}>
//                 <a href="/#contact">Contact Me</a>
//               </li>
//             </ul>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
