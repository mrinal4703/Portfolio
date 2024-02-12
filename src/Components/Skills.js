import React, {useEffect, useState} from 'react';
import '../assets';
import './Skill.css';
import {
    skillpot1,
    waveport1,
    waveport2,
    wavehome, wavecontact1
} from '../assets';
import '../Constants';
import {
    AppText,
    skillsList,
    workDetail,
    otherskillsList,
    ide
} from '../Constants';
import Typewriter from 'typewriter-effect';
import Footer from "./Footer";

const Skills = () => {

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

    return (
        <div id='skills' className=''>

            <div className='z-[10]'>

                <div
                    className={`overflow-hidden ${contentLoaded ? 'transition-all duration-[0.8s] opacity-100 translate-x-0' : 'opacity-0 translate-x-1/4'}`}>
                    <div className='flex flex-row justify-center items-center'>
                        <img src={skillpot1} className="w-[100px] transition ease-in-out delay-100 hover:scale-110 mr-4"
                             alt=''/>
                        <h1 className='text-[40px] font-bold'><span className='text-white'>{AppText.Skills}</span><span
                            className='text-purple-600'>{AppText.Experties}</span></h1>
                    </div>

                    <div className='flex flex-col md:flex-row pt-4 ml-16 px-8 md:px-0 items-start'>
                        <div className="w-full md:w-1/2">
                            <h3 className='text-xl flex text-white font-bold text-left'>
                                Skills:
                            </h3>
                            <h3 className='text-xl flex text-violet-600 font-bold text-left'>
                                Technical and non technical
                            </h3>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className='text-xl flex text-white font-bold text-left'>
                                Compatibility:
                            </h3>
                            <h3 className='text-xl flex text-violet-600 font-bold text-left'>
                                IDEs and OS
                            </h3>
                        </div>
                    </div>

                    <div className='flex flex-col pt-1 mx-1 pb-6 md:flex-row justify-center px-8 md:px-0 mt-8'>
                        <div className='flex flex-col md:flex-row mx-auto justify-evenly px-8 md:px-0'>
                            <div className='grid grid-cols-6 md:grid-cols-6 gap-8 items-center'>
                                {skillsList.map((item, index) => (
                                    <div
                                        key={`skills-${index}`}
                                        className='relative w-[70px] transition ease-in-out delay-10 hover:scale-110 bg-gradient-to-br from-purple-900 to-purple-700 bg-black shadow-lg p-3 rounded-full'
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
                                        <img src={item.icon} className="w-[70px]" alt=''/>
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
                        <div className='flex flex-col mx-auto md:flex-row justify-evenly px-8 md:px-0'>
                            <div className='grid grid-cols-6 md:grid-cols-6 gap-8 items-center'>
                                {ide.map((item1, index1) => (
                                    <div
                                        key={`ide-${index1}`}
                                        className='relative w-[70px] transition ease-in-out delay-10 hover:scale-110 bg-gradient-to-br from-purple-900 to-purple-700 bg-black shadow-lg p-3 rounded-full'
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
                                        <img src={item1.icon} className="w-[70px]" alt=''/>
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
                </div>

                <div
                    className={`overflow-hidden ${contentLoaded ? 'transition-all duration-[0.8s] opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/4'}`}>
                    <h3 className={'my-4 text-2xl flex ml-12 text-violet-600 font-bold text-left'}>Courses</h3>
                    <div className='flex flex-col md:flex-row justify-evenly px-8 md:px-0 mb-8 '>
                        <div
                            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm w-full mx-2 p-2 rounded-lg shadow-lg'>
                            {workDetail.map((item, index) => (
                                <div key={item.id}
                                     className=' w-full transition-all ease-in-out hover:scale-105'>
                                    {/*<img src={item.imgg} className='h-[100px] my-auto ' alt=''></img>*/}
                                    <div className='flex flex-col text-center  mb-2 text-black'>
                                        <div className='font-bold mb-1'>
                                            <h2>{item.year}</h2>
                                        </div>
                                        <div>
                                            <h3 className='font-thin text-slate-400 my-2'>{item.compnayName}</h3>
                                            <h3 className='text-xs text-slate-400'>{item.position}</h3>
                                        </div>
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
