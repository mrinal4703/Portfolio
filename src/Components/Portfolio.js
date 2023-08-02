import React, { useEffect, useState } from 'react';
import { AppText, portfolio } from '../Constants';
import SectionHeading1 from '../Shared/SectionHeading1';
import { portfolios, waveportfolio } from './../assets/index';
import { FiSmartphone, FiMonitor, FiClock } from 'react-icons/fi';

const Portfolio = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioListOrg, setPortfolioListOrg] = useState([]);

  useEffect(() => {
    setPortfolioList(portfolio);
    setPortfolioListOrg(portfolio);
  }, []);

  const filterPortfolio = (type) => {
    if (type === 'All') {
      setPortfolioList(portfolioListOrg);
    } else {
      const result = portfolioListOrg.filter((item) => item.type === type);
      setPortfolioList(result);
    }
  };

  return (
    <div id='portfolio' className="relative m-0 pb-2 overflow-hidden">
      <img src={waveportfolio} className="w-screen absolute bottom-0 m-0 z-[-1]" alt="" />
      <div className="mt-5 flex justify-center flex-col">
        <div className="flex flex-row px-6 md:px-0 items-center justify-center">
          <SectionHeading1 firstTitle={AppText.Creative} secondTitle={AppText.Portfolio} />
          <img src={portfolios} className="w-[90px] hover:animate-bounce mb-5 ml-5" alt="" />
        </div>
        <div className="flex flex-row justify-evenly gap-2 px-4 md:px-72">
          <button onClick={() => filterPortfolio('All')} className="border-purple-600 border-2 text-purple-600 focus:text-white active:bg-purple-500 p-1 px-4 rounded-md focus:ring-violet-300 focus:bg-purple-600 focus:ring text-3xl">
            All
          </button>

          <button onClick={() => filterPortfolio('website')} className="border-purple-600 border-2 text-purple-600 focus:text-white active:bg-purple-500 p-1 px-4 rounded-md focus:ring-violet-300 focus:bg-purple-600 focus:ring">
            <FiMonitor className="text-3xl" />
          </button>

          <button onClick={() => filterPortfolio('mobile')} className="border-purple-600 border-2 text-purple-600 focus:text-white active:bg-purple-500 p-1 px-4 rounded-md focus:ring-violet-300 focus:bg-purple-600 focus:ring">
            <FiSmartphone className="text-3xl" />
          </button>
        </div>
        {portfolioList.length === 0 ? (
          <div className="flex justify-center items-center h-[300px]">
          <h1 className="text-white text-2xl" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>{isHovered ? 'Would be adding soon :)' : <FiClock className='text-6xl'/>}
          </h1>
        </div>
        ) : (
          <div className="grid grid-cols-2 items-center content-center md:grid-cols-3 lg:grid-cols-3 md:px-24 lg:px-48 p-4">
            {portfolioList.map((item, index) => (
              <div key={index} className="p-2 flex flex-col m-2 rounded-lg bg-purple-100 transition-all ease-in-out group hover:scale-110">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[12px] text-purple-600 text-center no-underline hover:text-purple-800">
                  <img src={item.imageUrl} className="h-[180px] object-cover rounded-lg" alt="" />
                  <h1 className="text-[14px] group-hover:scale-110 mt-2 text-center font-bold">
                    {item.title}
                  </h1>
                  <h1 className="text-[12px] text-gray-500 text-center px-6 pb-3">{item.desc}</h1>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
