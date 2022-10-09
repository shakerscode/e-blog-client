import React from 'react';
import Button from './Button';

const Advertisement = ({ items }) => {
    return (
        <div className='ads-banner cursor-pointer flex justify-end items-end relative rounded-lg hover:opacity-75 transition-all duration-500 ease-in-out'>
            <div className='absolute top-5 left-0 px-2 py-1 bg-light rounded-r-full w-64 shadow-lg'>
                <p className='text-secondary font-semibold'>{items?.off} OFF</p>
                <h1 className='md:text-xl text-lg text-primary font-bold'>{items?.title}</h1>
                <p className='md:text-md text-sm font-semibold'>{items?.subTitle}</p>
            </div>
            <div className='absolute left-4 md:bottom-14 bottom-10'>
                <Button>Shope Now</Button>
            </div>
            <img src={items?.image} alt="" className='w-32 md:w-48 h-32 md:h-48 mt-8' />
        </div>

    );
};

export default Advertisement;