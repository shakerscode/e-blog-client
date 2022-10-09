import React from 'react';
import {BsArrowRight} from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';

const NewsLetter = () => {
    return (
        <div className='h-[250px] w-full flex justify-center items-center md:mx-4 bg-secondary my-10 rounded-lg shadow-lg'>
            <div className='h-full md:w-[100%] flex flex-col justify-center items-center py-5'>
                <h4 className='md:text-3xl px-5 text-2xl font-bold text-white'>Join Our Newsletter And Get...</h4>
                <p className='md:text-xl text-lg font-semibold text-black'>Unlimited health tips and trick fro free!</p>
                <div className='text-white relative w-[60%] px-3'>
                <AiOutlineMail className='absolute top-6 bottom-6 left-8 text-[40px] md:block hidden rounded-lg bg-primary px-3'/>
                <input 
                type="email" 
                placeholder='Enter your email'
                className='w-full mx-3  my-4 py-4 md:pl-16 md:pr-[8rem] pl-4 pr-12 text-black placeholder:text-gray rounded-lg focus:outline-none'/>
                <button className='flex justify-center items-center gap-2 absolute md:right-3 right-4 top-5 bottom-5 bg-primary px-3 py-2 rounded-lg hover:bg-secondary transition-all duration-500 ease-in-out hover:translate-x-1'><span className='md:block hidden'>Subscribe</span> <BsArrowRight/></button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;