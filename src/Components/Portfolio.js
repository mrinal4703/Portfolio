import React, {useEffect, useState} from 'react';
import {AppText, portfolio} from '../Constants';
import SectionHeading1 from '../Shared/SectionHeading1';
import {portfolios} from './../assets/index';
import {FiClock} from 'react-icons/fi';
// import Footer from "./Footer";

const Portfolio = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [portfolioList, setPortfolioList] = useState([]);
    const [portfolioListOrg, setPortfolioListOrg] = useState([]);

    useEffect(() => {
        setPortfolioList(portfolio);
        setPortfolioListOrg(portfolio);
    }, []);
    console.log(portfolioListOrg);

    return (
        <div id='portfolio' className="relative m-0 overflow-hidden">
            <div className="md:mt-5 xls:mt-3 flex justify-center flex-col">
                <div className="flex flex-row px-6 md:px-0 items-center justify-center">
                    <SectionHeading1 firstTitle={AppText.Creative} secondTitle={AppText.Portfolio}/>
                    <img src={portfolios}
                         className="md:w-[90px] xls:w-[70px] transition ease-in-out delay-100 hover:scale-110 mb-5 ml-5"
                         alt=""/>
                </div>
                <div className="flex flex-row justify-evenly gap-2 px-4 md:mt-0 xls:mt-5 md:px-72">
                </div>
                {portfolioList.length === 0 ? (
                    <div className="flex justify-center items-center h-[300px]">
                        <h1 className="text-white text-2xl" onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>{isHovered ? 'Would be adding soon :)' :
                            <FiClock className='text-6xl'/>}
                        </h1>
                    </div>
                ) : (
                    <div
                        className="grid items-center content-center md:grid-cols-3 xls:grid-cols-1 md:px-24 lg:px-48 p-4">
                        {portfolioList.map((item, index) => (
                            <div>
                                <div key={index} className="group relative m-3 xls:hidden md:block rounded-lg">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                                        <img
                                            src={item.imageUrl}
                                            className="md:h-[200px] xls:h-[180px] object-cover transition-opacity duration-400 group-hover:opacity-50 rounded-lg"
                                            alt=""
                                        />
                                        <div
                                            className="p-2 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 group-hover:bg-gray-950 transition-opacity duration-400 rounded-lg">
                                            <h1 className="text-[14px] w-full group-hover:scale-110 mt-2 text-center font-bold text-white">
                                                {item.title}
                                            </h1>
                                            <h1 className="text-[12px] ml-4 text-gray-300 text-center px-6 pb-3">{item.desc}</h1>
                                        </div>
                                    </a>
                                </div>


                                <div key={index}
                                     className="pt-1 flex md:hidden xls:block flex-col m-2 rounded-lg transition-all ease-in-out">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                                       className="text-[12px] text-black  text-center no-underline">
                                        <div className="flex items-center justify-center">
                                            <img src={item.imageUrl} className="h-[180px] shadow-md object-cover rounded-lg"
                                                 alt=""/>
                                        </div>
                                        <h1 className="text-[14px] group-hover:scale-110 mt-1 text-center font-bold">
                                            {item.title}
                                        </h1>
                                        <h1 className="text-[12px] text-gray-500 text-center px-6 pb-1">{item.desc}</h1>
                                        <hr className="border-t-1 border-black w-3/5 mx-auto mb-3"/>
                                    </a>
                                </div>
                            </div>


                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Portfolio;
