import React, {useEffect, useState} from 'react'
import SectionHeading1 from '../Shared/SectionHeading1'
import './../Constants'
import {internship} from './../assets'
import {AppText, CompanyImage, Internship} from './../Constants'
// import Footer from "./Footer";

const Companies = () => {

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
        <div id='companies'>
            {/* <img src={wavecompanies}  className="w-screen absolute z-[-1] top-0" alt='' /> */}
            {/*<img src={wavecompanies} className="w-screen absolute z-[-1] m-0" alt=''/>*/}
            <div className='md:p-5 xls:p-0 mx-auto'>
                <div className='flex justify-center pt-2 items-center flex-col'>
                    <div
                        className={`overflow-hidden ${contentLoaded ? 'transition-all duration-[0.8s] opacity-100 translate-x-0' : 'opacity-0 translate-x-1/4'}`}>

                        <div className='flex flex-row  justify-center'>
                            <img src={internship}
                                 className="md:w-[65px] xls:w-16 md:h-[65px] xls:h-16 md:mt-0 xls:mt-5 hover:animate-bounce mx-2"
                                 alt=''/>
                            <SectionHeading1 firstTitle={AppText.CompaniesI} secondTitle={AppText.WorkedFor}
                                             className=''/>
                        </div>

                        <div className='flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8 '>
                            <div
                                className='grid grid-cols-3 md:grid-cols-3 md:gap-8 xls:gap-y-2 xls:gap-x-7  items-center'>
                                {CompanyImage.map((item, index) => (
                                    <div
                                        className='transition ease-in-out delay-100 hover:scale-125 bg-transparent shadow-lg'>
                                        <img src={item.imageUrl} className="w-[150px] m-auto" alt=''/>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>

                    {/* <div className='grid grid-cols-4 items-center md:grid-cols-4 lg:grid-cols-4 m-4'>
            {Internship.map((item,index)=>(
              <div className='card items-center justify-center transition-all ease-in-out hover:scale-105 bg-violet-200 m-2 p-2 align-middle rounded-lg group md:hover:bg-violet-800 shadow-md w-100 h-100'>
              
              <div className='text-center m-3'>
                <img src={item.imageUrl} className="h-[250px] bg-white rounded mb-2 mx-auto p-0.5" alt='' />
                <div className='font-bold mb-1'>
                  <h1 className='mt-4 md:group-hover:text-gray-200'>{item.companydesc}</h1>
                </div>
                <div>
                  <h3 className='font-thin text-base text-slate-500 my-2  md:group-hover:text-white'>{item.company}</h3>
                  <h3 className='text-sm text-slate-500  md:group-hover:text-white'>{item.duration}</h3>
                </div>
              </div>
              </div>
            ))}
        </div> */}

                    <div
                        className={`overflow-hidden ${contentLoaded ? 'transition-all duration-[0.8s] opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/4'}`}>
                        {/*<div className='justify-evenly items-center grid grid-cols-1 md:grid-cols-3 gap-4 m-4'>*/}
                        <div className='justify-evenly items-center grid grid-cols-1 md:grid-cols-2 gap-4 m-4'>
                            {Internship.map((item, index) => (
                                <div key={index}
                                     className='card items-center justify-center transition-all ease-in-out hover:scale-105 bg-violet-200 md:p-2 xls:p-3 align-middle rounded-lg group hover:bg-violet-800 shadow-md'>
                                    <div className='text-center'>
                                        <img
                                            src={item.imageUrl}
                                            className='md:h-[150px] xls:h-20 bg-white rounded mb-2 mx-auto p-0.5'
                                            alt=''
                                        />
                                        <div className='font-bold mb-1'>
                                            <h1 className='mt-4 md:group-hover:text-gray-200 md:text-[16px] xls:text-[14px]'>{item.companydesc}</h1>
                                        </div>
                                        <div>
                                            <h3 className='font-thin md:text-base xls:text-sm text-slate-500 my-2 md:group-hover:text-white'>{item.company}</h3>
                                            <h3 className='text-sm text-slate-500 md:group-hover:text-white'>{item.duration}</h3>
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

export default Companies