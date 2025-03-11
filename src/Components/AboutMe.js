import React, { useState, useEffect } from 'react';
import { Education } from '../Constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { wave, melappy, waveabout1, } from './../assets';
import { aboutSection, AppText } from '../Constants';

const AboutMe = () => {
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
    <div id="aboutme" className='my-[100px]'>
      <img src={wave} className='w-screen absolute left-0 right-0' alt='' />
      <div className='w-full bg-violet-900 h-[300px]  justify-center items-center'>
        <div className='flex flex-row justify-between absolute'>
          <img src={melappy} className='w-[150px] md:w-[300px] mt-[-120px] mb-0' alt=''/>
        </div>
        <h1 className='text-white text-[50px] pt-[20px] font-bold text-center'>
          About <span className='text-purple-600'>Me</span>
        </h1>
        <h1 className='w-full px-10 md:px-48 lg:px-80 mt-[50px] text-white'>
          {AppText.aboutMeDescripion}{' '}
        </h1>
      </div>
      <img src={waveabout1} className='w-screen absolute' alt=''/>
      <div className='flex flex-col md:flex-row mt-[-75px] md:px-32 '>
  {aboutSection.map((item, index) => (
    <div
      key={index}
      className='flex relative h-full w-full items-center justify-center flex-col m-2 group md:hover:bg-violet-900 rounded-lg py-2'
      style={{ maxWidth: '100%' }}
    >
      <img src={item.image} className='w-[230px] sm:w-[150px] rounded-lg h-[170px] sm:h-[100px] object-cover' alt='' />
      <h1 className='font-bold md:group-hover:text-white'>{item.title}</h1>
      <h1 className='text-[12px] sm:text-[10px] text-center md:group-hover:text-gray-200 text-gray-500 px-7'>
        {item.desc}
      </h1>
    </div>
  ))}
</div>

      {showTimeline && (
        <div className='w-full md:w-3/5 transition-all ease-in-out bg-violet-900 mx-auto mb-0 rounded-lg'>
          <VerticalTimeline>
            {Education.map((item, index) => (
              <VerticalTimelineElement key={item.id}
              className="vertical-timeline-element"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date={
                <span className="text-slate-50">
                  {item.date}
                </span>
              } 
              icon={
                <div className="w-full h-full bg-purple-500 rounded-full" style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover' }}/>}>
                  <div className={`bg-white w-full transition-all ease-in-out hover:scale-110 justify-center p-1 m-0 text-center items-center group md:hover:bg-violet-900 rounded-lg ${index % 2 === 0 ? 'md:w-full md:order-first' : 'md:w-full md:order-last'}`}>
                    <h1 className='text-[15px] vertical-timeline-element-title mt-2 font-bold md:group-hover:text-white'>
                      {item.educationName}
                    </h1>
                    <h3 className='text-[12.5px] text-center my-2 md:group-hover:text-gray-200 text-gray-500'>
                      {item.schoolName}
                    </h3>
                    <h3 className='text-[10px] text-center my-2 md:group-hover:text-gray-200 text-gray-500'>
                      {item.text}
                    </h3>
                    <h3 className='text-[10px] text-center mb-0 md:group-hover:text-gray-200 text-gray-500'>
                      {item.performance}
                    </h3> 
                  </div>
              </VerticalTimelineElement>
              
            ))}
          </VerticalTimeline>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
