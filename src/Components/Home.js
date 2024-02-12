import React from 'react'
import '../Constants'
import {AppText} from '../Constants'
import '../assets'
import './Home.css'
import {me, wavehme1, wavehme2} from '../assets'
import Typewriter from 'typewriter-effect';
import {FiLinkedin, FiInstagram, FiMail, FiGithub, FiFacebook} from "react-icons/fi";
import {useState, useEffect} from 'react';
import {Education} from '../Constants';

// import {
//     VerticalTimeline,
//     VerticalTimelineElement,
// } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {wave, melappy, waveabout1, wavehm1,} from './../assets';
import {aboutSection} from '../Constants';
// import Footer from './Footer'

const Home = () => {

    const [contentLoaded, setContentLoaded] = useState(false);

    useEffect(() => {
        // Simulating content loading delay for demonstration
        setTimeout(() => {
            setContentLoaded(true);
        }, 500); // Adjust the delay timing as needed

        // Function to remove transition from specific images
        const removeImageTransition = () => {
            const images = document.querySelectorAll('.no-transition');

            images.forEach((image) => {
                image.style.transition = 'none';
            });
        };

        // Call the function to remove transitions once the component has mounted
        removeImageTransition();
    }, []);

    const [showTimeline, setShowTimeline] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowTimeline(scrollY > 200);
        };

        // Add the event listener on mount
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener on unmount to prevent memory leaks
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='home'>
            <div className={`overflow-hidden ${contentLoaded ? 'transition-all duration-[0.8s] opacity-100 translate-x-0' : 'opacity-0 translate-x-1/4'}`}>
                <div className="relative m-0 overflow-hidden">
                    <div className='flex p-[20px] md:px-20 justify-between z-[10] flex-col md:flex-row'>

                        <div className='flex w-full flex-row bg-transparent justify-end'>
                            <div className='flex w-full flex-col bg-transparent items-start content-end'>
                                <h1 className='text-white lg:text-[40px] md:text-[25px] font-bold '>{AppText.hello}</h1>
                                <div className='flex'>
                                    <h1 className='text-white lg:text-[33px] md:text-[21px] font-bold lg:mr-1 md:mr-0'>{AppText.Iam}</h1>

                                    <Typewriter
                                        options={{
                                            strings: [AppText.MrinalGupta, AppText.FrontedDeveloper, AppText.BackendDeveloper, AppText.AndroidDeveloper, AppText.CompetitiveProgrammer],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                        class="text-lg md:text-base Typewriter"
                                    />


                                </div>
                                <div>
                                    <h1 className='lg:my-5 md:my-2 text-neutral-300 text-base lg:text-base md:text-sm'>
                                        Enthusiastic full-stack developer skilled in web, Android, and C++ competitive
                                        programming. Proficient in React.js, Tailwind CSS, Node.js, JSON, and creating
                                        dynamic interfaces with JSX. Eager learner, constantly seeking growth and
                                        challenges
                                        in the tech industry.
                                    </h1>
                                </div>

                                <div className='flex flex-col md:flex-row  justify-evenly px-8 md:px-0'>
                                    <div>
                                        <h3 className='font-thin text-base lg:text-base md:text-sm text-slate-100 ml-2 mb-4'>Let's
                                            Connect</h3>
                                        <div className='grid grid-cols-4'>
                                            <a href="https://www.linkedin.com/in/mrinal03/" target='_blank'
                                               rel='noreferrer'
                                               className="no-underline">
                                                <button
                                                    className="mx-2 transition-all duration-300 lg:h-12 lg:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:scale-125">
                                                    <FiLinkedin class="w-6 h-6"/></button>
                                            </a>
                                            <a href="https://www.instagram.com/mrinxl03/" target='_blank'
                                               rel='noreferrer'
                                               className="no-underline">
                                                <button
                                                    className="mx-2 transition-all duration-300 lg:h-12 lg:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125">
                                                    <FiInstagram class="w-6 h-6"/></button>
                                            </a>
                                            <a href="https://www.facebook.com/mrinal.gupta.9003" target='_blank'
                                               rel='noreferrer' className="no-underline">
                                                <button
                                                    className="mx-2 transition-all duration-300 lg:h-12 lg:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125">
                                                    <FiFacebook class="w-6 h-6"/></button>
                                            </a>
                                            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=&cc=mrinal.gupta@mitaoe.ac.in"
                                               target='_blank' rel='noreferrer' className="no-underline">
                                                <button
                                                    className="mx-2 transition-all duration-300 lg:h-12 lg:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125">
                                                    <FiMail class="w-6 h-6"/></button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <h3 className='font-thin text-base lg:text-base md:text-sm text-slate-100 ml-2 mb-4'>My
                                            works in</h3>
                                        <div className='grid grid-cols-4'>
                                            <a href="https://github.com/mrinal4703" target='_blank' rel='noreferrer'
                                               className="no-underline">
                                                <button
                                                    className="mx-2 transition-all duration-300 lg:h-12 lg:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:scale-125">
                                                    <FiGithub class="w-6 h-6"/></button>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className=' w-full flex justify-center'>

                            <img src={me}
                                 className="w-full lg:w-[400px] md:w-[320px] lg:h-full md:h-7/9 bg-inherit transition-all duration-300 hover:scale-110"
                                 alt=''/>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div id="aboutme" className='my-[100px]'> */}

            <div className={`overflow-hidden ${contentLoaded ? 'transition-all duration-[0.8s] opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/4'}`}>
                <h1 className='lg:text-[40px] md:text-[25px] pt-[10px] font-bold text-center'>
                    About <span className='text-purple-600 mr-60'>Me</span>
                </h1>

                <div className='relative mt-[-110px]'>
                    <div className='my-3'>
                        <img src={wavehme1} className={`w-screen ${contentLoaded ? 'no-transition' : ''}`} alt=''/>
                        <div className={'absolute mt-[-235px]'}>

                            <div className='relative w-full h-[300px]'>
                                <div className='absolute top-0 left-2 right-0 flex justify-between'>
                                    <img src={melappy} className='lg:w-[300px] md:w-[150px] lg:mt-[-117px] md:mt-0 mb-0'
                                         alt=''/>
                                </div>

                                <div className='flex justify-end'>
                                    <h1 className='lg:text-center md:text-center lg:text-sm md:text-xs z-10 lg:pt-[20px] md:pt-[20px] lg:mt-0 md:mt-5 md:pl-[500px] lg:pl-[500px] lg:pr-4 md:pr-1 text-white ml-auto'>
                                        {AppText.aboutMeDescripion}<br></br>{AppText.aboutMeDescripion1}
                                    </h1>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row mt-[-95px] md:px-32 relative'>
                                {aboutSection.map((item, index) => (
                                    <div key={index}
                                         className='flex relative h-full w-full items-center justify-center flex-col m-2 group md:hover:bg-violet-900 hover:border-1 rounded-lg py-2'>
                                        <img src={item.image} className='w-[230px] rounded-lg h-[170px] object-cover'
                                             alt=''/>
                                        <h1 className='font-bold text-sm md:group-hover:text-white'>{item.title}</h1>
                                        <h1 className='text-xs text-center md:group-hover:text-gray-200 text-gray-500 px-7'>
                                            {item.desc}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <img src={wavehme2} className='w-screen no-transition' alt=''/>
                    </div>

                    {showTimeline && (
                        <div className='w-full mx-auto mb-0 rounded-lg overflow-x-auto'>
                            <div className='flex items-center justify-center'>
                                {Education.map((item, index) => (
                                    <div key={item.id}
                                         className={`relative flex items-center space-x-4 p-4 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                        <div
                                            className={`bg-white py-4 px-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                                            <div className='absolute top-4 right-4 bg-purple-500 w-16 h-16 ease-in-out'
                                                 style={{
                                                     backgroundImage: `url(${item.imageUrl})`,
                                                     backgroundSize: 'cover',
                                                     zIndex: '1'
                                                 }}></div>
                                            <h1 className='text-lg font-bold text-gray-900'>{item.educationName}</h1>
                                            <h3 className='text-sm text-gray-600'>{item.schoolName}</h3>
                                            <p className='text-xs text-gray-600'>{item.date}</p>
                                            <p className='text-xs text-gray-600'>{item.text}</p>
                                            <p className='text-xs text-gray-600'>{item.performance}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Home