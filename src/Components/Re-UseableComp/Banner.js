import React from 'react';

const Banner = ({identity, title, subTitle, sideImg, Shop, Blog}) => {  
    return ( 
        <div className={`${Shop && 'shop-banner'} ${Blog && 'blog-banner'} 'my-10 relative rounded-lg'`}>
            <h1 className='md:text-2xl text-lg flex justify-between items-center absolute font-bold left-3 top-3 text-white py-1 bg-primary md:py-2 md:px-3 rounded-full'>{identity}</h1>
            <img src={sideImg} alt="" className='z-10 md:w-40 w-20 absolute md:right-3 right-1 bottom-0 md:bottom-0' />
            <div className='flex flex-col justify-center items-center h-36 md:h-28'>
                <h4 className='text-md md:text-3xl text-secondary font-semibold'>{title}</h4>
                <p className='text-primary text-[12px] z-20 md:text-xl font-semibold'>{subTitle}</p>
            </div> 
        </div>
    );
};

export default Banner;