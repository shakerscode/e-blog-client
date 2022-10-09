import React from 'react';
import blogOne from '../../assets/Blogs/blog-1.jpg'
import blogTwo from '../../assets/Blogs/blog-2.jpg'
import blogThree from '../../assets/Blogs/blog-3.jpg'
import blogFour from '../../assets/Blogs/blog-4.jpg'
import { Slider, ReadMoreBtn } from '../exporter';

const BlogTop = () => {
    const sliderInfo = [
        { tittle: 'Get Amazing Fashion Products', subTittle: 'Choose the best outfit for yourself.', image: blogOne },
        { tittle: 'Feel the sports thrill like real', subTittle: 'Watch world cup football in super LED Tv.', image: blogTwo },
        { tittle: 'get YOUR DAILY NEEDS', subTittle: 'Choose healthy foods for you.', image: blogThree },
        { tittle: 'get YOUR DAILY NEEDS', subTittle: 'Choose healthy foods for you.', image: blogFour },
    ]
    return (
        <main className='my-5'>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-4'>
                <div className='col-span-2 '>
                    <Slider slider={sliderInfo} />
                </div>
                <div className='grid md:grid-rows-2 col-span-2 md:col-auto gap-3'>
                    <div className='relative cursor-pointer'>
                        <img src={blogTwo} alt="" className='w-full   rounded-lg ' />
                        <div className=' absolute bottom-5 px-5 py-3 bg-bgLightBlack'>
                            <h1 className='text-2xl font-semibold text-white'>Eat What Ever you want</h1>
                        </div>
                        <ReadMoreBtn>Read More</ReadMoreBtn>
                    </div>
                    <div className='relative cursor-pointer'>
                        <img src={blogThree} alt="" className='w-full   rounded-lg ' />
                        <div className=' absolute bottom-5 px-5 py-3 bg-bgLightBlack'>
                            <h1 className='text-2xl font-semibold text-white'>Eat What Ever you want</h1>
                        </div>
                        <ReadMoreBtn>Read More</ReadMoreBtn>
                    </div>
                </div>
            </div>
            
        </main>
    );
};

export default BlogTop;