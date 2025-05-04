import React from 'react'
import '../Constants'
import {aboutSection, AppText} from '../Constants'
import '../assets'
import './Home.css'
import {me,
    // wavehme1,
    // wavehme2
} from '../assets'
import Typewriter from 'typewriter-effect';
import {FiLinkedin, FiInstagram, FiMail, FiGithub, FiFacebook} from "react-icons/fi";
// import {useState, useEffect} from 'react';
import {Education} from '../Constants';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {SiCodechef, SiLeetcode} from "react-icons/si";

const Home = () => {

    return (
        <div id='home'>
            <div className="relative m-0 overflow-hidden">
                <div
                    className='flex lg15.6:p-[20px] lg15.6:px-20 xls:p-[15px] md:px-12 justify-between z-[10] lg15.6:flex-row md:flex-row xls:flex-row'>
                    <div className='flex w-full flex-row bg-transparent justify-end'>
                        <div className='flex w-full flex-col bg-transparent items-start content-end'>

                            <div className={'md:grid md:grid-rows-2 xls:flex xls:flex-row'}>
                                <div className="xls:flex-1">
                                    <h1 className='text-white lg15.6:text-[40px] md:text-[36px] xls:text-[30px] md:mt-0 font-bold '>{AppText.hello}</h1>
                                </div>
                                <div className='lg15.6:flex lg15.6:flex-row md:flex md:flex-row xls:flex xls:flex-col xls:pb-3'>
                                    <h1 className='text-white lg15.6:text-[33px] md:text-[30px] xls:text-[30px] xls:ml-2 md:mx-0 font-bold lg15.6:mr-1 md:mr-0'>{AppText.Iam}</h1>
                                    <Typewriter
                                        options={{
                                            strings: [AppText.MrinalGupta, AppText.FullStackDeveloper, AppText.CloudEnthusiast, AppText.DevOps, AppText.CompetitiveProgrammer,],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                        className="Typewriter"
                                    />
                                </div>
                            </div>

                            <div className={'md:flex md:flex-row-reverse xls:flex xls:flex-col'}>
                                <div className='flex justify-center'>
                                    <img src={me}
                                         className="w-full md:mr-0 xls:mr-10 md:w-[320px] lg15.6:w-[380px] lg15.6:h-[380px] md:h-[320px] xls:h-56 xls:w-[230px] md:relative md:mt-[-100px] xls:my-auto z-10 bg-inherit transition-all duration-300 rounded-full lg15.6:border-4 xls:border-2 border-black"
                                         alt=''/>
                                    {/*<img src={me2}*/}
                                    {/*     className="lg15.6:w-[360px] lg15.6:ml-10 md:mr-0 xls:mr-10 md:w-[320px] lg15.6:h-[500px] rounded-2xl xls:h-80 xls:w-[230px] md:relative md:mt-[-100px] xls:my-auto z-10 bg-inherit transition-all duration-300"*/}
                                    {/*     alt=''/>*/}
                                </div>

                                <div className={'md:w-1/2 lg15.6:mr-80 md:mr-[275px] xls:w-screen'}>
                                    <h1 className='lg15.6:my-5 md:my-2 text-neutral-300 text-base lg15.6:text-lg md:text-sm sm:text-sm md:w-full xls:w-screen lg15.6:text-white md:text-white sm:text-white xls:text-black xls:text-[14px] xls:font-medium lg15.6:mt-2 xls:mt-0 md:ml-0 xls:ml-[-12px] md:p-0 xls:px-3'>
                                        {AppText.homeDescription}
                                    </h1>
                                    <div className='w-full md:flex md:flex-row xls:flex-col justify-between'>
                                        <div className='lg15.6:ml-0 lg15.6:py-0'>
                                            <h3 className='font-thin text-base lg15.6:text-lg md:text-sm text-slate-100 lg15.6:mx-2 xls:mx-0 lg15.6:my-0 xls:my-2 lg15.6:block md:block sm:block xls:hidden lg15.6:mb-4 md:mb-4'>Let's
                                                Connect</h3>
                                            <div className='grid grid-cols-4 md:w-full xls:w-1/2 xls:my-2'>
                                                <a href="https://www.linkedin.com/in/mrinal03/" target='_blank'
                                                   rel='noreferrer' className="no-underline">
                                                    <button
                                                        className="mx-2 transition-all duration-300 lg15.6:h-12 lg15.6:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:scale-125">
                                                        <FiLinkedin className="w-6 h-6"/>
                                                    </button>
                                                </a>
                                                <a href="https://www.instagram.com/mrinxl03/" target='_blank'
                                                   rel='noreferrer' className="no-underline">
                                                    <button
                                                        className="mx-2 transition-all duration-300 lg15.6:h-12 lg15.6:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125">
                                                        <FiInstagram className="w-6 h-6"/>
                                                    </button>
                                                </a>
                                                <a href="https://www.facebook.com/mrinal.gupta.9003" target='_blank'
                                                   rel='noreferrer' className="no-underline">
                                                    <button
                                                        className="mx-2 transition-all duration-300 lg15.6:h-12 lg15.6:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125">
                                                        <FiFacebook className="w-6 h-6"/>
                                                    </button>
                                                </a>
                                                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=&cc=mrinalgupta04072003@gmail.com"
                                                   target='_blank' rel='noreferrer' className="no-underline">
                                                    <button
                                                        className="mx-2 transition-all duration-300 lg15.6:h-12 lg15.6:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:shadow-xl hover:scale-125">
                                                        <FiMail className="w-6 h-6"/>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='lg15.6:ml-0 lg15.6:py-0'>
                                            <h3 className='font-thin text-base lg15.6:text-lg md:text-sm text-slate-100 lg15.6:mx-2 xls:mx-0 lg15.6:my-0 xls:my-2 lg15.6:block md:block sm:block xls:hidden lg15.6:mb-4 md:mb-4'>My
                                                works in</h3>
                                            <div className='grid grid-cols-4 md:w-full xls:w-1/2 xls:my-2'>
                                                <a href="https://github.com/mrinal4703" target='_blank'
                                                   rel='noreferrer'
                                                   className="no-underline">
                                                    <button
                                                        className="mx-2 transition-all duration-300 lg15.6:h-12 lg15.6:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:scale-125">
                                                        <FiGithub className="w-6 h-6"/>
                                                    </button>
                                                </a>
                                                <a href="https://leetcode.com/u/mrinxl03/" target='_blank'
                                                   rel='noreferrer'
                                                   className="no-underline">
                                                    <button
                                                        className="mx-2 transition-all duration-300 lg15.6:h-12 lg15.6:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:scale-125">
                                                        <SiLeetcode className="w-6 h-6"/>
                                                    </button>
                                                </a>
                                                <a href="https://www.codechef.com/users/mrinalg03" target='_blank'
                                                   rel='noreferrer'
                                                   className="no-underline">
                                                    <button
                                                        className="mx-2 transition-all duration-300 lg15.6:h-12 lg15.6:w-12 md:h-10 md:w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900 to-purple-500 p-2 text-white shadow-lg hover:scale-125">
                                                        <SiCodechef className="w-6 h-6"/>
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


            <h1 className='lg15.6:text-[40px] md:text-[30px] xls:text-[30px] lg15.6:pt-[10px] md:pt-[14px] font-bold text-center'>
                About <span
                className='text-purple-600 lg15.6:mr-60 md:mr-60 md:ml-0 xls:ml-1 lg15.6:mb-0 xls:mb-10'>Me</span>
            </h1>

            <div className='lg15.6:relative md:mb-0 md:relative xls:static xls:mt-0'>
                <div className='lg15.6:my-3 md:my-3 xls:my-0'>
                    <div className={'md:grid grid-cols-2 px-4'}>
                        <div className={'grid-cols-1'}>
                            <VerticalTimeline layout="1-column w-1/2">
                                {Education.map((education) => (
                                    <VerticalTimelineElement
                                        key={education.id}
                                        className="vertical-timeline-element--education"
                                        contentStyle={{ background: '#fff', color: '#000' }}
                                        contentArrowStyle={{ borderRight: '12px solid  #fff' }}
                                        date={education.date}
                                        iconStyle={{
                                            background: `url(${education.imageUrl}) center center no-repeat`,
                                            backgroundSize: 'cover',
                                            color: '#000'
                                        }}
                                        iconClassName="right-icon"
                                    >
                                        <h3 className="vertical-timeline-element-title font-semibold">{education.educationName}</h3>
                                        <cite className="vertical-timeline-element-subtitle">{education.schoolName}</cite>
                                        <p>
                                            <div
                                                className="text-[10px] text-left my-2 md:group-hover:text-gray-200 text-gray-500">
                                                {education.text.map((point, index) => (
                                                    <div key={index} className="flex items-center gap-2">
                                                        <img src={education.icon} className="h-6 mt-2 font-black" alt="icon"/>
                                                        <p className="block mb-1 whitespace-pre-line">{point}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </p>
                                        <p>{education.performance}</p>
                                    </VerticalTimelineElement>
                                ))}
                            </VerticalTimeline>
                        </div>
                        <div className={'grid-cols-1 md:px-10 md:py-8'}>
                        <div
                                className='md:px-24 xls:px-5'>
                                {aboutSection.map((item, index) => (
                                    // <div key={index} className='flex md:relative md:h-full md:w-full items-center justify-center flex-col m-2 group md:hover:bg-violet-900 md:hover:border-1 rounded-lg py-2'>
                                    <div key={index} className='flex md:relative md:h-full md:w-full items-center justify-center flex-col m-2 rounded-lg py-2'>
                                        <img src={item.image} className='w-[280px] rounded-lg h-[207px] object-cover'
                                             alt=''/>
                                        {/*<h1 className='font-bold text-sm md:mt-1 md:group-hover:text-white'>{item.title}</h1>*/}
                                        <h1 className='font-bold text-sm md:mt-1'>{item.title}</h1>
                                        {/*<h1 className='text-xs text-center md:group-hover:text-gray-200 text-gray-500 px-7'>*/}
                                        <h1 className='text-xs text-center text-gray-500 px-7'>
                                                {item.desc}
                                        </h1>
                                    </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Home


