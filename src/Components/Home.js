import React from 'react'
import './../Constants'
import { AppText } from './../Constants'
import './../assets'
import './Home.css'
import { me, wavehome } from './../assets'
import Typewriter from 'typewriter-effect';
import { FiLinkedin, FiInstagram, FiMail, FiGithub, FiFacebook } from "react-icons/fi";

const Home = () => {

  const typewriterStyles = {
    fontSize: '40px',
    fontWeight: 'bold',
    '--tw-text-opacity': '1',
    color: 'rgb(147 51 234 / var(--tw-text-opacity))',
  };

  const typewriterStylesMobile = {
    fontSize: '35px',
    fontWeight: 'bold',
    '--tw-text-opacity': '1',
    color: 'rgb(147 51 234 / var(--tw-text-opacity))',
  };

  return (
    <div id='home' className="relative m-0 overflow-hidden">
      <img src={wavehome}  className="w-screen m-0 absolute z-[-1]" alt='' />
      <div className='flex p-[20px] md:px-20 justify-between z-[10] flex-col md:flex-row'>

      <div className='flex w-full flex-row bg-transparent justify-end'>
        <div className='flex w-full flex-col bg-transparent items-start content-end'>
            <h1 className='text-[35px] text-white	 md:text-[40px] font-bold '>{AppText.hello}</h1>
            <div className='flex'>
            <h1 className='text-[35px] text-white md:text-[40px] font-bold mr-3'>{AppText.Iam}</h1>
            
            <Typewriter id="typewriter" className="typewriter"
  options={{
    strings: [AppText.MrinalGupta, AppText.FrontedDeveloper, AppText.BackendDeveloper, AppText.AndroidDeveloper],
    autoStart: true,
    loop: true,
  }}
  style={window.innerWidth <= 600 ? typewriterStylesMobile : typewriterStyles}
/>

</div>
<div>
  <h1 className='my-5 text-neutral-300	'>Enthusiastic full-stack developer with a passion for web and Android app development. Eager to expand knowledge and skills, excelling in React.js, Tailwind CSS, Node.js, and JSON. Adept at creating interactive and user-friendly interfaces with JSX. Always seeking new challenges and opportunities to grow in the tech industry.</h1>
</div>
<div className='flex flex-col md:flex-row  justify-evenly px-8 md:px-0'>
  <div>
    <h3 className='font-thin text-slate-100 ml-2 mb-4'>Let's Connect</h3>
    <div className='grid grid-cols-4'>
      <a href="https://www.linkedin.com/in/mrinal-gupta-5b520623a/" target='_blank' rel='noreferrer' class="no-underline"><button class="mx-2 transition-all duration-300 h-12 w-12 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:scale-125"><FiLinkedin class="w-6 h-6" /></button></a>
      <a href="https://www.instagram.com/mrinxl03/" target='_blank' rel='noreferrer' class="no-underline"><button class="mx-2 transition-all duration-300 h-12 w-12 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125"><FiInstagram class="w-6 h-6" /></button></a>
      <a href="https://www.facebook.com/mrinal.gupta.9003" target='_blank' rel='noreferrer' class="no-underline"><button class="mx-2 transition-all duration-300 h-12 w-12 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125"><FiFacebook class="w-6 h-6" /></button></a>
      <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=&cc=mrinal.gupta@mitaoe.ac.in" target='_blank' rel='noreferrer' class="no-underline"><button class="mx-2 transition-all duration-300 h-12 w-12 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125"><FiMail class="w-6 h-6" /></button></a>
    </div>
  </div>
  <div className='ml-4'>
    <h3 className='font-thin text-slate-100 ml-2 mb-4'>My works in</h3>
    <div className='grid grid-cols-4'>
      <a href="https://github.com/mrinal4703" target='_blank' rel='noreferrer' class="no-underline"><button class="mx-2 transition-all duration-300 h-12 w-12 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:scale-125"><FiGithub class="w-6 h-6" /></button></a>
    </div>
  </div>
</div>

        </div>
        </div>
        <div className=' w-full flex justify-center'>
          
          <img src={me} className="w-full max-w-[400px] md:w-[400px] bg-inherit transition-all duration-300 hover:scale-110" alt=''/>
          {/* <img src={me}  className="w-[400px] md:w-[400px] bg-inherit transition-all duration-300 hover:scale-110" alt=''/> */}
          </div>
    </div>
    </div>
    
  )
}

export default Home