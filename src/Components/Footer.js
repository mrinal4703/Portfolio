// import React from 'react'
// import { AppText, socialNetwork } from '../Constants'

// const Footer = () => {
//   return (
//     <div>
// <div className='bg-black mt-0 pt-10 items-center flex flex-col px-10 md:px-2'>
//      <div className='flex gap-4'>
//         {socialNetwork.map((item,index)=>(
//             <div className='w-[40px] text-[30px]'>
//                 {item.logo}
//             </div>
//         ))}
//         </div>
//         <h1 className='text-white text-[15px] mt-4'>{AppText.copywriteText}</h1>
//     </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import {AppText, socialNetwork} from '../Constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="bottom-0 w-full">
            <div className='bg-black h-max py-8 pt-2 items-center flex flex-col px-10 md:px-2'>
                <div className='flex gap-4'>
                    {socialNetwork.map((item, index) => (
                        <a href={item.url} target='_blank' rel='noreferrer' className="no-underline">
                            <div key={index} className='w-[40px] text-[30px]'>
                                {item.logo}

                            </div>
                        </a>
                    ))}
                </div>
                <h1 className='text-white flex text-[15px] mt-4'>{AppText.copywriteText}{currentYear}</h1>
            </div>
        </div>
    );
};

export default Footer;
