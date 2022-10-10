import React, { useEffect } from 'react';
import { useState } from 'react';
import { BlogPostBox, Ads } from '../exporter';
import Author from '../../assets/AboutMe/shaker-ahamed.jpg'
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import squireAdsOne from '../../assets/Ads/squireAds-1.png'
import squireAdsTwo from '../../assets/Ads/squireAds-2.png'
import bannerAdsThree from '../../assets/Ads/bannerAds-3.png'
import NewsLetter from './NewsLetter';


const BlogMain = () => {
    const [blogs, setBlogs] = useState([])  
    
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <main className='my-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='col-span-2'>
                    <h1 className='md:text-3xl text-xl font-bold text-primary border-b pb-3'>Latest Blogs</h1>
                    {
                        blogs.map((blog, i) => <BlogPostBox key={i} blog={blog} />)
                    }
                    <div className='flex flex-wrap justify-center items-center gap-3 py-5'>
                        <button className='pagination-btn'>Previous</button>
                        <span className='pagination-btn'>1</span>
                        <span className='pagination-btn'>2</span>
                        <span className='pagination-btn'>3</span>
                        <span className='pagination-btn'>4</span>
                        <span className='pagination-btn'>5</span>
                        <span className='pagination-btn'>6</span>
                        <span className='pagination-btn'>7</span>
                        <span className='pagination-btn'>8</span>
                        <button className='pagination-btn'>Next</button>
                    </div>
                </div>
                <aside className='gap-3 making-sticky'>
                    <div>
                        <h1 className='md:text-2xl text-xl bg-secondary text-white font-semibold p-2 rounded-lg'>Trending</h1>
                        <div>
                            {
                                blogs.splice(0, 3).map((blog, i) =>
                                    <div
                                        key={i}
                                        className='flex justify-start items-center gap-5 my-2 shadow p-3 cursor-pointer rounded-lg h-24'>
                                        <img src={blog?.image} alt="" className='w-20 h-full' />
                                        <div className=''>
                                            <h1 className='text-sm font-bold text-black '>{blog?.title}</h1>
                                            <p className='bg-primary w-20 text-center text-white text-[12px] rounded-xl my-1'>{blog?.tag}</p>
                                            <p className='text-gray py-1'>{blog?.date}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className='md:text-2xl text-xl bg-secondary text-white font-semibold p-2 rounded-lg my-2'>Advertise With Us</h1>
                        <Ads url={squireAdsOne} />
                    </div>
                    <div>
                        <h1 className='md:text-2xl text-xl bg-secondary text-white font-semibold p-2 rounded-lg'>About Me</h1>
                        <div className='py-8 flex flex-col justify-center items-center'>
                            <div className=''>
                                <img src={Author} alt="shaker-ahamed" className='rounded-full about-img shadow-lg' />
                            </div>
                            <div className='my-4 text-center'>
                                <h2 className='text-2xl font-semibold'>Shaker Ahamed</h2>
                                <p className='text-sm'>Full Stack Web Developer</p>
                                <p className='flex gap-2 mt-2'>
                                    <span className='text-white px-3 py-1 rounded-full bg-primary'>Writer</span>
                                    <span className='text-white px-3 py-1 rounded-full bg-secondary'>Reader</span>
                                    <span className='text-white px-3 py-1 rounded-full bg-red'>Traveler</span>
                                </p>
                                <div className='flex justify-center items-center gap-4 mt-4 py-3 border-b border-b-primary w-44 mx-auto'>
                                    <BsFacebook className='text-2xl cursor-pointer text-blue' />
                                    <BsInstagram className='text-2xl cursor-pointer text-red' />
                                    <AiFillTwitterCircle className='text-2xl cursor-pointer text-blue' />
                                    <FaYoutube className='text-2xl cursor-pointer text-deepRed' />
                                </div>
                                <button className='mt-2 bg-primary px-4 py-2 text-white rounded-full'>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='md:text-2xl text-xl bg-secondary text-white font-semibold p-2 rounded-lg my-2'>Advertise With Us</h1>
                        <Ads url={squireAdsTwo} />
                    </div>
                </aside>
            </div>
            <NewsLetter />
            <Ads url={bannerAdsThree} />
        </main>
    );
};

export default BlogMain;