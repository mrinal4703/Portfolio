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
import {melappy} from './../assets';
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
            <div
                className={`overflow-hidden ${contentLoaded ? 'transition-all duration-[0.8s] opacity-100 translate-x-0' : 'opacity-0 translate-x-1/4'}`}>
                <div className="relative m-0 overflow-hidden">

                    <div className='flex lg:p-[20px] xls:p-[15px] lg:px-20 md:px-20 justify-between z-[10] lg:flex-row md:flex-col xls:flex-row'>
                        <div className='flex w-full flex-row bg-transparent justify-end'>
                            <div className='flex w-full flex-col bg-transparent items-start content-end'>

                                <div className={'md:grid md:grid-rows-2 xls:flex xls:flex-row'}>
                                    <div className="xls:flex-1">
                                        <h1 className='text-white lg:text-[40px] md:text-[25px] xls:text-[30px] md:mt-0 font-bold '>{AppText.hello}</h1>
                                    </div>
                                    <div className='lg:flex lg:flex-row xls:flex xls:flex-col xls:pb-3'>
                                        <h1 className='text-white lg:text-[33px] md:text-[21px] xls:text-[30px] xls:ml-2 md:mx-0 font-bold lg:mr-1 md:mr-0 xl:flex-shrink-0'>{AppText.Iam}</h1>
                                        <Typewriter
                                            options={{
                                                strings: [AppText.MrinalGupta, AppText.FrontedDeveloper, AppText.BackendDeveloper, AppText.AndroidDeveloper, AppText.CompetitiveProgrammer],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                            className="Typewriter"
                                        />
                                    </div>
                                </div>


                                {/*<div className={'md:grid md:grid-rows-2 xls:grid xls:grid-cols-1'}>*/}
                                {/*    <div>*/}
                                {/*        <h1 className='text-white lg:text-[40px] md:text-[25px] xls:text-[30px] md:mt-0 font-bold '>{AppText.hello}</h1>*/}
                                {/*    </div>*/}
                                {/*    <div className='lg:flex lg:flex-row xls:flex xls:flex-col xls:pb-3'>*/}
                                {/*        <h1 className='text-white lg:text-[33px] md:text-[21px] xls:text-[20px] md:mx-0 font-bold lg:mr-1 md:mr-0'>{AppText.Iam}</h1>*/}
                                {/*        <Typewriter*/}
                                {/*            options={{*/}
                                {/*                strings: [AppText.MrinalGupta, AppText.FrontedDeveloper, AppText.BackendDeveloper, AppText.AndroidDeveloper, AppText.CompetitiveProgrammer],*/}
                                {/*                autoStart: true,*/}
                                {/*                loop: true,*/}
                                {/*            }}*/}
                                {/*            className="lg:text-lg md:text-base md:mt-0 xls:m-28 Typewriter"*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*</div>*/}


                                <div className={'md:flex md:flex-row-reverse xls:flex xls:flex-col'}>
                                    <div className='flex justify-center'>
                                        <img src={me}
                                             className="w-full lg:w-[380px] md:mr-0 xls:mr-10 md:w-[320px] lg:h-[380px] xls:h-56 xls:w-[230px] md:relative md:mt-[-100px] xls:my-auto z-10 bg-inherit transition-all duration-300 hover:scale-110"
                                             alt=''/>
                                    </div>

                                    <div className={'md:w-1/2 md:mr-80 xls:w-screen'}>
                                        <h1 className='lg:my-5 md:my-2 text-neutral-300 text-base lg:text-base md:text-sm sm:text-sm md:w-full xls:w-screen lg:text-white md:text-white sm:text-white xls:text-black xls:text-[14px] xls:font-medium lg:mt-2 xls:mt-0 md:ml-0 xls:ml-[-12px]'>
                                            Enthusiastic full-stack developer skilled in web, Android, and C++
                                            competitive
                                            programming. Proficient in React.js, Tailwind CSS, Node.js, JSON, and
                                            creating
                                            dynamic interfaces with JSX. Eager learner, constantly seeking growth and
                                            challenges
                                            in the tech industry.
                                        </h1>
                                        <div className='w-full md:flex md:flex-row xls:flex-col justify-between'>
                                            <div className='lg:ml-0 lg:py-0'>
                                                <h3 className='font-thin text-base lg:text-base md:text-sm text-slate-100 lg:mx-2 xls:mx-0 lg:my-0 xls:my-2 lg:block md:block sm:block xls:hidden lg:mb-4 md:mb-4'>Let's
                                                    Connect</h3>
                                                <div className='grid grid-cols-4 md:w-full xls:w-1/2 xls:my-2'>
                                                    <a href="https://www.linkedin.com/in/mrinal03/" target='_blank'
                                                       rel='noreferrer' className="no-underline">
                                                        <button
                                                            className="mx-2 transition-all duration-300 lg:h-12 lg:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:scale-125">
                                                            <FiLinkedin className="w-6 h-6"/>
                                                        </button>
                                                    </a>
                                                    <a href="https://www.instagram.com/mrinxl03/" target='_blank'
                                                       rel='noreferrer' className="no-underline">
                                                        <button
                                                            className="mx-2 transition-all duration-300 lg:h-12 lg:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125">
                                                            <FiInstagram className="w-6 h-6"/>
                                                        </button>
                                                    </a>
                                                    <a href="https://www.facebook.com/mrinal.gupta.9003" target='_blank'
                                                       rel='noreferrer' className="no-underline">
                                                        <button
                                                            className="mx-2 transition-all duration-300 lg:h-12 lg:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125">
                                                            <FiFacebook className="w-6 h-6"/>
                                                        </button>
                                                    </a>
                                                    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=&cc=mrinal.gupta@mitaoe.ac.in"
                                                       target='_blank' rel='noreferrer' className="no-underline">
                                                        <button
                                                            className="mx-2 transition-all duration-300 lg:h-12 lg:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125">
                                                            <FiMail className="w-6 h-6"/>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='lg:ml-0 lg:py-0'>
                                                <h3 className='font-thin text-base lg:text-base md:text-sm text-slate-100 lg:ml-2 lg:mb-4 lg:block md:block sm:block xls:hidden'>My
                                                    works in</h3>
                                                <div className='grid grid-cols-4'>
                                                    <a href="https://github.com/mrinal4703" target='_blank'
                                                       rel='noreferrer'
                                                       className="no-underline">
                                                        <button
                                                            className="mx-2 transition-all duration-300 lg:h-12 lg:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:scale-125">
                                                            <FiGithub className="w-6 h-6"/>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* <div id="aboutme" className='my-[100px]'> */}

            <div
                className={`overflow-hidden ${contentLoaded ? 'transition-all duration-[0.8s] opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/4'}`}>
                <h1 className='lg:text-[40px] md:text-[25px] xls:text-[30px] lg:pt-[10px] md:pt-[10px] font-bold text-center'>
                    About <span
                    className='text-purple-600 lg:mr-60 md:mr-60 md:ml-0 xls:ml-1 lg:mb-0 xls:mb-10'>Me</span>
                </h1>

                <div className='lg:relative md:mb-0 md:relative xls:static xls:mt-0 lg:mt-[-110px] md:mt-[-110px]'>
                    <div className='lg:my-3 md:my-3 xls:my-0'>
                    <img src={wavehme1}
                             className={`w-screen md:block xls:hidden ${contentLoaded ? 'no-transition' : ''}`} alt=''/>
                        <div className={'md:absolute mt-[-235px]'}>

                            <div className='md:relative xls:static w-full h-[300px] lg:p-0 md: xls:p-2'>
                                <div className='absolute top-0 left-2 right-0 flex justify-between'>
                                    <img src={melappy}
                                         className='lg:w-[300px] md:w-[150px] lg:mt-[-117px] lg:block md:block xls:hidden md:mt-0 mb-0'
                                         alt=''/>
                                </div>

                                <div className='flex justify-end'>
                                    <h1 className='md:block xls:hidden lg:text-center lg:text-white md:text-center lg:text-sm md:text-xs xls:text-[15px] xls:text-black z-10 lg:pt-[20px] md:pt-[20px] xls:mt-20 lg:mt-0 md:mt-5 md:pl-[500px] lg:pl-[500px] lg:pr-4 md:pr-1 lg:ml-auto md:ml-auto'>
                                        {AppText.aboutMeDescripion}<br></br>
                                        {AppText.aboutMeDescripion1}
                                    </h1>
                                </div>
                            </div>

                            <div
                                className='flex flex-col md:flex-row md:mt-[-95px] xls:mt-[-50px] md:px-24 xls:px-5 md:relative'>
                                {aboutSection.map((item, index) => (
                                    <div key={index}
                                         className='flex md:relative md:h-full md:w-full items-center justify-center flex-col m-2 group md:hover:bg-violet-900 md:hover:border-1 rounded-lg py-2'>
                                        <img src={item.image} className='w-[280px] rounded-lg h-[207px] object-cover'
                                             alt=''/>
                                        <h1 className='font-bold text-sm md:mt-1 md:group-hover:text-white'>{item.title}</h1>
                                        <h1 className='text-xs text-center md:group-hover:text-gray-200 text-gray-500 px-7'>
                                            {item.desc}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <img src={wavehme2} className='w-screen no-transition md:block xls:hidden' alt=''/>
                    </div>

                    {showTimeline && (
                        <div className='w-full mx-auto mb-0 rounded-lg overflow-x-auto'>
                            <div className='flex md:flex-row xls:flex-col items-center justify-center'>
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


