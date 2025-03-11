// import React, {useEffect, useState} from 'react';
import React from 'react';
import '../assets';
import './Skill.css';
import {
    // internship,
    skillpot1
} from '../assets';
import '../Constants';
import {
    AppText,
    skillsList,
    // workDetail,
    ide, CompanyImage, Internship
} from '../Constants';
// import SectionHeading1 from "../Shared/SectionHeading1";
// import Typewriter from 'typewriter-effect';
// import Footer from "./Footer";

const Skills = () => {

    return (
        <div id='skills' className=''>

            <div className='z-[10]'>

                <div className='flex flex-row md:mt-0 xls:mt-1 justify-center items-center'>
                    <img src={skillpot1}
                         className="md:w-[100px] xls:w-[80px] xls:mx-4 transition ease-in-out delay-100 hover:scale-110 md:mr-4"
                         alt=''/>
                    <h1 className='md:text-[40px] xls:text-[28px] font-bold'><span
                        className='text-white'>{AppText.Skills}</span><span
                        className='text-purple-600'>{AppText.Experties}</span></h1>
                </div>

                <div className='flex flex-col md:flex-row pt-4 ml-16 px-8 md:px-0 items-start'>
                    <div className="w-full md:w-1/2">
                        <h3 className='text-xl flex md:text-white xls:text-black lg:block md:block sm:block xls:hidden font-bold text-left'>
                            Skills:
                        </h3>
                        <h3 className='text-xl flex md:text-violet-600 lg:block md:block sm:block xls:hidden font-bold text-left'>
                            Technical and non technical
                        </h3>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className='text-xl flex md:text-white xls:text-black lg:block md:block sm:block xls:hidden font-bold text-left'>
                            Compatibility:
                        </h3>
                        <h3 className='text-xl flex md:text-violet-600 lg:block md:block sm:block xls:hidden font-bold text-left'>
                            IDEs and OS
                        </h3>
                    </div>
                </div>

                <div
                    className='flex flex-col pt-1 mx-1 pb-6 md:flex-row justify-center px-8 md:px-0 xls:px-2 md:ml-0 xls:ml-[-36px] mt-8'>
                    <div className='flex flex-col md:flex-row mx-auto justify-evenly px-8 md:px-0'>
                        <div className='grid grid-cols-6 md:grid-cols-6 md:gap-8 xls:gap-x-12 xls:gap-y-5 items-center'>
                            {skillsList.map((item, index) => (
                                <div
                                    key={`skills-${index}`}
                                    // className='relative md:w-[70px] xls:w-[55px] transition ease-in-out delay-10 hover:scale-110 bg-gradient-to-br from-purple-900 to-purple-700 bg-black shadow-lg md:p-3 xls:p-2 rounded-full'
                                    className='relative md:w-[85px] xls:w-[60px] transition ease-in-out md:p-3 xls:p-1 rounded-full'
                                    onMouseEnter={() => {
                                        const textElement = document.getElementById(`skills-text-${index}`);
                                        if (textElement) {
                                            textElement.style.opacity = 1;
                                            textElement.classList.remove('hidden');
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        const textElement = document.getElementById(`skills-text-${index}`);
                                        if (textElement) {
                                            textElement.style.opacity = 0;
                                            textElement.addEventListener('transitionend', () => {
                                                textElement.classList.add('hidden');
                                            }, {
                                                once: true
                                            });
                                        }
                                    }}
                                >
                                    {/*<img src={item.icon} className="w-[80px]" alt=''/>*/}
                                    <img src={item.icon} className="w-[85px]" alt=''/>
                                    <p
                                        id={`skills-text-${index}`}
                                        className="absolute w-max text-center mt-0 text-xs hidden text-zinc-500 font-bold left-1/2 transform -translate-x-1/2 top-full transition-opacity duration-500"
                                        style={{opacity: 0}}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col mx-auto md:flex-row justify-evenly xls:hidden sm:block px-8 md:my-0 xls:my-5 md:px-0'>
                        <div className='grid grid-cols-6 md:grid-cols-6 md:gap-8 xls:gap-x-12 xls:gap-y-5 items-center'>
                            {ide.map((item1, index1) => (
                                <div
                                    key={`ide-${index1}`}
                                    // className='relative md:w-[70px] xls:w-[55px] transition ease-in-out delay-10 hover:scale-110 bg-gradient-to-br from-purple-900 to-purple-700 bg-black shadow-lg p-3 rounded-full'
                                    className='relative md:w-[85px] xls:w-[65px] transition ease-in-out p-3 rounded-full'
                                    onMouseEnter={() => {
                                        const textElement = document.getElementById(`ide-text-${index1}`);
                                        if (textElement) {
                                            textElement.style.opacity = 1;
                                            textElement.classList.remove('hidden');
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        const textElement = document.getElementById(`ide-text-${index1}`);
                                        if (textElement) {
                                            textElement.style.opacity = 0;
                                            textElement.addEventListener('transitionend', () => {
                                                textElement.classList.add('hidden');
                                            }, {
                                                once: true
                                            });
                                        }
                                    }}
                                >
                                    {/*<img src={item1.icon} className="w-[80px]" alt=''/>*/}
                                    <img src={item1.icon} className="w-[85px]" alt=''/>
                                    <p
                                        id={`ide-text-${index1}`}
                                        className="absolute w-max text-center mt-0 text-xs hidden text-zinc-500 font-bold left-1/2 transform -translate-x-1/2 top-full transition-opacity duration-500"
                                        style={{opacity: 0}}
                                    >
                                        {item1.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 px-4 md:my-8 w-screen justify-center items-center'>
                    <div className="col-span-1 md:col-span-1 justify-center mx-auto md:px-0 my-4">
                        <div className="md:gap-4 xls:gap-y-2 xls:gap-x-7 items-center">
                            {CompanyImage.map((item, index) => (
                                <div className="my-4 justify-evenly">
                                    <div className={'flex flex-wrap '}>
                                        <img src={item.imageUrl} className={'h-8 w-8 rounded-full mx-3'} alt=''/>
                                        <cite className="text-xl font-bold">{item.company}</cite>
                                    </div>
                                    <p className="mt-2 mb-10">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 items-center">
                        <div className="mx-auto grid justify-between grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
                            {Internship.map((item, index) => (
                                <div key={index}
                                     className="card flex flex-col items-center justify-center transition-all ease-in-out bg-white md:w-64 md:h-48 w-full h-full rounded-lg shadow-md p-4">
                                    <div className="text-center">
                                        <h1 className="font-bold mb-2 md:text-[16px] xls:text-[14px]">{item.companydesc}</h1>
                                        <h3 className="font-thin md:text-base xls:text-sm text-slate-500 mb-1">{item.company}</h3>
                                        <h3 className="text-sm text-slate-500">{item.duration}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills;
