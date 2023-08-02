import React from 'react'
import { wavecontact, contactme, tele } from '../assets'
import { AppText } from '../Constants'
import SectionHeading1 from '../Shared/SectionHeading1'
function ContactUs() {
  return (
    <div id="contact">
      <img src={wavecontact}  className="w-screen absolute z-[-1]" alt=''/>
      <div className='flex flex-col justify-center z-[10] my-5'>
        <div className='flex flex-row  justify-center '>
        <SectionHeading1 firstTitle={AppText.Contact} secondTitle={AppText.Us} className='mb-20'/>
        <img src={tele} className="w-[80px] ml-4" alt=''/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
            <img src={contactme} className="w-[300px]  mr-10" alt=''/>
           <div className='w-full'>
           <div className='flex flex-col '>
            <label className='text-gray-400 '>Email</label>
            <input type="text"  placeholder='yourname@gmail.com'
             className='border-[1.5px] px-2 border-purple-300 
              hover:border-purple-500 rounded-md'  />
            </div>
            <div className='flex flex-col'>
            <label className='text-gray-400 '>Message</label>
            <textarea type="text" rows={7} placeholder='Type your message here'
             className='border-[1.5px] px-2 hover:border-purple-500 border-purple-300 rounded-md'  />
           <button className='transition-all ease-in-out hover:scale-110 bg-purple-500 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white  rounded-md'>
           Submit
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

            </button>
            </div>
           </div>
        </div>
    </div>
    </div>
  )
}

export default ContactUs