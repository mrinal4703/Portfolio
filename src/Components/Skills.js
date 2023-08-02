import React from 'react'
import './../assets'
import { skillpot1, waveport1, waveport2 } from './../assets'
import './../Constants'
import { AppText, skillsList, workDetail, otherskillsList, ide } from './../Constants'
import Typewriter from 'typewriter-effect';

const Skills = () => {

  const typewriterStyles = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '10px',
    '--tw-text-opacity': '1',
    color: 'rgb(147 51 234 / var(--tw-text-opacity))',
  };
  

  const typewriterStylesMobile = {
    fontSize: '10px',
    fontWeight: 'bold',
    marginLeft: '10px',
    '--tw-text-opacity': '1',
    color: 'rgb(147 51 234 / var(--tw-text-opacity))',
  };

  return (
    <div id='skills' className='relative text-center'>
      <div className='mt-10 z-[10]'>
        <div className='flex flex-row justify-center items-center'>
        <img src={skillpot1} className="w-[100px] hover:animate-bounce mr-4" alt=''/>
        <h1 className='text-[40px] font-bold'>{AppText.Skills}<span className='text-purple-600'>{AppText.Experties}</span></h1>
        </div>

        <div className='flex flex-col md:flex-row justify-evenly px-8 md:px-0 items-start'>
          <div>
            <h3 className='text-[20px] font-bold flex mr-5'>
              {AppText.TechSkills}
              <span className='text-purple-600 mx-2'>
                <Typewriter
                  options={{
                    strings: skillsList.map((item) => item.text),
                    autoStart: true,
                    loop: true,
                  }}
                  style={window.innerWidth <= 600 ? typewriterStylesMobile : typewriterStyles}
                />
              </span>
            </h3>
          </div>
          <div>
            <h3 className='text-[20px] font-bold flex mr-5'>
              {AppText.OtherSkills}
              <span className='text-purple-600 mx-2'>
                <Typewriter
                  options={{
                    strings: otherskillsList.map((item) => item.text),
                    autoStart: true,
                    loop: true,
                  }}
                  style={window.innerWidth <= 600 ? typewriterStylesMobile : typewriterStyles}
                />
              </span>
            </h3>
          </div>
        </div>

        <img src={waveport1}  className="w-screen absolute z-[-1]" alt=''/>

        <div className='flex flex-col md:flex-row  justify-center px-8 md:px-0 mt-8 '>
          <div className='flex flex-col md:flex-row mr-5 justify-evenly px-8 md:px-0 '>
            <div className='grid grid-cols-6 md:grid-cols-6 gap-8 items-center'>
              {skillsList.map((item, index)=>(
                  <div className='w-[70px] transition ease-in-out delay-100 hover:scale-125 bg-gradient-to-br from-purple-900 to-purple-100 bg-black shadow-lg
                  p-3 rounded-full' >
                      <img src={item.icon} 
                      className="w-[70px]" alt=''/>
                  </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col md:flex-row ml-10 justify-evenly px-8 md:px-0'>
            <div className='grid grid-cols-6 md:grid-cols-6 gap-8 items-center'>
              {ide.map((item, index)=>(
                  <div className='w-[70px] transition ease-in-out delay-100 hover:scale-125 bg-gradient-to-br from-purple-900 to-purple-100 bg-black shadow-lg
                  p-3 rounded-full' >
                      <img src={item.icon} 
                      className="w-[70px]" alt=''/>
                  </div>
              ))}
            </div>
          </div>
        </div>
        

      <img src={waveport2}  className="w-screen absolute z-[-1] mt-10" alt='' />
        <div className='flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8 mb-8 '>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm bg-violet-950  p-5 rounded-lg shadow-lg'>
            {workDetail.map((item, index) => (
              <div key={item.id} className='flex flex-row gap-3 transition-all ease-in-out hover:scale-105'>
                <img src={item.imgg} className='h-[100px] my-auto ' alt=''></img>
                <div className='flex flex-col text-center max-w-[180px] mb-2 text-white'>
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
  )
}

export default Skills

// import React from 'react'
// import './../assets'
// import { skillpot1, waveport1, waveport2 } from './../assets'
// import './../Constants'
// import { AppText, skillsList, workDetail } from './../Constants'

// const Skills = () => {
//   return (
//     <div id='skills' className='relative'>
//       <div className='mt-10 z-[10]'>
//         <div className='flex flex-row justify-center items-center'>
//         <img src={skillpot1} className="w-[100px] hover:animate-bounce mr-4" alt=''/>
//         <h1 className='text-[40px] font-bold'>{AppText.Skills}<span className='text-purple-600'>{AppText.Experties}</span></h1>
//         </div>
//         <div className='flex flex-col md:flex-row justify-evenly px-8 md:px-0 mt-8 '>
//           <div className='grid grid-cols-6 md:grid-cols-6 gap-8  items-center'>
//             {skillsList.map((item, index)=>(
//                 <div className='w-[70px] transition ease-in-out delay-100 hover:scale-125 bg-gradient-to-br from-purple-900 to-purple-100 bg-black shadow-lg p-3 rounded-full' >
//                     <img src={item.icon} 
//                     className="w-[70px]" alt=''/>
//                 </div>
               
//             ))}
//           </div>
//         </div>
//         {/* <img src={waveport1}  className="w-screen absolute z-[-1] " alt=''/>
//         <img src={waveport2}  className="w-screen absolute z-[-1] " alt='' /> */}
//         <div className='flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8 mb-8 '>
//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm bg-violet-950  p-5 rounded-lg shadow-lg'>
//             {workDetail.map((item, index) => (
//               <div key={item.id} className='flex flex-row gap-3 transition-all ease-in-out hover:scale-105'>
//                 <img src={item.imgg} className='h-[100px] my-auto ' alt=''></img>
//                 <div className='flex flex-col text-center max-w-[180px] mb-2 text-white'>
//                 <div className='font-bold mb-1'>
//                   <h2>{item.year}</h2>
//                 </div>
//                 <div>
//                   <h3 className='font-thin text-slate-400 my-2'>{item.compnayName}</h3>
//                   <h3 className='text-xs text-slate-400'>{item.position}</h3>
//                 </div>
//               </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default Skills


// import React from 'react';
// import { skillpot1, waveport1, waveport2 } from './../assets';
// import { AppText, skillsList, workDetail } from './../Constants';

// const Skills = () => {
//   return (
//     <div id='skills' className='relative'>
//       <div className='mt-10'>
//         <div className='flex flex-col md:flex-row justify-center items-center'>
//           <img src={skillpot1} className="w-[100px] hover:animate-bounce mb-4 md:mr-4" alt='' />
//           <h1 className='text-[40px] font-bold'>
//             {AppText.Skills}
//             <span className='text-purple-600'>{AppText.Experties}</span>
//           </h1>
//         </div>
//         <div className='flex flex-col md:flex-row justify-evenly px-8 md:px-0 mt-8 '>
//           <div className='grid grid-cols-6 md:grid-cols-6 gap-8 items-center'>
//             {skillsList.map((item, index) => (
//               <div key={index} className='w-[70px] transition ease-in-out delay-100 hover:scale-125 bg-gradient-to-br from-purple-900 to-purple-100 bg-black shadow-lg p-3 rounded-full'>
//                 <img src={item.icon} className="w-[70px]" alt='' />
//               </div>
//             ))}
//           </div>
//         </div>

//         <img src={waveport1} className="w-screen absolute z-[-1] left-0 right-0" alt='' />
//         <img src={waveport2} className="w-screen absolute z-[-1] left-0 right-0" alt='' />

//         <div className='flex flex-col md:flex-row justify-evenly px-8 md:px-0 mt-8 mb-8 '>
//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm bg-violet-950 p-5 rounded-lg shadow-lg'>
//             {workDetail.map((item, index) => (
//               <div key={index} className='flex flex-row gap-3 transition-all ease-in-out hover:scale-105'>
//                 <img src={item.imgg} className='h-[100px] my-auto ' alt='' />
//                 <div className='flex flex-col text-center max-w-[180px] mb-2 text-white'>
//                   <div className='font-bold mb-1'>
//                     <h2>{item.year}</h2>
//                   </div>
//                   <div>
//                     <h3 className='font-thin text-slate-400 my-2'>{item.compnayName}</h3>
//                     <h3 className='text-xs text-slate-400'>{item.position}</h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
