import React, { useState } from 'react';
import { contactme, tele } from '../assets';
import { AppText } from '../Constants';
import { TbMailShare } from "react-icons/tb";
import SectionHeading2 from "../Shared/SectionHeading2";
import emailjs from 'emailjs-com';

function ContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_email: email,
            message: message,
            subject: 'A new message in Portfolio',
            to_email: 'mrinalgupta04072003@gmail.com',
            cc_email: 'mrinal.gupta@mitaoe.ac.in'
        };

        emailjs.send('mrinal03', 'template_mrinal03', templateParams, 'EWSpk-JMGH2GQIXIv')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            }, (err) => {
                console.log('FAILED...', err);
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        <div id="contact">
            <div className='relative m-0 overflow-hidden'>
                <div className='flex flex-row justify-center '>
                    <SectionHeading2 firstTitle={AppText.Contact} secondTitle={AppText.Us} className='mb-20'/>
                    <img src={tele} className="w-[80px] ml-4" alt=''/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
                    <img src={contactme} className="w-[320px] mr-24" alt=''/>
                    <div className='w-full'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex my-4 flex-col'>
                                <label className='text-gray-400 mb-1'>Email</label>
                                <input
                                    type="email"
                                    placeholder='yourname@gmail.com'
                                    className='border-[1.5px] px-2 py-2 border-purple-300 hover:border-purple-500 rounded-md'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <label className='text-gray-400 my-2 text-start justify-start items-start'>Message</label>
                            <textarea
                                type="text"
                                rows={7}
                                placeholder='Type your message here'
                                className='border-[1.5px] w-full px-2 mt-1 py-2 hover:border-purple-500 border-purple-300 rounded-md'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <div className='flex flex-col mb-2 items-center justify-center'>
                                <button
                                    type="submit"
                                    className='transition-all w-5/12 h-scale-110 ease-in-out hover:scale-110 bg-violet-800 flex flex-row items-center justify-center text-base py-2 mt-5 text-white rounded-md'>
                                    Submit
                                    <TbMailShare className={'mx-2 text-lg'} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
