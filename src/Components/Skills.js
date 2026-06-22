import React from 'react';
import '../assets';
import './Skill.css';
import {
    achieve,
    skillpot1
} from '../assets';
import '../Constants';
import {
    AppText,
    skillsList,
    // workDetail,
    ide, CompanyImage,
    WorkExp
} from '../Constants';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

const Skills = () => {

    return (
        <div id='skills' className=''>

            <div className='z-[10]'>

                <div className='flex flex-row md:mt-0 xls:mt-1 justify-center items-center'>
                    <img src={skillpot1}
                        className="md:w-[100px] xls:w-[80px] xls:mx-4 transition ease-in-out delay-100 hover:scale-110 md:mr-4"
                        alt='' />
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
                                    <img src={item.icon} className="w-[85px]" alt='' />
                                    <p
                                        id={`skills-text-${index}`}
                                        className="absolute w-max text-center mt-0 text-xs hidden text-zinc-500 font-bold left-1/2 transform -translate-x-1/2 top-full transition-opacity duration-500"
                                        style={{ opacity: 0 }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className='flex flex-col mx-auto md:flex-row justify-evenly xls:hidden sm:block px-8 md:my-0 xls:my-5 md:px-0'>
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
                                    <img src={item1.icon} className="w-[85px]" alt='' />
                                    <p
                                        id={`ide-text-${index1}`}
                                        className="absolute w-max text-center mt-0 text-xs hidden text-zinc-500 font-bold left-1/2 transform -translate-x-1/2 top-full transition-opacity duration-500"
                                        style={{ opacity: 0 }}
                                    >
                                        {item1.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-row md:mt-0 xls:mt-1 justify-center items-center'>
                    <img src={achieve}
                        className="md:w-[100px] xls:w-[80px] xls:mx-4 transition ease-in-out delay-100 hover:scale-110 md:mr-4"
                        alt='' />
                    <h1 className='md:text-[40px] xls:text-[28px] font-bold'><span
                            className='text-purple-600'>{AppText.Internships}</span></h1>
                </div>

                <div className='lg15.6:relative md:mb-0 md:relative xls:static xls:mt-0'>
                    <div className='lg15.6:my-3 md:my-3 xls:my-0'>
                        <div className={'md:grid grid-cols-2 px-4'}>
                            <div className={'grid-cols-1'}>
                                <VerticalTimeline layout="1-column w-1/2">
                                    {WorkExp.map((education) => (
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
                                        ><a href={education.link} target="_blank" rel="noopener noreferrer" className="block">
                                            <h3 className="vertical-timeline-element-title font-semibold">{education.educationName}</h3>
                                            <cite className="vertical-timeline-element-subtitle">{education.schoolName}</cite>
                                            <p>
                                                <div
                                                    className="text-[10px] text-left my-2 md:group-hover:text-gray-200 text-gray-500">
                                                    {education.text.map((point, index) => (
                                                        <div key={index} className="flex items-center gap-2">
                                                            {/* <img src={education.icon} className="h-6 mt-2 font-black" alt="icon" /> */}
                                                            <p className="block mb-1 whitespace-pre-line">{point}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </p>
                                            <p>{education.performance}</p>
                                            </a>
                                        </VerticalTimelineElement>
                                    ))}
                                </VerticalTimeline>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-4 md:my-8 w-screen justify-center items-center'>
                                <div className="col-span-1 md:col-span-2 justify-center mx-auto md:px-0 my-4">
                                    <div className="md:gap-4 xls:gap-y-2 xls:gap-x-7 items-center">
                                        {CompanyImage.map((item, index) => (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                                                <div className="my-4 justify-evenly">
                                                    <div className={'flex flex-wrap'}>
                                                        <img src={item.imageUrl} className={'md:h-9 md:w-9 xls:h-8 xls:w-8 rounded-full mx-3'} alt='' />
                                                        <cite className="xls:text-xl font-bold">{item.company}</cite>
                                                    </div>
                                                    <p className="md:text-lg xls:text-base mt-2 mb-10">{item.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills;
